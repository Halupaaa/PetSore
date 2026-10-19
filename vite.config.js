import { defineConfig } from "vite";
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true
  },
  plugins: [
    ViteEjsPlugin()
  ]
});

