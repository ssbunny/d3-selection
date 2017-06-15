import defaultView from "../window";

// 下面 3 个都是用在 selection.each 上的 callback

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

// API: selection.style(name[, value[, priority]])
export default function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null // 设为 null 时是 remove
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

// API: d3.style() - 这个方法只取值、不赋值 (4.9 版本新增)
export function styleValue(node, name) {
  return node.style.getPropertyValue(name)  // 先从内联 style 上取
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name); // 取计算值
}

// style 的计算值：
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
