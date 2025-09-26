import { Card, CardContent } from "@/components/ui/card"

const giftingTips = [
  {
    title: "Choosing the Right Scent",
    description:
      "Consider their personality: calming lavender for stress relief, energizing citrus for morning people, or grounding sandalwood for meditation lovers.",
    icon: "🌿",
  },
  {
    title: "Presentation Matters",
    description:
      "All our gifts come beautifully wrapped in sustainable packaging with handwritten notes. Add a personal touch with custom messaging.",
    icon: "🎁",
  },
  {
    title: "Timing Your Gift",
    description:
      "Order 3-5 days in advance for custom bundles. Festival collections are available seasonally and make perfect advance gifts.",
    icon: "⏰",
  },
  {
    title: "Personal Touch",
    description:
      "Include a handwritten note sharing why you chose these specific products. Our team can help craft the perfect message.",
    icon: "💌",
  },
]

export function GiftingGuide() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center justify-center">
              <div className="h-px bg-mauve/30 w-12"></div>
              <span className="px-4 text-sm font-medium text-mauve uppercase tracking-wider">Gifting Wisdom</span>
              <div className="h-px bg-mauve/30 w-12"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
              The Art of Thoughtful Gifting
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every gift tells a story. Let us help you create meaningful moments with our guide to choosing the perfect
              wellness gift for your loved ones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {giftingTips.map((tip, index) => (
              <Card key={index} className="border-sage/10 hover:border-sage/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-light/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-medium text-foreground">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-sage-light/10 to-mauve-light/10 rounded-2xl p-8 text-center space-y-6">
            <h3 className="font-serif text-2xl font-light text-foreground">From Our Hands to Their Hearts</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every gift we create carries the intention of wellness, love, and care. When you choose Nira Essentials,
              you're not just giving products – you're sharing a moment of tranquility, a touch of nature, and a
              reminder to pause and nurture oneself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full"></div>
                <span>Free gift wrapping on all orders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mauve rounded-full"></div>
                <span>Handwritten notes included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full"></div>
                <span>Sustainable packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
