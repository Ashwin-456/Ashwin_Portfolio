/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080c16',
          surface: '#0d1322',
          card: '#0e1424',
          border: '#1e293b',
          subtle: '#172033',
        },
        accent: {
          blue: '#2563eb',
          light: '#3b82f6',
          sky: '#60a5fa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
