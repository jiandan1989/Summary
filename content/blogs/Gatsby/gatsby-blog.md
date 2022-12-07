---
path: '/gatsby-stpe-one'
title: 'Gatsby搭建个人博客'
date: '2019-06-30'
modifyDate: "2019-07-14"
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

> 手动添加 webpack 自定义配置

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

### Progress
<a name="Progress"></a>

*[添加滚动条显示](https://github.com/dmetivier/gatsby-plugin-page-progress)*

```js
import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

import useScrollPercent from '@/hooks/useScrollPercent';

const ProgressWrapper = styled(Progress)`
  &.ant-progress {
    position: fixed;
    top: 0;
    left: 0;
    line-height: 1;
    font-size: 0;
  }

  .ant-progress-bg {
    height: 5px !important;
  }
`;

export default function ProgressView() {
  const { percent } = useScrollPercent();
  return percent ? (
    <ProgressWrapper
      percent={percent}
      showInfo={false}
      strokeColor={{
        '0%': '#108ee9',
        '50': 'purple',
        '100%': '#87d068',
      }}
    />
  ) : null;
}
```
***useScrollPercent.js***
```js
/**
 * @name: useScrollPercent
 * @desc: 自定义获取滚动占比
 */

import { useEffect, useState } from 'react';

function getScrollHeight() {
  // https://javascript.info/size-and-scroll-window#width-height-of-the-document
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
}

function getIndicatorPercentageWidth(currentPos, totalScroll) {
  return (currentPos / totalScroll) * 100;
}

export default function useScrollPercent() {
  const [percent, setPercent] = useState(0);

  function scrollHandler() {
    const { innerHeight } = window;
    const currentPos = window.scrollY;
    const scrollHeight = getScrollHeight();
    const scrollDistance = scrollHeight - innerHeight;
    setPercent(getIndicatorPercentageWidth(currentPos, scrollDistance));
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return { percent };
}
```
**更多参考使用 [react-use](https://github.com/streamich/react-use)**

<ant-divider></ant-divider>

### Logs
<a name="Logs"></a>

**07-14: 添加滚动条**

<ant-divider></ant-divider>

<h3 id="TODO">TODO</h3>

<h3 id="plugin">常用插件</h3>

<!-- https://commercetools-docs-kit.vercel.app/documentation/ -->
- [本地搜索 gatsby-plugin-local-search](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/): 配置搜索目录

------------


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
- 读取源文件在 markdown 中使用

![图片](https://source.unsplash.com/random/800x300)

<!-- write-music -->

