/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dope: "url('/src/assets/dope.jpg')",
      },
      colors: {
        "booty-brown": "#964B00",
        "sad-blue": {
          100: "#2933E6",
          200: "#020DE0",
        },
      },
    },
  },
  plugins: [],
}
