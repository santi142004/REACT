/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{  
        colors:{
      fondoColor: '#3de9f2',
      background: '#1f242d'
    },
    backgroundImage:{
      fondo: "url(/public/images/fondo.png)"
    }
  }

  },
  plugins: [],
}