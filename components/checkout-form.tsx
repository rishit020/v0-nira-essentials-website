"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { ArrowLeft, CreditCard, Truck, AlertCircle } from "lucide-react"
import Link from "next/link"
import { AccessibilityAnnouncer } from "@/components/accessibility-announcer"

interface FormErrors {
  [key: string]: string
}

export function CheckoutForm() {
  const { state } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [announcement, setAnnouncement] = useState("")

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {}

    if (!formData.get("firstName")) errors.firstName = "First name is required"
    if (!formData.get("lastName")) errors.lastName = "Last name is required"
    if (!formData.get("email")) errors.email = "Email is required"
    if (!formData.get("address")) errors.address = "Street address is required"
    if (!formData.get("city")) errors.city = "City is required"
    if (!formData.get("state")) errors.state = "State/Province is required"
    if (!formData.get("zipCode")) errors.zipCode = "ZIP/Postal code is required"
    if (!formData.get("country")) errors.country = "Country is required"

    const email = formData.get("email") as string
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const formErrors = validateForm(formData)

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setAnnouncement(`Form has ${Object.keys(formErrors).length} errors. Please review and correct them.`)
      // Focus first error field
      const firstErrorField = Object.keys(formErrors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setErrors({})
    setIsProcessing(true)
    setAnnouncement("Processing your order...")

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, this would integrate with a payment processor
    setAnnouncement("Order placed successfully! You will receive a confirmation email shortly.")
    setIsProcessing(false)
  }

  if (state.items.length === 0) {
    return (
      <section className="py-16" role="main" aria-labelledby="empty-cart-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="empty-cart-heading" className="font-serif text-3xl font-bold text-foreground mb-4">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mb-8">Add some products to your cart before checking out.</p>
          <Button asChild className="bg-sage hover:bg-sage-dark focus:ring-2 focus:ring-sage-dark focus:ring-offset-2">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <AccessibilityAnnouncer message={announcement} priority="assertive" />
      <section className="py-8" role="main" aria-labelledby="checkout-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/shop"
                className="hover:text-primary flex items-center gap-1 focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Shop
              </Link>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-6">
              <h1 id="checkout-heading" className="font-serif text-3xl font-bold text-foreground">
                Checkout
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" aria-hidden="true" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          aria-invalid={errors.firstName ? "true" : "false"}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                          className={errors.firstName ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.firstName && (
                          <p
                            id="firstName-error"
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            role="alert"
                          >
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          aria-invalid={errors.lastName ? "true" : "false"}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                          className={errors.lastName ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.lastName && (
                          <p
                            id="lastName-error"
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            role="alert"
                          >
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" aria-hidden="true" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        aria-invalid={errors.address ? "true" : "false"}
                        aria-describedby={errors.address ? "address-error" : undefined}
                        className={errors.address ? "border-red-500 focus:ring-red-500" : ""}
                      />
                      {errors.address && (
                        <p
                          id="address-error"
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          role="alert"
                        >
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          required
                          aria-invalid={errors.city ? "true" : "false"}
                          aria-describedby={errors.city ? "city-error" : undefined}
                          className={errors.city ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.city && (
                          <p id="city-error" className="text-red-500 text-sm mt-1 flex items-center gap-1" role="alert">
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province *</Label>
                        <Input
                          id="state"
                          name="state"
                          required
                          aria-invalid={errors.state ? "true" : "false"}
                          aria-describedby={errors.state ? "state-error" : undefined}
                          className={errors.state ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.state && (
                          <p
                            id="state-error"
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            role="alert"
                          >
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.state}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          required
                          aria-invalid={errors.zipCode ? "true" : "false"}
                          aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                          className={errors.zipCode ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.zipCode && (
                          <p
                            id="zipCode-error"
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            role="alert"
                          >
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          defaultValue="United States"
                          required
                          aria-invalid={errors.country ? "true" : "false"}
                          aria-describedby={errors.country ? "country-error" : undefined}
                          className={errors.country ? "border-red-500 focus:ring-red-500" : ""}
                        />
                        {errors.country && (
                          <p
                            id="country-error"
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            role="alert"
                          >
                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Special Instructions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Special Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Label htmlFor="instructions">Order Notes (Optional)</Label>
                    <Textarea
                      id="instructions"
                      name="instructions"
                      placeholder="Any special delivery instructions or gift messages..."
                      className="mt-2"
                    />
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  className="w-full bg-sage hover:bg-sage-dark text-white focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
                  size="lg"
                  disabled={isProcessing}
                  aria-describedby="submit-description"
                >
                  {isProcessing ? "Processing Order..." : `Place Order - $${state.total.toFixed(2)}`}
                </Button>
                <p id="submit-description" className="text-sm text-muted-foreground text-center">
                  By placing your order, you agree to our terms and conditions.
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <aside className="space-y-6" aria-labelledby="order-summary-heading">
              <Card>
                <CardHeader>
                  <CardTitle id="order-summary-heading">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div role="list" aria-label="Order items">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-4" role="listitem">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-sage-light/10">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.name} product image`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm">Qty: {item.quantity}</span>
                            <span className="font-medium text-sage">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                      <span>Total</span>
                      <span className="text-sage">${state.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm text-muted-foreground" role="list" aria-label="Order benefits">
                    <div className="flex items-start gap-2" role="listitem">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <p>Free shipping on all orders</p>
                    </div>
                    <div className="flex items-start gap-2" role="listitem">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <p>Handcrafted with love and care</p>
                    </div>
                    <div className="flex items-start gap-2" role="listitem">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <p>30-day satisfaction guarantee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
