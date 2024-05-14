import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: (process.env.SERVER === 'pre-production') ? `/${process.env.REPO}`: '/',
  build: {
    assets: 'assets'
  }
});