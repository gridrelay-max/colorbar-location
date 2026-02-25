import { useState } from 'react'

const faqs = [
  { q: 'What is a Hair Color Bar?', a: 'We are color experts who specialize in professional hair coloring services at a fraction of typical salon costs.' },
  { q: 'How long does an appointment take?', a: 'Most appointments take 60-90 minutes depending on the service you choose.' },
  { q: 'Do you offer memberships?', a: 'Yes! Memberships include unlimited roots service monthly plus discounts on other services.' },
  { q: 'Are walk-ins welcome?', a: 'Absolutely! We accept walk-ins 7 days a week, but booking online ensures your preferred time.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-section px-4 md:px-8 bg-brand-light">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-brand-dark mb-16 text-center">Questions?</h2>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-card bg-white shadow-card overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-8 py-5 text-left font-semibold text-brand-dark hover:bg-brand-light transition-colors flex justify-between items-center"
              >
                {item.q}
                <span className="text-brand-primary">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-8 py-5 bg-brand-light border-t border-brand-surface text-brand-muted">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
