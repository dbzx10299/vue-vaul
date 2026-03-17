import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  ssr: {
    noExternal: ['geist-vaul']
  },
  plugins: [
    tailwindcss()
  ],
  css: {
    devSourcemap: true
  }
})