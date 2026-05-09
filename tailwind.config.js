/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#2563EB",

        secondary: "#0F172A",

        dark: "#000000",

        light: "#FFFFFF",

      },

      fontFamily: {

        sans: ["Poppins", "sans-serif"],

      },

      boxShadow: {

        glow: "0 0 25px rgba(37, 99, 235, 0.45)",

      },

      animation: {

        float: "float 5s ease-in-out infinite",

      },

      keyframes: {

        float: {

          "0%, 100%": {

            transform: "translateY(0px)",

          },

          "50%": {

            transform: "translateY(-10px)",

          },

        },

      },

    },

  },

  plugins: [],

}
