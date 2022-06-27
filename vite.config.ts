import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import path, { resolve } from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// console.log('process.env: ' + JSON.stringify(process.env));

// https://vitejs.dev/config/
export default defineConfig({
  root: 'interface/',
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './interface/src/locales/**')
    })
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './interface/src'),
      'sophon-sdk': resolve(__dirname, './src/index.ts'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "/src/styles/variable.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    minify: true
  }
})
