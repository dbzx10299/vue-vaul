import { defineConfig } from 'vitepress'
import { geistTheme } from './geist-theme.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Vaul",
  description: "A drawer component for Vue",
  markdown: {
    theme: geistTheme
  },
  themeConfig: {
    // logo: '/site-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dbzx10299/vue-vaul' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Geist'
    }
  },
})
