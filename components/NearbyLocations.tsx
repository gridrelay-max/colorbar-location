const locations = [
  { name: 'Upper West Side', address: '2347 Broadway, NY 10024', distance: '0 mi' },
  { name: 'Midtown', address: '745 5th Avenue, NY 10151', distance: '0.8 mi' },
  { name: 'Upper East Side', address: '1055 Park Avenue, NY 10128', distance: '1.2 mi' },
]

export default function NearbyLocations() {
  return (
    <section className="py-section px-4 md:px-8 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-brand-dark mb-16">Visit Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="p-8 rounded-card bg-white shadow-card hover:shadow-card-hover transition-all">
              <h3 className="text-brand-dark font-semibold mb-2">{loc.name}</h3>
              <p className="text-sm text-brand-muted mb-1">{loc.address}</p>
              <p className="text-xs text-brand-muted mb-6">{loc.distance} away</p>
              <button className="w-full border-2 border-brand-primary text-brand-primary hover:bg-brand-light font-semibold py-2 px-6 rounded-card transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
