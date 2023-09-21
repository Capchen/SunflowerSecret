import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "" /* / */,

    // "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "安全",
      icon: "safe-flash-fill",
      collapsible: true,
      prefix: "Safety/",
      children: "structure",
    },
    {
      text: "低代码",
      icon: "code-fill",
      collapsible: true,
      prefix: "LowCode/",
      children: "structure",
    },
    {
      text: "工程化相关",
      icon: "folder-type-cli",
      collapsible: true,
      prefix: "CLI/",
      children: "structure",
    },
    {
      text: "小程序",
      icon: "brand-miniprogram",
      collapsible: true,
      prefix: "MiniProgram/",
      children: "structure",
    },

    {
      text: "杂库",
      icon: "other-admission-rounded",
      prefix: "Other/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Docker",
      icon: "docker-solid",
      collapsible: true,
      prefix: "Docker/",
      children: "structure",
    },
    {
      text: "Node",
      icon: "node-js",
      prefix: "Node/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Vue",
      icon: "logo-vue",
      prefix: "Vue/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Webpack",
      icon: "webpack",
      prefix: "Webpack",
      collapsible: true,
      children: "structure",
    },

    // "intro",
    // "slides",
  ],
});
