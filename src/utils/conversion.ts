import { hyphenate } from '@/utils';

// 转换所有组件
export function conversionComponent(components: any, packageKeys: any) {
  return packageKeys.reduce((prev, next) => {
    const key = hyphenate(next);
    prev[key] = components[next];
    return prev;
  }, {});
}
