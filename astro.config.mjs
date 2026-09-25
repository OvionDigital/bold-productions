// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.weareboldproductions.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
});
