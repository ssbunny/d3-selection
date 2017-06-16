function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

// 删除元素
export default function() {
  return this.each(remove);
}
