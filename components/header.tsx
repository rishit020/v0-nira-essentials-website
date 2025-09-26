"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartSidebar } from "@/components/cart-sidebar"
import { SkipNav } from "@/components/skip-nav"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  return (
    <>
      <SkipNav />
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40",
        )}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded-md"
              aria-label="Nira Essentials - Go to homepage"
            >
              <div className="font-serif text-2xl font-bold text-primary group-hover:text-sage transition-colors duration-200">
                Nira Essentials
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About Us" },
                { href: "/ingredients", label: "Ingredients" },
                { href: "/gifting", label: "Gifting" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-sage transition-all duration-200 group-hover:w-[calc(100%-1rem)]"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <CartSidebar />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-sage focus:ring-offset-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={cn(
                      "absolute inset-0 transition-all duration-200",
                      isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 transition-all duration-200",
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                    )}
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
            )}
            aria-hidden={!isMenuOpen}
          >
            <div className="py-4 border-t border-border">
              <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
                {[
                  { href: "/shop", label: "Shop" },
                  { href: "/about", label: "About Us" },
                  { href: "/ingredients", label: "Ingredients" },
                  { href: "/gifting", label: "Gifting" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-foreground hover:text-primary transition-all duration-200 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded-md px-2 py-1",
                      "animate-in slide-in-from-left-4 fade-in-0",
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
