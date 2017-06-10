import {Selection, root} from "./selection/index";

// d3.select() 获得选区
export default function(selector) {
  return typeof selector === "string"
      // string 时使用 querySelector，故可以用 Sizzle 等引擎置换
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      // 这种情况约定的是节点元素，直接使用其引用很方便
      : new Selection([[selector]], root);
}