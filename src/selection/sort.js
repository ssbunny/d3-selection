import {Selection} from "./index";

// API: selection.sort(compare)
// 重排选区 + order 操作
export default function(compare) {
  if (!compare) compare = ascending;

  /* 
  * TIP: 动态类型转换时，true 转成 1, false 转成 0
  * false - true = -1， 故 !a - !b 可以把存在的元素排前面，不存在的排后面
  */
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b; // 存在的排前面
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    // 排序操作是在每个 group 内进行的，不一定是稳定的排序算法
    sortgroup.sort(compareNode);
  }

  // 会改变选区，不改变 parents
  return new Selection(sortgroups, this._parents).order();
}

// 为了不整个引入 d3-array 模块，这个代码是 copy 来的，
// 不知道以后的构建工具能不能解决类似问题？
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
