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
  plugins: [daisyui]
}

export default config
