/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#852F31",
        primaryGrey: "#3D3B47",
      },
      screens: {
        "2xl": "2560px",
      },
      container: {
        center: true,
        padding: "0",
      },
    },
  },
  plugins: [require("daisyui")],
};
