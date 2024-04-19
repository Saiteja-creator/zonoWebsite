import {nextui} from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      "dxs":"0.625rem",
      'xs': '.75rem',     // Extra small
      'sm': '.875rem',    // Small
      'base': '1rem',     // Base
      'lg': '1.125rem',   // Large
      'xl': '1.25rem',    // Extra large
      '2xl': '1.5rem',    // 2x large
      '3xl': '1.875rem',  // 3x large
      '4xl': '2.25rem',   // 4x large
      '5xl': '3rem',      // 5x large
      '6xl': '4rem',  
    },
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'serif'],
      'mono': ['Courier New', 'monospace'],
      'hoves': ['hoves', 'Arial', 'sans-serif'],
    },
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
