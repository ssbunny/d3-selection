// 处理独立元素的数据
export default function(value) {
  return arguments.length
      ? this.property("__data__", value) // 有参时赋值
      : this.node().__data__; // 无参时取值
}
