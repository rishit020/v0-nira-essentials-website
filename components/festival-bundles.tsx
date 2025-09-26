import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const festivalBundles = [
  {
    name: "Diwali Radiance Collection",
    occasion: "Festival of Lights",
    price: "$85",
    originalPrice: "$105",
    image: "/diwali-gift-bundle-turmeric-rose-gold.jpg",
    description:
      "Illuminate your celebrations with our golden glow collection featuring turmeric soap, rose face oil, and saffron body butter.",
    includes: ["Turmeric Glow Soap", "Rose Face Elixir", "Saffron Body Butter", "Brass Diya Candle"],
    badge: "Limited Edition",
    colors: "Gold & Rose",
  },
  {
    name: "Onam Wellness Ritual",
    occasion: "Harvest Festival",
    price: "$78",
    originalPrice: "$95",
    image: "/onam-gift-bundle-coconut-jasmine.jpg",
    description:
      "Celebrate abundance with our Kerala-inspired collection of coconut oil, jasmine soap, and ayurvedic hair mask.",
    includes: ["Coconut Hair Oil", "Jasmine Cleansing Bar", "Ayurvedic Hair Mask", "Banana Leaf Wrap"],
    badge: "Traditional",
    colors: "White & Green",
  },
  {
    name: "Holi Color Celebration",
    occasion: "Festival of Colors",
    price: "$72",
    originalPrice: "$88",
    image: "/holi-gift-bundle-colorful-natural.jpg",
    description:
      "Embrace the joy of colors with our vibrant collection featuring natural color powders and gentle cleansing essentials.",
    includes: ["Natural Color Powders", "Gentle Cleansing Oil", "Moisturizing Balm", "Cotton Drawstring Bag"],
    badge: "Seasonal",
    colors: "Rainbow Hues",
  },
]

export function FestivalBundles() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-mauve/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-mauve uppercase tracking-wider">Festival Collections</span>
            <div className="h-px bg-mauve/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Celebrate Life's Sacred Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Honor traditions and create new memories with our specially curated festival bundles, each designed to bring
            joy and wellness to your celebrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {festivalBundles.map((bundle, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-500 border-sage/10 hover:border-sage/20 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={bundle.image || "/placeholder.svg"}
                    alt={bundle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-mauve text-white px-3 py-1 rounded-full text-xs font-medium">{bundle.badge}</div>
                    <div className="bg-white/90 text-sage px-3 py-1 rounded-full text-xs font-medium">
                      Save ${Number.parseInt(bundle.originalPrice.slice(1)) - Number.parseInt(bundle.price.slice(1))}
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-xs text-sage font-medium uppercase tracking-wider">{bundle.occasion}</div>
                  <h3 className="font-serif text-xl font-medium text-foreground">{bundle.name}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{bundle.description}</p>

                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground font-medium">This collection includes:</div>
                    <ul className="space-y-1">
                      {bundle.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-sage">{bundle.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{bundle.originalPrice}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{bundle.colors}</div>
                  </div>

                  <Button className="w-full bg-sage hover:bg-sage-dark text-white">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All festival bundles include complimentary gift wrapping and a personalized note
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-sage text-sage hover:bg-sage hover:text-white bg-transparent"
          >
            View All Festival Collections
          </Button>
        </div>
      </div>
    </section>
  )
}
