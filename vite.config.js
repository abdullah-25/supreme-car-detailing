import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import viteImagemin from "vite-plugin-imagemin";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectScript: `<script>/* Critical JS */</script>`,
          injectStyle: `<style>/* Critical CSS */</style>`,
        },
      },
    }),

    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: {
        quality: 80,
      },
    }),
  ],

  build: {
    outDir: "dist",
    assetsDir: "assets",

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Split other large dependencies
        },
      },
      chunkSizeWarningLimit: 500,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  assetsInclude: ["**/*.PNG", "**/*.png", "**/*.mov"], // Add this line
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("proxy error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Sending Request to the Target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "Received Response from the Target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
      },
    },
  },
  define: {
    "process.env": {},
  },
});
