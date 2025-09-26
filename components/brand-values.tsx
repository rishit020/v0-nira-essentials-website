import { Leaf, Recycle, Users, Heart } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We prioritize sustainable practices in every aspect of our business, from ingredient sourcing to packaging choices.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description:
      "Our commitment to the planet drives us to use renewable resources and minimize our environmental footprint.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description:
      "We believe in supporting local communities and building meaningful relationships with our customers and suppliers.",
  },
  {
    icon: Heart,
    title: "Wellness-Centered",
    description:
      "Every product is designed to promote holistic wellness, nurturing both your skin and your overall well-being.",
  },
]

export function BrandValues() {
  return (
    <section className="py-20 bg-mauve-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-mauve/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-mauve uppercase tracking-wider">Our Values</span>
            <div className="h-px bg-mauve/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">What We Stand For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our values guide every decision we make, from the ingredients we choose to the way we interact with our
            community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-mauve/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-mauve/20 transition-colors">
                <value.icon className="w-8 h-8 text-mauve" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
