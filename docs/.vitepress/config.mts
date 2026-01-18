import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "Cheese 的博客",
  description: "不要温和地走进那个良夜",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客', link: '/blog/' },
      { text: '工具', link: '/tools/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JustLikeCheese' }
    ]
  }
}

export default defineConfig(withSidebar(vitePressOptions, {
  documentRootPath: '/docs',
  useTitleFromFrontmatter: true,
  removePrefixAfterOrdering: true,
  prefixSeparator: ".",
  sortFolderTo: 'top'
}));
