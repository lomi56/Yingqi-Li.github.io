---
title: 在 GitHub Pages 上部署 Vite 应用
date: 2026-06-20
tags: vite, github-pages, 部署
excerpt: 从 base 配置到 Actions workflow，把 Vite 应用发布到 GitHub Pages 的完整流程。
---

## 两个关键点

### 1. `base` 配置

GitHub Pages 站点可能部署在根路径（用户页 `user.github.io`）或子路径（项目页 `user.github.io/repo`）。最稳妥的做法：

```js
// vite.config.js
export default defineConfig({
  base: './', // 相对路径，两种托管方式都可用
})
```

### 2. 自动化部署

用 GitHub Actions 在 `push` 时自动构建并部署：

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 几个踩坑点

- 仓库根没有 index.html 时，站点资源会 404 —— 确认构建产物在正确目录
- `public/` 下的资源若用绝对路径 `/icons.svg`，在子路径部署时会失效，应拼接 `import.meta.env.BASE_URL`
- 部署前记得在仓库 Settings → Pages → Source 选择 **GitHub Actions**
