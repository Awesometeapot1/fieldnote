import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://awesometeapot1.github.io/fieldnote/ (a project
  // page, not a user/org root page), so asset URLs need this prefix.
  base: '/fieldnote/',
})
