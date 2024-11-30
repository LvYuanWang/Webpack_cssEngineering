/**
 * 将传入的元素和样式结合
 * @param {Element} dom 需要添加样式的元素
 * @param  {...any} styles 样式列表
 */
export function addStyle(dom, ...styles) {
  // Object.assign: 将所有可枚举属性的值从一个或多个源对象复制到目标对象
  const style = Object.assign({}, ...styles);
  for (const key in style) {
    dom.style[key] = style[key];
  }
}