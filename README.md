# Orbit · Astro Nano 个人主页

基于 **Astro Nano 开源主题**，使用 Astro 7、Tailwind CSS 4 和 TypeScript。仓库继续保留 `esa-react-portfolio` 名称；实现已迁移为 Astro 静态站点。

## 复用主题与框架

直接复用主题的页面布局、导航、文章/作品卡片、经历列表、明暗与系统主题切换、排版和页面过渡。Astro 内容集合负责 Markdown/MDX 读取与校验；文件路由生成详情页，官方集成生成 RSS 和 sitemap。

主题原始版本已适配 Astro 7 内容加载/render 接口与 Tailwind 4 Vite 插件。来源、固定版本及改动范围见 [UPSTREAM.md](./UPSTREAM.md)，保留原作者 MIT 版权声明。

## 本地运行

使用 Node.js **22.12+**。

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## ESA 部署

导入本仓库的 `main` 分支，根目录 `/`，Node.js 22。`esa.jsonc` 已配置安装 `npm ci`、构建 `npm run build`、输出 `dist`。纯静态站点，函数入口留空。

配置依据：[ESA Pages 构建与路由](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/build-pages)。远端 ESA 部署需在你的账号中验证，本地构建不代表已部署。

此站点有独立 HTML 页面，ESA `notFoundStrategy` 配置为 `404Page`，构建会生成 `404.html`。

设置 ESA 构建环境变量 `SITE_URL` 为自己的域名，用于 canonical、RSS 和 sitemap。默认 `https://example.com` 为占位值。本地可使用 `SITE_URL=https://your-domain.example npm run build` 指定域名。

## 替换为自己的内容

- `src/consts.ts`：姓名、邮箱、社交链接、列表条数。
- `src/pages/index.astro`：首页自我介绍，沿用上游主题布局。
- `src/content/blog/*.md`：文章。
- `src/content/projects/*.md`：作品，支持 demoURL / repoURL。
- `src/content/work/*.md`：经历。
- `src/content.config.ts`：官方 glob loader 与 Zod 内容校验。

当前人物、工作经历、作品和联系方式均为演示。新增内容文件即可生成页面，不用手写路由、作品弹窗或文章列表。

## 验证

`npm run build` 包含 Astro 类型检查和静态构建。发布前检查作品详情直接访问、刷新、主题切换、RSS、sitemap 和 404。

[Astro Nano](https://github.com/markhorn-dev/astro-nano) · [Astro 内容集合](https://docs.astro.build/en/guides/content-collections/)

MIT，包含上游版权声明。
