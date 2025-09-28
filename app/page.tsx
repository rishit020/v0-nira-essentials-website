import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyNira } from "@/components/why-nira"
import { FeaturedProducts } from "@/components/featured-products"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <WhyNira />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
