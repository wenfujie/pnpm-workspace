/**
 * @description: 获取月份的总天数
 * @example: 
    daysInMonth(2020, 12)); // 31
    daysInMonth(2024, 2)); // 29
 */
const daysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

/**
 * @description: 将日期转换为 YYYY-MM-DD
 * @example: 
    getISODate(new Date()) // "2021-07-28"
 */
const getISODate = (date: Date) => date.toISOString().split("T")[0];

/**
 * @description: 将日期转换为 hh:mm:ss
 * @example: 
    getColonTimeFromDate(new Date()) // '08:38:00'
 */
const getColonTimeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

/**
 * @description: 判断两个时间是否相同
 * @example: 
    isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)) // true
 */
const isSameDate = (dateA: Date, dateB: Date) =>
  dateA.toISOString() === dateB.toISOString();

export { daysInMonth, getISODate, getColonTimeFromDate, isSameDate };
