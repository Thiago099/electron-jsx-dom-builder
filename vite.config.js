import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import  jsxDomBuilderVitePlugin  from "jsx-dom-builder/vite-plugin"
export default defineConfig({
  plugins:[jsxDomBuilderVitePlugin()],
  entry: "src/index.js",
  outDir: "app/public",
  staticFolder: "app/public",
  electron: true,
  hmr: true,
  base: '', 
  resolve: {
    alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
},
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
      },
    },
  },
});