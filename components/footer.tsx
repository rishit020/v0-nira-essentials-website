import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-mauve text-white relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 right-16 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-12 left-12 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-serif text-2xl font-light text-white">Nira Essentials</div>
            <p className="text-white/80 leading-relaxed text-pretty">
              Handcrafted botanical skincare rooted in Ayurvedic wisdom, bringing nature's healing touch from our hands
              to your home.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-white">Collection</h3>
            <div className="space-y-2">
              <Link href="/shop/cleansing" className="block text-white/70 hover:text-white transition-colors">
                Cleansing Bars
              </Link>
              <Link href="/shop/nourishing" className="block text-white/70 hover:text-white transition-colors">
                Body Balms
              </Link>
              <Link href="/shop/hair-care" className="block text-white/70 hover:text-white transition-colors">
                Hair Elixirs
              </Link>
              <Link href="/shop/wellness" className="block text-white/70 hover:text-white transition-colors">
                Wellness Rituals
              </Link>
              <Link href="/shop/gift-sets" className="block text-white/70 hover:text-white transition-colors">
                Gift Collections
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-white">Wisdom</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-white/70 hover:text-white transition-colors">
                Our Heritage
              </Link>
              <Link href="/ingredients" className="block text-white/70 hover:text-white transition-colors">
                Botanical Ingredients
              </Link>
              <Link href="/rituals" className="block text-white/70 hover:text-white transition-colors">
                Wellness Rituals
              </Link>
              <Link href="/gifting" className="block text-white/70 hover:text-white transition-colors">
                Mindful Gifting
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-white">Connect</h3>
            <div className="space-y-2 text-white/70">
              <p>Cary/Apex, North Carolina</p>
              <p>Local pickup available</p>
              <Link href="mailto:hello@niraessentials.com" className="block hover:text-white transition-colors">
                hello@niraessentials.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
          <p>&copy; 2025 Nira Essentials. Crafted with love in North Carolina.</p>
        </div>
      </div>
    </footer>
  )
}
