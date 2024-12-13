/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "lucky-point": "#241C71",
      "puerto-ricko": "#3CBBB7",
      silver: "#BBB",
      supernova: "#fece09",
      white: "#FFF"
    },
    fontFamily: {
      body: ["Inter Variable", "sans-serif"],
      heading: ["Unbounded Variable", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
}

