export default function ExpertsSection() {
  return (
    <section className="py-section px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="hidden md:block">
          <div className="rounded-card overflow-hidden shadow-card-hover h-96">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=90" 
              alt="Hair color experts" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-brand-dark">We are the Color Experts</h2>
          <p className="text-brand-muted leading-relaxed">
            Hair color is all we do. Our licensed colorists are trained to help you achieve your perfect shade with premium, ammonia-free color.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-brand-primary">✓</span>
              <span className="text-brand-dark">Licensed colorists with ongoing professional training</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-brand-primary">✓</span>
              <span className="text-brand-dark">Committed to helping you feel confident and beautiful</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-brand-primary">✓</span>
              <span className="text-brand-dark">Premium, gentle formulas for healthy hair</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
