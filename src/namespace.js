import namespaces from "./namespaces";

// 取命名空间， 参见 namespaces.js
// d3.namespace("svg:text"); --> {space: "http://www.w3.org/2000/svg", local: "text"}
export default function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
}
