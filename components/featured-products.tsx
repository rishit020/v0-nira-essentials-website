"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const { dispatch } = useCart()
  const products = getFeaturedProducts()

  const handleAddToCart = (product: (typeof products)[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-sage-light/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Featured</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Botanical Essentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our most cherished creations, each thoughtfully formulated with time-honored ingredients to nurture your
            natural radiance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-sage/10 hover:border-sage/20"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {index === 0 && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-sage text-white">
                      Bestseller
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-mauve text-white">
                      New
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-xs text-mauve font-medium uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-sage">${product.price}</div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-sage hover:bg-sage-dark text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white">
            <Link href="/shop">Explore Full Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
