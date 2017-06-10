import {Selection} from "./index";
import selectorAll from "../selectorAll";

export default function(select) {
  if (typeof select !== "function") select = selectorAll(select);
  // selectAll 操作会破坏原有的 groups
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) { // 不向子节点传播数据
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  // 改变 parents
  return new Selection(subgroups, parents);
}
