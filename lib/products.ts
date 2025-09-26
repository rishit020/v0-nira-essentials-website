import type { Product } from "@/contexts/cart-context"

export const products: Product[] = [
  {
    id: "turmeric-glow-soap",
    name: "Turmeric Glow Soap",
    category: "Soaps",
    price: 18,
    image: "/handmade-turmeric-soap-with-natural-ingredients.jpg",
    description: "Brightening soap with turmeric and honey for radiant skin",
    ingredients: "Turmeric, Honey, Coconut Oil, Shea Butter",
  },
  {
    id: "rose-sandalwood-butter",
    name: "Rose & Sandalwood Body Butter",
    category: "Body Care",
    price: 32,
    image: "/natural-body-butter-with-rose-petals-and-sandalwoo.jpg",
    description: "Luxurious moisturizer for silky smooth skin",
    ingredients: "Rose Oil, Sandalwood, Shea Butter, Coconut Oil",
  },
  {
    id: "ayurvedic-hair-mask",
    name: "Ayurvedic Hair Mask",
    category: "Hair Care",
    price: 28,
    image: "/ayurvedic-hair-mask-with-herbs-and-oils.jpg",
    description: "Nourishing treatment for healthy, lustrous hair",
    ingredients: "Amla, Brahmi, Coconut Oil, Fenugreek",
  },
  {
    id: "lavender-foot-soak",
    name: "Lavender Foot Soak",
    category: "Wellness",
    price: 24,
    image: "/lavender-foot-soak-with-dried-herbs-and-salts.jpg",
    description: "Relaxing soak for tired, aching feet",
    ingredients: "Lavender, Epsom Salt, Sea Salt, Essential Oils",
  },
  {
    id: "neem-tea-tree-soap",
    name: "Neem & Tea Tree Soap",
    category: "Soaps",
    price: 16,
    image: "/neem-and-tea-tree-soap-for-acne-prone-skin.jpg",
    description: "Purifying soap for acne-prone skin",
    ingredients: "Neem, Tea Tree Oil, Coconut Oil, Olive Oil",
  },
  {
    id: "festival-gift-set",
    name: "Festival Gift Set",
    category: "Gift Sets",
    price: 65,
    originalPrice: 78,
    image: "/beautiful-gift-set-with-natural-skincare-products.jpg",
    description: "Perfect for Diwali and special celebrations",
    ingredients: "Assorted soaps, body butter, and foot soak",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}
