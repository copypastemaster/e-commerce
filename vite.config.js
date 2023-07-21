import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 900_000,
      }
    }
  },
  base:'/e-commerce',
  plugins: [react()],
})
