import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PortafolioProyecto/', 
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
