import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans), system-ui, sans-serif",
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      colors: {
        // Linear-inspired monochrome palette
        bg: "#08090A",           // primary background (deep near-black)
        surface: "#0F1011",      // raised surface
        "surface-2": "#16181A",  // secondary surface
        border: "#1F2023",       // subtle border
        "border-strong": "#2A2C30",
        ink: "#F7F8F8",          // primary text (off-white)
        "ink-muted": "#8A8F98",  // secondary text
        "ink-dim": "#62666D",    // tertiary text
        accent: "#FFFFFF",       // pure white accent (instead of terracotta)
        "accent-soft": "#D1D5DB",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
