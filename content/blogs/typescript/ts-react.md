---
path: '/ts-react'
title: 'React + TypeScript 环境搭建'
date: '2019-06-30'
modifyDate: "2019-06-30"
---

**根据**[**官方示例**](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)**搭建**

<h3 id="Init">Init</h3>

```bash
cd Desktop

mkdir ts-demo

cd ts-demo

npm init -y

# 安装依赖
npm install --save-dev webpack webpack-cli           						# 打包编译
npm install --save-dev react react-dom							 						# React 依赖
npm install --save-dev @types/react @type/react-dom	 						# 声明文件
npm install --save-dev typescript ts-loader source-map-loader		# 开发编译 或者 awesome-typescript-loader
npm install -D webpack-dev-server																# 开发服务
npm install -D html-webpack-plugin															# 引入html
```
<ant-divider></ant-divider>
<h3 id="Files">Files</h3>

**src/index.tsx**

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
);

```
**src/components/Hello.tsx**
```typescript
import * as React from 'react';

interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => (
	<h1>The page use {props.compiler} and framework is {props.frameword}</h1>
)
```
**src/template/index.html**
```html
<!Doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>TypeScript + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./dist/main.js"></script>
  </body>
</html>
```
**webpack.config.js**
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
  
  devtool: 'source-map',
  
  output: {
  	path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js'
  },
  
  resolve: {
  	extensions: ['.ts', '.tsx', '.js'],
  },
  
  module: {
  	rules: [{
    	test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
      	loader: 'ts-loader
      }]
    }, {
    	enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }],
  },
  
  plugins: [
  	new HtmlWebpackPlugin({
    	template: './template/index.html'
    })
  ],
  
  externals: {
  	react: 'React',
    'react-dom': 'ReactDOM',
  }
}
```
**tsconfig.json**
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "noImplicitAny": false,
    "module": "commonjs",
    "target": "es6",
    "lib": [
      "es2015",
      "es2017",
      "dom"
    ],
    "removeComments": true,
    "allowSyntheticDefaultImports": false,
    "jsx": "react",
    "allowJs": true,
    "baseUrl": "./src",
    "paths": {
      "components/*": [
        "src/components/*"
      ],
    }
  }
}
```
**package.json**
```json
"script": {
	"start": "webpack-dev-server --mode development --open --hot",
  "bulid": "webpack --mode production"
}
```

<ant-divider></ant-divider>
<h3 id="Start">Start</h3>

然后就可以启动了 npm start <br />事实上在第一次按照官网的流程走下来, 是报错了的, 在开发环境下加入 webpack-dev-server 是OK的, 但是在 build 时, 报错, 未能找到解决的方法, 暂时放弃, 不过目前来说是可以进行简单的开发了 **TODO(待续)**, 也可[参考](https://medium.com/@atingenkay/webpack-4-react-with-typescript-996eb78ff348)
