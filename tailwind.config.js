/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:'hsl(26, 100%, 55%)',
        orangePale:'hsl(25, 100%, 94%)',
        blue10:' hsl(220, 13%, 13%)',
        blue5:'hsl(219, 9%, 45%)',
        blueGray:'hsl(220, 14%, 75%)',
        blueGray5:'hsl(223, 64%, 98%)',
        black10:' hsl(0, 0%, 0%)',
        
      },
      fontSize:{
        Pfontsize:'16px'
      },
      fontFamily:{
        pFontfamily: 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}

