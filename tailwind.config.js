/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-black': 'linear-gradient(to right bottom, #444348 0%, #3A393D 9%, #2F2F31 37%, #1A1A1A 93%)', 
        'frontend_mentor_lite': 'url("./assets/Desktop/frontend_mentor_lite.svg)"',
        'frontend_mentor': 'url("./assets/Desktop/frontend_mentor.svg")'
      },      
      colors: {
        'black_' : '#1A1A1A', 
        'light_white': '#FCFBFC', 
        'Paragraph': '#777777', 
        'gray_' : '#3F4352', 
        'icon_color': '#898989', 
        'green_': '#375B41', 
      },
      fontFamily: {
        "Roboto": '"Roboto", serif' ,
        "Josefin_Sans" : '"Josefin Sans", serif'
      },

    },
  },
  plugins: [],
}

