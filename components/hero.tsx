import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-background via-sage-light/10 to-mauve-light/10">
      <div className="container mx-auto container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage/10 border border-sage/20">
                <span className="text-sm font-medium text-sage">Handcrafted with Love</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Pure wellness
                <span className="text-sage block font-medium">from nature's garden</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
                Embrace the timeless wisdom of Ayurveda with our thoughtfully crafted, botanical skincare. Each product
                honors ancient traditions while nurturing your skin with nature's finest gifts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage hover:bg-sage-dark text-white border-0 touch-target focus-mobile"
              >
                <Link href="/shop">Discover Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-mauve text-mauve hover:bg-mauve hover:text-white bg-transparent touch-target focus-mobile"
              >
                <Link href="/about">Our Heritage</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden bg-muted relative">
              <img
                src="/natural-botanical-skincare-products-with-herbs-and.jpg"
                alt="Natural botanical skincare products with fresh herbs and flowers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/5 to-transparent"></div>
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-mauve/10 rounded-full"></div>
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-sage/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
