const colors = [
  { name: 'Burgundy', hex: '#8B1A1A' },
  { name: 'Gold', hex: '#C9A96E' },
  { name: 'Dark', hex: '#1C1410' },
  { name: 'Light', hex: '#FAF7F4' },
  { name: 'Muted', hex: '#9C8B7E' },
  { name: 'Surface', hex: '#F2EDE8' },
]

export default function ColorPalette() {
  return (
    <section className="py-section px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-brand-dark mb-16">Our Color Palette</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {colors.map((color, idx) => (
            <div key={idx} className="text-center">
              <div 
                className="w-24 h-24 rounded-card shadow-card mx-auto mb-4 border border-brand-surface"
                style={{ backgroundColor: color.hex }}
              ></div>
              <h3 className="text-sm font-semibold text-brand-dark">{color.name}</h3>
              <p className="text-xs text-brand-muted mt-1">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
