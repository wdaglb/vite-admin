import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import yaml from 'js-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
    {
      name: 'yaml-plugin',
      transform: async (code, id) => {
        if (id.endsWith('.yaml') || id.endsWith('.yml')) {
          const parsed = yaml.load(code)
          return `export default ${JSON.stringify(parsed)}`
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
