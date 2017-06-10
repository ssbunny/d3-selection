import {Selection, root} from "./selection/index";

// d3.selectAll() 获得选区
export default function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
}
