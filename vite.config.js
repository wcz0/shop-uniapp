import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import Uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import useUniManifest from '@uni-helper/vite-plugin-uni-manifest'
import useUniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import useUnocss from 'unocss/vite'
import useEslint from 'vite-plugin-eslint'
import {
  useProxy,
  proxyPath,
  proxyURL,
  appBasePath,
} from './src/configs/devServer.js'
// https://vitejs.dev/config/
const env = loadEnv('', process.cwd(), '')

export default defineConfig({
  plugins: [
    useUnocss(),
    UniPages({
      onAfterScanPages(ctx) {
        // console.log('onAfterScanPages.ctx', ctx)
        // TODO 禁用合并自动扫描到的pages
        ctx.pagesPathInfo = []
        return ctx
      },
    }),
    useUniManifest(),
    useUniMiddleware(),
    Uni(),
    useEslint(),
  ],
  server: {
    host: true,
    port: env.VITE_PORT,
    proxy: {
      ...(useProxy && proxyURL
        ? {
          /** 解决本地测试跨域问题 */
          [`${proxyPath}`]: {
            target: proxyURL,
            changeOrigin: true,
            rewrite: (path) => path.replace(new RegExp(`^${proxyPath}`), ''),
          },
        }
        : {}),
      // 解决开发环境上传图片无法直接显示的问题
      '/data/img': {
        target: proxyURL,
      },
      '/temp': {
        target: proxyURL,
      },
    },
  },
  build: {
    assetsDir: 'static',
    outDir: path.join('dist', appBasePath),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  // define: {
  //   'process.env': {},
  // },
})
