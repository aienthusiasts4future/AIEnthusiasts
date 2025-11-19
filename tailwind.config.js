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
        accent: '#06d6d6',
        'accent-hover': '#1ee5e5',
        'accent-secondary': '#0ea5a5',
        'text-light': '#b0d4d4',
        success: '#06d6d6',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 4px 20px rgba(6, 214, 214, 0.1)',
        'cyan-glow-lg': '0 8px 30px rgba(6, 214, 214, 0.2)',
        'cyan-glow-xl': '0 12px 40px rgba(6, 214, 214, 0.3)',
      },
    },
  },
  plugins: [],
};
