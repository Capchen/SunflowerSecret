import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Cap的秘密花园",
  description: "Cap的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
