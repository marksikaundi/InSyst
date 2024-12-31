import https from 'https'

export async function performSecurityAudit(url: string) {
  const results: Record<string, string> = {}

  try {
    const response = await fetch(url)
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

