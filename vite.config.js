import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const mode = process.env.NODE_ENV;
const isProd = mode === 'production';

export default defineConfig({
  mode,
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: isProd,
    emptyOutDir: isProd,
  },
  plugins: [react()],
});