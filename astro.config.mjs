import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jacksechler.me',
  integrations: [
    tailwind(),
    mdx(),
    react(),
    sitemap()
  ]
});