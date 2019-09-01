---
path: '/utils'
title: '小工具'
date: '2019-09-01'
modifyDate: '2019-09-01'
---

<!-- - [地址 1](https://segmentfault.com/a/1190000011557368)
- [地址 2](https://www.zhihu.com/question/46943112)
- [地址 3](https://github.com/jawil/blog/issues/24) -->

**检测是否支持 Base64**

```javascript
function isSupportBase64() {
  var data = new Image();
  var support = true;
  data.onload = data.onerror = function() {
    if (this.width != 1 || this.height != 1) {
      support = false;
    }
  };
  data.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  return support;
}
```

**获取 URL 参数**

```js
export const getQueryString = (key) => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  return r === null ? null : unescape(r[2]);
};
```

**URL 查询参数转 JSON 格式**
_ES6_

```js
export const queryByES6 = (search = '') =>
  ((querystring = '') =>
    ((q) => (querystring.split('&').forEach((item) => ((kv) => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))), q))({}))(
    search.split('?')[1],
  );
```

_ES5_

```js
export const queryByES5One = (search) => {
  if (search === void 0) {
    search = '';
  }
  return (function(querystring) {
    if (querystring === void 0) {
      querystring = '';
    }
    return (function(q) {
      return (
        querystring.split('&').forEach(function(item) {
          return (function(kv) {
            return kv[0] && (q[kv[0]] = kv[1]);
          })(item.split('='));
        }),
        q
      );
    })({});
  })(search.split('?')[1]);
};
```

**检测是否支持 Flash**

```javascript
function flashVersion() {
  var version;
  try {
    version = navigator.plugins['Shockwave Flash'];
    version = version.description;
  } catch (ex) {
    try {
      version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
    } catch (ex2) {
      version = '0.0';
    }
  }
  version = version.match(/\d+/g);
  return parseFloat(version[0] + '.' + version[1], 10);
}
```

**横竖屏切换**

```javascript
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        return;
      }
      if (clientWidth < 640) {
        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
      } else {
        docEl.style.fontSize = 100 + 'px';
      }
    };
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

**随机生成 6 位数字验证码**

_方法一_

```js
export const randomVerificationCodeOne = () => ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
```

_方法二_

```js
export const randomVerificationCodeTwo = () =>
  Math.random()
    .toString()
    .slice(-6);
```

_方法三_

```js
export const randomVerificationCodeThree = () => Math.random.toFixed(6).slice(-6);
```

_方法四_

```js
export const randomVerificationCodeFour = () => '' + Math.floor(Math.random() * 999999);
```

**16 进制颜色代码生成**

```js
export const randomColorSixteen = () => '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
```

**单行写一个评级组件**

```js
'★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
```

**字符串转数字**

```js
var a = '1';
+a; // 1
```

**驼峰命名转下划线**

```js
export const humpToUnderline = (str) =>
  str
    .match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g)
    .join('_')
    .toLowerCase();
```

**最短代码实现数组去重**

```js
[...new Set(arr)];
```

**实现长度 m 且值都为 n 的数组**

```js
Array(m).fill(n);
```

**测试质数**

```js
export const isPrime = (num) => !/^.?$|^(...+?)\1+$/.test('1'.repeat(num));
```

**统计字符串中相同字符出现的次数**

```js
const str = '中国中中国中中国中';
export const getInfo = (str) => str.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
```

**判断浏览器**

```js
const UA = navigator.userAgent; // UA
const APP_VERSION = navigator.appVersion; // 版本
const isWebKit = UA.indexOf('AppleWebKit') > -1;
const isPresto = UA.indexOf('Presto') > -1;
const isTrident = UA.indexOf('Trident') > -1;
const isGecko = UA.indexOf('Gecko') > -1 && UA.indexOf('KHTML') == -1;
const isTrident = UA.indexOf('Trident') > -1;
const isMobile =
  !!UA.match(/AppleWebKit.*Mobile/i) ||
  !!UA.match(
    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/,
  );
const isIos = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const isAndroid = UA.indexOf('Android') > -1 || UA.indexOf('Linux') > -1;
const isIPhone = UA.indexOf('iPhone') > -1 || UA.indexOf('Mac') > -1;
const isIPad = UA.indexOf('iPad') > -1;
const isWebApp = UA.indexOf('Safari') == -1;
```

**使用 void 0 解决 undefined 被污染**

```js
undefined = 1;
!!undefined; // true
!!void 0; // false
```

**正确处理错误方式**

```js
try {
  something;
} catch (e) {
  window.location.href = 'http://stackoverflow.com/search?q=[js]+' + e.message;
}
```

**arguments 对象转换成数组**

```js
Array.prototype.slice.call(arguments);

// ES6
Array.from(arguments);
[...arguments];
// 现使用 ...rest 代替arguments
```

**获取日期时间戳**

```js
// 指定时间的时间戳
new Date()
  .getTime()(new Date())
  .getTime();
new Date().getTime();

// 获取当前的时间戳

Date.now();
// 日期显示转化为数字
+new Date();
```
