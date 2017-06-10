import selection_select from "./select";
import selection_selectAll from "./selectAll";
import selection_filter from "./filter";
import selection_data from "./data";
import selection_enter from "./enter";
import selection_exit from "./exit";
import selection_merge from "./merge";
import selection_order from "./order";
import selection_sort from "./sort";
import selection_call from "./call";
import selection_nodes from "./nodes";
import selection_node from "./node";
import selection_size from "./size";
import selection_empty from "./empty";
import selection_each from "./each";
import selection_attr from "./attr";
import selection_style from "./style";
import selection_property from "./property";
import selection_classed from "./classed";
import selection_text from "./text";
import selection_html from "./html";
import selection_raise from "./raise";
import selection_lower from "./lower";
import selection_append from "./append";
import selection_insert from "./insert";
import selection_remove from "./remove";
import selection_datum from "./datum";
import selection_on from "./on";
import selection_dispatch from "./dispatch";

// 选区的工作原理： https://bost.ocks.org/mike/selection/

export var root = [null];

// 表示一个 d3 选区，框架内部使用
// 选区的概念消化了一个或多个DOM结果的差异，不论筛选结果是多少，都在一个选区内
export function Selection(groups, parents) {
  this._groups = groups; // [[]]
  this._parents = parents; // []
}


// 根据 new 操作符的传递特性，同时 selection 与 Selection 相同原型，
// 则 d3.selection 可以用来做如下检测：
//   d3.selection() instanceof d3.selection --> true
//   d3.select('p') instanceof d3.selection --> true
// 直接执行该函数得到的是 documentElement 的选区
function selection() {
  return new Selection([[document.documentElement]], root);
}

// 内置原型方法。可以通过 d3.selection.prototype 扩展。
Selection.prototype = selection.prototype = {
  constructor: Selection,  // <--- 注意
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

export default selection;


/* 
  关于 new 操作符的特性：
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
  
  function Foo (arg) {
    this.foo = arg;
  }

  function Bar(arg) {
    return new Foo(arg);
  }

  var foo = new Foo('foo');
  var bar = new Bar('bar');
  var barFn = Bar('barFn');

  console.log(bar instanceof Foo);    // true
  console.log(bar instanceof Bar);    // false
  console.log(barFn instanceof Foo);  // true
  console.log(barFn instanceof Bar);  // false

  console.log(foo.__proto__===bar.__proto__);    // true
  console.log(bar.__proto__===barFn.__proto__);  // true
  console.log(foo.__proto__===Foo.prototype);    // true
 */