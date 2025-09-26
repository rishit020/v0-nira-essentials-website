export function IngredientsHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-sage-light/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-sage/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-sage uppercase tracking-wider">Nature's Pharmacy</span>
            <div className="h-px bg-sage/30 w-12"></div>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Pure Ingredients,
            <br />
            <span className="text-sage">Ancient Wisdom</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Every ingredient in our products is carefully selected for its healing properties and wellness benefits.
            Discover the natural botanicals that make our handcrafted formulations so effective and nurturing.
          </p>
        </div>
      </div>
    </section>
  )
}
