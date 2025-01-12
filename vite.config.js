import { defineConfig } from 'vite'
import VitePluginSitemap  from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: 'https://centro-estetico-xi.vercel.app' 
    })
  ],
})
