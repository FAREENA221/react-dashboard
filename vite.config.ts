import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the built HTML references assets with relative paths.
  // This works both for local preview and GitHub Pages project sites.
  base: './',
})
