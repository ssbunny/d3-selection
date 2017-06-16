// API: selection.order()
// 这个方法实际上是按当前选区的顺序，重新组织 DOM 结构
export default function() {
  
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        // 实际产生 DOM 操作
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  // 不改变选区
  return this;
}
