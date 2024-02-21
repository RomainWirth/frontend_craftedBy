import daisyui from 'daisyui'
// import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screen: {
          '2xl': '1600px'
        }
      },
      screens: {
        // iPad Pro vertical is 1024px exactly
        lg: '1025px'
      },
      height: {
        '80dvh': '80dvh'
      },
      colors: {},
      fontFamily: {}
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F24141',
          'primary-light': '#FEF2F2',
          'primary-dark': '#811B1B',
          secondary: '#F2B1A2',
          tertiary: '#8EB1CC',
          'tertiary-light': '#F4F8FA',
          dark: '12233F'
        }
      }
    ]
  },
  plugins: [daisyui]
}

export default config
