function none() {}

// 这个函数主要给选区内部使用，对应 element.querySelector
export default function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}
