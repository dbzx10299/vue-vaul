import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    libInjectCss(),
    dts({
      tsconfigPath: fileURLToPath(new URL('tsconfig.lib.json', import.meta.url))
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('lib/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
    }
  }
})
