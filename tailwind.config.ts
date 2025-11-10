import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2C74BB",
          "blue-50": "#E8F0F7",
          "blue-100": "#D1E1EF",
          "blue-200": "#A3C3DF",
          "blue-300": "#75A5CF",
          "blue-400": "#4787BF",
          "blue-500": "#2C74BB",
          "blue-600": "#235D96",
          "blue-700": "#1A4670",
          "blue-800": "#112E4B",
          "blue-900": "#081725",
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
