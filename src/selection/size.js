// 当前选区大小
export default function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}
