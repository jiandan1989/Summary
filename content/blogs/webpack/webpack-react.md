---
path: '/webpack-react'
title: 'Webpack + React'
date: '2019-07-04'
modifyDate: '2019-07-04'
---
<!-- https://www.valentinog.com/blog/webpack/ -->
<!-- https://www.valentinog.com/blog/babel/#How_to_set_up_React_webpack_and_Babel_setting_up_webpack -->

<a name="初始化"></a>

### 初始化

```bash
# 初始化
npm init -y

# 安装 webpack
npm install -D webpack webpack-cli webpack-dev-server

# 安装 babel
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react

# 创建文件
mkdir src && cd src touch index.js
touch webpack.config.js
```
<ant-divider></ant-divider>

<a name="babel"></a>

### babel

> 在根目录下创建 .babelrc, babel: preset-env 解析 ES6 为 ES5, preset-react: 解析 jsx 文件

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

**添加 webpack.config.js**

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```
<ant-divider></ant-divider>

<a name="React"></a>

### React

```bash
npm install -D react react-dom
```

**HTML Plugin**

```bash
npm install html-webpack-plugin html-loader --save-dev
```

**添加 HTML 模板**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**再次修改 webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: './index.html',
    }),
  ],
};
```
<ant-divider></ant-divider>

<a name="package.json"></a>

### package.json

_在 webpackv4 中 webpack 自带两种模式 development: 开发模式, production: 生产模式, 设置 mode 之后将会设置 process.env.NODE_ENV 的 DefinePlugin_

```json
"script": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production",
}
```

**启动服务**

```bash
npm i --save-dev webpack-dev-server
```

**_修改 package.json_**

```json
"scripts": {
  "start": "webpack-dev-server --mode development --open"
}
```

**_其他配置_**

```javascript
const path = require('path');
module.exports = {
  // ...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: 'Google Chrome',
    hot: true,
    noInfo: true,
    overlay: false,
    // proxy: {},
    // publicPath: '',
    // public: '',
    // useLocalIp: true,
    liveReload: true,
    after(app, server) {
      // 启动之后
    },
  },
};
```

**当以上配置完毕后, 可以开始编写 React 代码了**

<ant-divider></ant-divider>

<a name="Component"></a>

### Component

**src/index.js**

```jsx
import React from 'react';
import { render } from 'react-dom';
function App() {
  return <div>React</div>;
}
render(<App />, document.getElementById('root'));
```

**_启动 打开 localhost:9000_**

```bash
npm run dev
```

_**试着修改 index.js**_

```javascript
function App() {
  return <div>Hello React!</div>;
}
```

> 到此之后, 无需刷新页面即可可以看到最新的页面中显示 Hello React

**打包 build**

```bash
npm run build
```

> 可以在目录下新生成一个 dist 文件夹, 打开之后会有新生成的 index.html 以及打包后的 main.js

<ant-divider></ant-divider>

<a name="CSS"></a>

### CSS

**_ todo 提取公共文件, 压缩文件_**

> 在以前, 提取文件是 extract-text-webpack-plugin 的事, 但现在与 webpack V4 不是很匹配,所以此处使用 mini-css-extract-plugin 替代

```bash
npm i css-loader min-css-extract-plugin --save-dev
```

> _添加 css 文件_

```css
// src/index.css
body {
  margin: 0;
  background: red;
  color: #fff;
  font-weight: 900;
}
```

```javascript
// index.js
import './index.css';
```

```javascript
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            hmr: process.env.NODE_ENV === 'development',
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    // ...
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
```

<ant-divider></ant-divider>

<a name="TODO"></a>

### TODO

- TS
- Eslint
- Prettier
- Git Hook
- 提取公共代码
- 动态加载
- 可视化查看依赖图
- 添加 less, css-module
- 打包压缩
- 拆分环境 webpack.config.js

