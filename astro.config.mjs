import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://excellentiaconsultingbpo.com',
  integrations: [tailwind(), icon(), playformCompress(), sitemap()],
  base: process.env.SERVER === 'pre-production' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});