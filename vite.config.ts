import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'
import svgLoader from 'vite-svg-loader'
// import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
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
  build: {
    rollupOptions: {
      plugins: [process.env.analyze ? visualizer() : null],
    },
  },
})
