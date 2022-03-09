import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'
import svgLoader from 'vite-svg-loader'
// import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
const define =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        global: {},
        'process.env': {},
      }
export default defineConfig({
  define,

  build: {
    rollupOptions: {
      plugins: [
        process.env.analyze ? visualizer() : null,
      ],
    },
  },

  plugins: [
    ViteAliases(),
    vue(),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          'preset-default',
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            },
          },
          {
            name: 'removeDimensions',
          },
        ],
      },
      svgo: true,
    }),
    // eslintPlugin(),
  ],
})
