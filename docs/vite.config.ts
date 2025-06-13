import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import postcssMediaMinMax from 'postcss-media-minmax'

// https://vite.dev/config/
export default defineConfig({
  ssr: {
    noExternal: ['geist-vaul']
  },
  plugins: [
    tailwindcss()
  ],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        postcssMediaMinMax
      ]
    },
  }
})