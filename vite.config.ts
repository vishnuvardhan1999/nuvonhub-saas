import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Always use ESM syntax here.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, strictPort: false },
  preview: { port: 3001, strictPort: false }
})
