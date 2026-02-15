import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}", // 🔥 DOUBLE STAR FIX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
