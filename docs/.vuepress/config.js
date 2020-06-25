// const path = require("path")
// const fs = require("fs")
// const htmlFolder = path.join(__dirname, "../html/")
// const html = fs.readdirSync(htmlFolder).filter((c) => c !== "README.md")
const moduleSidebar = require("./sidebars/module")
const versionSidebar = require("./sidebars/version")
const dependenceSidebar = require("./sidebars/dependence")
const semanticEnhancementSidebar = require("./sidebars/semantic-enhancement")
const buildToolSidebar = require("./sidebars/build-tool")
const converterSidebar = require("./sidebars/converter")
const ciCdSidebar = require("./sidebars/ci-cd")
const codeQualitySidebar = require("./sidebars/code-quality")

module.exports = {
  title: "工程开发",
  description: "前端工程开发",
  themeConfig: {
    nav: [
      {
        text: "模块化",
        items: [
          {
            text: "知识图谱",
            link: "/module/",
          },
          // {
          //   text: "教程/书籍",
          //   items: [{ text: "javascript高级程序设计", link: "/html-course1/" }],
          // },
        ],
      },
      {
        text: "版本管理",
        items: [
          {
            text: "知识图谱",
            link: "/version/",
          },
        ],
      },
      {
        text: "依赖管理",
        items: [
          {
            text: "知识图谱",
            link: "/dependence/",
          },
        ],
      },
      {
        text: "语言增强",
        items: [
          {
            text: "知识图谱",
            link: "/semantic-enhancement/",
          },
        ],
      },
      {
        text: "构建工具",
        items: [
          {
            text: "知识图谱",
            link: "/build-tool/",
          },
        ],
      },
      {
        text: "转换器",
        items: [
          {
            text: "知识图谱",
            link: "/converter/",
          },
        ],
      },
      {
        text: "CI/CD",
        items: [
          {
            text: "知识图谱",
            link: "/ci-cd/",
          },
        ],
      },
      {
        text: "代码质量",
        items: [
          {
            text: "知识图谱",
            link: "/code-quality/",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/module/": moduleSidebar,
      "/version/": versionSidebar,
      "/dependence/": dependenceSidebar,
      "/semantic-enhancement/": semanticEnhancementSidebar,
      "/build-tool/": buildToolSidebar,
      "/converter/": converterSidebar,
      "/ci-cd/": ciCdSidebar,
      "/code-quality/": codeQualitySidebar,
    },
  },
}
