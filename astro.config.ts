// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  site: 'https://fromoopstoops.github.io',
  base: '',
  integrations: [icon()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
