// element.matches
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

// element.matches() 存在兼容性问题。以下是 polyfill 代码：
if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

export default matcher;
