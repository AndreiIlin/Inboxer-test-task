import { defineConfig } from 'vite';
import { resolve } from 'path';
import rollupConfig from './rollup.config.js';

export default defineConfig({
  base: './',
  build: {
    emptyOutDir: true,
    assetsDir: 'assets',
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: rollupConfig,
  },
});
