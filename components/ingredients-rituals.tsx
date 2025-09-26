import { Flower, Droplets, Sparkles, Sun } from "lucide-react"

const ingredients = [
  {
    icon: Flower,
    name: "Turmeric",
    benefits: "Natural anti-inflammatory properties help soothe and brighten skin while reducing redness.",
  },
  {
    icon: Droplets,
    name: "Rose Water",
    benefits: "Gently hydrates and tones skin while providing a calming, aromatic experience.",
  },
  {
    icon: Sparkles,
    name: "Sandalwood",
    benefits: "Promotes skin healing and provides a grounding, meditative fragrance for relaxation.",
  },
  {
    icon: Sun,
    name: "Coconut Oil",
    benefits: "Deeply moisturizes and nourishes skin with essential fatty acids and vitamins.",
  },
]

export function IngredientsRituals() {
  return (
    <section className="py-20 bg-sage-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Nature's Pharmacy</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Ayurvedic Ingredients & Their Rituals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We carefully select each botanical ingredient for its unique healing properties, drawing from centuries of
            Ayurvedic wisdom to create products that truly nourish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-background rounded-lg p-6 space-y-4 shadow-sm border border-sage/10">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                <ingredient.icon className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{ingredient.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{ingredient.benefits}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-sage/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-foreground">The Art of Natural Skincare</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                In Ayurveda, skincare is more than surface-deep—it's about creating harmony between mind, body, and
                spirit. Our ingredients are chosen not just for their individual benefits, but for how they work
                together to create a holistic wellness experience.
              </p>
              <p className="text-pretty">
                Each herb is harvested at the optimal time, each oil is cold-pressed to preserve its potency, and each
                blend is created with the intention of bringing balance to your daily routine. This is skincare as it
                was meant to be: pure, intentional, and transformative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
