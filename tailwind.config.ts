import type { Config } from "tailwindcss";

export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    primary: '#557BE1',
    secondary: '#EB7A4F',
    tertiary: '#A971BE',
    sys_dark: '#2F2F2D',
    sys_light: '#EEEEEE',
    info: '#3C66B5',
    success: '#5BA56A',
    warning: '#F5B12E',
    error: '#F23C52',
  },
  extend: {
    letterSpacing: {
      'tightest': '-0.065em'
    },
    spacing: {
      '115': '27.9375rem',
      '128': '32rem',
      '144': '36rem',
      '150': '38.25rem',
    },
    borderRadius: {
      '4xl': '34px',
      '5xl': '54px'
    },
    boxShadow: {
      'backdrop': '0px 4px 4.5px 0px',
      'passthrough': '0px 4px 15.3px 0px',
    },
    animation: {
      activeTabSlide: 'activeTabSlide 0.2s ease-in-out forwards',
      'spin-medium': 'spin 0.5s linear 2',
    },
    keyframes: {
      activeTabSlide: {
        '0%': {
          padding: '0'
        },
        '100%': {
          padding: '0 2.5rem',
          borderBottom: '0.125rem solid',
          borderColor: 'bg-primary',
        }
      },
    }
  }
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: theme,
  plugins: [],
};

export default config;
