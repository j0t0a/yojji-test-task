import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const mode = process.env.NODE_ENV;
const isProd = mode === 'production';

export default defineConfig({
  mode,
  plugins: [react()],
});