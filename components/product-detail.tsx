"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/loading-spinner"
import { SocialShare } from "@/components/social-share"
import { Minus, Plus, Heart, ArrowLeft } from "lucide-react"
import { useCart, type Product } from "@/contexts/cart-context"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { dispatch } = useCart()

  const handleAddToCart = async () => {
    setIsAddingToCart(true)

    // Simulate loading state
    await new Promise((resolve) => setTimeout(resolve, 800))

    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: product })
    }

    setIsAddingToCart(false)
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))
  const toggleWishlist = () => setIsWishlisted((prev) => !prev)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/shop" className="hover:text-primary flex items-center gap-1 transition-colors group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-sage-light/5 group">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3 bg-sage/10 text-sage hover:bg-sage/20">
                {product.category}
              </Badge>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-sage">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Key Ingredients */}
            <Card className="border-sage/10 hover:border-sage/20 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Key Ingredients</h3>
                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
              </CardContent>
            </Card>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="hover:bg-sage/10 hover:border-sage/30 transition-colors bg-transparent"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    className="hover:bg-sage/10 hover:border-sage/30 transition-colors bg-transparent"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-sage hover:bg-sage-dark text-white transition-all duration-200 hover:scale-[1.02]"
                  size="lg"
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Adding...
                    </>
                  ) : (
                    `Add to Cart - $${(product.price * quantity).toFixed(2)}`
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleWishlist}
                  className={cn(
                    "transition-all duration-200 hover:scale-105",
                    isWishlisted ? "bg-red-50 border-red-200 text-red-600" : "hover:bg-sage/10 hover:border-sage/30",
                  )}
                >
                  <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
                </Button>
                <SocialShare
                  title={`Check out ${product.name} from Nira Essentials`}
                  description={product.description}
                />
              </div>
            </div>

            {/* Product Benefits */}
            <Card className="border-sage/10 hover:border-sage/20 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Benefits & Usage</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Handcrafted with natural, Ayurvedic ingredients",
                    "Free from harsh chemicals and synthetic fragrances",
                    "Suitable for all skin types",
                    "Ethically sourced and sustainably made",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0 transition-all duration-200 group-hover:bg-sage-dark group-hover:scale-125"></div>
                      <p className="transition-colors group-hover:text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
