/*
 * @Author: Jiamaoa
 * @Date: 2023-02-15 17:30:36
 * @LastEditors: Jiamaoa
 * @LastEditTime: 2023-02-15 18:42:59
 * @Description: file content
 * @FilePath: \tao-algorithm\JS\dome01.js
 */
// 问题一：要求在控制台输出 “打印成功！”
// if (a == 1 && a == 2 && a == 3) {
//   console.log("打印成功！");
// }
//
// 编写
// let a = {
//   num: 0,
//   toString: function () {
//     return ++this.num;
//   }
// };
// if (a == 1 && a == 2 && a == 3) {
//   console.log("打印成功！");
// }

// 问题二：要求在控制台输出 “打印成功！”
// if (a === 1 && a === 2 && a === 3) {
//   console.log("打印成功！");
// }
//
// 编写
// let num = 0;
// Object.defineProperty(window, "a", {
//   get() {
//     return ++num;
//   }
// });
// if (a === 1 && a === 2 && a === 3) {
//   console.log("打印成功！");
// }

// 问题三：以下代码在控制台的输出是什么？
console.log(({} + {}).length);
// 30  执行：(({}).toString() + ({}).toString()).length --> ('[object Object]' + '[object Object]').length
// 解析：加法触发了隐式类型转换，调用了toString()方法

console.log(([] + []).length);
// 0  执行：([].toString() + [].toString()).length --> ('' + '').length
// 加法触发了隐式类型转换，调用了toString()方法, 值得注意的是数组有自己的toString方法

console.log(function () {});
// 0 执行：输出形参个数

function test(a, b, c) {
  console.log(arguments.length);
  // 4 执行：arguments 对应实参
}
test(1, 2, 3, 4);
console.log(test().length);
// 3 执行：输出形参个数
