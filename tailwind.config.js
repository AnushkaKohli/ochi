/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neuemontreal: ["Neue Montreal Regular", "sans-serif"],
        foundersgrotesk: ["FoundersGrotesk-Semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
