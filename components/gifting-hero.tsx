export function GiftingHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-sage-light/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-16"></div>
            <span className="px-6 text-sm font-medium text-sage uppercase tracking-wider">Thoughtful Gifting</span>
            <div className="h-px bg-sage/30 w-16"></div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight">
            Gifts That Nurture
            <span className="block text-sage">Body & Soul</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Share the gift of wellness with our thoughtfully curated collections. Each bundle is lovingly crafted to
            bring moments of tranquility and natural beauty to those you cherish most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-sage rounded-full"></div>
              <span>Handcrafted with love</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-mauve rounded-full"></div>
              <span>Beautifully packaged</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-sage rounded-full"></div>
              <span>Personal touch included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative botanical elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-32 h-32 bg-sage rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="w-24 h-24 bg-mauve rounded-full blur-2xl"></div>
      </div>
    </section>
  )
}
