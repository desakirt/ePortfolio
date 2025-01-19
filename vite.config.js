import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/ePortfolio/',  // Correct the base path if needed
  plugins: [react()],
});
