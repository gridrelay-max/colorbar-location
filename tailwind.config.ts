import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8B1A1A',    // Deep burgundy
          accent: '#C9A96E',     // Warm gold
          dark: '#1C1410',       // Near-black
          light: '#FAF7F4',      // Warm off-white
          muted: '#9C8B7E',      // Warm gray
          surface: '#F2EDE8',    // Card bg
        }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        'card': '1.25rem',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(28, 20, 16, 0.08)',
        'card-hover': '0 8px 40px rgba(28, 20, 16, 0.14)',
        'cta': '0 4px 24px rgba(139, 26, 26, 0.35)',
      }
    }
  },
  plugins: [],
}
export default config
