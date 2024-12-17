import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TRUE } from 'sass'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'../faddomBackend/public',
    emptyOutDir: TRUE
  }
})
