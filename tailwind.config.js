/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EAEBF2",
          100: "#BDC0D6",
          200: "#9DA2C2",
          300: "#7178A7",
          400: "#555D95",
          DEFAULT: "#2B357B",
          600: "#273070",
          700: "#1F2657",
          800: "#181D44",
          900: "#121634",
        },
        secondary: {
          50: "#F9EFF6",
          100: "#EECDE2",
          200: "#E5B4D5",
          300: "#D992C1",
          400: "#D27DB5",
          DEFAULT: "#C75DA3",
          600: "#B55594",
          700: "#8D4274",
          800: "#6D335A",
          900: "#542744",
        },
        accent: {
          50: "#ECFBF9",
          100: "#C5F4EB",
          200: "#A9EEE2",
          300: "#82E6D4",
          400: "#69E1CC",
          DEFAULT: "#44DABF",
          600: "#3EC6AE",
          700: "#309B88",
          800: "#257869",
          900: "#1D5C50",
        },
      },
      fontFamily: {
        light: "'IBMPlexSansArabic-Light'",
        DEFAULT: "'IBMPlexSansArabic'",
        medium: "'IBMPlexSansArabic-Medium'",
        semibold: "'IBMPlexSansArabic-SemiBold'",
        bold: "'IBMPlexSansArabic-Bold'",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero-vector.png')",
        us: "url('./assets/images/us-vector.png')",
        values: "url('./assets/images/values-bg.png')",
      },
      backgroundSize: {
        "hero-size": "100vw",
        "us-size": "600px",
        "monitor-size": "70px",
        "member-size": "70px",
      },
      dropShadow: {
        member: "0 0 8px #3EC6AE",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
