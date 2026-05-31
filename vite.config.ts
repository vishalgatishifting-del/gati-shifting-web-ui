import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),

    //  Bundle analyzer
    visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
    }),

    //  Image compression
    viteImagemin({
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9] },
      webp: { quality: 75 },
    }),
  ],

  build: {
    minify: "esbuild",   //  Fast minification ON
    sourcemap: false,    //  Production mein off
    target: "es2020",
    //  Code splitting - bada bundle todega
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // aur libraries yahan add karo
        },
      },
    },

    //  Bade chunks warn karega
    chunkSizeWarningLimit: 500,
  },
});