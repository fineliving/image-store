## 第1章 JavaScript简介

***1. 本章内容***

- JavaScript 历史回顾
- JavaScript 是什么
- JavaScript 与ECMAScript 的关系
- JavaScript 的不同版本

***2. 从一个简单的输入验证器发展成为一门强大的编程语言。***

- 1995年JavaScript 诞生，完成在客户端完成一些基本的验证任务，成为常见浏览器必备的一项特色功能。
- 自此以后，具备了与浏览器窗口及其内容等几乎所有方面**交互**的能力。
- 今天，全面的编程语言，能够处理`复杂的计算和交互`，拥有了**闭包**、**匿名（lamda，拉姆达）函数**，甚至**元编程**等特性。

***3. 是一门非常简单的语言，又是一门非常复杂的语言。***

- 学会使用它只需片刻功夫
- 要想全面理解和掌握JavaScript，关键在于弄清楚它的**本质**、**历史**和**局限性**。

### 1.1 JavaScript简史

***1.  JavaScript简史：***

| 时间   | 内容                                                         |
| ------ | ------------------------------------------------------------ |
| 1995   | Netscape公司 <br />发布的Netscape Navigator 2 开发一种名为LiveScript 的脚本语言，搭上媒体热炒Java 的顺风车，临时把LiveScript 改名为JavaScript。<br /> JavaScript 1.0 |
|        | Netscape Navigator 3  <br />JavaScript 1.1 <br />微软1996 年8 月在其Internet Explorer 3 中加入了名为JScript，这个重大举措同时也标志着JavaScript 作为一门语言，其开发向前迈进了一大步。<br /> **JavaScript的标准化问题被提上了议事日程**。 |
| 1997   | 以JavaScript 1.1 为蓝本 <br />被提交给了欧洲计算机制造商协会（**ECMA**，European Computer     Manufacturers Association）。 <br />指定39 号技术委员会（TC39，Technical Committee #39）负责“ 标准化一种通用、跨平台、供应商中立的脚本语言的语法和语义”（ http://www.ecmainternational.org/memento/TC39.htm）。 <br />**TC39** 由来自Netscape、Sun、微软、Borland 及其他关注脚本语言发展的公司的程序员组成 <br />完成了ECMA-262——定义一种名为ECMAScript（发音为“ek-ma-script”）的新脚本语言的标准。 |
| 第二年 | **ISO/IEC**（International     Organization for Standardization and International Electrotechnical Commission，国标标准化组织和国际电工委员会）也采用了ECMAScript 作为标准（即ISO/IEC-16262） <br />自此以后，浏览器开发商就开始致力于将ECMAScript 作为各自JavaScript 实现的基础。 |


### 1.2 JavaScript实现

***1. JavaScript三个不同的部分组成：***

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）

![three-parts](/Users/liyang/项目/我的笔记本/images/03.JS/javascript高级程序设计/three-parts.png)

#### 1.2.1 ECMAScript

***1. ECMA-262标准：***

ECMA-262 定义的只是这门语言的基础，而在此基础之上可以构建更完善的脚本语言。

- 由ECMA-262 定义的ECMAScript 与Web 浏览器没有依赖关系    
- 不包含输入和输出定义。    
- Web 浏览器只是ECMAScript 实现可能的宿主环境之一。其他宿主环境包括Node（一种服务端JavaScript 平台）和Adobe Flash。       

***2. ECMA-262标准组成***：

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 对象

***3. ECMA-262标准版本：***

