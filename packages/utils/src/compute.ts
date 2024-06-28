/**
 * @description: 打乱数组
 * @Examples
    shuffle([1, 2, 3]) // [2, 3, 1]
 */
const shuffle = ([...arr]: any[]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

/**
 * @description: 获取范围随机数
 * @Examples
    getRandomInt(1, 10) // 3
 */
function getRandomInt(min: number, max: number) {
  // 此处 + 1 则会包含 max , 否则不包含
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export { shuffle, getRandomInt };
