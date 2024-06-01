import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), playformCompress()],
  base: process.env.SERVER === 'pre-production' ? `/${process.env.REPO}` : '/',
  build: {
    assets: 'assets'
  }
});