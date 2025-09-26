"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart, type Product } from "@/contexts/cart-context"
import Link from "next/link"

interface ProductGridProps {
  products?: Product[]
}

export function ProductGrid({ products: productsProp }: ProductGridProps) {
  const { dispatch } = useCart()

  // Use provided products or import default products
  const products = productsProp || require("@/lib/products").products

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
        <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground" role="status" aria-live="polite">
          Showing {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="grid" aria-label="Product catalog">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="group cursor-pointer hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-sage focus-within:ring-offset-2"
            role="gridcell"
            aria-rowindex={Math.floor(index / 3) + 1}
            aria-colindex={(index % 3) + 1}
          >
            <CardContent className="p-0">
              <Link
                href={`/product/${product.id}`}
                className="focus:outline-none"
                aria-label={`View details for ${product.name}`}
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - ${product.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-6 space-y-3">
                <div className="text-sm text-primary font-medium" aria-label="Product category">
                  {product.category}
                </div>
                <Link
                  href={`/product/${product.id}`}
                  className="focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded-md"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground text-pretty">{product.description}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="sr-only">Key ingredients: </span>
                  {product.ingredients}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground" aria-label={`Price: $${product.price}`}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-sm text-muted-foreground line-through"
                        aria-label={`Original price: $${product.originalPrice}`}
                      >
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="bg-sage hover:bg-sage-dark text-white focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
