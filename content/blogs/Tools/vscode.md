---
path: '/tools/vscode'
title: 'vscode配置'
date: '2019-07-14'
modifyDate: '2019-07-14'
---

<a name="Uninstall"></a>

### Uninstall

*首先要保存setting.json配置文件, 卸载后将需要重新配置*

**第一步**

```bash
sudo rm -rf $HOME/Library/Application\ Support/Code
// if you're using insider*
sudo rm -rf $HOME/Library/Application\ Support/Code\ -\ Insiders/
```

**第二步**

```bash
sudo rm -rf $HOME/.vscode
// if you're using insider*
sudo rm -rf $HOME/.vscode-insiders/
```

**第三步**

从application里面删除vscode程序

**第四步**
清空垃圾桶，因为垃圾桶中vscode还是能够打开的
以上，vscode就完全从mac上删除了，如果有需要可以再次下载，重新安装他。


<ant-divider></ant-divider>

<a name="Plugins"></a>

### Plugins

[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): 自动闭合标签

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): 对标签统一重命名

[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): 注释自带颜色

[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): 大括号匹配颜色

<!-- [Snazzy Operator]() -->

[Chinese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans): 中文语言包设置

[EditorConfig fro VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): 编辑风格设置

[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Eslint 校验

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): 代码格式化配置

**Node**

[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script):

[node modules resolve](https://marketplace.visualstudio.com/items?itemName=naumovs.node-modules-resolve): 快速导入 node 包

[Node.js Modules Intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)

[npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

**Vue 开发**

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

**Git**

[Git]()

[Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)

[Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

[GitLens Git superCharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): 对 git 管理增强

[Git History Diff](https://marketplace.visualstudio.com/items?itemName=huizhou.githd)

**代码运行**

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): 为静态页面启动具有实时加载预览功能的本地开发服务

[Live Server Preview](https://marketplace.visualstudio.com/items?itemName=negokaz.live-server-preview): 本地开发实时预览

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner): 代码运行

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Chrome 浏览器中调试代码

**markdown**

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced): 本地预览 Markdown

[MDX]():

**主题**

[Material Icon Theme](): 图标主题

[One Dark Pro]()

**_其他_**

[Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks): 对代码做特定的标记

[filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize): 编辑器底部显示文件大小

[vscode-fileheader](https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader): 文件顶部添加描述信息

[Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff): 比对代码差异, 支持跨文件

[Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode): 实时计算值

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): 检查拼写错误

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): 自动补全路径

[Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal): 命令行

[minapp](): 微信小程序标签, 属性智能补全
