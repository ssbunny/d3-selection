// 获得 window 对象
export default function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}
// https://stackoverflow.com/questions/9183555/whats-the-point-of-document-defaultview
// https://developer.mozilla.org/en-US/docs/Web/API/Window
// https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
