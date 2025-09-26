import { Leaf, Globe, Heart, Shield } from "lucide-react"

const ethosPoints = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "We partner with local farmers and cooperatives who practice regenerative agriculture, ensuring our ingredients are grown in harmony with nature.",
  },
  {
    icon: Globe,
    title: "Ethically Traded",
    description:
      "Fair trade practices ensure that the communities who grow our ingredients receive fair compensation and support for their traditional knowledge.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "We believe in giving back to the communities that provide our ingredients, supporting education and sustainable development initiatives.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Every batch is tested for purity and potency, ensuring you receive the highest quality ingredients in every product we create.",
  },
]

export function SourcingEthos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Our Promise</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Ethical Sourcing, Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our commitment goes beyond creating beautiful products. We believe in responsible sourcing that honors both
            the earth and the communities who cultivate these precious ingredients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ethosPoints.map((point, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto">
                <point.icon className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sage-light/10 to-mauve-light/10 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-foreground">From Earth to You, With Love</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Every ingredient tells a story of careful cultivation, traditional wisdom, and sustainable practices. When
              you choose Nira Essentials, you're not just choosing natural skincare—you're supporting a movement toward
              more conscious, ethical beauty that honors both people and planet.
            </p>
            <div className="inline-flex items-center justify-center space-x-2 text-sage">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Crafted with intention, sourced with care</span>
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
