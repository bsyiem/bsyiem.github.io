import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bsyiem.github.io',
  integrations: [tailwind()],
  output: 'static',
});
