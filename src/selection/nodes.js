// 找到选区内所有非空元素
export default function() {
  // 为什么作者宁愿遍历两次数组也不用 push
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}
