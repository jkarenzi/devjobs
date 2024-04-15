/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom:{
          violet: "#5964E0",
          lightViolet: "#939bf4",
          darkBlue: "#19202d",
          midnight: "#121721",
          lightGrey:"#f4f6f8",
          gray:"#9daec2",
          darkGrey: "#6e8098"
        }
      }
    },
  },
  plugins: [],
}

