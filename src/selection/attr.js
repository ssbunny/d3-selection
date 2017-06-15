import namespace from "../namespace";

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

////----------- 上面均是给 selection.each 用的回调函数，用来实现不同的赋值方式

// API: selection.attr(name[, value])
export default function(name, value) {
  var fullname = namespace(name); // 1)可以处理带命名空间的属性，如 xlink:href

  // 2)获取属性，注意这里是根据形参数来判断的，故
  // selection.attr('foo', undefined) 与 selection.attr('foo')
  // 会表现出不同的行为，前者赋值，后者取值
  if (arguments.length < 2) {
    // 只获取首节点
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  // 3)设置属性
  return this.each((value == null // 3.1) value 为 null 或 undefined 会清空该属性
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      // 3.2) value 可以传入 callback 函数
      ? (fullname.local ? attrFunctionNS : attrFunction)
      // 3.3) value 可以是常量值
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}
