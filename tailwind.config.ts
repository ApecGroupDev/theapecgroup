import type { Config } from "tailwindcss";

export default {
  mode: 'jit', // Enables Just-In-Time mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        '13xl': '16rem',
        '14xl': '18rem',
        '15xl': '20rem',
        '16xl': '22rem',
        '17xl': '24rem',
        '18xl': '26rem',
      },
      fontFamily: {
        sans: ['Metropolis', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '352': '88rem', 
        '384': '96rem', 
        '416': '104rem',
        '448': '112rem',
        '480': '120rem',
        '512': '128rem',
        '544': '136rem',
        '576': '144rem',
        '608': '152rem',
        '640': '160rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'scrn-640': '640px',
        'scrn-800': { 'min': '800px', 'max': '870px' },
        'scrn-900': { 'min': '900px', 'max': '970px' },
        'scrn-1500': { 'min': '1500px', 'max': '1699px' },
        'scrn-1700': { 'min': '1700px', 'max': '1899px' },
        'scrn-1900': '1900px',
        'scrn-2k': '2560px',
      }
    },
  },
  plugins: [],
} satisfies Config;
