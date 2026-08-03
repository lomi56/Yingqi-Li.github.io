# Portfolio · 个人主页

软件工程专业学生的个人介绍网站，包含 **简历 / 项目 / 科研 / 技术博客** 四个板块，深色终端风格。

基于 React 19 + Vite 8，部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev       # 开发服务器 http://localhost:5173
npm run build     # 构建到 dist/
npm run preview   # 预览生产构建
npm run lint      # oxlint 检查
```

## 修改自己的内容

所有个人信息集中在 `src/data/`，**不用碰组件代码**：

| 文件 | 内容 |
|---|---|
| `src/data/site.js` | 名字、GitHub / 邮箱 / 社交链接、顶部导航 |
| `src/data/profile.js` | hero 终端内容、首页简介 |
| `src/data/resume.js` | 教育经历、技能分组、证书 / 奖项 |
| `src/data/projects.js` | 项目卡片与详情 |
| `src/data/research.js` | 论文 / 科研条目 |

写博客：在 `src/content/blog/` 下新建 `.md` 文件，顶部用 frontmatter 声明标题与日期：

```md
---
title: 文章标题
date: 2026-08-01
tags: React, 前端
excerpt: 列表页显示的摘要。
---

正文 markdown ...
```

## 部署到 GitHub Pages

仓库根目录有 `.github/workflows/deploy.yml`，push 到 `main` 分支会自动构建并部署。

首次需要一次性配置：仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

站点地址为 `https://<username>.github.io/`。

## 技术栈

- **路由**：react-router-dom（HashRouter，适配 GitHub Pages）
- **Markdown**：react-markdown + remark-gfm + rehype-highlight（代码高亮）
- **样式**：CSS Modules + 全局设计变量（`src/styles/tokens.css`）
- **字体**：JetBrains Mono Variable（本地自托管）
