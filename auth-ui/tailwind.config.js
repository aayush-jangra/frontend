/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        canvas: "#131319",
        "text-primary": "#C5C7CA",
        "text-secondary": "#7F8084",
        post: "#27292D",
        "content-bg": "#191920",
        content: "#7F8084",
        cta: "#4A96FF",
        "border-primary": "#35373B",
      },
      fontSize: {
        heading: ["28px", "34px"],
      },
    },
  },
  plugins: [],
};
