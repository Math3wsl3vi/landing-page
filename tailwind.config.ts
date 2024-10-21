import type { Config } from "tailwindcss";
import Colors from "./constants/Colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:Colors.primary,
        meow:Colors.meow
      },
    },
  },
  plugins: [],
};
export default config;
