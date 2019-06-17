export function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

export function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}

