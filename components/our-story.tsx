import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="h-px bg-sage/30 w-12"></div>
              <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Your Story</span>
              <div className="h-px bg-sage/30 w-12"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
              Handmade with Purpose, Rooted in Wellness
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Every Nira Essentials product begins its journey in our small workshop, where time-honored traditions
                meet modern wellness needs. We believe that the most powerful skincare comes not from laboratories, but
                from nature's own pharmacy of healing botanicals.
              </p>
              <p className="text-pretty">
                Our commitment to handcrafted excellence means each product is created in small batches, allowing us to
                maintain the highest quality standards while infusing every creation with intention and care. This isn't
                just skincare—it's a return to the roots of natural wellness.
              </p>
              <p className="text-pretty">
                We source our ingredients from trusted growers who share our values of sustainability and purity. From
                the first harvest to the final packaging, every step is guided by our dedication to creating products
                that nourish both body and spirit.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/handmade-natural-skincare-workshop-with-herbs.jpg"
                alt="Handmade natural skincare products being crafted with fresh herbs and botanicals"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
