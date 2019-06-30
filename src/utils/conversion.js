import { hyphenate } from '@/utils';

/**
 * @desc: 转换所有组件
 */
export function conversionComponent(components, packageKeys) {
  return packageKeys.reduce((prev, next) => {
    const key = hyphenate(next);
    prev[key] = components[next];
    return prev;
  }, {});
}