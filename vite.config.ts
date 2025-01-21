import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.woff2'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          main: ['@/components/mainContent/MainContentComponent.tsx'],
          modals: ['@/containers/globalModals/GlobalModalsContainer.tsx'],
          asideMenu: ['@/containers/aside/menuList/MenuListContainer.tsx'],
        },
      },
    },
  },
})
