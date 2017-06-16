function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

// API: selection.html([value])
// 获取/设置节点的 innerHTML 值 (源码结构同 text.js)
export default function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

// 注1： SVG 元素不支持 innerHTML
// 注2： 使用 selection.append 或 selection.insert 才能创建数据驱动的点节内容
