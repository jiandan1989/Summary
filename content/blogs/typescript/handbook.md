---
path: '/handbook'
title: 'TypeScript 手册'
date: '2019-06-30'
modifyDate: "2019-06-30"
---

<h3 id="基本类型">基本类型</h3>

[**布尔**](https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean)<br />最基本的数据类型是简单的 **true** / **false** 值<br />
```typescript
let isDone: boolean = false;
```

[**数字**](https://www.typescriptlang.org/docs/handbook/basic-types.html#number)<br />TS 中所有的数字都是浮点值,类型都是 number
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

[**字符串**](https://www.typescriptlang.org/docs/handbook/basic-types.html#string)<br />除了可以使用单引号(''), 双引号("") 也可以使用模板字符串解析<br />
```typescript
let color: string = 'blue';
color = "red";

let fullName: string = `Bob Bobbington`;
```

[**数组**](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)<br />分为两种方式表达 **待续**<br />
```typescript
let list: number[] = [1, 2, 3];

// 使用 Array<elemType>
let list: Array<number> = [1, 2, 3];
```

[**元组**](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)<br />元组类型允许表示具有固定数量的元素的数组, 这些元素的类型是已知的, 并对应索引值, 这是一个比较高级的用法, **待续**<br />
```typescript
let x: [string, number];
x = ['Hello', 10]; // OK
x = [10, 'Hello']; // Error
```

[**枚举**](https://www.typescriptlang.org/docs/handbook/basic-types.html#enum)<br />枚举是一种为数值集提供更友好名称的方法, 个人的理解是和接口定义有些类似, 默认情况下, 枚举开始为其成员编号 0, 可以手动设置其中一个成员的值来更改设置, 感觉这是一个很有用的东西, **待续**<br />
```typescript
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
```

[**任意值**](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)<br />在编写程序时, 有时可能某些值为动态的, 不确定变量类型, 此时可以定义为 **any** (任意类型的值), 或许在定义数组, 元组时, 包含的元素类型不是统一的
```typescript
let notSure: any = 4;
notSure = '不确定到底是哪一种类型, 所以用 any';

let list: any[] = [1, '数组', true];

```

[**无效值**](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)<br />**void** 有点像是相反的 **any**, 表示没有任何类型, 只能分配 **undefined** 或 **null **
```typescript
// 作为函数的返回值
function warnUser(): void {
	console.log('这是一个自定义警告信息');
}
let unusable: void = undefined;
```

[**空和未定义**](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)<br />**undefined**** 和 ****null**** 实际有自己类型的命名 ****undefined**** 和 ****null**** , 就像 ****void****, 意义并不是很大, 默认情况下, ****null**** 和 ****undefined**** 是所有其他类行的子类型<br />**
```typescript
let u: undefined = undefined;
let n: null = null;
```

[**never**](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)<br />该 never 类型表示从未发生或者永久不无法返回的类型, 如函数表达式或箭头函数表达式的返回类型总是抛出异常或永不返回的异常

```typescript
function error(message: string): never {
	throw new Error(message);
}

function fail() {
	return error('Something failed');
}

// 无止境的运行方法
function infiniteLoop(): never {
	while(true) {
  }
}

```

[**对象**](https://www.typescriptlang.org/docs/handbook/basic-types.html#object)<br />**一种类型, 表示非原始型的, 即任何不适 ****number**** ****string**** ****boolean**** ****symbol**** ****null**** 或 ****undefined**
```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // Ok
create(null); // ok

create(42); // Error
create('string'); // Error
create(false); // Error
create(undefined); // Error
```

[**断言**](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)<br />**类型断言有两种方式, 一种是"角括号" 另一种是 ****as****, 不会在运行时造成影响, 纯粹由编译器使用. 但在 ****JSX**** 中使用 ****TS****, 只允许使用 ****as**** 方法<br />**
```typescript
// 角括号
let someValue: any = 'this is a string';
let strlength: number = (<string>someValue).length;

// as
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
```
<ant-divider dashed></ant-divider>

<h3 id="变量声明">变量声明</h3>

#### [接口](https://www.typescriptlang.org/docs/handbook/interfaces.html)
TS 的核心原则之一是类型检查关注值具有的类型, 被称之为 "[**鸭子类型**]()" 或 "结构子类型", 定义类或普通函数接收参数的类型及格式
```typescript
// 普通定义接收一个必须包含 label且类型为 string 的对象, 但这种定义方式无法复用且阅读性不好
function printLabel(labeledObj: { label: string }) {
	console.log(labeledObj.label);
}

// 重新定义该函数
interface LabeledValue { // 定义接收参数接口
	label: string;
}

function printLabel(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}

```

[**可选属性**](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties)<br />在定义接口时并不是所有的参数都是必须的, 有些在某些条件下存在或根本不存在

```typescript
interface SquareConfig {
	color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: 'white', area: 100 };
  if (config.color) {
  	newSquare.color = config.color;
  }
  
  if (config.width) {
  	newSquare.area = config.width * config.width;
  }
  return newSquare;
}

```
可选参数使用 ? 声明, 并且在上方代码中, 返回对象 包含 color, area

[**只读属性**](https://www.typescriptlang.org/docs/handbook/interfaces.html#readonly-properties)<br />通过 readonly 在属性名称前添加指定
```typescript
interface Point {
	readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
point.x = 5; // error 通过指定 Point 进行分配时, x y 不允许再更改
```
TS 附带的 ReadonlyArray<T> 类型 Array<T> 与删除的所有变异方法相同, 因此在确保创建后不允许更改数组, 不允许使用任何方法
```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error
a = ro; // error
```
将整个ReadonlyArray 数组再次赋值给正常数组是不允许的, 但可以使用类型断言重新覆盖
```typescript
let a = ro as number[];
```
[**readonly vs const**](https://www.typescriptlang.org/docs/handbook/interfaces.html#readonly-vs-const)<br />在定义变量时, 变量使用 const 而属性使用 **readonly**<br />



