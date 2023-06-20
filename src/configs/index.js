// const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'
const isH5 = process.env.UNI_PLATFORM === 'h5'

// export const title = process.env.VITE_APP_TITLE

export const company = {
  name: 'shop-uview',
  wechat: 'shop-uview',
  mail: 'shop-uview@qq.com',
  address: '海南省',
}

// 项目基础路径
export const appBasePath = isProduction ? './' : './'
// 请求地址
export const requestURL = process.env.VITE_APP_URL || 'http://v4.crmeb.net/'
// export const requestURL = 'http://huishencloud.cn:9101/'

// 是否开启代理
export const useProxy = isH5
// 代理路径
export const proxyPath = process.env.VITE_PROXY_PATH || '/api'
// 是否开启加密
export const useEncrypt = false

// CDN 资源基础域名
export const assetURL = 'https://cdn.com'

export default {
  // title,
  appBasePath,
  requestURL,
  useProxy,
  proxyPath,
  useEncrypt,
}
