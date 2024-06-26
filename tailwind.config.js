/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1440px',
    },
    extend: {
      colors:{
        custom:{
          violet: "#5964E0",
          paleViolet:"rgba(89, 100, 224, 0.2)",
          lightViolet: "#939bf4",
          darkBlue: "#19202d",
          midnight: "#121721",
          lightGrey:"#f4f6f8",
          gray:"#9daec2",
          darkGrey: "#6e8098",
          darkdarkGrey: "#384B5C"
        }
      }
    },
  },
  plugins: [],
}