| 版本            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| ECMA-262 第1 版 | ECMA-262 的第1 版本质上与Netscape的JavaScript 1.1 相同 <br />小的改动：  <br />支持Unicode 标准（从而支持多语言开发） <br />对象与平台无关的（Netscape JavaScript 1.1 的对象在不同平台中的实现不一样，例如Date 对象） |
| ECMA-262 第2 版 |                                                              |
| ECMA-262 第3 版 | 对该标准第一次真正的修改 <br />修改:字符串处理、错误定义和数值输出。<br />新增:正则表达式、新控制语句、try-catch异常处理的支持 <br />第3 版标志着ECMAScript 成为了一门真正的编程语言。 |
| ECMA-262 第4 版 | 小组认为第4 版给这门语言带来的跨越太大了<br />提出了一个名为ECMAScript 3.1 的替代性建议<br />能够在现有JavaScript 引擎基础上实现 ES3.1 附属委员会获得的支持超过了TC39，ECMA-262 第4 版在正式发布前被放弃。 |
| ECMA-262 第5 版 | ECMAScript 3.1 成为ECMA-262 第5 版，并于2009 年12 月3 日正式发布。 <br />新增：括原生JSON 对象（用于解析和序列化JSON 数据）、继承的方法和高级属性定义 <br />包含一种严格模式，对ECMAScript 引擎解释和执行代码进行了补充说明。 |

***4. ECMA-262标准兼容：***

ECMA-262 给出了ECMAScript 兼容的定义。要想成为ECMAScript 的实现，则该实现必须做到：

- 支持ECMA-262 描述的所有“类型、值、对象、属性、函数以及程序句法和语义” 
  支持Unicode 字符标准。
- 此外，兼容的实现还可以进行下列扩展。
  - 添加ECMA-262 没有描述的“更多类型、值、对象、属性和函数”。ECMA-262 所说的这些新增特性，主要是指该标准中没有规定的新对象和对象的新属性。     
  - 支持ECMA-262 没有定义的“程序和正则表达式语法”。（也就是说，可以修改和扩展内置的正则表达式语法。）           

为兼容实现的开发人员基于ECMAScript 开发一门新语言提供了广阔的空间和极大的灵活性，这也从另一个侧面说明了ECMAScript 受开发人员欢迎的原因。

***5. Web 浏览器对ECMAScript 的支持：***

2008 年，五大主流Web 浏览器（IE、Firefox、Safari、Chrome 和Opera）全部做到了与ECMA-262兼容。

![browser-bugs](/Users/liyang/项目/我的笔记本/images/03.JS/javascript高级程序设计/browser-bugs.png)

#### 1.2.2 文档对象模型（DOM）

***DOM定义：***

文档对象模型（DOM，`Document Object Model`）是**针对XML 但经过扩展用于HTML 的应用程序编程接口**（**API**，Application  Programming Interface）。  

DOM把整个页面映射为一个多层节点结构:

- 通过DOM 创建的这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权。
- 借助DOM 提供的API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。

<img src="/Users/liyang/项目/我的笔记本/images/03.JS/javascript高级程序设计/multi-node.png" alt="multi-node" style="zoom:50%;" />

***2. 为什么要使用DOM？***

在Internet Explorer 4 和Netscape Navigator 4 分别支持的不同形式的DHTML（Dynamic HTML）基础上，开发人员首次**无需重新加载网页，就可以修改其外观和内容**了。

由于Netscape 和微软在开发DHTML 方面各持己见，过去那个只编写一个HTML 页面就能够在任何浏览器中运行的时代结束了。

此时，负责制定Web 通信标准的**W3C**（World Wide Web Consortium，万维网联盟）**开始着手规划DOM**。

***3. DOM级别：***

