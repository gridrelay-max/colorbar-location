import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import ColorPalette from '@/components/ColorPalette'
import FAQ from '@/components/FAQ'
import ExpertsSection from '@/components/ExpertsSection'
import NearbyLocations from '@/components/NearbyLocations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <ColorPalette />
      <FAQ />
      <ExpertsSection />
      <NearbyLocations />
      <Footer />
    </main>
  )
}
