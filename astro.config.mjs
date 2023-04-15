import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-ssr-michaelfrieze.vercel.app',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: vercel(),
});
