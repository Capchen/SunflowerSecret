import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "安全",
        icon: "",
        prefix: "Safety/",
        children: [
          { text: "XSS", icon: "", link: "XSS" },
          { text: "CSRF", icon: "", link: "CSRF" },
        ],
      },
      {
        text: "Node",
        icon: "",
        prefix: "node/",
        children: [
          {
            text: "EventLoop",
            icon: "",
            link: "Event Loop",
          },
          '如何在node中更好的使用集群'
        ],
      },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
    ],
  },
  {
    text: "随笔",
    icon: "disease",
    prefix: "/",
    children: [
      {
        text: "诗",
        icon: "",
        prefix: "Poem/",
        children: [
          {
            text: "月",
            icon: "",
            link: "月",
          },
        ],
      },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
    ],
  },
]);
