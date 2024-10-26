import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/supreme-car-detailing/", // Your repository name
  assetsInclude: ["**/*.mov", "**/*.MP4", "**/*.png", "**/*.PNG"],
});
