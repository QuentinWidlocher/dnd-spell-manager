import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'card-bg.jpg'],
      manifest: {
        name: 'D&D Spell Manager',
        short_name: 'Spell Manager',
        description: 'Manage your spells',
        lang: 'en-US',
        start_url: '/',
        display: 'standalone',
        theme_color: '#3B82F6',
        icons: [
          {
            src: 'icon.png',
            sizes: '152x152',
          },
        ],
      },
    }),
  ],
})
