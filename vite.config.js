import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL,
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      less: {
       
      },
    },
  },
});
