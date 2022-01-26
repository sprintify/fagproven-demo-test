export const data = {
  "key": "v-79fdd481",
  "path": "/home.html",
  "title": "I am home.",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/hero.png",
    "heroText": "Hero Title",
    "tagline": "Hero subtitle",
    "actionText": "Get Started →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "home.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
