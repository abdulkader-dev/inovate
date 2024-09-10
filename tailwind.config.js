/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1400px',
      },
      backgroundImage: {
        covers: "url('../cover.png')",
     
      },
      colors: {
        comon: '#43E7DF',
        second:"#2C2643",
        gray:"#645E76",
        blue:"#3639A4"
      },
      fontFamily: {
        chirvo: ['Chivo", sans-serif'],
       
      }
    },
  },
  plugins: [],
}