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
    },
  },
  plugins: [],
};
