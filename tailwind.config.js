/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#D32828",
        dark:"#E1E2DD"
      },
      fontFamily:{
        header: ['Marcellus'],
        body: ['Marcellus Sc']
      }
    },
  },
  plugins: [],
}

