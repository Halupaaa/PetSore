import { resolve } from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  base: "./",
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "catalog.html"),
        details: resolve(__dirname, "product-details.html"),
        cart: resolve(__dirname, "cart.html")
      }
    }
  },
  plugins: [
    ViteEjsPlugin()
  ]
});
