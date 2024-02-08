import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
  },
  plugins: [react()],
  test: {
    includeSource: ['src/**/*.utils.{js,ts}'],
  },
});
