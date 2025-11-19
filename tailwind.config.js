/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a1f1f',
        'primary-light': '#0d2d2d',
        'card-dark': '#1a3838',
        'card-darker': '#0d2626',
        'dark-footer': '#0a1818',
        accent: '#00d9a3',
        'accent-hover': '#00f5b8',
        'accent-secondary': '#00b88a',
        'text-light': '#a8d4c8',
        success: '#00d9a3',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 4px 20px rgba(0, 217, 163, 0.15)',
        'cyan-glow-lg': '0 8px 30px rgba(0, 217, 163, 0.25)',
        'cyan-glow-xl': '0 12px 40px rgba(0, 217, 163, 0.35)',
      },
    },
  },
  plugins: [],
};
