// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// GitHub Pages friendly config:
// - output: 'static'
// - base: set via ASTRO_BASE (e.g. '/odins-vault/') for project pages, or '' for custom domains / user pages.
const base = process.env.ASTRO_BASE ?? '';

export default defineConfig({
  output: 'static',
  base,
  integrations: [icon()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
