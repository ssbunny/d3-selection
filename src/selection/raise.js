function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

// API: selection.raise() 将当前选区中的元素依次移动到最后面
export default function() {
  return this.each(raise);
}

