---
title: 把精力留给内容，让框架完成其余工作
description: 使用 Astro 内容集合维护自己的数字空间。
date: 2026-09-28
---

## 内容即代码

一篇文章就是一个 Markdown 文件。标题、描述和日期写在 frontmatter 中，正文专注于表达。

```yaml
title: 我的第一篇文章
description: 记录一个值得分享的想法
date: 2026-09-28
```

## 自动生成的能力

Astro 负责静态页面生成，主题负责文章索引、作品列表、明暗模式和页面过渡。RSS 与 sitemap 由官方集成生成。

## 部署到 ESA

执行 `npm ci` 和 `npm run build`，将 `dist` 作为静态资源目录。设置 `SITE_URL` 为实际域名，让 RSS、sitemap 和 canonical 链接指向你的网站。
