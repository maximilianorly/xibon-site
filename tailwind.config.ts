import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#557BE1',
      'secondary': '#EB7A4F',
      'tertiary': '#A971BE',
      'sys-dark': '#2F2F2D',
      'sys-light': '#EEEEEE',
      'info': '#3c66b5',
      'success': '#5BA56A',
      'warning': '#F5B12E',
      'error': '#F23C52',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        activeTabSlide: 'activeTabSlide 0.2s ease-in-out forwards'
      },
      keyframes: {
        activeTabSlide: {
          '0%': {
            padding: '0'
          },
          '100%': {
            padding: '0 2.6563rem;'
          }
        }
      }
    }
  },
  plugins: [],
};
export default config;
