import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Cary, NC",
    text: "The turmeric soap has completely transformed my skin. I love knowing exactly what ingredients are going on my body.",
    rating: 5,
  },
  {
    name: "Priya K.",
    location: "Apex, NC",
    text: "As someone with sensitive skin, finding Nira Essentials was a blessing. Everything is so gentle yet effective.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Raleigh, NC",
    text: "The rose body butter is my absolute favorite. It smells divine and keeps my skin moisturized all day.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real stories from real people who have experienced the transformative power of natural skincare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-pretty">"{testimonial.text}"</p>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
