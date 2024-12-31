'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { performAudit } from '../action'
import { toast } from '@/hooks/use-toast'

export default function AuditForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await performAudit(formData)

    setIsLoading(false)

    if (response.success) {
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
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="url">Website URL</Label>
        <Input id="url" name="url" placeholder="https://example.com" required type="url" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" placeholder="you@example.com" required type="email" />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Auditing..." : "Start Audit"}
      </Button>
    </form>
  )
}

