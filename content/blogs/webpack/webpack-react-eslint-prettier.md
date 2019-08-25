---
path: '/webpack-react-eslint-prettier'
title: 'Eslint + Prettier + Git Hook'
date: '2019-07-04'
modifyDate: '2019-07-04'
---

**基础环境查看<a href="/blogs/webpack/webpack-react">上一篇</a>**


<a name="EditorConfig"></a>

### EditorConfig

**_配置编辑风格_**

```bash
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

[*.md]
trim_trailing_whitespace = false

[*.js]
trim_trailing_whitespace = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true
max_line_length = 100
```

<ant-divider></ant-divider>

<!-- https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213 -->
<!-- https://blog.gojekengineering.com/eslint-prettier-for-a-consistent-react-codebase-eaa673debb1d -->
<!-- [how-to-integrate-eslint-prettier-in-react](https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4) -->

<a name="Eslint"></a>

### Eslint

_以下方法按照[these-tools-will-help-you-write-clean-code](https://medium.com/free-code-camp/these-tools-will-help-you-write-clean-code-da4b5401f68e)安装, 但并未成功_

<code-panel>

```bash
npm install --save-dev eslint eslint-plugin-airbnb babel-eslint eslint-plugin-babel
eslint-plugin-prettier eslint-plugin-react eslint-plugin-jest-enzyme eslint-plugin-jest
eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier
```

</code-panel>

**创建.eslintrc.js**

<code-panel>

```js
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mined-operators': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,

    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'no-console': 'error',
    'no-alert': 'error',

    'no-param-reassion': 'off',
    radix: 'off',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'prettier/prettier': ['error'],
  },
};
```

</code-panel>

_另一种就是直接利用 eslint 自动生成, 可全局安装 eslint_

```bash
# 全局安装
npm install -g eslint
eslint --init

# 1. 出现选项选择 popular style guide
# 2. 根据自己喜欢选择 依赖哪种配置(Google, Airbnb, Standard)
# 3. 是否需要配置 react (Y)
# 4. 选择生成文件类型(js, yaml, json)

# 项目内安装
npm install --save-dev eslint
./node_modules/.bin/eslint --init

# 根据提示一路 enter 下去自动生成
# 生成文件后, 可在 rules 中添加自定义配置

```

<ant-divider></ant-divider>

<a name="Prettier"></a>

### Prettier

```bash
# 安装
npm install --save-dev prettier
```

**创建 prettier.config.js**

```js
// prettier.config.js
module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBrackedSameLine: false,
  tabWidth: 2,
  semi: true,
};
```

<ant-divider></ant-divider>

<a name="Git Hook"></a>

### Git Hook



<!--

- eslint

```json
  "precommit": "NODE_ENV=production lint-staged",
```

```bash
# airbnb
npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# prettier 格式化
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# husky 提交代码之前运行
npm i -D husky lint-staged pretty-quick

```

> - husky: 提交代码之前运行
> - lint-staged: Will run custom script on the filtered files by the extensions like .js or .jsx
> - pretty-quick: Will prettify your code.

### 添加 antd

> [官方文档](https://ant.design/index-cn)

- 按需加载
  - [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- 加载 css, less
  ```bash
  npm install --save -dev less style-loader css-loader less-loader
  ```
- 加载 字体

```bash
  npm install --save --dev file-loader
``` -->
