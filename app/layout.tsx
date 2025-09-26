import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { BackToTop } from "@/components/back-to-top"
import { SkipNav } from "@/components/skip-nav"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nira Essentials - Handmade Natural Skincare",
  description:
    "Discover the power of Ayurvedic wellness with our handmade, natural skincare products. From soaps to body butters, each product is crafted with love and ancient wisdom.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans">
        <SkipNav />
        <CartProvider>
          {children}
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  )
}
