---
path: '/typescript'
title: 'TypeScript'
date: '2019-06-30'
modifyDate: "2019-06-30"
---


# TypeScript

<h3 id="文档">文档</h3>

[官网](https://www.typescriptlang.org/)

<ant-divider></ant-divider>

<a name="nJqxt"></a>
<h3 id="介绍">介绍</h3>
被称之为加强版JS, JS为动态语言 只在运行执行时才能明确知道变量 / 参数的类型, 而 TS 在编写编译前就已经将类型固定, 等到有错误时提早发现以便不会在运行时出错<br />

<ant-divider></ant-divider>

<a name="安装"></a>
<h3 id="安装">安装</h3>

**使用 npm 全局安装 typescript 解析**<br />
```bash
npm install -g typescript
```

**构建第一个TS 文件以及添加 类型注释<br />**
```typescript
function greeter(person) {
	return 'Hello' + person;
}

let user = 'Jane User';
document.body.textContent = greeter(user);

// 对参数添加类型注释
function greeter(person: string) {
	return 'Hello' + person;
}
```

**编译运行代码**<br />虽然以上第一段代码中显示为 JS, 仍旧可以使用 TS 编译器编译为何原本JS代码一样的代码, 第二段代码就已经添加了参数类型注释, 当在调用时, 传递的参数不是 string 类型时, 即报错<br />
```bash
tsc greeter.ts
```

**定义接口**: 目前没有找到更合理更合适的解释, 理解为当单个参数使用参数注释定义时是可以的, 但假设涉及了比较复杂的参数或单个对象内无法自定义指定时 或者 多个参数时, 使用注释方法就不靠谱了, 这才有了接口就是按照指定的格式及类型定义的"模板"
```typescript
interface Person {
	firstName: string;
  lastName: string;
}
 
// 此处定义了 Person 接口, 指定了 必须要包含有 firstName(string 类型) 以及 lastName(string 类型)
function greeter(person: Person) {
	return 'Hello' + person.firstName + ' '  + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

document.body.textContent = greeter(user);
```
