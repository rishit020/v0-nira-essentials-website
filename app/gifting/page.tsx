import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { GiftingHero } from "@/components/gifting-hero"
import { FestivalBundles } from "@/components/festival-bundles"
import { EverydayGifting } from "@/components/everyday-gifting"
import { GiftingGuide } from "@/components/gifting-guide"

export default function GiftingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GiftingHero />
      <FestivalBundles />
      <EverydayGifting />
      <GiftingGuide />
      <Newsletter />
      <Footer />
    </main>
  )
}
