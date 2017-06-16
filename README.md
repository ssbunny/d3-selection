# d3源码学习笔记之 d3-selection

记录学习 d3.v4.js 过程中，在源码中的注释。列出已经看过的源码:

* [x] constant.js - 构造常数
* [x] creator.js - 获得创建元素函数的函数，多用于 append/insert 回调
* [ ] local.js
* [x] matcher.js - 子选择器函数，参见 selection/filter.js
* [ ] mouse.js
* [x] namespace.js - 取命名空间
* [x] namespaces.js - 已注册的命名空间前缀
* [ ] point.js
* [x] select.js - 获得选区
* [x] selectAll.js - 获得选区，选区中包含一组节点
* [x] selector.js - 子选择器函数，参见 selection/select.js
* [x] selectorAll.js - 子选择器函数，参见 selection/selectAll.js
* [ ] sourceEvent.js
* [ ] touch.js
* [ ] touches.js
* [x] window.js - 获得 window 对象
* [x] selection/append.js - 添加元素
* [x] selection/attr.js - 获取/设置属性
* [ ] selection/call.js
* [x] selection/classed.js - 处理样式
* [ ] selection/data.js
* [x] selection/datum.js - 处理单一节点的数据
* [ ] selection/dispatch.js
* [x] selection/each.js - 为每个元素执行回调函数
* [ ] selection/empty.js
* [ ] selection/enter.js
* [ ] selection/exit.js
* [x] selection/filter.js - 过滤选区
* [x] selection/html.js - 获取/设置节点的 innerHTML 值
* [x] selection/index.js - 选区
* [x] selection/insert.js - 插入元素
* [x] selection/lower.js - 将当前选区中的元素依次移动到最前面
* [x] selection/merge.js - 合并选区
* [x] selection/node.js - 找到选区内第一个非空元素
* [x] selection/nodes.js - 找到选区内所有非空元素
* [ ] selection/on.js
* [x] selection/order.js - 按当前选区的顺序重新组织 DOM 结构
* [x] selection/property.js - 获取/设置属性
* [x] selection/raise.js - 将当前选区中的元素依次移动到最后面
* [x] selection/remove.js - 删除元素
* [x] selection/select.js - 获得子选区
* [x] selection/selectAll.js - 获得子选区
* [x] selection/size.js - 获得当前选区大小，不包含空元素
* [x] selection/sort.js - 重排选区 + order 操作
* [ ] selection/sparse.js
* [x] selection/style.js - 处理内联样式
* [x] selection/text.js - 获取/设置节点的 textContent 值