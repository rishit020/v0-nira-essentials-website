"use client"

import { useState } from "react"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (id: string, quantity: number, productName: string) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })

    // Announce to screen readers
    const message =
      quantity === 0 ? `${productName} removed from cart` : `${productName} quantity updated to ${quantity}`

    // Create a temporary element for screen reader announcement
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  const removeItem = (id: string, productName: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })

    // Announce removal to screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = `${productName} removed from cart`
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative focus:ring-2 focus:ring-sage focus:ring-offset-2"
          aria-label={`Shopping cart with ${state.itemCount} items`}
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          {state.itemCount > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-sage text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              aria-label={`${state.itemCount} items in cart`}
            >
              {state.itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg" aria-describedby="cart-description">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            Shopping Cart ({state.itemCount})
          </SheetTitle>
          <SheetDescription id="cart-description">Review your selected items and proceed to checkout</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center" role="status" aria-live="polite">
              <div className="text-center space-y-4">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto" aria-hidden="true" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-sage hover:bg-sage-dark focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6" role="list" aria-label="Cart items">
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-4" role="listitem">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-sage-light/10">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name} product image`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 focus:ring-2 focus:ring-sage focus:ring-offset-2"
                            onClick={() => removeItem(item.id, item.name)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center gap-2"
                            role="group"
                            aria-label={`Quantity controls for ${item.name}`}
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 focus:ring-2 focus:ring-sage focus:ring-offset-2 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.name)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="h-3 w-3" aria-hidden="true" />
                            </Button>
                            <span
                              className="text-sm font-medium w-8 text-center"
                              aria-label={`Quantity: ${item.quantity}`}
                            >
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 focus:ring-2 focus:ring-sage focus:ring-offset-2 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.name)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-3 w-3" aria-hidden="true" />
                            </Button>
                          </div>
                          <span
                            className="font-medium text-sage"
                            aria-label={`Subtotal: $${(item.price * item.quantity).toFixed(2)}`}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-sage" aria-label={`Total: $${state.total.toFixed(2)}`}>
                    ${state.total.toFixed(2)}
                  </span>
                </div>
                <Button
                  asChild
                  className="w-full bg-sage hover:bg-sage-dark focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
                  size="lg"
                >
                  <Link href="/checkout" onClick={() => setIsOpen(false)}>
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full focus:ring-2 focus:ring-sage focus:ring-offset-2 bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
