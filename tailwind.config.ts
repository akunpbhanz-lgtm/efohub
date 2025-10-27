import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#1E90FF",
          soft: "rgba(30, 144, 255, 0.35)",
        },
        neon: "#58FCEC",
        slate: {
          950: "#05070D",
          900: "#0D111A",
          800: "#131A29",
        },
      },
      backgroundImage: {
        "hero-grid": "url('/images/hero-grid.svg')",
        "radial-glow": "radial-gradient(circle at top, rgba(30, 144, 255, 0.15), transparent 60%)",
        "noise": "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 preserveAspectRatio=%22none%22 viewBox=%220 0 400 400%22%3E%3Cfilter id=%22n%22 x=%22-20%%22 y=%22-20%%22 width=%22140%%22 height=%22140%%22%3E%3CfeTurbulence baseFrequency=%220.8%22 /%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.08%22 /%3E%3C/svg%3E')",
      },
      boxShadow: {
        glow: "0 0 45px rgba(30, 144, 255, 0.25)",
        "inner-card": "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
