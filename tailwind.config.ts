import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      safelist: [
        "from-slate-600",
        "to-slate-700",
        "from-blue-700",
        "to-blue-800",
        "from-cyan-600",
        "to-blue-700",
        "from-blue-500",
        "via-blue-600",
        "to-indigo-700",
        "from-violet-600",
        "to-purple-800",
        "from-amber-400",
        "via-orange-500",
        "to-rose-600",
      ],
      colors: {
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          glow: "#3b82f6",
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(59,130,246,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
