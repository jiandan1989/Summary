---
path: '/js/string'
title: '字符串'
date: '2019-07-21'
modifyDate: '2019-07-21'
---

### length

> 返回字符串的长度

## Methods

### split

以分隔符将字符串分割成数组

split(separator, limit): separator: 分隔符可以是正则表达式 默认(''), limit: 返回分割数组的前 n 个元素

```js
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);
// Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand

// 使用正则匹配
const re = /\s*;\s*/;

const myString = 'Hello 1 word. Sentence number 2.';
// 正则捕获
const reCap = /(\d)/;
const splits = myString.split(reCap);
console.log(splits); // [ "Hello ", "1", " word. Sentence number ", "2", "." ]

const nameList = names.split(re);
const nameListLimit = names.split(re, 2);

console.log(nameList); // Harry Trump,Fred Barney,Helen Rigby,Bill Abel,Chris Hand
console.log(nameListLimit); // ["Harry Trump", "Fred Barney"]
```

<ant-divider></ant-divider>

### [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

截取字符串, 接收两个参数`beginSlice`: 开始提取字符串的索引, `endSlice`: 结束提取字符串的索引, 若为 负数, 则会被看做 `str.length + endSlice` || `str.length + beginSlice`

```js
```

<ant-divider></ant-divider>

### substring

```js
```

<ant-divider></ant-divider>

### substr

```js
```

<ant-divider></ant-divider>

### localCompare

```js
```

<ant-divider></ant-divider>

### [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

返回第一次出现指定值的索引, 可接受两个参数, searchValue: 指定值, fromIndex: 开始查找位置, 若匹配不到查找指定值的索引值 返回 `-1`

```js
var myString = 'brie, pepper jack, cheddar';
var myCapString = 'Brie, Pepper Jack, Cheddar';

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'));
// logs 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'));
// logs -1
```

### lastIndexOf

> [参考地址: ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
>
> 同 `indexOf`类似, 返回查找指定值最后出现的位置, 查找不到 返回`-1`

<ant-divider></ant-divider>

### [search](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)

执行正则表达式 和 string 对象之间的搜索匹配, 若传入对象不是正则对象, 隐式使用 `new RegExp` 转换为正则表达式对象, 不传入任何参数, 则返回`0`

```js
const str = 'abc';

console.log(str.search()); // 0
console.log(str.search(/a/)); // 0
console.log(str.search(/bd/)); // -1
```

<ant-divider></ant-divider>

### [match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)

接受一个正则表达式对像, 如果传入的值为非法的正则表达式, 将会隐式的使用 `new RegExp(obj)` 转换为正则表达式, 如果不提供任何参数, 将会得到一个包含空字符串的数组 [""]
如果正则表达式不包含`g`标志

### replace

> [参考地址:](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
>
> 返回一个由替换自替换一些或者所有匹配的模式后的新字符串, 不会修改原字符串

```js
const str = 'abc';
console.log(str.replace('a', '11')); // 11bc
// 正则匹配替换
console.log(str.replace(/a/, '11')); // 11bc
// 替换函数
function replaceFn(match, p1, p2, p3) {
  return [p1, p2, p3].join('-');
}
console.log(str.replace(/(a)(b)(c)/, replaceFn)); // a-b-c
```

<ant-divider></ant-divider>

### [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

转换字符串为小写, 不会影响自身字符串

<ant-divider></ant-divider>

### [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

转换字符串为大写字符串, 并且不会影响自身字符串

### [charAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

返回字符串中指定字符,接收 `index`: 介于 0 到字符串长度之间

```js
```

<ant-divider></ant-divider>

### charCodeAt

```js
```

### fromCharCode

```js
```

> 以下为 新增, 需考虑兼容性

### includes

> 查看字符串中是否包含指定字符, 返回`boolean`
>
> 同数组的 `includes`类似

```js
const str = 'abc';
console.log(str.includes('a')); // true
console.log(str.includes('d')); // false
```

### [repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

接受参数 count: 为指定重复次数, 介于 0 和 正无穷大之间的整数, 不能为负数, 必须小于 infinity, 且重复得到的字符串不会大于最长字符串

```js
const str = 'abc';
console.log(str.repeat(2)); // abcabc
```

### [padEnd](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

接收 targetLength: 最终得到的字符串长度, padString: 需要填充的字符串, 如果 targetLength 小于当前字符串长度, 则返回自身

```js
const str = 'abc';
console.log(str.padEnd(1)); // abc
console.log(str.padEnd(5, 'def')); // abcde
console.log(str.padEnd(5)); // 'abc  '
```

### [padStart](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

接收两个参数, 同[padEnd](#padEnd)相同, 区别: `padEnd`: 在字符串后添加, `padStart`: 在字符串前添加

```js
const str = 'abc';
console.log(str.padStart(1)); // abc
console.log(str.padStart(5, '123456')); // 12abc
```

### [startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

判断字符串是否以特定值开头, 接收两个参数, searchString: 要搜索的字符串, position: 从 position(包含此位置的字符串) 的位置开始搜索

```js
const str = 'abcdefg';

console.log(str.startsWith('abc')); // true
console.log(str.startsWith('bc')); // false
console.log(str.startsWith('bc', 1)); // true
```

### [endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

判断是否以特定字符串结尾, 参数同 [startsWith](#startsWith)position: 包含此位置的字符串, 默认为 str.length

```js
const str = 'abcdefg';
console.log(str.endsWith('fg')); // true
console.log(str.endsWith('d')); // false
console.log(str.endsWith('d', 4)); // true
```

### [trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)


格式化字符串, 过滤开始空格, 替代`trimLeft`

```js
const str = '  abc ';
console.log(str.trimStart()); // 'abc  '
// 正则替换

console.log(str.replace(/^\s+/g, '')); // 'abc  '
```

### [trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

替代 `trimRight`

```js
const str = 'abc  ';
console.log(str.trimEnd()); // abc
// 正则替换
console.log(str.replace(/\s+$/g, '')); // abc
```

### fromCodePoint

@todo
