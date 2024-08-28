
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        primary: "#0064fa",
        "primary-hover": "#0052cc",
      },
      backgroundImage: {
        // gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
        authImg: "url('/src/images/authImage.jpg')",
        aboutImg: "url('/src/images/modern.jpg')",
      },
      colors: {
        gray1: "#f7f6fe",
        primary: "#0064fa",
        "primary-hover": "#0052cc",
        secondary: "#eef0f3",
        dark: "#1d2023",
        gray2: "#1b2429",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        bodydark: "#f1f5f9",
        graydark: "#333A48",
        "meta-4": "#313D4A",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        stroke: "#E2E8F0",
        current: "currentColor",
        strokedark: "#2E3A47",
        "meta-3": "#10B981",
        lightblack: "#1C2434",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
        "gray-2": "#F7F9FC",
        whiter: "#F5F7FD",
        notify: "rgb(47, 150, 180)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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