| 级别    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| DOM1 级 | DOM1 级（DOM Level 1）于1998 年10 月成为W3C 的推荐标准。DOM1 级由两个模块组成：DOM核心（DOM Core）和DOM HTML。<br />**DOM 核心**:规定的是如何映射基于XML的文档结构，以便简化对文档中任意部分的访问和操作。<br />**DOM HTML**:在DOM核心的基础上加以扩展，**添加了针对HTML 的对象和方法。** <br />注意，DOM 并不只是针对JavaScript 的，很多别的语言也都实现了DOM。 |
| DOM2 级 | DOM1 级的目标**主要是映射文档的结构**，DOM1  级中的DOM核心模块也经过**扩展**开始支持XML 命名空间。<br />那么DOM2 级的目标就要宽泛多了。DOM2 级引入了下列新模块，也给出了众多**新类型**和**新接口**的定义。<br />**DOM 视图（DOM Views）**：定义了跟踪不同文档（例如，应用CSS 之前和之后的文档）视图的接口；DOM 事件（DOM Events）：定义了事件和事件处理的接口；<br />**DOM 样式（DOM Style）**：定义了基于CSS 为元素应用样式的接口；<br />**DOM 遍历和范围（DOM Traversal  and Range）**：定义了遍历和操作文档树的接口。 |
| DOM3 级 | 对DOM 核心进行了扩展，开始支持XML 1.0 规范，涉及XML Infoset、XPath和XML Base。<br />**DOM 加载和保存（DOM Load and Save）**：定义以统一方式加载和保存文档的方法<br />**DOM 验证（DOM Validation）**：定义验证文档的方法 |

***4. 其他DOM 标准：***

下面列出的语言**都是基于XML** 的，每种语言的DOM 标准都添加了与特定语言相关的新方法和新接口：

-  **SVG**（Scalable Vector Graphic，**可伸缩矢量图**）1.0
-  MathML（Mathematical Markup Language，数学标记语言）1.0
-  SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）。   

只有上面列出的几种语言是W3C 的推荐标准。
***5. Web 浏览器对DOM 的支持：***

支持DOM 已经成为浏览器开发商的首要目标，主流浏览器每次发布新版本都会改进对DOM的支持。
![browser-bugs-dom](/Users/liyang/项目/我的笔记本/images/03.JS/javascript高级程序设计/browser-bugs-dom.png)    

#### 1.2.3 浏览器对象模型（BOM）

***1. BOM定义：***

支持可以访问和操作浏览器窗口的浏览器对象模型（BOM，Browser Object  Model）。  从根本上讲，BOM 只处理**浏览器窗口**和**框架**；但人们习惯上也把所有**针对浏览器的JavaScript 扩展算作BOM的一部分**。  

下面就是一些这样的扩展：

- 弹出新浏览器窗口的功能；
- 移动、缩放和关闭浏览器窗口的功能；
- 提供**浏览器详细信息的navigator 对象**；
- 提供浏览器所**加载页面的详细信息的location 对象**；
- 提供用户**显示器分辨率详细信息的screen 对象**；
- 对**cookies** 的支持；
- 像**XMLHttpRequest** 和**IE 的ActiveXObject** 这样的自定义对象。

由于没有BOM标准可以遵循，因此每个浏览器都有自己的实现。也存在一些事实标准，例如要有window 对象和navigator 对象等

### 1.3 JavaScript版本

***1. JavaScript 版本***

- 作为Netscape“继承人”的Mozilla 公司，是目前唯一还在沿用最初的JavaScript 版本编号序列的浏览器开发商。
- Netscape/Mozilla 浏览器中JavaScript 版本号的递增过程：

![js-edition](/Users/liyang/项目/我的笔记本/images/03.JS/javascript高级程序设计/js-edition.png)

- 目前，JavaScript 2.0 还没有目标实现。

### 1.4 小结

***1. JavaScript 组成：***

JavaScript 是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：

- ECMAScript，由ECMA-262 定义，提供核心语言功能；
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。       

***2. 浏览器支持情况：***

五个主要浏览器（IE、Firefox、Chrome、Safari 和Opera）中都得到了不同程度的支持：

- 所有浏览器对ECMAScript 第3 版的支持大体上都还不错
- 所有浏览器对ECMAScript 5 的支持程度越来越高
- 所有浏览器对DOM 的支持则彼此相差比较多
- 所有浏览器对已经正式纳入HTML5 标准的BOM来说，实现了某些众所周知的共同特性，但其他特性还是会因浏览器而异。

