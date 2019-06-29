/**
 * @desc: 主需要使用 split, replace, map
 * @todo
 * 1. 尝试使用更多方式
 * 2. 尝试使用于更多场景
 * 3. 防御性编码判断
 */
export declare function formatWeight(str: any): any;
/**
 * @desc: 只包含单个, 如 支付宝&&微信 或者 支付宝+微信
 * @param
 * str: 需要解析的字符串
 * separator: 解析所需的分割符
 * @return {String}
 */
export declare function formatTwo(str: any, separator: any): any;
