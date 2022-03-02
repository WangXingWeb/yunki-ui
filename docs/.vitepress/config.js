const base = process.env.NODE_ENV === 'production' ? '/yunki-ui' : '';
const { resolve } = require('path');

module.exports = {
  title: 'yunki-ui',
  description: 'yunki-ui',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'yunki-ui'
    [`@castianta/yunki-ui`]: resolve('./src'),
  },
  base,
  themeConfig: {
    //logo: '../logo.png',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'yunki-ui',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Icon', link: '/components/icon/' },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'yunki-ui',
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Icon', link: '/components/icon/' },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'WangXingWeb/yunki-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
