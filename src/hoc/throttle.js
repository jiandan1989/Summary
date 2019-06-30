/**
 * @desc: 函数节流
 * @param:
 * 1. fn: 待延迟执行的函数
 * 2. interval: 待延迟的时间
 */
function throttle(fn, interval = 500) {
  const _self = fn;
  let timer = null;
  let firstTime = true; // 是否第一次调用
  
  return function (...rest) {
    const _me = this;
    if (firstTime) {
      _self.apply(_me, rest);
      return firstTime = true;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, rest);
    }, interval);
  }
}