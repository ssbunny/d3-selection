import creator from "../creator";
import selector from "../selector";

function constantNull() {
  return null;
}

// API: selection.insert(type[, before])
// before 可以是 string 型选择器、函数或空
export default function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    // this.insertBefore(node, null) 相当于 this.appendChild(node)
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
