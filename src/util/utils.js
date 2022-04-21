/*
 * @Description: 
 * @Author: sunyuanxin
 * @Date: 2020-11-27 11:12:56
 */

/**
 * 时间格式化
 * @param {*} inputDate  输入时间（date）
 * @param {*} formatter  格式化类型，默认yyyy-MM-dd hh:mm:ss
 */
export const dateFormat = (date, formatter = "yyyy-MM-dd hh:mm:ss") => {
  if(date == null || date == '') return '';
  const o = {
    "M+": date.getMonth() + 1, // 月
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 时
    "m+": date.getMinutes(), // 时
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    "S": date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(formatter)) {
    formatter = formatter.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(formatter)) formatter = formatter.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return formatter;
}
