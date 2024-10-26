// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/main/", // Add this line - replace with your repository name
  assetsInclude: ["**/*.mov", "**/*.MP4", "**/*.png", "**/*.PNG"], // Include your assets
});
