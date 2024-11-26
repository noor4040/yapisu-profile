/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
  theme: {
    extend: {
      colors: {
      primaryRed :'#852F31',
      primaryGrey:"#3D3B47"
      },
     
    },
  },
}