/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
    maroon: "#7B1E1E",
    beige: "#F5EFE6",
    softwhite: "#FAFAFA",
    charcoal: "#2E2E2E",
  },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
