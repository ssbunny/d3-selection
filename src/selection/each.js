// 为每个元素执行回调函数
export default function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      // 会跳过空元素
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}
