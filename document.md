## 浏览器环境规格
### window
* 是JavaScript代码的全局对象
* 代表了浏览器窗口，并提供了控制它的方法

### 文档对象模型 （DOM)
* 将所有页面内容表示为可修改的对象，document对象是页面的主要“入口点”，我们可以使用它来更改或者创建页面上的任何内容
* DOM不仅仅用于浏览器，有的非浏览器的设备也是用dom

### 浏览器对象模型 BOM
表示由浏览器（主机环境）提供的用于处理文档、（document）之外的内容的其他对象
* navigator提供了有关浏览器和操作系统的背景信息
* locatiion对象允许我们读取当前URL, 并可以将浏览器定向到新的url
* alert ,confirm,prompt 也是BOM一部分，代表与用户通信的纯浏览器方法

### DOM树
* HTML文档的主干是标签
* 每一个HTML标签都是要一个对象， 嵌套的标签是闭合标签的“子标签 （children）”。文本也是一个对象

### DOM树结构
* 标签被称为元素节点
* 文本节点text：元素内的文本
* 注释comment--也会成为DOM的一部分

### 浏览器的自动修正
* 文件中只有一个单词，浏览器会把他包装到html和body中，并且添加head
* 没有关闭的标签，浏览器会再读取标签是填补缺失的部分

## 遍历DOM
* < html > = document.documentElement
* < body > = document.body
* < head > = document.head
**body的值可能是null，脚本在head中的情况，脚本访问不到document.body** 
* 在document世界中， null==不存在

### 子节点childNodes，fristChild，lastChild
* 子节点： 对应的是直系的子元素， 完全被嵌套在给定的元素中
* 子孙元素： 嵌套在给定元素中的所有元素，包括子元素，以及子元素的子元素等

* childNodes是一个集合，列出了所有的子节点， 包括文本节点
* firstChild和lastchild属性是访问第一个和最后一个子元素
* hasChildNodes检查节点是否有子节点 返回值 ：true、false

### DOM集合
* childNodes 是一个集合，并不是一个数组
* 可以使用for...of 循环，因为集合是可迭代的，提供了所需要的的Symbol.interator属性
* 无法使用数组的方法，因为不是数组，需要使用数组的方法 请使用 Array.from（）转换为真数组
* DOM集合是刻度的，不能使用childNodes[i ]去替换子节点
* DOM集合是实时的
* 不要使用for...in来遍历集合

### 兄弟节点和父节点（不单指元素节点）
* 兄弟节点是指同一个父节点的节点 下一个兄弟节点： nextSibing，上一个：perviousSibling
* 父节点：parentNode

### 纯元素节点 （仅指元素节点）
* 元素节点的子带节点： children
* 第一个子元素节点：firstElementChild 
* 最后一个子元素节点： lastElementChild
* 兄弟元素节点：下一个： nextElementSibling，上一个：perviousElementSibling
* 父元素节点：parentElement

**一般parentNode和parentElement属性通常是一样的：获取父节点。**
唯一例外：
alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null

### 表格元素
* table.rows 获取表格行组成的集合 可使用 table.rows[0]获取
* table.caption/tHead/tFoot — 引用元素 < caption>，< thead>，< tfoot>。
* thead，tbody,tfoot元素提供了rows属性
  * tbody.rows表格内部tr合集
* tr
  * tr.cells — 在给定 <tr> 中的 <td> 和 <th> 单元格的集合。
  * tr.sectionRowIndex — 给定的 <tr> 在封闭的 <thead>/<tbody>/<tfoot> 中的位置（索引）。
  * tr.rowIndex — 在整个表格中 <tr> 的编号（包括表格的所有行）
* td和th
  * td.cellIndex 封闭tr中单元格的编号

## 精准搜索 
* document.getelementById(css) 或者直接使用id
PS:直接使用id。如果有js赋值的情况下，优先js(一般不用这个)
* elem.querySelectAll(css)，最通用方法,返回给定element中与给定css选择器匹配的所有元素（合集）
  * 适配任何选择器
  * 可以使用伪类
* elem.querySelector(css) 调用返回选择器选择的第一个元素
* elem.matches（css） 检查elem是否与给定的CSS选择器匹配，返回值 true/false
* elem.closest(css) 查找与css选择器匹配的最近的祖先 
* getElementsBy*
  * getElementsByTagName(tag) 查找具有给定标签的元素，并返回他们的集合， tag参数可以是 “*”
  * ele.getElementsByClassName(classname) 返回具有给定class类的元素
  * ele.getElementsByName（name) 返回在文档范围内具有给定name特征的元素
  * 以上都返回一个集合
  * 以上都是elements不是element
  * 实时的集合
**与querySelectAll的区别是 querySelectAll是静态的集合，而getElementsBy *是动态的**

## 节点属性：type，tag,content
### DOM节点类
* EventTarget 类---根抽象类，作为让所有DOM节点都支持事件
* Node ----抽象类，充当DOM节点的基础， 提供树的核心
* Element ---DOM元素的基本类，提供了元素记得导航
* HTMLElement ---所有HTML元素的基本类，各种HTML元素均继承自他
  * HTMLInputElement 
  * HTMLBodyElement
  * HTMLAnchorElement 
**节点的全部属性和方法都是继承的结果**
DOM节点是常规的JavaScript对象，他们使用基于原型的类进行继承
HTMLBodyElement==>HTMLElement ==>Element ==>Node==> EventTarget ==>Object

### nodeType属性
* ele.nodeType==1 元素节点
* ele.nodeType==3 文本节点
* ele.nodeType==9 document对象
* 只能读取 不能修改

### 标签 nodeName/tagName
* tagName属性仅适用于element节点
* nodeName是为任意Node定义的
  * 对于元素与tagName一样
  * 其他节点类型 有对于节点类型的字符串
* 如果在元素节点上使用。两者没有区别
* 标签名始终大写

### innerHTML
* 允许将匀速中的HTML获取为字符串的形式
* 也可以修改塔
* 使用innerHTML插入script标签。脚本不会执行
* innerHTML += 会进行完全的重写
* innerHTML+=做的工作：移出旧的内容，添加新的innerHTML
因为内容已“归零”并从头开始重写，因此所有的图片和其他资源都将重写加载。

### outerHTML：元素完成html
* 读取时返回包含元素的完整HTML
* 写入时： 不会改变元素，直接替换他
* 赋值不会修改DOM元素，而是将其从DOM中删除并在其位置插入新的HTML

### nodevalue、data
获取文本节点的内容
