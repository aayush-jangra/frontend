/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "rgba(0, 0, 0, 0.85)",
        "text-secondary": "rgba(0, 0, 0, 0.65)",
        "text-tertiary": "rgba(0, 0, 0, 0.5)",
        "text-subtitle": "rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "box-focus": "0px 16px 50px",
        container:
          "inset 4px 4px 12px rgba(0,0,0,0.5), inset -4px -4px 12px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
