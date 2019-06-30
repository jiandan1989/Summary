---
path: '/react-hooks'
date: '2019-05-26'
title: 'React Hooks'
modifyDate: "2019-06-30"
---

<!-- ![图片](https://source.unsplash.com/random/1200x1000) -->

#### <a target="_blank" href="https://codepen.io/niexiaofei/pen/GeWeXZ">Live Demo</a>

### useState
<a name="useState"></a>

<class-state>
  <code-panel>

```js
import React, { Component } from 'react';
import { Button, Card, Badge } from 'antd';

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  addCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }


  render() {
    return (
      <Card title="Class State" bordered={false} bodyStyle={{ padding: '16px 0'}}>
        <Button type="primary" onClick={this.addCount}>Add</Button>
        <Badge count={this.state.count} style={{ marginLeft: 16 }} /> <br />

        {this.props.children}
      </Card>
    );
  }
}
```
  </code-panel>
</class-state>

<use-state>
<code-panel>

```jsx
import React, { useState, Fragment } from 'react'

function UseStateDemo() {
  const [count, setCount] = useState(0)
  const [queryParams, setParams] = useState({ pageNumber: 1, pageSize: 10 })
  function addCount() {
    setCount(count + 1)
  }

  function changeParams(page) {
    setParams((prevParams) => ({
      ...prevParams,
      pageNumber: page,
    }))
  }

  return (
    <Fragment>
      当前count: {count}
      <button onClick={addCount}>Add</button>
      <button
        onClick={() => {
          changeParams(queryParams.pageNumber + 1)
        }}
      >
        Add
      </button>
    </Fragment>
  )
}
```
</code-panel>
</use-state>

#### 说明
<a name="说明"></a>

- useState 接受唯一参数作为定义变量的初始值, 并返回定义变量及可修改变量的功能函数
- 既然设置初始值, 为什么定义为 useState 而不是 createState, 根据官方文档介绍, 此处并非只有一种创建初始值的功能, 还包含有修改的函数
- 返回修改函数中, 接收修改的值如 setCount(2)
- 返回修改函数中, 也可接受上一次状态,以便可以使用, 类似于 setState 的回调函数写法

```jsx
// setState 回调
this.setState(prevState => {
  queryParams: {
    ...prevState.queryParams,
    pageNumber: 2,
  }
});

// useState 返回函数
setCount(prevParams => ({
  ...prevParams,
  pageNumber: 2,
}));
```

- 众所周知 class 组件中的 setState 为异步操作, 而 useState 又是如何监听变化更新 以及 是同步或者是异步操作 ?

### useRef
<a name="useRef"></a>

> 在 React 中的 class 组件中提供一个可以获取到子组件 以及 dom 元素节点的方法就是 使用 React.createRef, 但是在函数式组件中就不再能使用此方法了, Hooks 版本提供了一种 useRef 方法

- class

```jsx
import React, { Component, Fragment } from 'react'

class RefDemo extends Component {
  constructor() {
    super()
    this.domRef = React.createRef()
  }

  getDomRef = () => {
    console.log(this.domRef.current) // 返回 div 节点
  }

  render() {
    return (
      <Fragment>
        <div ref={this.domRef} />
        <button onClick={getDomRef}>get dom</button>
      </Fragment>
    )
  }
}
```

- Hooks useRef

```jsx
import React, { Fragment, useRef } from 'react'

function RefDemo() {
  const domRef = useRef()

  function getDom() {
    console.log(domRef, '>>>> 返回 div 节点')
  }
  return (
    <Fragment>
      <div ref={domRef} />
      <button onClick={getDom}>get dom</button>
    </Fragment>
  )
}
```

#### 说明

- 使用 useRef 替代了 class 组件的 React.createRef 方法
- 也可利用 useRef(null) 返回的普通函数(包含 { current: null }) 类定义定时器 如下结合 useEffect 实现定时器

```jsx
// class 组件定时器
import React, { Component } from 'react'

let count = 1
class ClassTimer extends Component {
  constructor() {
    super()
    this.timer = null
  }

  componenDidMount() {
    this.timer = setInterval(() => {
      count += 1
    }, 1000)
  }

  render() {
    ;<div>{count}</div>
  }
}

// hooks
import React, { useEffect, useRef } from 'react'

function TimerHook() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count + 1)
      if (count === 100) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  })

  return <Fragment>{count}</Fragment>
}
```

### useEffect
<a name="useEffect"></a>

  可以理解为发布 / 订阅模式的 useEffect, 基本融合了 class 组件中的 componentDidMount, componentDidUpdate, componentWillUnmount 三个声明周期, 可接受两个参数, 第一个参数为需要执行的匿名函数, 第二个参数可以理解为依赖, 当依赖变动时才会执行 匿名函数, 若未有变动则不会执行

```jsx
import React, { useEffect, useState, Fragment } from 'react';

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(count, '只用 count 变动才会执行更新');
  }, [count]); // 也可接收多个依赖参数, 用逗号分隔

  return (
    <Fragment>
      <span>{count}</span>
      <button onClick={addCount}>addCount</button>
    </Fragment>
  );
}

```
#### 说明
- 如上节所说, 此方法比如为 发布 / 订阅模式, 返回一个取消订阅的匿名函数, 此方法如 class 组件的 componentWillUnmout
- 接收参数变动才会执行匿名函数, 也可用于优化性能
- 如何实现一个 如 useEffect的方法 ? @todo

### useContext
<a name="useContext"></a>

在此之前未使用 Hooks 版本时, 使用 createContext 创建对象, 返回一个 Provider(作为数据的提供者) 和 
  Consumer(数据的使用者) 所有在 Consumer 内包含的组件都可以调用到数据, 但是写法比较复杂 且 并非所有的子组件都需要调用数据

<context-parent>
<code-panel>

```jsx
// 可接受参数, 在当 Provider 未提供值时作为默认值使用
import React, { Component, Fragment } from 'react'
import { Badge, Slider, Form, Card } from 'antd'

const { Item: FormItem } = Form

const CountContext = React.createContext()

class ContextParent extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }

  changeSliderValue = (value) => {
    this.setState({ count: value })
  }

  render() {
    const { count } = this.state
    return (
      <Card title='未使用Hooks' bordered={false}>
        <CountContext.Provider value={count}>
          <Slider min={1} onChange={this.changeSliderValue} value={count} />
          <Form layout='inline'>
            <ChildA />
          </Form>
        </CountContext.Provider>
      </Card>
    )
  }
}

class ChildA extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {(count) => {
          return (
            <Fragment>
              <FormItem label='ChildA'>
                <Badge count={count} style={{ backgroundColor: '#52c41a' }} />
              </FormItem>
              <FormItem label='ChildB'>
                <ChildB />
              </FormItem>
            </Fragment>
          )
        }}
      </CountContext.Consumer>
    )
  }
}

class ChildB extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {(count) => <Badge count={count} />}
      </CountContext.Consumer>
    )
  }
}
export default ContextParent


// 以上代码执行后, 在 ChildA, ChildB 中都可以调用到 count 值

```
</code-panel>
</context-parent>

## 更多

- useContext: 如 React.createContext
- useReducer: 组件中的 redux
- useCallback
- useMemo
- useImperativeHandle
- useLayoutEffect
- useDebugValue
- 如何依据 Hooks 规则 定义 自己的 hook ?  @todo

### 总结
<a name="总结"></a>
- 在此 hooks 版本更新之后, 用于区分组件的类型以及如何定义合适的组件, 又有了新的定义方式, 如不能再次描述 函数式组件为无状态组件