import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/SunflowerSecret/",

  lang: "zh-CN",
  title: "Cap",
  description: "Cap的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
