/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoSelecionado: '#56AF54',
        naoSelecionado: '#82C27C',
        fundoHeader: '#87BFDD',
        fundoSite: '#EDEEEF',
      },
      
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

