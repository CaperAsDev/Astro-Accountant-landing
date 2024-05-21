import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  base: process.env.SERVER === 'pre-production' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});