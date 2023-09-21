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
        icon: "pen-to-square",
        prefix: "safety/",
        children: [
          { text: "XSS", icon: "pen-to-square", link: "XSS" },
          { text: "CSRF", icon: "pen-to-square", link: "CSRF" },
        ],
      },
      {
        text: "Node",
        icon: "pen-to-square",
        prefix: "node/",
        children: [
          {
            text: "EventLoop",
            icon: "pen-to-square",
            link: "Event Loop",
          },
          '如何在node中更好的使用集群'
        ],
      },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
    ],
  },
]);
