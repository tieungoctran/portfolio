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
        // Coral scale anchored on the CV palette (resume/shared.css):
        // 500 = coral for large type, rules, icons; 600 = coral for small text (AA);
        // 300 = coral tint used as the accent on dark grounds.
        brand: {
          50: '#fdf3f0',
          100: '#fbe4de',
          200: '#f6c9bd',
          300: '#f0b4a8',
          400: '#e88a76',
          500: '#d34e36',
          600: '#b33d27',
          700: '#922f1d',
          800: '#6e2416',
          900: '#4a180f',
          950: '#2c0e08',
        },
        ink: '#121212',
        paper: {
          DEFAULT: '#fdfbf7',
          beige: '#f5f3ed',
          line: '#e7e2d9',
          text: '#3a3a3a',
          muted: '#6b6b6b',
        },
        // CMYK control-strip inks, used only for the print motif
        process: {
          cyan: '#3fa7cf',
          magenta: '#c8467f',
          yellow: '#e8c547',
        },
        editorial: {
          light: '#fdfbf7',
          dark: '#121110',
          surfaceDark: '#1a1817',
          cardDark: '#211f1d',
          borderDark: '#33302d',
          textDark: '#a8a29b',
        }
      },
      fontFamily: {
        // Body: Montserrat
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        // Headings: Be Vietnam Pro
        heading: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        // Legacy alias: pages that still use font-serif for headings render in Be Vietnam Pro
        serif: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        // Quotes: Montserrat Italic (pair with the italic utility)
        quote: ['Montserrat', 'system-ui', 'sans-serif'],
        subtitle: ['"Be Vietnam Pro"', 'Montserrat', 'sans-serif'],
        // Handwriting: Birthstone, short notes only
        hand: ['Birthstone', 'cursive'],
      },
    },
  },
  plugins: [],
}
