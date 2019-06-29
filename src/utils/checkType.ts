export function isFunction(fn: any): boolean {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

export function isString(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]';
}

export function isArray(val: any []): boolean {
  return Array.isArray(val);
}
