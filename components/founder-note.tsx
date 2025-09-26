import Image from "next/image"

export function FounderNote() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sage-light/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center justify-center lg:justify-start">
                  <div className="h-px bg-sage/30 w-12"></div>
                  <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">From Our Founder</span>
                  <div className="h-px bg-sage/30 w-12"></div>
                </div>
                <blockquote className="space-y-4">
                  <p className="font-serif text-2xl sm:text-3xl font-light text-foreground italic text-balance">
                    "From my hands to your home."
                  </p>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      When I started Nira Essentials, I had a simple dream: to create products that would bring the
                      healing power of nature into everyday life. Each jar, each bottle, each bar of soap carries with
                      it my personal commitment to quality, purity, and care.
                    </p>
                    <p className="text-pretty">
                      I believe that skincare should be a ritual of self-love, not a chore. That's why every product is
                      crafted by hand, infused with intention, and designed to transform your daily routine into a
                      moment of mindful wellness.
                    </p>
                  </div>
                  <footer className="pt-4">
                    <p className="font-medium text-foreground">— Sarah, Founder & Artisan</p>
                  </footer>
                </blockquote>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-full overflow-hidden">
                  <Image
                    src="/founder-portrait-natural-skincare-artisan.jpg"
                    alt="Sarah, founder of Nira Essentials, in her natural skincare workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
