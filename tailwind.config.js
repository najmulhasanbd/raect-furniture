/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary':'#E58411',
        'second':'#1E1E1E',
        'second-bg':'#F7F7F7',
      },
      fontFamily: {
        'primary':["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
