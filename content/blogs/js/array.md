---
path: '/js/array'
title: '数组'
date: '2019-07-21'
modifyDate: '2019-07-21'
---

### [检测是否为数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

```js
/** ES6  **/
const arr = [];

Array.isArray(arr); // true
Array.isArray(false); // false
Array.isArray(1); // false
Array.isArray('string'); // false

/** ES5  **/
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
```

### length

一个 0 到 Math.pow(2, 32)-1 的整数,可以通过 length 属性对数组进行截取和添加,如果传入的数值不是有效的数组长度支持的数值,则会抛出异常

```js
const a = [];
a.length; // 0
a.length = 1; // 会在a数组中添加一个元素,该元素的值为 undefined
a.push(1, 2, 3);
a.length; // 3
a.length = 2; // 1, 2
```

## Methods

`ES6新增:`

- [Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from): 将一个类数组,伪数组转换为真正的数组,例如获取到元素集合

- [Array.of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of): 创建一个 可变数量参数的新数组实例,而不类似于`Array()`方法

```js
Array.of(2); // [2]
Array(2); // [, ,] 两个由undefined 组成的数组
```

### [push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

在数组的末尾添加新的元素,并返回 新的长度,也可以调用函数的`call` 和 `apply`方法对伪数组操作数组的方法

```js
const a = [1, 2];
a.push(3); // 可以添加多个元素

a.length === 3; // true

a.push(4, 5);

a.length === 5; // true
```

### [pop](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

删除数组中的最后一个元素,并返回删除的元素,如果该数组为空,则返回 `undefined`

```js
const a = [];
```

### [shift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

删除数组中下标为`0`的元素,并返回该元素,会修改元素组,如果数组为空,则返回`undefined`

```js
const a = [1, 2, 3, 4, 5];

a.shift(); // 1

a.length === 4; // true
```

### [unshift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

在数组下标为`0`的元素前添加一个新的元素,并返回新的长度

```js
const a = [2, 3, 4, 5];

a.length === 4; // true

a.unshift(1); // [1, 2, 3, 4, 5]

a.length === 5; // true
```

### [fill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

用一个固定值填充数组从起始位置到结束位置中间所有的值,意思也就是替换掉中间的值,传参`arr.fill(value, start, end) value: 值, start: 开始位置, end: 结束位置`,如果传入的`start` 或者 `end` 为负数,则使用数组的长度和其相加的位置计算`start + length` 和 `end + length`, 不包含 `end`的位置

```js
const a = [1, 2, 3, 4, 5];
a.fill(6); // [6, 6, 6, 6, 6]
a.fill(7, 4); // [6, 6, 6, 6, 7]
a.fill(1, 2, 3); // [6, 6, 1, 6, 7]
a.fill(2, -4, -2); // [6, 2, 2, 6, 7]
```

### [sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

