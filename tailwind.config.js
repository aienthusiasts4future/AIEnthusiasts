/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#081011',
        'primary-light': '#102123',
        'card-dark': '#14292B',
        'card-darker': '#13474D',
        'dark-footer': '#081011',
        accent: '#25E3F4',
        'accent-hover': '#20C0CF',
        'accent-secondary': '#18676F',
        'text-light': '#7B8081',
        'text-lighter': '#535A5B',
        success: '#25E3F4',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 4px 20px rgba(37, 227, 244, 0.2), 0 0 40px rgba(37, 227, 244, 0.1)',
        'cyan-glow-lg': '0 8px 30px rgba(37, 227, 244, 0.35), 0 0 60px rgba(37, 227, 244, 0.15)',
        'cyan-glow-xl': '0 12px 40px rgba(37, 227, 244, 0.5), 0 0 80px rgba(37, 227, 244, 0.2)',
        'cyan-glow-intense': '0 0 30px rgba(37, 227, 244, 0.6), 0 0 60px rgba(37, 227, 244, 0.4), 0 0 90px rgba(37, 227, 244, 0.2)',
      },
    },
  },
  plugins: [],
};
