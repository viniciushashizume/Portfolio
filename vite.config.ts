import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // DEVE USAR O NOME DO REPOSITÓRIO DO GITHUB
  plugins: [react()],
})