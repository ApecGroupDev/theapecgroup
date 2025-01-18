import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolis', 'Arial', 'sans-serif'], // Add Metropolis to the sans family
      },
      spacing: {
        '128': '32rem',  // Adds a value for mt-128 (512px)
        '144': '36rem',  // Adds a value for mt-144 (576px)
        '160': '40rem',  // Adds a value for mt-160 (640px)
        // Add any other values you need
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '300px',
        'sm': '540px',
        'w-800': { 'min': '800px', 'max': '870px' },
        'w-900': { 'min': '900px', 'max': '970px' },
        'mac-14': { 'min': '1500px', 'max': '1600px' },
        'mac-16': { 'min': '1720px', 'max': '1800px' },
        '2xl': '1536px',
        '2k': '2560px',
      }
    },
  },
  plugins: [],
} satisfies Config;
