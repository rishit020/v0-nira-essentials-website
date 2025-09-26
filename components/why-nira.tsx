import { Leaf, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Handcrafted with Intention",
    description:
      "Every product is mindfully created by hand in small batches, ensuring the highest quality and deepest care in each creation.",
  },
  {
    icon: Heart,
    title: "Pure Botanical Ingredients",
    description:
      "We source only the finest natural botanicals, free from harsh chemicals and synthetic additives, honoring nature's purity.",
  },
  {
    icon: Sparkles,
    title: "Ancient Ayurvedic Wisdom",
    description:
      "Our formulations honor time-tested Ayurvedic traditions, bringing centuries of wellness knowledge to your daily rituals.",
  },
]

export function WhyNira() {
  return (
    <section className="py-20 bg-sage-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Our Promise</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Why Choose Nira Essentials?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe in nature's profound ability to heal, nourish, and transform. Our dedication to botanical purity
            and traditional wisdom creates something truly special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-sage/20 transition-colors">
                <feature.icon className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
