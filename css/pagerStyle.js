export const pagerStyle = {
  width: "50vh",
  height: "50vh",
  margin: "0 auto",
  background: "#f60",
}

/**
 * 自定义边框样式
 * @param {number} width 边框宽度
 * @param {string} color 边框颜色
 * @returns 边框样式
 */
export function customBorder(width = 2, color = "red") {
  return {
    border: `${width}px solid ${color}`
  }
}