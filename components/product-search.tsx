"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ProductSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function ProductSearch({ onSearch, placeholder = "Search products..." }: ProductSearchProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="relative" role="search">
      <label htmlFor="product-search" className="sr-only">
        Search products by name, description, or ingredients
      </label>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
        aria-hidden="true"
      />
      <Input
        id="product-search"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 pr-10 focus:ring-2 focus:ring-sage focus:ring-offset-2"
        aria-describedby="search-description"
      />
      <div id="search-description" className="sr-only">
        Search through our collection of natural skincare products
      </div>
      {query && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 focus:ring-2 focus:ring-sage focus:ring-offset-2"
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  )
}
