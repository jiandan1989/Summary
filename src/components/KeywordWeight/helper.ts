/**
 * @desc: 主需要使用 split, replace, map
 * @todo
 * 1. 尝试使用更多方式
 * 2. 尝试使用于更多场景
 * 3. 防御性编码判断
 */

/**
 * @desc:
 *  1. 假设包含 = 并且后为数字 直接返回
 *  2. 假设包含 = ,但后跟随不是数字, 自动添加 1
 *  3. 假设不包含 = 自动添加 =1
 * @todo:
 * 1. str 为空字符时
 * @return {String}
 */
import { isString } from '@/utils/checkType';

export function formatWeight(str) {
  if (!isString) {
    throw new TypeError('必须要 String 类型')
  }
  // if (!str) return '';
  if (str.match(/\S+?=\d/g)) return str;
  if (str.match(/\S+?=/g)) return `${str}1`;
  return `${str}=1`;
}

function getPrevNextValue(prev = '', next) {
  const prevVal = prev ? `${prev},` : '';
  return function getPrevNextValueWithSeparator(separator) {
    if (!separator) return `${prevVal}${formatWeight(next)}`;
    const arr = next.split(separator);
    const data = arr.map(item => formatWeight(item)).join(separator);
    return `${prevVal}${data}`;
  }
}

/**
 * @desc: 假设需要解析 && 或者 +
 * @return {String}
 * @todo
 * 1. 不能解析同时包含 && 和 +, 如 支付宝&&微信+头条
 */
function formatOne(str) {
  const arr = str.split(',');  
  const data = arr.reduce((prev, next) => {
    const nextValue = next.replace(/\s+?/g, '');
    const prevValue = prev ? `${prev},` : '';
    const getPrevNextValueWithSeparator = getPrevNextValue(prevValue, nextValue);
      if (nextValue.includes('&&')) {
        return getPrevNextValueWithSeparator('&&');
      }
      if (nextValue.includes('+')) {
        return getPrevNextValueWithSeparator('+');
      }
    return `${prevValue}${formatWeight(next)}`;
  }, '');
  return data;
}

/**
 * @desc: 只包含单个, 如 支付宝&&微信 或者 支付宝+微信
 * @param
 * str: 需要解析的字符串
 * separator: 解析所需的分割符
 * @return {String}
 */

export function formatTwo(str, separator) {
  return str.replace(/\s+?/g, '').split(',').map(item => ((s) => s.split(separator).map(kk => formatWeight(kk)).join(separator))(item)).join();
}

/**
 * @desc: 解析单个, 如 formatTwo
 * @param
 * str: 解析的字符串
 * separator: 分隔符
 * @return {String}
 */
function formatThree(str, separator) {
  return str.replace(/\s+?/g, '').split(',').map(item => item.split(separator).map(itemStr => formatWeight(itemStr)).join(separator)).join();
}
function formatFour(str, separator) {
  return str.replace(/\s+?/g, '').split(',').reduce((prev, next) => ((...rest) => {
    const [prevValue, nextValue] = rest;
    const prevData = prevValue ? `${prevValue},` : prevValue;
    const nextData = nextValue.split(separator).map(item => formatWeight(item)).join(separator);
    return `${prevData}${nextData}`
  })(prev, next), '');
}

/**
 * @name: formatFive
 * @return {String}
 */
function formatFive(str, separator) {
  return [...JSON.parse(JSON.stringify(str.replace(/\s+?/g,'').split(','), ((key, value) => {
    return value.includes(separator) ? value.split(separator).map(item => formatWeight(item)).join(separator) : value;
})))].join();
}

// const str = 'Alipay=10&&Wechat+头条&&Facebook, baidu=1+google, IBM=3, MDN&&mozila';
// console.log(formatOne(str), 'formatOne>>>>>>>>>>>>');
// // Alipay=10&&Wechat+头条=1&&Facebook=1,,baidu=1+google=1, IBM=3,,MDN=1&&mozila=1

// console.log(formatTwo(str, '&&'), 'formatTwo>>>>>>>>>>>>');
// // Alipay=10&&Wechat+头条=1&&Facebook=1,baidu=1+google,IBM=3,MDN=1&&mozila=1

// console.log(formatThree(str, '&&'), 'formatThree>>>>>>>>>>>>');
// // Alipay=10&&Wechat+头条=1&&Facebook=1,baidu=1+google,IBM=3,MDN=1&&mozila=1

// console.log(formatFour(str, '&&'), 'formatFour>>>>>>>>>>>>');
// // Alipay=10&&Wechat+头条=1&&Facebook=1,baidu=1+google,IBM=3,MDN=1&&mozila=1

// console.log(formatFive(str, '&&'), 'formatFive>>>>>>>>>>>>>>>>');
// // Alipay=10&&Wechat+头条=1&&Facebook=1,baidu=1+google,IBM=3,MDN=1&&mozila=1

