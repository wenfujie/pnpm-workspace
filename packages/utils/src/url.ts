import { Recordable } from "@/types/global";

/**
 * @description: 对象转换为地址参数
 * @example: 
    toQuery({ a: 1, b: 2 }) // ?a=1&b=2
 */
function toQuery(obj: Recordable, prefix = "?") {
  const queryStringGroup: string[] = [];
  for (const attr in obj) {
    queryStringGroup.push(`${attr}=${obj[attr]}`);
  }
  const queryString = queryStringGroup.join("&");
  return queryString ? prefix + queryString : "";
}

/**
 * @description: 获取地址参数
 * @Examples
    getParams("google.com"); // {}
    getParams("http://url.com/page?name=Adam&surname=Smith"); // {name: 'Adam', surname: 'Smith'}
 */
function getParams(url: string): Recordable<string> {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
}

/**
 * @description: 清空页面 url 上的所有参数
 */
function clearParams(win: Window) {
  const url = win.location.href;
  const host = url.split("?")[0];
  // 第二个参数表示title，0不改变title
  win.history.replaceState({}, "", host);
}

export { toQuery, getParams, clearParams };
