import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.mov'],  // Add this
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|PNG)$/.test(assetInfo.name)) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path,
          ws: true
        },
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response:', proxyRes.statusCode, req.url);
          });
        }
      }
      }
    },
  
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
