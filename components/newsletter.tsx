import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 bg-sage text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center">
                  <div className="h-px bg-white/30 w-8"></div>
                  <span className="px-3 text-sm font-medium uppercase tracking-wider opacity-90">Newsletter</span>
                  <div className="h-px bg-white/30 w-8"></div>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-balance">Join Our Botanical Journey</h2>
                <p className="text-lg opacity-90 leading-relaxed text-pretty">
                  Receive seasonal wellness wisdom, botanical skincare rituals, and exclusive offerings from our North
                  Carolina sanctuary.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 text-white placeholder:text-white/70 border-white/20 flex-1 focus:border-white/40"
                />
                <Button className="bg-mauve hover:bg-mauve-dark text-white border-0 whitespace-nowrap">Join Us</Button>
              </div>

              <p className="text-sm opacity-75">Pure wellness wisdom, no clutter. Unsubscribe anytime.</p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?key=botanical-newsletter"
                  alt="Natural botanical ingredients and cherry blossoms"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-mauve/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
