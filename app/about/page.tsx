import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { BrandValues } from "@/components/brand-values"
import { FounderNote } from "@/components/founder-note"
import { IngredientsRituals } from "@/components/ingredients-rituals"
import { RitualGuides } from "@/components/ritual-guides"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <BrandValues />
      <FounderNote />
      <IngredientsRituals />
      <RitualGuides />
      <Newsletter />
      <Footer />
    </main>
  )
}
