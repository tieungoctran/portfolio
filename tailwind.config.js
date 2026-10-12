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
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#9e7362',
          600: '#7c5849',
          700: '#5c4136',
          800: '#3d2b24',
          900: '#261a15',
        },
        editorial: {
          light: '#fbfbfb',
          dark: '#0c0d0e',
          surfaceDark: '#141618',
          cardDark: '#1a1d20',
          borderDark: '#262a2f',
          textDark: '#8b949e',
        }
      },
      fontFamily: {
        // Base body font: Inter
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        // Heading font: Be Vietnam Pro
        heading: ['"Be Vietnam Pro"', 'sans-serif'],
        // Quotes and editorial typography: Lora
        quote: ['Lora', 'Georgia', 'serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        subtitle: ['"Be Vietnam Pro"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
