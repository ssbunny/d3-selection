function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

// API: selection.lower() 将当前选区中的元素依次移动到最前面
export default function() {
  return this.each(lower);
}
