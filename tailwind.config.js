/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey-light': 'rgba(0, 0, 0, 0.05)',
        'grey-dark': 'rgba(0, 0, 0, 0.5)',
        'green-light': '#0EB898',
        'green-dark': '#001910'
      },
      backgroundImage: {
        'gradient-green': "url('/assets/images/gradient.png')",
        'gradient-black': 'linear-gradient(166.47deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'
      },
      maxWidth: {
        'screen': '1560px'
      },
      container: {
        screens: {
          '2xl': '1560px',
        },
        padding: '2rem'
      },
      translate: {
        'fullGap': 'calc(100% + 2rem)',
        'halfGap': 'calc(55% + 2rem)'
      }
    },
  },
  plugins: [],
}
