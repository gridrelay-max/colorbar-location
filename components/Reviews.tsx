const reviews = [
  { text: 'Absolutely gorgeous color. The team is professional and friendly. Worth every penny.', author: 'Sarah M.', rating: 5 },
  { text: 'Best salon experience ever. Quick appointment, beautiful results, and the staff is wonderful.', author: 'Jessica L.', rating: 5 },
  { text: 'This is the most gorgeous hair color! I receive so many compliments.', author: 'Michelle R.', rating: 5 },
]

export default function Reviews() {
  return (
    <section className="py-section px-4 md:px-8 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-brand-dark mb-16 text-center">Loved by Our Clients</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-card bg-white shadow-card hover:shadow-card-hover transition-all">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-brand-accent">★</span>
                ))}
              </div>
              <p className="text-brand-muted mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
              <p className="font-semibold text-brand-dark text-sm">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
