import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Cap",
    url: "",
  },

  pageInfo: ["Author", "Date", "Original", "Category", "Tag", "ReadingTime", "PageView" ],

  iconAssets: "fontawesome-with-brands",

  logo: "/me.png",

  repo: "Capchen/SunflowerSecret",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // footer: "默认页脚",

  displayFooter: false,

  blog: {
    description: "响应式前端开发",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/Capchen",
      zhihu: "https://www.zhihu.com/people/captain-40-68"
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  plugins: {
    blog: true,
    git: false,
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://sunflower-comment-1dhzejvo8-capchens-projects.vercel.app",
      pageview: true,
      comment: true,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
