const services = [
  { title: 'Roots', description: 'Refresh your look with color at the roots.' },
  { title: 'All-Over Color', description: 'Complete transformation from roots to ends.' },
  { title: 'Highlights', description: 'Beautiful dimension with foils or balayage.' },
  { title: 'Gloss + Blowout', description: 'Enhance vibrancy with professional finish.' },
  { title: 'Consultation', description: 'Find your perfect shade with our experts.' },
]

export default function Services() {
  return (
    <section className="py-section px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-brand-dark mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-6 rounded-card bg-brand-surface hover:bg-white shadow-card hover:shadow-card-hover transition-all">
              <h3 className="text-brand-dark mb-3">{service.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">{service.description}</p>
              <a href="#" className="text-xs font-semibold text-brand-primary uppercase tracking-wide hover:text-brand-dark">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
