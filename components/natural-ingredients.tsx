import { Flower, Droplets, Sun, Leaf } from "lucide-react"

const ingredientCategories = [
  {
    icon: Flower,
    category: "Ayurvedic Herbs",
    description: "Time-tested botanicals that balance and heal",
    ingredients: ["Turmeric", "Neem", "Ashwagandha", "Brahmi", "Tulsi"],
  },
  {
    icon: Droplets,
    category: "Essential Oils",
    description: "Pure, therapeutic-grade oils for deep nourishment",
    ingredients: ["Rose", "Sandalwood", "Lavender", "Jasmine", "Eucalyptus"],
  },
  {
    icon: Sun,
    category: "Carrier Oils",
    description: "Nutrient-rich bases that deliver active ingredients",
    ingredients: ["Coconut", "Sesame", "Jojoba", "Sweet Almond", "Argan"],
  },
  {
    icon: Leaf,
    category: "Natural Extracts",
    description: "Concentrated plant essences for targeted benefits",
    ingredients: ["Aloe Vera", "Green Tea", "Chamomile", "Calendula", "Hibiscus"],
  },
]

export function NaturalIngredients() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Our Ingredients</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Nature's Finest Botanicals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We source only the highest quality natural ingredients, each chosen for their unique wellness properties and
            ability to nourish your skin from within.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientCategories.map((category, index) => (
            <div key={index} className="bg-sage-light/5 rounded-2xl p-8 space-y-6 border border-sage/10">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                <category.icon className="w-8 h-8 text-sage" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-medium text-foreground">{category.category}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{category.description}</p>
              </div>
              <div className="space-y-2">
                {category.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                    <span className="text-sm text-foreground">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
