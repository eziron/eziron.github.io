import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import icon from 'astro-icon';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';

// Use 'pre-built' on Vercel/production to avoid Playwright, 'inline-svg' locally
//const mermaidStrategy = isProduction  ? 'pre-built' : 'inline-svg';
const mermaidStrategy = 'inline-svg';

const repoName = 'eziron.github.io';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://eziron.github.io', 
  base: '/',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: 'inline-svg'
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
    icon(),
  ],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

});
