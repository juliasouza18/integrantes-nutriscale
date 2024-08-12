/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoSelecionado: '#216487',
        naoSelecionado: '#FFF',
        fundoHeader: '#87BFDD',
        fundoSite: '#EDEEEF',
        sobre: '#216487',

      },

      font:{
         
      }
      
      },
      letterSpacing: {
         ultraWidest: '0.25em',
      },
      borderRadius: {
        custom: '2.188rem',
      },
      margin: {
        custom: '45rem',
      },
    },
  }
  plugins: []