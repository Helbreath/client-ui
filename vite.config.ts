import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Helbreath Xtreme',
        short_name: 'Helbreath Xtreme',
        description: 'Helbreath Xtreme',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo-lg.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
          {
            src: 'logo-sm.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            dead_code: false,
            drop_console: true,
            unused: false,
            defaults: false,
          },
          mangle: {
            eval: true,
            module: true,
            toplevel: true,
            properties: false,
            reserved: ['ReceiveMessage']
          },
          output: {
            comments: false,
            ecma: 2020,
          },
        }),
      ],
    },
  },
});
