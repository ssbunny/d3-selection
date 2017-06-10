function empty() {
  return [];
}

// 这个函数主要给选区内部使用，对应 element.querySelectorAll
export default function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}
