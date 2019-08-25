---
path: '/learn-react'
date: '2019-07-14'
title: 'React 基础知识'
modifyDate: '2019-07-14'
---

## 生命周期

### constructor

_在 React 组件挂载之前, 调用构造函数, 为子类使用构造函数时, 需先调用 super(props),且不应该在 constructor 中调用 setState 方法, 通过给 this.state 赋值对象来初始化 state 值, 也可以为事件处理函数绑定实例,_

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}

```

### getDerivedStateFromError

_在子组件中抛出错误后被调用, 将抛出的错误作为参数,返回一个值更新 state, 且在渲染阶段调用, 不允许有副作用_

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### componentDidCatch

**此生命周期在子组件抛出错误后被调用, 接收两个参数, 可以降级处理错误组件的 UI**

- error: 抛出的错误
- info: 带有 componentStack key 的对象

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

## state

- 基础知识 ?
- 状态管理 ?
- 路由配置 ?
- 最新状态 ?
- 源码解读 ?

![图片](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)

![图片](https://images.unsplash.com/photo-1531536449196-f026e2317680?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80)
![girl](https://images.unsplash.com/photo-1433954558247-ba7696b9af19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)
