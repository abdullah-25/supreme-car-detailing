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
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import viteCompression from "vite-plugin-compression";
// import { createHtmlPlugin } from "vite-plugin-html";
// import viteImagemin from "vite-plugin-imagemin";
// import { fileURLToPath } from "url";
// import { dirname, resolve } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default defineConfig({
//   plugins: [
//     react(),
//     viteCompression(),
//     createHtmlPlugin({
//       minify: true,
//       inject: {
//         data: {
//           injectScript: `<script>/* Critical JS */</script>`,
//           injectStyle: `<style>/* Critical CSS */</style>`,
//         },
//       },
//     }),
//     viteImagemin({
//       gifsicle: {
//         optimizationLevel: 7,
//         interlaced: false,
//       },
//       optipng: {
//         optimizationLevel: 7,
//       },
//       mozjpeg: {
//         quality: 80,
//       },
//       pngquant: {
//         quality: [0.8, 0.9],
//         speed: 4,
//       },
//       svgo: {
//         plugins: [
//           {
//             name: "removeViewBox",
//           },
//           {
//             name: "removeEmptyAttrs",
//             active: false,
//           },
//         ],
//       },
//       webp: {
//         quality: 80,
//       },
//     }),
//   ],

//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//     sourcemap: true, // Add this for better debugging
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ["react", "react-dom"],
//         },
//         format: "es", // Add this to ensure proper module format
//         // Remove minify and terserOptions from here
//       },
//     },
//   },

//   optimizeDeps: {
//     include: ["react", "react-dom"], // Add this for better dependency handling
//   },

//   assetsInclude: [
//     "**/*.PNG",
//     "**/*.png",
//     "**/*.mov",
//     "**/*.jpg",
//     "**/*.jpeg",
//     "**/*.gif",
//     "**/*.svg",
//   ],

//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     },
//     extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // Add this for better file resolution
//   },

//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3001",
//         changeOrigin: true,
//         secure: false,
//         ws: true,
//         configure: (proxy, _options) => {
//           proxy.on("error", (err, _req, _res) => {
//             console.log("proxy error", err);
//           });
//           proxy.on("proxyReq", (proxyReq, req, _res) => {
//             console.log("Sending Request to the Target:", req.method, req.url);
//           });
//           proxy.on("proxyRes", (proxyRes, req, _res) => {
//             console.log(
//               "Received Response from the Target:",
//               proxyRes.statusCode,
//               req.url
//             );
//           });
//         },
//       },
//     },
//   },

//   // Change this to properly handle environment variables
//   define: {
//     "process.env": process.env,
//   },
// });
