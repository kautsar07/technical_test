/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      brand: {
        bg1: "#1c0c01",
        bg2: "#603322",
        bg3: "#FCE5B8",
        bg4: "#FAFAFA",
      }
    }},
  },
  plugins: [],
}
