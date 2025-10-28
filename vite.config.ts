import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Always use ESM syntax here.
export default defineConfig({
  server: { host: true, port: 5173 },
  preview: { host: true, port: 3001 }
})

