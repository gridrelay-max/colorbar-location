import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-surface shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="font-display text-2xl font-semibold text-brand-primary">
            ColorBar
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-brand-dark hover:text-brand-primary">Services</a>
            <a href="#" className="text-sm font-medium text-brand-dark hover:text-brand-primary">Reviews</a>
            <a href="#" className="text-sm font-medium text-brand-dark hover:text-brand-primary">About</a>
            <a href="#" className="text-sm font-medium text-brand-dark hover:text-brand-primary">Contact</a>
          </div>

          {/* CTA */}
          <button className="hidden md:inline-block bg-brand-primary text-white text-sm font-semibold py-2 px-6 rounded-card hover:bg-brand-dark transition-colors">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-brand-surface pt-4">
            <a href="#" className="block text-sm font-medium text-brand-dark hover:text-brand-primary">Services</a>
            <a href="#" className="block text-sm font-medium text-brand-dark hover:text-brand-primary">Reviews</a>
            <a href="#" className="block text-sm font-medium text-brand-dark hover:text-brand-primary">About</a>
            <a href="#" className="block text-sm font-medium text-brand-dark hover:text-brand-primary">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
