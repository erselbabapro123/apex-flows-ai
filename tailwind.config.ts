import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        ink: {
          950: "#07080A",
          900: "#0B0D10",
          850: "#0F1216",
          800: "#16191F",
          700: "#1E222A",
          600: "#2A2F38",
          500: "#3A404B",
        },
        mist: { 100: "#F5F7FA", 200: "#E3E7ED", 300: "#C4CAD4", 400: "#A9B0BC", 500: "#8A93A3" },
        accent: { DEFAULT: "#3B7CFF", soft: "#6D9DFF", deep: "#2563EB" },
        signal: { DEFAULT: "#FF6A1F", soft: "#FF8F57" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.045em" },
      borderRadius: { "4xl": "2rem" },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,124,255,.35), 0 20px 80px -20px rgba(59,124,255,.55)",
        card: "0 1px 0 0 rgba(255,255,255,.04) inset, 0 30px 60px -30px rgba(0,0,0,.8)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        dash: { to: { strokeDashoffset: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
