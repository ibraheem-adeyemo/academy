import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a7a3c",
        accent: "#f47c20",
        "dark-text": "#0f2d1a",
        muted: "#6b7280",
        "light-green": "#e8f5ee",
        "light-orange": "#fff3e8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
