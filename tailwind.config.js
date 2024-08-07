/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        upDownSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        reflectFade: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.10" },
        },
        rotation: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flashyZoom: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        dropdown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "up-down": "upDown 5s ease-in-out infinite",
        "up-down-slow": "upDownSlow 8s ease-in-out infinite",
        "up-down-slower": "upDownSlow 9s ease-in-out infinite",
        "reflect-fade": "reflectFade 3s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-out",
        fadeInOpacity: "fadeInOpacity 5s ease-out",
        rotation: "rotation 100s linear infinite",
        "flashy-zoom": "flashyZoom 3s ease-in-out",
        dropdown: "dropdown 2s ease-out forwards",
      },
      fontFamily: {
        custom: ["zeldaFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
