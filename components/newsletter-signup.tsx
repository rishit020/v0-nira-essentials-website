"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Check } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <Card className="bg-sage-light/10 border-sage/20">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full mx-auto mb-4">
            <Check className="h-6 w-6 text-sage" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Welcome to our community!</h3>
          <p className="text-sm text-muted-foreground">
            Thank you for subscribing. You'll receive our latest updates and exclusive offers.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-sage-light/5 border-sage/10">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full mx-auto">
            <Mail className="h-6 w-6 text-sage" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates on new products, wellness tips, and exclusive offers.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-sage hover:bg-sage-dark text-white" disabled={isLoading}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
