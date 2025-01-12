import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4200
  },
  preview: {
    host: "0.0.0.0",
    port: 4200
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: 'src/main.tsx'
      },
    },
  }
})
