'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import { performAudit } from '@/app/action'
import AuditResults from './AuditResults'
import { toast } from '@/hooks/use-toast'

export default function AuditForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [auditResults, setAuditResults] = useState<Record<string, string | number | boolean | string[] | { [key: string]: number } | { tagName: string; id: string; className: string; isClickable: boolean }[]> | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setAuditResults(null)

    const formData = new FormData(event.currentTarget)
    const response = await performAudit(formData)

    setIsLoading(false)

    if (response.success) {
      if (response.results) {
        setAuditResults(response.results)
      }
      toast({
        title: "Audit Complete",
        description: "The security audit report has been sent to your email.",
      })
    } else {
      toast({
        title: "Error",
        description: response.error,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="url" className="text-lg font-medium text-gray-700">Website URL</Label>
          <Input 
            id="url" 
            name="url" 
            placeholder="https://example.com" 
            required 
            type="url"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</Label>
          <Input 
            id="email" 
            name="email" 
            placeholder="you@example.com" 
            required 
            type="email"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Auditing...
            </>
          ) : (
            "Start Audit"
          )}
        </Button>
      </form>
      {auditResults && <AuditResults results={auditResults} />}
    </div>
  )
}

