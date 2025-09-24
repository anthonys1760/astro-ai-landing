// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Ensure Tailwind CSS is properly bundled
      applyBaseStyles: true,
    }),
    sitemap(),
  ],
  site: 'https://astro-ai.net',
  output: 'static',
  build: {
    assets: '_astro'
  }
});