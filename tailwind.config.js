/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      colors: {
        'Navbar_Color': '#e5e5e5',
        'Dark': '#191919',
        'input-bg':'#333',
        'button-signin':'#e50914',
        'form-switch':'#737373',
      },
      backgroundImage: {
        'gradient-180-black': 'linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
        'background-banner': "linear-gradient(#0000007e,#0000007e), url('src/assets/background_banner.jpg')"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }
      })
    }
  ],
}