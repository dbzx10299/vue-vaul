import { defineConfig } from 'vitepress'
import { geistTheme } from './geist-theme.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Vaul",
  description: "A drawer component for Vue",
  markdown: {
    theme: geistTheme
  },
  cleanUrls: true,
  appearance: 'force-dark',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/dbzx10299/vue-vaul/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav: [
      { text: 'API', link: '/api' },
      { text: 'Docs', link: '/getting-started' }
    ],
    sidebar: [
      {
        text: 'Basics',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'API', link: '/api' }
        ]
      },
      {
        text: 'Drawer',
        items: [
          { text: 'Examples', link: '/examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dbzx10299/vue-vaul' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/vue-vaul' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Geist'
    }
  },
})
