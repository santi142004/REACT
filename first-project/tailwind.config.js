/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{  
        colors:{
      background: '#1f242d'
    },
    backgroundImage:{
      fondo: "url(/public/images/fondo.png)"
    }
  }

  },
  plugins: [],
}