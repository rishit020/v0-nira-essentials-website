import { Leaf } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-sage/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-sage/20 rounded-full">
              <Leaf className="h-8 w-8 text-sage" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We'd love to hear from you. Whether you have questions about our products, need guidance on your wellness
            journey, or want to explore collaboration opportunities, we're here to help nurture your path to natural
            well-being.
          </p>
        </div>
      </div>
    </section>
  )
}
