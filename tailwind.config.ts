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
        background: '#F8FAFC',
        surface: '#FFFFFF',
        'text-primary': '#1E293B',
        'text-muted': '#64748B',
      },
      fontFamily: {
        assistant: ['var(--font-assistant)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
