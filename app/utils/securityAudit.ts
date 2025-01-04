import https from 'https'
import { JSDOM } from 'jsdom'
import { AxePuppeteer } from '@axe-core/puppeteer'
import puppeteer from 'puppeteer'

export async function performSecurityAudit(url: string) {
  const results: Record<string, string | number | string[] | { [key: string]: number } | { tagName: string; id: string; className: string; isClickable: boolean }[]> = {}

  try {
    const response = await fetch(url)
    const html = await response.text()
    const headers = response.headers

    // Check HTTPS
    results['HTTPS'] = url.startsWith('https://') ? 'Enabled' : 'Not enabled'

    // Check Content Security Policy
    results['Content-Security-Policy'] = headers.get('content-security-policy') ? 'Set' : 'Not set'

    // Check X-Frame-Options
    results['X-Frame-Options'] = headers.get('x-frame-options') ? 'Set' : 'Not set'

    // Check X-XSS-Protection
    results['X-XSS-Protection'] = headers.get('x-xss-protection') ? 'Set' : 'Not set'

    // Check Strict-Transport-Security
    results['Strict-Transport-Security'] = headers.get('strict-transport-security') ? 'Set' : 'Not set'

    // Simple check for open ports (Note: This is a very basic check and might not be accurate)
    const openPorts = await checkOpenPorts(new URL(url).hostname)
    results['Open Ports'] = openPorts.join(', ')

    // New checks
    results['Broken Links'] = await checkBrokenLinks(url, html)
    results['Accessibility'] = await performAccessibilityAudit(url)
    results['Interactive Elements'] = await testInteractiveElements(url)

  } catch (error) {
    console.error('Error during security audit:', error)
    results['Error'] = 'An error occurred during the security audit'
  }

  return results
}

function checkOpenPorts(hostname: string): Promise<number[]> {
  return new Promise((resolve) => {
    const openPorts: number[] = []
    const portsToCheck = [80, 443, 8080, 8443]

    let completed = 0
    portsToCheck.forEach(port => {
      const req = https.request({
        hostname,
        port,
        method: 'HEAD',
      }, () => {
        openPorts.push(port)
        if (++completed === portsToCheck.length) resolve(openPorts)
      })

      req.on('error', () => {
        if (++completed === portsToCheck.length) resolve(openPorts)
      })

      req.end()
    })
  })
}

async function checkBrokenLinks(url: string, html: string) {
  const dom = new JSDOM(html)
  const links = dom.window.document.querySelectorAll('a')
  const brokenLinks = []

  for (const link of links) {
    const href = link.getAttribute('href')
    if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
      const absoluteUrl = new URL(href, url).href
      try {
        const response = await fetch(absoluteUrl, { method: 'HEAD' })
        if (!response.ok) {
          brokenLinks.push(absoluteUrl)
        }
      } catch {
        brokenLinks.push(absoluteUrl)
      }
    }
  }

  return brokenLinks.length > 0 ? brokenLinks : 'No broken links found'
}

async function performAccessibilityAudit(url: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const results = await new AxePuppeteer(page).analyze()
  await browser.close()

  return {
    violations: results.violations.length,
    passes: results.passes.length,
    incomplete: results.incomplete.length,
    inapplicable: results.inapplicable.length,
  }
}

async function testInteractiveElements(url: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const interactiveElements = await page.evaluate(() => {
    const elements = document.querySelectorAll('button, a, input, select, textarea')
    return Array.from(elements).map(el => ({
      tagName: el.tagName.toLowerCase(),
      id: el.id,
      className: el.className,
      isClickable: el.clientWidth > 0 && el.clientHeight > 0,
    }))
  })

  await browser.close()

  return interactiveElements
}

