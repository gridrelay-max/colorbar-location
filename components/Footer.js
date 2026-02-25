export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-display text-2xl font-semibold text-brand-accent mb-2">ColorBar</p>
          <p className="text-sm text-gray-300">Professional hair color, at your price.</p>
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          <p>Broadway & 84th St</p>
          <p>(212) 555-1234</p>
          <p>broadway84@colorbar.com</p>
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          <p>Hours: Mon-Sun, 9am-7pm</p>
          <p>Booking: Online or Walk-ins</p>
          <p>We accept all major cards</p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 ColorBar. All rights reserved.</p>
      </div>
    </footer>
  )
}
