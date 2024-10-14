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
          "inset 2px 2px 6px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(0,0,0,0.5)",
      },
      keyframes: {
        bgColorCycle: {
          "0%": { backgroundColor: "rgb(252, 165, 165)" }, // bg-red-300
          "5.88%": { backgroundColor: "rgb(253, 186, 116)" }, // bg-orange-300
          "11.76%": { backgroundColor: "rgb(252, 211, 77)" }, // bg-amber-300
          "17.64%": { backgroundColor: "rgb(252, 255, 108)" }, // bg-yellow-300
          "23.52%": { backgroundColor: "rgb(190, 242, 100)" }, // bg-lime-300
          "29.4%": { backgroundColor: "rgb(134, 239, 172)" }, // bg-green-300
          "35.28%": { backgroundColor: "rgb(52, 211, 153)" }, // bg-emerald-300
          "41.16%": { backgroundColor: "rgb(94, 234, 212)" }, // bg-teal-300
          "47.04%": { backgroundColor: "rgb(103, 232, 249)" }, // bg-cyan-300
          "52.92%": { backgroundColor: "rgb(147, 197, 253)" }, // bg-sky-300
          "58.8%": { backgroundColor: "rgb(191, 219, 254)" }, // bg-blue-300
          "64.68%": { backgroundColor: "rgb(165, 180, 252)" }, // bg-indigo-300
          "70.56%": { backgroundColor: "rgb(196, 181, 253)" }, // bg-violet-300
          "76.44%": { backgroundColor: "rgb(216, 180, 254)" }, // bg-purple-300
          "82.32%": { backgroundColor: "rgb(244, 114, 182)" }, // bg-fuchsia-300
          "88.2%": { backgroundColor: "rgb(251, 207, 232)" }, // bg-pink-300
          "94.08%": { backgroundColor: "rgb(254, 202, 202)" }, // bg-rose-300
          "100%": { backgroundColor: "rgb(252, 165, 165)" }, // bg-red-300 (loop back)
        },
        snackbarOpening: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bgColorCycle: "bgColorCycle 10s linear infinite",
        snackbarOpening: "snackbarOpening 0.3s cubic-bezier(0.2, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
