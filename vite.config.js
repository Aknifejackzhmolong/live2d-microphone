import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    global: {}
  },
  resolve: {
    alias: {
      "@": path.join(__dirname,"src")
    }
  },
  build: {
    minify:false,
    outDir:"docs"
  }
})
