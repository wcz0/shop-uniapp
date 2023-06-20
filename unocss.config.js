import { transformerDirectives } from 'unocss'
import { defineConfig } from 'unocss'


import presetWeapp from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

import lineClamps from './src/utils/lineClamps/index.js'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

const primary = {
  DEFAULT: '#2b9939',
}

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
// taro
// const isApplet = process.env.TARO_ENV !== 'h5' ?? false
const presets = []
const transformers = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }))
  transformers.push(transformerApplet())
}
else {
  presets.push(presetApplet())
  // presets.push(presetAttributify())
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}


// const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-')

const weappConfig = presetWeapp({
  whRpx: false,
})

presets.push(presetWeapp({
  whRpx: false,
}))
transformers.push(transformerDirectives())
transformers.push(transformerClass())
// console.log(weappConfig)
export default defineConfig({
  // presets: [weappConfig],
  theme: {
    colors: {
      gray: weappConfig?.theme?.colors?.neutral,
      primary,
    },
  },
  rules: [...lineClamps],
  // transformers: [transformerDirectives(), transformerClass()],
  shortcuts: {
    'container-fixed':
      'w-full sm:w-screen-lg 2xl:w-screen-xl sm:mx-auto px-4 sm:px-0',
    'position-center':
      'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',
    'position-center-x': 'absolute left-1/2 transform -translate-x-1/2',
    'position-center-y': 'absolute top-1/2 transform -translate-y-1/2',
    'fix-inset-0': 'top-0 bottom-0 left-0 right-0',
  },
  presets: [
    // ...
    ...presets,
  ],
  transformers: [
    // ...
    ...transformers,
  ],
})
