// "foo bar" --> ["foo", "bar"]
function classArray(string) {
  return string.trim().split(/^|\s+/); // 没搞懂 ^| 还有什么作用？
}

// 取 classList, 含 polyfill 代码
// ⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎
function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
// ⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎⬆︎︎︎


// 增加样式
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

// 删除样式
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

//// 以下三个为传给 selection.each 的回调函数 ////

function classedTrue(names) { // 设置为 true 时增加样式
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) { // 设置为 false 时删除样式
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() { // 回调函数要返回 true|false
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

// API: selection.classed(names[, value])
export default function(name, value) {
  var names = classArray(name + "");

  // 1) 检测某样式名是否存在
  if (arguments.length < 2) { // 类似于 hasClass('foo') 方法
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  // 2) 设置样式，参数为 true|false|function
  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}
