// 当前选区大小，不包含空元素
export default function() {
  var size = 0;
  this.each(function() { ++size; }); // each 操作会跳过空元素
  return size;
}
