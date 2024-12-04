import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',         // Explicit output directory
    chunkSizeWarningLimit: 1000,  // Avoid warnings for larger chunks
    cssCodeSplit: true,      // Split CSS for better performance
  },
  server: {
    timeout: 120000,  // Increase server timeout (2 mins)
  }
});
