import {Selection} from "./index";
import matcher from "../matcher";

// 过滤选区
export default function(match) {
  // 默认使用 element.matches 并通过指定的 selector string 选择
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node); // 改变索引
      }
    }
  }

  // 不改变 parents
  return new Selection(subgroups, this._parents);
}
