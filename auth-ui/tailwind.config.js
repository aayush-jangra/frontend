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
        "text-tertiary": "#6B6C70",
      },
      fontSize: {
        heading: ["28px", "34px"],
      },
      borderWidth: {
        sm: "1.5px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient-bg": {
          backgroundImage: "linear-gradient(to bottom right, #969696, #343434)",
          borderRadius: "8px",
          padding: "2px",
          backgroundClip: "border-box",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
