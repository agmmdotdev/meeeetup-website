import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(tailwindConfig)],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "next/link": path.resolve(__dirname, "./ladle-mocks/next-link.tsx"),
      "next/image": path.resolve(__dirname, "./ladle-mocks/next-image.tsx"),
      "next/navigation": path.resolve(
        __dirname,
        "./ladle-mocks/next-navigation.tsx"
      ),
    },
  },
});
