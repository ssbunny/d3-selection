import {Selection} from "./index";
import selector from "../selector";

export default function(select) {
  if (typeof select !== "function") select = selector(select);
  // select 操作不会破坏原有的 groups
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        // 由于 select 操作只选中一个后代节点，故可以传递数据给子节点
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode; // subnode 可能为 null，因为不破坏 groups 该操作是安全的
      }
    }
  }

  // 并未改变 parents
  return new Selection(subgroups, this._parents);
}
