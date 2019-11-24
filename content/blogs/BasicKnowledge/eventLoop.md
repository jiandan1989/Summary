---
path: '/basic/event_loop'
title: '了解Event Loop机制'
date: '2019-11-24'
modifyDate: '2019-11-24'
---

# 前言

以下内容摘抄自[**什么是 Event Loop**](https://www.ruanyifeng.com/blog/2013/10/event_loop.html)

[Event Loop]('https://en.wikipedia.org/wiki/Event_loop' '在计算机科学中, 事件循环是一种编程结构或设计模式, 对于等待和调度的时间或信息的程序, 事件循环通过向某个内部或外部"事件提供程序, 发出请求(通常阻止该请求直到事件到达)"来工作, 然后调用相关的时间处理程序(调度事件), 事件循环有时也成为消息分发程序, 消息循环, 消息泵或运行循环'): 是一个很重要的概念, 指的是计算机系统的一种运行机制, JS 语言就采用这种戒指, 来解决单线程运行带来的一些问题, 运行以后的程序叫做[进程(process)]('https://zh.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B' '指计算机中已运行的程序 进程曾经是分时系统的基本运作单位, 在面向进程设计的系统中, 进程是程序的基本执行实体, 在面向线程设计的系统中, 进程本身不是基本运行单位, 而是线程的容器, 程序本身只是指令, 数据及其组织形式的描述, 进程才是程序的真正运行实例'), 一个进程一次只能执行一个任务, 如果有很多任务需要执行, 不外乎三种解决方法

- 排队: 因为一个进程一次只能执行一个任务, 只好等前面的任务执行完了, 再执行后面的任务
- 新建进程, 使用 fork 命令, 为每个任务新建一个进程
- 新建线程, 因为进程太耗费资源, 所以如今的程序往往允许一个进程包含多个线程, 由线程去完成([进程和线程](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html))

---

此处可能需要打断一下, 在查看了下方的评论后, 也正如大佬说的一样, 可能感觉理解是错误的, 感觉更加有点迷惑了, 同步 / 异步 和 阻塞 / 非阻塞 是两组不同的概念, 所以打算是从浏览器的工作原理上着手进行了解

setTimeout 的使用只是将回调函数放在了执行队列中去, 当所有的同步任务或者说是主线程执行栈清空以后才会读取任务队列中的回调, 所以并不能保证能够在规定或约束的时间内进行执行, 浏览器规定最小间隔不得小于 4ms

#### Javascript 为什么是单线程?

- [Is Javascript Single-Threaded?](https://www.red-gate.com/simple-talk/dotnet/asp-net/javascript-single-threaded/)
- [If Javascript Is Single Threaded , How Is It Asynchronous ?](https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd)

### 参考

- [Asynchronous I/O](https://en.wikipedia.org/wiki/Asynchronous_I/O)
- [x] [What the heck is the event loop anyway ?](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- [x] [JS illustrated: The Event Loop](https://dev.to/kapantzak/js-illustrated-the-event-loop-4mco)
- [ ] [JavaScript Event Loop Explained](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
- [x] [Help, I'm stuck in an event-loop](https://vimeo.com/96425312)
- [x] [彻底弄懂Event Loop](https://juejin.im/post/5b8f76675188255c7c653811)
- [x] [The Javascript Event Loop](https://flaviocopes.com/javascript-event-loop/)

<iframe width="444" height="250" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
