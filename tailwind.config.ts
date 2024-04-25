import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        screen: '100dvh',
        'screen-small': '100svh',
        'screen-large': '100lvh',
      },
      colors: {
        gray: {
          100: '#f3f3f3',
          200: '#e9e9e9',
          300: '#dddddd',
          400: '#bbbbbb',
          500: '#a6a6a6',
          600: '#888888',
          700: '#717171',
          800: '#444444',
          900: '#222222',
          950: '#171717',
        },
        purple: {
          100: '#ebe9ff',
          200: '#cfcbff',
          300: '#a8a0ff',
          400: '#8177f5',
          500: '#6b60e9',
          600: '#5844d1',
          700: '#46389b',
          800: '#3c3775',
        },
        pink: {
          100: '#ffe8f1',
          200: '#ffd5e5',
          300: '#ffc5dc',
          400: '#ffb2d0',
          500: '#f594ba',
          600: '#ed76a5',
          700: '#d44b81',
          800: '#af3863',
        },
      },
    },
  },
  plugins: [],
}
export default config
