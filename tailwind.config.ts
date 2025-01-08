import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // MacBook Pro 14.2" - minimum width of 1512px and maximum of 1727px
        'macbook-pro-14': { 'min': '1500px', 'max': '1600px' },
        // MacBook Pro 16.2" - minimum width of 1728px and maximum of 2047px
        'macbook-pro-16': { 'min': '1720px', 'max': '1800px' },
        '2xl': '1536px',
        '2k': '2560px', // Default 2xl (adjust as needed)
      }
    },
  },
  plugins: [],
} satisfies Config;
