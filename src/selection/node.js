export default function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;  // 找到选区内第一个非空元素
    }
  }

  // 空选区会返回 null
  return null;
}
