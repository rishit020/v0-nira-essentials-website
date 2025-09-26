export function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-sage-light/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Our Journey</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Rooted in Nature,
            <br />
            <span className="text-sage">Crafted with Love</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            At Nira Essentials, we believe that true beauty and wellness come from nature's purest gifts. Our journey
            began with a simple vision: to create handmade products that honor both ancient wisdom and modern needs.
          </p>
        </div>
      </div>
    </section>
  )
}
