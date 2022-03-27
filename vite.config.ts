import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
// @ts-ignore
import vuetify from '@vuetify/vite-plugin'
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
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
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
