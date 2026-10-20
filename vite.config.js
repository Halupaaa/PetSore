import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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