import { definePages } from '@uni-helper/vite-plugin-uni-pages'
import { title } from './src/configs/index'

export default definePages({
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@/uni_modules/uni-$1.vue',
    },
  },
  pages: [
    {
      path: 'pages/index/index',
      shortcut: '/index',
      style: {
        // navigationBarTitleText: '项目简介',
        navigationStyle: 'custom',
        enablePullDownRefresh: true,
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTextStyle: 'blue',
        backgroundColorTop: 'F7F7F7',
        backgroundColorBottom: 'F7F7F7',
        onReachBottomDistance: 50,
        'app-plus': {
          titleNView: false,
          pullToRefresh: {
            support: true,
            style: 'circle',
            color: '#2B8AFF',
          },
          scrollIndicator: 'none',
        },
      },
    },
    {
      path: 'pages/public/login',
      shortcut: '/login',
      style: {
        navigationBarTitleText: '',
        navigationBarTextStyle: 'black',
        navigationBarBackgroundColor: '#ffffff',
      },
    },
    {
      path: 'pages/user/index',
      shortcut: '/tab-1',
      // middleware: ['permission'],
      style: {
        navigationBarTitleText: '我的',
        navigationStyle: 'custom',
      },
    },
    {
      path: 'pages/category/index',
      shortcut: '/category',
      style: {
        navigationBarTitleText: '分类',
        navigationStyle: 'custom',
      },
    },
  ],
  // 分包配置
  subPackages: [
    {
      root: 'pages/public',
      pages: [
        {
          path: 'login',
          style: {
            navigationBarTitleText: '登录',
          },
        },
        {
          path: 'login-type',
          style: {
            navigationBarTitleText: '登录',
          },
        },
        {
          path: 'register',
          style: {
            navigationBarTitleText: '注册',
          },
        },
      ],
    },
    {
      root: 'pages/setting',
      pages: [
        {
          path: 'index',
          style: {
            navigationBarTitleText: '设置',
          },
        },
      ],
    },
    {
      root: 'pages/product',
      pages: [
        {
          path: 'list',
          style: {
            navigationBarTitleText: '商品列表',
          },
        },
        {
          path: 'detail',
          style: {
            navigationBarTitleText: '详情',
          },
        },
      ],
    },
  ],
  // 预加载
  preloadRule: {
    // @ts-ignore
    'pages/connect/index': {
      network: 'all',
      packages: ['__APP__'],
    },
  },
  tabBar: {
    color: '#999',
    selectedColor: '#2B8AFF',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        iconPath: 'static/images/tabbar/tab-index.svg',
        selectedIconPath: 'static/images/tabbar/tab-index-active.svg',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/images/tabbar/tab-category.svg',
        selectedIconPath: 'static/images/tabbar/tab-category-active.svg',
        pagePath: 'pages/category/index',
        text: '分类',
      },
      {
        iconPath: 'static/images/tabbar/tab-message.svg',
        selectedIconPath: 'static/images/tabbar/tab-message-active.svg',
        pagePath: 'pages/message/index',
        text: '消息',
      },
      {
        iconPath: 'static/images/tabbar/tab-cart.svg',
        selectedIconPath: 'static/images/tabbar/tab-cart-active.svg',
        pagePath: 'pages/cart/index',
        text: '购物车',
      },
      {
        iconPath: 'static/images/tabbar/tab-my.svg',
        selectedIconPath: 'static/images/tabbar/tab-my-active.svg',
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
  globalStyle: {
    navigationBarTextStyle: 'white',
    navigationBarTitleText: title,
    navigationBarBackgroundColor: '#2B8AFF',
    backgroundColor: '#F9F9F9',
  },
  // condition: {
  //   current: 0,
  //   list: [
  //     {
  //       name: 'pages/home/tab-0/index',
  //       path: 'pages/home/tab-0/index',
  //       query: '',
  //     },
  //     {
  //       name: 'pages/statement/index',
  //       path: 'pages/statement/index',
  //       query: '',
  //     },
  //     {
  //       name: 'pages/login/phone/index',
  //       path: 'pages/login/phone/index',
  //       query: '',
  //     },
  //   ],
  // },
})
