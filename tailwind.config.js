/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1220px",
    },

    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [require("windy-radix-palette")],
};
