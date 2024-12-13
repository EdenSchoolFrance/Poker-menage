/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["unbounded", "sans-serif"],
      body: ["inter", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
}

