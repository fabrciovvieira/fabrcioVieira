import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@vercel/speed-insights/react', 'framer-motion']
    }
  }
}

