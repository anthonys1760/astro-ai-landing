// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Ensure Tailwind CSS is properly bundled
    applyBaseStyles: true,
  })],
  site: 'https://anthonys1760.github.io',
  base: '/astro-ai-landing',
  output: 'static',
  build: {
    assets: '_astro',
    assetsPrefix: '/astro-ai-landing'
  },
  vite: {
    build: {
      cssCodeSplit: false, // Generate a single CSS file
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
        },
      },
    },
  }
});