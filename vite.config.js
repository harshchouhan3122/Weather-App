import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

export default {
  server: {
    port: process.env.PORT || 5173,  // Use the PORT environment variable or fallback to 5173
    host: true                       // Expose the server to external connections
  }
};
