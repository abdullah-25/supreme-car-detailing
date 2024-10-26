import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const videos = [
  "/videos/video1.mov",
  "/videos/video2.mov",
  "/videos/video3.mov",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.PNG",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          videos: videos.map((v) => v.video),
        },
      },
    },
  },
});
