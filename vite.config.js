const { resolve } = require('path')
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
