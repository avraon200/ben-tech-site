import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        'primary-dark': '#1E3A5F',
        accent: '#DC2626',
        cyan: '#06B6D4',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        'text-primary': '#1E293B',
        'text-muted': '#64748B',
      },
      fontFamily: {
        heebo: ['var(--font-heebo)', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 30px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)',
        'neon-blue': '0 0 30px rgba(30,64,175,0.35), 0 0 60px rgba(30,64,175,0.15)',
        'glow-sm': '0 0 15px rgba(6,182,212,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
