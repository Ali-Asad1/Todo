/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1220px",
    },
    extend: {},
  },
  plugins: [require("windy-radix-palette")],
};
