// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eric-pearson-sailing/', // CHANGE THIS TO YOUR REPO NAME
  build: {
    outDir: 'dist'
  }
})