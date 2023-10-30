/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "mile-black": "#0A0A0A",
        "mile-yellow": "#F8E71D",
        tertiary: "#367367",
        error: "#DA2C38",
        "mile-sec": {
          50: "#FEFDE8",
          100: "#FDF8B9",
          200: "#FCF497",
          300: "#FAEF68",
          400: "#F9EC4A",
          500: "#F8E71D",
          600: "#E2D21A",
          700: "#B0A415",
          800: "#887F10",
          900: "#68610C",
        },
        "mile-prime": {
          50: "#E7E7E7",
          100: "#B3B3B3",
          200: "#8E8E8E",
          300: "#5B5B5B",
          400: "#3B3B3B",
          500: "#0A0A0A",
          600: "#090909",
          700: "#070707",
          800: "#060606",
          900: "#040404",
        },
      },
      fontFamily: {
        instrumenalsans: ["Instrument Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
