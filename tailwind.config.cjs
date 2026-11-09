module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        ink: { DEFAULT: "#0A1628", 2: "#14273B", 3: "#1E3A5F" },
        pura: { sky: "#4FC3F7", DEFAULT: "#0788CC", deep: "#2D5FB0", sun: "#F8CC08" },
      },
    },
  },
  plugins: [],
};
