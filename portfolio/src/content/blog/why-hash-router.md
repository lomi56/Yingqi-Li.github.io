---
title: 为什么我用 HashRouter 而不是 BrowserRouter
date: 2026-05-30
tags: react-router, 前端, 路由
excerpt: 在静态托管平台（GitHub Pages、Netlify）上，HashRouter 是更省心的选择。
---

## 问题：刷新就 404

静态托管只认识物理文件。用 `BrowserRouter` 访问 `/blog/hello`，刷新时服务器去找 `blog/hello` 这个路径——它不存在，于是 404。

解决方式要么配置服务端 rewrite，要么换路由模式。

## HashRouter 的原理

`BrowserRouter` 用 `history.pushState` 改变 URL 路径；`HashRouter` 只改变 `#` 后面的部分：

```
https://user.github.io/#/blog/hello
```

`#` 之后的内容**不会发送给服务器**，所以任何深链刷新都命中 `index.html`，不会 404。

## 代价

URL 带 `#` 不够好看，对 SEO 不友好。但对个人网站、对体验优先于 SEO 的场景，这完全值得。

## 什么时候换回 BrowserRouter

- 你有能力配置服务端 rewrite（自建服务器 / 平台支持）
- 需要更好的 SEO

否则，静态托管 + `HashRouter` 是最省心的组合。
