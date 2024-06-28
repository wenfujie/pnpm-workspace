/**
 * @description: 转换为,分割货币
 * @example: 
    formatCurrency(32131.232) // '32,131.232'
 */
function formatCurrency(num: number) {
  const res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
  return res;
}

export { formatCurrency };
