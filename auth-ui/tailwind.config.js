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
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        modalLoadIn: {
          "0%": { transform: "translateX(-1500px) skewX(30deg) scaleX(1.3)" },
          "70%": { transform: "translateX(30px) skewX(0deg) scaleX(.9)" },
          "100%": { transform: "translateX(0px) skewX(0deg) scaleX(1)" },
        },
        modalLoadOut: {
          "0%": { transform: "translateX(0px) skewX(0deg) scaleX(1)" },
          "30%": { transform: "translateX(-30px) skewX(-5deg) scaleX(.9)" },
          "100%": { transform: "translateX(1500px) skewX(30deg) scaleX(1.3)" },
        },
        quickScaleDown: {
          "0%": { transform: "scale(1)", display: "block" },
          "100%": { transform: "scale(0)", display: "none" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        fadeOut:
          "fadeOut 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        modalLoadIn:
          "modalLoadIn 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        modalLoadOut:
          "modalLoadOut 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        quickScaleDown: "quickScaleDown 0s 0.5s linear forwards",
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
    function ({ addComponents }) {
      addComponents({
        // Removes default show/hide button from edge
        ".custom-password-input::-ms-reveal": {
          display: "none",
        },
      });
    },
  ],
};
