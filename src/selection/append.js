import creator from "../creator";

export default function(name) {
  // 默认使用  creator 函数, 参见 creator.js
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    // 选区 this 相当于是待创建元素的 parent
    return this.appendChild(create.apply(this, arguments));
  });
}

/*
 * 以下代码等价，通过看源码，第三种方式其实性能最好。
 * 当然从 API 角度还是第一种方式便捷：
 * 
 *   1)  d3.selectAll("p").append("div");
 *   2)  d3.selectAll("p").append(function() {
 *           return document.createElement("div");
 *       });
 *   3)  d3.selectAll("p").select(function() {
 *           return this.appendChild(document.createElement("div"));
 *       });
 */