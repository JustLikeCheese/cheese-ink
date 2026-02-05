import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid(withSidebar({
  title: "Cheese 的博客",
  description: "不要温和地走进那个良夜",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客', link: '/博客/服务器/1. 公网服务器运维小记.md' },
      { text: '笔记', link: '/笔记/NexIDE/1. NexIDE Plugin.md' },
      { text: '工具', link: '/工具/1. 神秘魔法.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JustLikeCheese' }
    ]
  },

  markdown: {
    math: true
  },

  vite: {
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },

  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-TFPVZW0Q09'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TFPVZW0Q09');`
    ]
  ]
}, {
  collapsed: true,
  collapseDepth: 2,
  documentRootPath: '/docs',
  useFolderTitleFromIndexFile: true,
  useTitleFromFrontmatter: true,
  removePrefixAfterOrdering: true,
  prefixSeparator: ".",
  sortFolderTo: 'top',
  excludeByGlobPattern: ["其他/**"]
})));
