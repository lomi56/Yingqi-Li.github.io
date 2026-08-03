import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 相对路径：部署到 GitHub Pages 根目录或子路径均可工作
  base: './',
})
