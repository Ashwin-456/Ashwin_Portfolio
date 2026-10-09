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
          bg: '#050816',
          card: '#0B112C',
          surface: '#0F1738',
          border: 'rgba(14, 165, 255, 0.15)',
        },
        accent: {
          blue: '#0EA5FF',
          cyan: '#06B6D4',
          glow: '#38BDF8',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(14, 165, 255, 0.25)',
        'glow-md': '0 0 30px rgba(14, 165, 255, 0.35)',
        'glow-lg': '0 0 50px rgba(14, 165, 255, 0.45)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(14, 165, 255, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(14, 165, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
