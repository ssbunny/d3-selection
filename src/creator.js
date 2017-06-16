import namespace from "./namespace";
import {xhtml} from "./namespaces";

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name) // 普通 html
        : document.createElementNS(uri, name);  // 未指定 namespace 时继承父类
  };
}

function creatorFixed(fullname) {
  return function() { // 指定 namespace 时
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

// API：d3.creator(name) - 返回一个用来创建指定元素名的元素的函数
export default function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}
