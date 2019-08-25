---
path: '/node/reptile'
date: '2019-08-25'
title: 'Nodejs 搭建简单爬虫'
modifyDate: '2019-08-25'
---

## 文档

#### [cheerio.io](https://cheerio.js.org/)

#### [request](https://github.com/request/request)

#### [superagent](https://github.com/visionmedia/superagent)

#### [Typescript](https://www.typescriptlang.org/docs/home.html)

#### [fsPromises writefile](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fspromises_writefile_file_data_options)

#### [ts-node](https://github.com/TypeStrong/ts-node)

#### [nodemon.io](https://nodemon.io/)

#### [babel-node](https://babeljs.io/docs/en/babel-node)

<br />

## 搭建

```bash
mkdir node-reptile & cd node-reptile
npm init -y

# 使用 request
npm i chalk cheerio request --save-dev


# 使用 superagent
npm i chalk cheerio superagent --save-dev
```

## 运行

**index.js**

```js
const cheerio = require('cheerio');
const superagent = require('superagent');
const { promises } = require('fs');
const path = require('path');
const url = require('url');
const chalk = require('chalk');

const { writeFile } = promises;

// 写入本地
export async function writeFileByData(data, writePath, chartsetType = 'utf-8') {
  const writed = await writeFile(path.resolve(__dirname, writePath), data, chartsetType);
  // 此处需要修改
  if (writed) {
    chalk.green(`写入成功!\n写入路径${path.resolve(__dirname, writePath)}`);
  } else {
    chalk.red('写入失败>>>>>>>>>>>>>');
  }
  return writed;
}

// 获取html 文本
function getHtml(htmlUrl) {
  return new Promise((resolve, reject) => {
    superagent
      .get(htmlUrl)
      .set('Content-Type', 'application/json')
      .end((err: any, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data.text); // 加载成功后返回的 data.text 是html内容
      });
  });
}

// 加载解析 html
async function loadHtml(url) {
  const htmlString: any = await getHtml(url);
  return cheerio.load(htmlString);
}

// 解析 html
async function parseHtml(loadUrl: string) {
  const $ = await loadHtml(loadUrl);
  /**
   * 此处省略逻辑处理代码, 根据不同的页面解析规则不同
   */

  await writeFileByData(JSON.stringify(list), 'data.json');
}
```

### 结合 TS

是不是使用 require 写的不爽 ?

**结合 TS 以及 import (ES6)等监听 node 运行自动执行**

```bash
# 使用 babel
npm install babel-cli babel-preset-env babel-loader babel-core --save-dev
nodemon index.js --exec babel-node --presets babel-preset-env

# 使用 ts-node
yarn add ts-node --dev
yarn add typescript
yarn add @types/node
yarn add @types/superagent --dev
yarn add @types/cheerio --dev

# 生成 tsconfig.json
node ./node_modules/.bin/tsc --init
```

**tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "checkJs": true,
    "resolveJsonModule": true /** 加载json文件 */,
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

**添加 index.d.ts**

```ts
declare module 'superagent';
declare module 'cheerio';

declare module '*.html' {
  const value: any;
  export default value;
}

declare module '*.json';
```

## 修改

**以上修改完成后可以对原有文件做修改, 如: index.ts**

```ts
import path from 'path';
import cheerio from 'cheerio';
// 此处省略, 依次修改
```

## 参考

**[Nodejs 爬虫，使用 cheerio+request+phantomjs 实现超简单爬虫](https://tomoya92.github.io/2018/09/20/nodejs-crawling/)**

**[使用 Typescript 开发 node.js 项目——简单的环境配置](https://segmentfault.com/a/1190000007574276)**

**[TypeScript 同 NodeJS](https://rexdainiel.gitbooks.io/typescript/content/docs/quick/nodejs.html)**

## FAQ

**[Cannot find module error on importing html file](https://stackoverflow.com/questions/46224971/cannot-find-module-error-on-importing-html-file-in-webpack)**
