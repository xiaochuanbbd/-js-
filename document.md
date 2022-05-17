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
body==>HTMLBodyElement==>HTMLElement ==>Element ==>Node==> EventTarget ==>Object

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
* textContent :读取或者纯文本,提供了对元素内的文本访问权限，仅文本， 去掉所有< tag >
  * 和innerHTML对比:  使用in呢人HTML我们将其作为HTML插入， 带有所有HTML标签
  * textContent:将其作为文本插入， 所有符号均按字面意义处理。（比较安全）

### hidden属性
指定DOM元素是否可见
* 与display：none；做的事情相同

### 其他：
* value < input>
* href < a>
* id

### 总结
* 每一个DOM节点都是一个特定的类，这些类形成层次结构，完整的属性和方法集是继承的结果
* nodeType  --- 查看节点的类型
* nodeName/tagName 大写，只读
  * tagName 查看元素名 
  * nodeName查看元素名，以及非元素节点名 
* innerHTML  查看元素的HTML内容（解析标签） ，可读可写
* outhrHTML 元素完整的HTML（包括标签），可写的操作不会修改元素本身，可读可写
* nodeValue/data  非元素节点的文本内容，一般使用data，可以被修改
* textContent 元素节点内的文本，去掉< tag >后的，可读可写
* hidden 隐藏属性， 与display：none相同
* document 类： document==> HTMLDocument==>Document==>Node==>EventTarget==>Object
* body类：body==>HTMLBodyElement==>HTMLElement ==>Element ==>Node==> EventTarget ==>Object


## 特性和属性 （Attributes特性 和 properties属性）
### DOM属性
* DOM节点是常规JavaScript对象，可以更改
  * 可以添加属性
  * 可以添加方法（this指向也是点语法前面的）
* 可修改内建属性的原型，例如修改 Element.prototype 为所有元素添加一个新的方法
```javascript
Element.prototype.sayHI= function(){
  alert('hello')
}
document.body.sayHI()

```
* 有很多值
* 大小写敏感

## HTML特性
* 标准特性可以获取
* 非标准特性需要通过方法 
  * elem.hasAttribute(name) --- 检查特性是否存在
  * elem.getAttribute(name) --- 获取这个特性值
  * elem.setAttribute(name,value) ---设置特性值
  * elem.removeAttribute(name) --- 删除特性
  * elem.attributes 获取所有特性
* HTML特征有以下几点特征：
  * 大小写不敏感，在html中大写都是小写
  * 值是字符串

### 属性--特性同步
* 当属性或者特性被修改 对于的属性会自动更新，几个特例除外
  * value：改变HTML特性值 value 会更新DOM属性，更改DOM属性不会更改HTML特性。场景： 当用户行为可能会导致value的变更，但这些操作之后想恢复原始值， 该值就在HTML特性。

### DOM属性是多类型的
* 普遍是字符串
* 也有对象 如style
* input.checked:布尔值
* href，DOM属性是一个完整的URL，getAttribute（）是href中的值

### 非标准的特性，dataset
* 支持自己书写HTML特性
* 所有data-开头的特性均被保留供程序员使用，他们可在dataset属性中使用
  * data-vue 通过： elem.dataset.vue读取
  * data-vue-react 通过：elem.dataset.vueReact 驼峰命名法
  * 可读取，可修改


## 修改文档 Document
### 创建一个元素
* document.createElement('div') 使用给定的标签，创建一个元素节点
* ducument.createTextNode('here i am') 使用给定的文本创建一个文本节点

### 插入方法
* node.append(...node or string) 向node的**末尾**插入节点或者字符串
* node.prepend(...node or string) 向node的**开头**插入节点或者字符串
* node.before(...node or string) 向node的**前面**插入节点或者字符串
* node.after(...node or string) 向node的**后面**插入节点或者字符串
* node.replaceWith(...node or string) 将node**替换**为给定的节点或者字符串
* 插入的文字都作为文本插入，不会作为html代码。因此会省略< >

#### insertAdjacentHTML/Text/Element
1. **elem.insertAdjacentHTML(where,html)** 使用最多  插入的是 html 
 * beforebegin 将html插入到elem前
 * afterbegin 将html插入到elem开头
 * beforeend 将html插入到element 开头
 * afterend 将html插入到elem后
2. elem.insertAdjacentText(where,text) 插入的是 text文本
3. elem.insertAdjacentElement(where, elem) 插入的是 一个元素

### 节点移除
* node.remove()
**元素交换，一个元素移动到另外一个地方，无需从原来的位置删掉， 所有的插入方法都会自动从旧位置删除该元素**

### 节点克隆
elem.cloneNode(true/false)
* true: 深克隆，具有所有特性和子元素
* false 不包括子元素
### DocumentFragment
特殊的DOM 节点，原来传递节点列表的包装器（wrapper）
可以向其附加其他节点，但当我么将其插入某个位置时候，则会插入其内容
### 久远的其他insert/remove方法
* parentElem.appendChild(node) 在parentElem最后添加一个node为子元素
* parentElem.insertBefore（node,nextSibing）在parentElem的nextSibing前插入node
* parendElem.replaceChild(node,oldChild) 将parendElem的后台中的oldChild替换为node
* parendElem.removeChild(node) 移除node
 这些方法都会返回插入/删除的节点

 ### document.write 
* 将html写入页面
* 只在页面加载时工作
* 不涉及dom的修改


###  总结
* 创建节点的方法
  * document.createElement(tag) 用给定的标签创建一个元素节点
  * document.creareTextNode(value) 创建一个文本节点 （很少使用）
  * elem.cloneNode(deep) 克隆节点， deep =true 深克隆
* 插入和移除节点的方法
  * node.append(nodes or string) 在node末尾插入
  * node.prepend(node or string) 在node开头插入
  * node.before(node or string) 在node之前插入
  * node.after(node or string) 在node之后插入
  * node.replaceWirh(node or string) 替换node
  * node.remove() 移除node
* 旧时的插入和移除节点
  * parent.appendChild(node)
  * parent.insertBefore(node,nextSibing)
  * parent.removeChild(node)
  * parent.replaceChild(newElem,node)
* elem.insertAdjacentHTML(where,html)
  * beforebegin 将html插入到elem前面
  * afterbegin 将html插入到elem后面
  * beforeend 将html插入到elem开头
  * afterend 将html插入到elem末尾
* 