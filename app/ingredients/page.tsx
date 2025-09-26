import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { IngredientsHero } from "@/components/ingredients-hero"
import { NaturalIngredients } from "@/components/natural-ingredients"
import { IngredientSpotlight } from "@/components/ingredient-spotlight"
import { SourcingEthos } from "@/components/sourcing-ethos"

export default function IngredientsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IngredientsHero />
      <NaturalIngredients />
      <IngredientSpotlight />
      <SourcingEthos />
      <Newsletter />
      <Footer />
    </main>
  )
}
