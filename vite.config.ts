import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // /api/* 요청을 백엔드 서버(http://localhost:8090/api/*)로 전달
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
