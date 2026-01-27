/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dark-light/**/*.html", "./intro/**/*.html"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        primary: "var(--primary)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
