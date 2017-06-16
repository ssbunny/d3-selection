function textRemove() { // 清空
  this.textContent = "";
}

function textConstant(value) { // 赋值
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) { //  通过回调函数赋值
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

// API: selection.text([value])
// 获取或设置节点的 textContent 值
export default function(value) {
  return arguments.length
      ? this.each(value == null // 赋值 null 可以清空
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}
