import Link from "next/link"

export function SkipNav() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-sage text-white px-4 py-2 rounded-md font-medium transition-all duration-200 focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
    >
      Skip to main content
    </Link>
  )
}
