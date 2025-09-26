"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const categories = ["Soaps", "Body Care", "Hair Care", "Wellness", "Gift Sets"]
const occasions = ["Daily Care", "Special Occasions", "Festivals", "Gifts", "Self-Care Rituals"]

interface ProductFiltersProps {
  selectedCategories: string[]
  selectedOccasions: string[]
  priceRange: [number, number]
  onCategoryChange: (categories: string[]) => void
  onOccasionChange: (occasions: string[]) => void
  onPriceRangeChange: (range: [number, number]) => void
  onClearFilters: () => void
}

export function ProductFilters({
  selectedCategories,
  selectedOccasions,
  priceRange,
  onCategoryChange,
  onOccasionChange,
  onPriceRangeChange,
  onClearFilters,
}: ProductFiltersProps) {
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      onCategoryChange([...selectedCategories, category])
    } else {
      onCategoryChange(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleOccasionChange = (occasion: string, checked: boolean) => {
    if (checked) {
      onOccasionChange([...selectedOccasions, occasion])
    } else {
      onOccasionChange(selectedOccasions.filter((o) => o !== occasion))
    }
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedOccasions.length > 0 || priceRange[0] > 0 || priceRange[1] < 100

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button variant="outline" onClick={onClearFilters} className="w-full bg-transparent">
          Clear All Filters
        </Button>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Product Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange(value as [number, number])}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Occasion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {occasions.map((occasion) => (
            <div key={occasion} className="flex items-center space-x-2">
              <Checkbox
                id={occasion}
                checked={selectedOccasions.includes(occasion)}
                onCheckedChange={(checked) => handleOccasionChange(occasion, checked as boolean)}
              />
              <label htmlFor={occasion} className="text-sm text-muted-foreground cursor-pointer">
                {occasion}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
