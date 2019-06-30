/**
 * @desc: 获取目录
 */
 export function getSiderMenu(post: { htmlAst : { children: any []}}): any [] {
  const sidebar = post.htmlAst.children.filter(item => {
    if (item.type ==='element' && item.tagName  && item.tagName.includes('h3')) {
      return item;
    }
  }).flatMap((item: { children: any []}) => item.children).map(({ value }: { value: string }, key: number) => ({ key: `${key}_${value}`, title: value }))
  return sidebar;
}