对数组中的元素通过某种规则进行排序,并返回数组,使用该方法排序不一定是[稳定的](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#.E7.A9.A9.E5.AE.9A.E6.80.A7), 默认的排序方法是根据`Unicode` 编码排序, 该方法接收一个参数,就是一个排序规则的函数

```js
const a = [1, 20, 100, 4];
a.sort(); // [1, 100, 20, 4], 因为在 unicode 中, 100 在 20 前, 20 在4 前
a.sort(function(a, b) {
  return a - b;
}); // [1, 4, 20, 100] 升序排序

a.sort(function(a, b) {
  return b - a;
}); // [100, 20, 4, 1] 降序排序
```

- 如果数组中的元素并不是 ASCII 字符的字符串可使用[String.localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 方法

### reverse

对数组中的元素进行颠倒排序,并返回数组

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```js
const a = [1, 2, 3, 4, 5];
a.reverse(); // [5, 4, 3, 2, 1]
```

### includes

判断数组中是否包含某一个元素,返回`Boolean`值, 可接收第二参数`arr.includes(ele, fromIndex), fromIndex: 开始位置查找`

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const a = [1, 2, 3];

a.includes(1); // true

a.includes(4); // false
```

### [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

查找数组中某一个元素的下标值,若数组中不包含该元素,则返回 `-1`,可用于判断数组中是否包含某一个元素, 可接收第二参数作为开始位置进行查找`arr.indexOf(ele, fromIndex)`, 该方法使用[严格相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)判断


```js
const a = [1, 2, 3];
a.indexOf(1); // 0
a.indexOf(4); // -1
a.indexOf(1, 4); // -1
```

### [lastIndexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

和 `indexOf`方法类似,此方法是从数组末尾向前开始查找,接收第二参数作为开始位置`arr.lastIndexOf(ele, fromIndex)`

```js
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

### [find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

查找数组中符合条件的元素,并返回第一个符合条件的元素,接收一个函数作为条件判断

```js
const a = [1, 2, 3, 4, 5];

a.find(function(x) {
  return x % 2 === 0;
}); // 2
```

### [findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

查找数组中符合条件的元素的下标值,返回该元素在数组中的下标,接收一个函数作为条件判断`arr.findIndex(function(ele, index, array) {}) ele: 循环当前元素, index: 当前元素的下标, array: 数组本身`

```js
const a = [1, 2, 3, 4, 5];

a.findIndex(function(x) {
  return x % 2 === 0;
}); // 1
```

### [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

对数组中的每一个元素进行函数调用, 返回`undefined`, 可用于计算,函数事件绑定

```js
const a = [1, 2, 3, 4, 5];

a.forEach(function(x, index) {
  console.log(x); // 1, 2, 3, 4, 5
  console.log(index); // 0, 1, 2, 3, 4
});

const b = document.querySelectorAll('div');
function bindDiv(x) {
  console.log(x);
}
b.forEach(function(ele) {
  ele.onclick = bindDiv.bind(ele);
});
```

### [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

对数组进行迭代, 返回经过计算之后的数组, 不修改原数组

```js
const a = [1, 2, 3];
a.map(function(x) {
  return x + 1;
}); // [2, 3, 4]
```

### [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

对数组进行迭代,并将符合条件,返回`true`的元素作为一个数组返回,不修改原数组

```js
const a = [1, 2, 3, 4, 5];

a.filter(function(x) {
  return x % 2 === 0;
}); // [2, 4]
```

### [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

将数组迭代,并按照接收的函数作为计算条件,返回计算后的结果,可接收第二参数作为默认值

```js
const a = [1, 2, 3, 4, 5];

a.reduce(function(x, y) {
  return x + y;
}, 0); // 15

const b = [
  {
    age: 1,
  },
  {
    age: 2,
  },
];

b.reduce(
  function(x, y) {
    return { age: x.age + y.age };
  },
  { age: 0 },
); // { age: 3 }
```

### [reduceRight](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)

和 `reduce` 方法类似,该方法是从后向前进行迭代计算

```js
const a = [1, 2, 3, 4, 5];

a.reduce(function(x, y) {
  return x + y;
}, ''); // '12345'

a.reduceRight(function(x, y) {
  return x + y;
}, ''); // '54321'
```

### [every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

检测是否所有的数组元素都符合传入条件,接收 函数 作为条件判断

```js
const a = [1, 2, 3, 4, 5];

a.every(function(x) {
  return x % 2 === 0;
}); // false
```

### [some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

和 `every` 方法类似,检测 数组中是否有符合条件的元素,返回 `Boolean`, 只要有一个元素符合 则退出检测

```js
const a = [1, 2, 3, 4, 5];

a.some(function(x) {
  return x % 2 === 0;
}); // true
```

### [copyWithin](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

### [join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

将数组中的元素使用某一个字符进行拼接,得到一个`string`,默认值为`,`,如果数组元素为`undefined` 或者 `null` 则会转化为`""` 空字符串

```js
const a = [1, 2, 3];

a.join(); // 1, 2, 3

a.join('-'); // 1-2-3
```

### [concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

将两个或者多个数组进行合并,不会修改原数组,返回一个新的数组

```js
const a = [1, 2, 3];

const b = [4, 5];

const c = a.concat(b);

c; // [1, 2, 3, 4, 5]
```

### [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

将一个数组进行浅拷贝,返回一个新的数组,不修改原数组,可接收两个参数`arr.slice(start, end)`,将拷贝从`start`(包含`start`位置) 到`end`(不包含`end`)结束位置的元素, 如果只有一个参数,则默认结束`end` 为数组长度减 1(`arr.length - 1`),

```js
const a = [1, 2, 3, 4, 5];

a.slice(0, 2); // [1, 2]
```

### [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

删除元素, 替换元素,可接受三个参数`arr.splice(index, num, replace) index: 删除元素的下标开始位置, num: 删除元素的个数, replace: 替换删除掉的元素`, 返回删除的元素,若删除 0 个元素,返回空数组, 此方法会修改原数组

```js
const a = [1, 2, 3, 4, 5];

a.splice(0, 1, '聂晓飞');
```

<ant-divider></ant-divider>

### 总结

- 修改原数组长度的方法: `push, pop, shift, unshift`

- 修改原数组的方法: `sort, reverse, fill`

- 遍历方法: `forEach, every, some, filter, map`

- 查找方法: `includes, find, findIndex, indexOf, lastIndexOf`

- 其他操作方法: `concat, join`

- 转换方法: `of, from`

- 数组去重新方法: `[...new Set(arr)]`

<ant-divider></ant-divider>

```js
// @TODO 下一篇将会整理一些关于数组中的某些业务操作
```

<i-back-top></i-back-top>
