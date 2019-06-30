---
path: '/gatsby-stpe-one'
title: 'Gatsby搭建个人博客'
date: '2019-06-30'
modifyDate: "2019-06-30"
---

<h3 id="命令">命令</h3>

```bash
# 全局安装
npm install -g gatsby-cli

# 创建站点
gatsby new site-project && cd site-project

# 启动
npm run start

# 部署
npm run deploy

# 生产
gatsby build

# 查看打包后的版本
gatsby serve

```
<ant-divider></ant-divider>

<h3 id="TODO">TODO</h3>

- √ 如何使用插件 ?
- 如何使用 GraphQL ?
- √ 如何配置自定义 webpack ?
- 配置站点
- 区分于其他搭建静态个人博客方式 ?
- √ 如何使用 css in js 如( styled-components, sass, less) 等?
- 如何使用 谷歌分析(gatsby-plugin-google-analytics) 或 其他方分析 ?
- [using-remark](https://using-remark.gatsbyjs.org/)
- 更新日期
- 查询博客
- 自动排序
- 复制代码
- 回退操作

<ant-divider></ant-divider>
### Node

<a name="Node"></a>

在 gatsby-node.js 中添加, 解决使用 fs 模块

```js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
  })
}
```

<ant-divider></ant-divider>

### Component
<a name="Component"></a>

##### 安装插件 [gatsby-remark-component](https://www.gatsbyjs.org/packages/gatsby-remark-component/?=component#gatsby-remark-component-build-status-npm-version)

<ant-divider></ant-divider>

### webpack
<a name="webpack"></a>

- 手动添加 webpack 自定义配置

```js
// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
```

- 使用插件自动添加 webpack 配置

> 此处单 ☞ 添加 alias, 其他自行搜索, 若 gatsby 提供插件, 可使用, 无插件提供可采用手动添加方式

[gatsby-plugin-alias-imports](https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/?=webpack#gatsby-plugin-alias-imports)

```js
const path = require('path');
plugins: [
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
]
```
<ant-divider></ant-divider>

### Typescript
<a name="Typescript"></a>

[ts-loader](https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader)

<ant-divider></ant-divider>

![图片](https://source.unsplash.com/random/800x300)

<!-- write-music -->
