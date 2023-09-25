import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "" /* / */,

    // "",
    {
      text: "随笔诗",
      icon: "",
      prefix: "Poem/",
      children: "structure",
    },
    {
      text: "安全",
      icon: "shield-heart",
      collapsible: true,
      prefix: "Safety/",
      children: "structure",
    },
    {
      text: "低代码",
      icon: "laptop-code",
      collapsible: true,
      prefix: "LowCode/",
      children: "structure",
    },
    {
      text: "工程化相关",
      icon: "code-compare",
      collapsible: true,
      prefix: "CLI/",
      children: "structure",
    },
    {
      text: "小程序",
      icon: "comments",
      collapsible: true,
      prefix: "MiniProgram/",
      children: "structure",
    },

    {
      text: "杂库",
      icon: "warehouse",
      prefix: "Other/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Docker",
      icon: "docker",
      collapsible: true,
      prefix: "Docker/",
      children: "structure",
    },
    {
      text: "Node",
      icon: "nodejs",
      prefix: "Node/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Vue",
      icon: "vuejs",
      prefix: "Vue/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Webpack",
      icon: "cube",
      prefix: "Webpack",
      collapsible: true,
      children: "structure",
    },

    // "intro",
    // "slides",
  ],
});
