import Image from "next/image"

const spotlightIngredients = [
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    image: "/turmeric-root-powder-golden.jpg",
    properties: "Anti-inflammatory, Antioxidant, Brightening",
    benefits:
      "Known as 'golden spice' in Ayurveda, turmeric contains curcumin which helps reduce inflammation, brighten skin tone, and protect against environmental damage. It's been used for centuries to promote healing and create a natural glow.",
    usage: "Featured in our Golden Glow Face Mask and Turmeric Body Scrub",
  },
  {
    name: "Rose Water",
    scientificName: "Rosa damascena",
    image: "/rose-petals-distillation-process.jpg",
    properties: "Hydrating, Toning, Soothing",
    benefits:
      "Pure rose water is a gentle yet powerful ingredient that balances skin pH, provides deep hydration, and offers aromatherapeutic benefits. Its natural astringent properties help tighten pores while its delicate fragrance calms the mind.",
    usage: "Key ingredient in our Rose & Sandalwood Toner and Hydrating Face Mist",
  },
  {
    name: "Sandalwood",
    scientificName: "Santalum album",
    image: "/sandalwood-powder-chips-natural.jpg",
    properties: "Healing, Calming, Anti-aging",
    benefits:
      "Revered in Ayurvedic tradition, sandalwood promotes skin regeneration, reduces signs of aging, and provides a grounding, meditative fragrance. Its cooling properties make it perfect for sensitive or irritated skin.",
    usage: "Essential component in our Sandalwood Face Pack and Evening Ritual Oil",
  },
]

export function IngredientSpotlight() {
  return (
    <section className="py-20 bg-sage-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Ingredient Spotlight</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Star Ingredients in Focus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Meet the powerhouse botanicals that make our products truly exceptional. Each ingredient is chosen for its
            unique properties and time-tested benefits.
          </p>
        </div>

        <div className="space-y-16">
          {spotlightIngredients.map((ingredient, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={ingredient.image || "/placeholder.svg"}
                    alt={ingredient.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-foreground">{ingredient.name}</h3>
                  <p className="text-sm text-sage italic">{ingredient.scientificName}</p>
                  <div className="flex flex-wrap gap-2">
                    {ingredient.properties.split(", ").map((property, idx) => (
                      <span key={idx} className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">
                        {property}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">{ingredient.benefits}</p>
                <div className="bg-background rounded-lg p-4 border border-sage/10">
                  <p className="text-sm text-foreground">
                    <span className="font-medium text-sage">Featured in:</span> {ingredient.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
