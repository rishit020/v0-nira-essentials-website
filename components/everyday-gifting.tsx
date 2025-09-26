import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const giftingOccasions = [
  {
    category: "Birthday Celebrations",
    title: "Birthday Bliss Bundle",
    price: "$65",
    image: "/birthday-gift-set-natural-skincare.jpg",
    description:
      "Make their special day even brighter with our curated birthday collection featuring their choice of signature scents.",
    perfectFor: "Friends, family, colleagues",
    includes: ["Choice of 3 products", "Birthday card", "Reusable gift box"],
    icon: "🎂",
  },
  {
    category: "Thank You Gifts",
    title: "Gratitude Garden Set",
    price: "$45",
    image: "/thank-you-gift-set-herbs-flowers.jpg",
    description:
      "Express your heartfelt appreciation with this thoughtful collection of our most beloved wellness essentials.",
    perfectFor: "Teachers, mentors, helpers",
    includes: ["Lavender soap", "Thank you note", "Dried flower sachet"],
    icon: "🌸",
  },
  {
    category: "Teacher Appreciation",
    title: "Nurturing Educator Bundle",
    price: "$55",
    image: "/teacher-appreciation-gift-wellness.jpg",
    description:
      "Honor the educators who shape minds with our relaxing collection designed for well-deserved self-care moments.",
    perfectFor: "Teachers, professors, tutors",
    includes: ["Stress-relief balm", "Energizing soap", "Appreciation card"],
    icon: "📚",
  },
  {
    category: "New Parent Support",
    title: "Gentle Beginnings Set",
    price: "$70",
    image: "/new-parent-gift-gentle-natural.jpg",
    description:
      "Support new parents with our gentle, nurturing collection designed for sensitive skin and peaceful moments.",
    perfectFor: "New mothers, baby showers",
    includes: ["Gentle cleansing bar", "Soothing balm", "Congratulations note"],
    icon: "👶",
  },
  {
    category: "Sympathy & Comfort",
    title: "Healing Hearts Collection",
    price: "$60",
    image: "/sympathy-gift-comfort-healing.jpg",
    description:
      "Offer comfort during difficult times with our gentle, healing collection designed to provide solace and care.",
    perfectFor: "Times of loss, recovery",
    includes: ["Calming lavender set", "Comfort tea blend", "Sympathy card"],
    icon: "🕊️",
  },
  {
    category: "Housewarming",
    title: "New Home Blessing",
    price: "$75",
    image: "/housewarming-gift-home-blessing.jpg",
    description:
      "Bless their new space with our home wellness collection featuring cleansing and protective botanicals.",
    perfectFor: "New homeowners, renters",
    includes: ["Home blessing spray", "Cleansing bundle", "Welcome card"],
    icon: "🏠",
  },
]

export function EverydayGifting() {
  return (
    <section className="py-20 bg-gradient-to-b from-sage-light/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Everyday Moments</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            Gifts for Every Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From birthdays to thank-you gestures, find the perfect way to show you care with our thoughtfully curated
            everyday gifting collections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {giftingOccasions.map((occasion, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-sage/10 hover:border-sage/20"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img
                    src={occasion.image || "/placeholder.svg"}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-lg">
                    {occasion.icon}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-xs text-mauve font-medium uppercase tracking-wider">{occasion.category}</div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{occasion.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{occasion.description}</p>

                  <div className="space-y-2">
                    <div className="text-xs text-sage font-medium">Perfect for: {occasion.perfectFor}</div>
                    <div className="text-xs text-muted-foreground">Includes: {occasion.includes.join(", ")}</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-sage">{occasion.price}</span>
                    <Button size="sm" className="bg-sage hover:bg-sage-dark text-white">
                      Customize
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Can't find the perfect gift? Let us create a custom bundle just for you.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-sage text-sage hover:bg-sage hover:text-white bg-transparent"
          >
            Create Custom Gift
          </Button>
        </div>
      </div>
    </section>
  )
}
