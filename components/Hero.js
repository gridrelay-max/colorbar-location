export default function Hero() {
  return (
    <section className="pt-20 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-light via-white to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest font-medium text-brand-muted">
              Hair Color Bar
            </p>
            <h1 className="text-brand-dark">
              Broadway & 84th
            </h1>
          </div>

          {/* Status Badge */}
          <div className="flex items-center space-x-3 pt-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-brand-dark">
              Open Today • 9:00 am – 7:00 pm
            </span>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-8 border-t border-brand-surface">
            <p className="text-base leading-relaxed text-brand-muted">
              Come visit us and get your color done by licensed professionals. Quick appointments, beautiful results.
            </p>
            
            <div className="space-y-2 pt-4">
              <a href="https://maps.google.com" className="block text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors">
                📍 2347 Broadway, New York, NY 10024
              </a>
              <a href="tel:+12125551234" className="block text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors">
                📞 (212) 555-1234
              </a>
              <a href="mailto:broadway84@colorbar.com" className="block text-sm font-medium text-brand-primary hover:text-brand-dark transition-colors">
                ✉️ broadway84@colorbar.com
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-brand-primary hover:bg-brand-dark text-white font-semibold py-4 px-8 rounded-card shadow-cta hover:shadow-[0_8px_40px_rgba(139,26,26,0.5)] transition-all">
            Book Your Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <div className="rounded-card overflow-hidden shadow-card-hover h-96">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeae34c886?w=600&q=90&auto=format&fit=crop" 
              alt="Professional hair coloring service" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
