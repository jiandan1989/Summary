export function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * @desc: 将 UseState 转换为 use-state
 * @param:
 * str: UseState
 * @returns
 * use-state
 */
export const hyphenateRE = /\B([A-Z])/g;
export function hyphenate(str) {
  return cached(() => str.replace(hyphenateRE, '-$1').toLowerCase())();
}

/**
 * @desc: 替换掉 ant-button 为 Button
 */
export const antdRe = /Ant/gi;
export function hyphenateAntd(str) {
  return cached(() => str.replace(antdRe, ''))();
}

export const isClient = typeof window === 'object';
