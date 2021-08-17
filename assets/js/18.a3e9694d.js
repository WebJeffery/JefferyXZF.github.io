(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{197:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("我们经常说要考虑浏览器的兼容性，这是因为不同的浏览器它的引擎不一样，市面上常见的的浏览器引擎有：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("关于渲染原理，来看这张图，如下：")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("上图就是整个渲染流程的总体流程图，下面我们来一一介绍渲染流程当中的每个步骤。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("这段代码经过 HTML 解析器处理之后，生成对应的 DOM 树结构如下：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("接着由 DOM 树和 CSSOM 树一起附着合成渲染树( Render Tree )，显而易见地我们可以得到这个公式：")]),t._v(" "),s("p",[t._v("DOM Tree + CSSOM Tree= Render Tree。同样这里 Render 树我们也可以简单用图来表示一下，如下：")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("图中左侧为 DOM 树，右侧是 Render 树，可以看到 Render 树结构与 DOM 树是非常相似的，但不是一一对应的。每一个节点是一个 Render Object，包含了我们在样式表中设置的样式，样式的宽高和具体位置是通过Layout (重排)计算得出。")]),t._v(" "),s("p",[t._v("Tips：")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("以上就是浏览器整个渲染流程的介绍。了解了流程之后，我们就可以有针对性地对浏览器的渲染过程提出相应的优化建议。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("在前面的渲染原理中我们可以得出这样一个结论：JavaScript 既会阻塞 HTML 解析，也会阻塞 CSS 解析。因此我们可以改变 JavaScript 的加载方式或者加载时机来进行优化：")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("如果设置为 defer，那么整个 JavaScript 的加载是异步的，并且在 DOMContentLoaded 事件之后才会执行当中的代码；如果设置为 async，整个 JavaScript 的加载是异步的，但是不会阻塞浏览器的任何操作，加载完成后执行相关代码。所以这里的最佳实践是 async 执行时机不确定，不建议用于业务代码，但可用于单独的代码，如第三方统计代码。而 defer 是在 DOMContentLoaded 事件之后执行，所以 defer 一般用于业务代码。")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("由于我们使用 React、Vue 框架，打包生成的 JS 文件很大，首屏等到这个大文件下载完成之后才能开始渲染，如果移动端网络不好，这样容易导致白屏的出现。接下来使用骨架屏优化我们首屏的交互。")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("骨架屏就是我们页面在未完成加载的时候，先用一些简单图形大概勾勒出整个页面，给用户视觉上更好的体验，而不是整个页面都是白屏。等到资源加载完毕，再把骨架屏替换掉即可。整个过程我们用一张图来表示就非常容易理解，如下：")]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("上图是在饿了么 APP 当中截的图，这里就是使用骨架屏来给用户一种一直在加载的感觉，大大提升了用户体验。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("最简单的方案就是就是根据首页的大致轮廓，然后用 Photoshop 绘制静态的骨架屏图片。先把骨架屏静态图片插入到了 HTML 当中，然后当资源加载完毕，我们再用真正的内容替换掉骨架屏，这里替换时机就是当所有资源都加载完毕，对应的事件就是 onLoad。我们只要监听这个事件，当它完成进行替换即可。如果是 Vue 的项目，我们则可以选择 mounted 钩子当中进行替换；如果是 React 项目，我们则可以选择 componentDidMount 钩子当中进行替换。")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("这个方式实现原理和上面一样，使用代码绘制更容易扩张和修改")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("使用比较广泛的是 "),s("a",{attrs:{href:"https://github.com/ElemeFE/page-skeleton-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("page-skeleton-webpack-plugin")]),s("OutboundLink")],1),t._v(" 插件，这是一个 Webpack 插件，可以根据具体的页面生成对应的骨架屏。具体的"),s("a",{attrs:{href:"https://github.com/ElemeFE/page-skeleton-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置方案"),s("OutboundLink")],1),t._v("这里写得非常详细，这里不再详细罗列，而且它支持动态调试，对于多个页面的使用非常方便。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[s("code",[t._v("DocumentFragments")]),t._v(" 文档片段存在于"),s("strong",[t._v("内存中")]),t._v("，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Reflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("回流"),s("OutboundLink")],1),t._v("（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。")]),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("重绘( Repaint )和回流( Reflow )是我们在性能优化的时候经常会听到的两个词，这两个词与渲染流程息息相关的。前面在渲染流程提到浏览器把 HTML 解析 DOM，CSS 解析成 CSSOM，然后DOM 和 CSSOM 一起附着合成 Render Tree。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("影响重绘的一般就是和它的外观息息相关的一些属性，如下：")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("触发回流的操作就是改变元素的位置和尺寸")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("最后，放一下总的渲染流程，如下图")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),s("p",[t._v("如上就是 Event Loop 整个流程图，我们可以看到 Event Loop 当中包含 heap stack Microtask Macrotask。下面我们就来一一介绍这些概念。")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),s("p",[t._v("那么这张图很好的对应我上面讲述的整个流程，而且一些疑问看了图之后，相信也可以得到一个比较清晰的解答，下面我们来介绍 Macrotask 和 Microtask。")]),t._v(" "),t._m(43),t._v(" "),t._m(44)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"渲染优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[this._v("#")]),this._v(" 渲染优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器引擎"}},[this._v("#")]),this._v(" 浏览器引擎")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("IE(Trident)")]),t._v(" "),s("li",[t._v("Edge(EdgeHTML)")]),t._v(" "),s("li",[t._v("Chrome(Bink)")]),t._v(" "),s("li",[t._v("Opera(Blink)")]),t._v(" "),s("li",[t._v("Firefox(Gecko)")]),t._v(" "),s("li",[t._v("Safari(Webkit)")]),t._v(" "),s("li",[t._v("UC(U3)")]),t._v(" "),s("li",[t._v("QQ浏览器微信(X5/Blink)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器渲染原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[this._v("#")]),this._v(" 浏览器渲染原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/browser-render.jpg",alt:"渲染流程"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("首先是解析HTML，这个过程主要是把 "),s("code",[t._v("HTML")]),t._v(" 文档解析为 "),s("code",[t._v("DOM")]),t._v(" 树的过程。如果遇到 "),s("code",[t._v("<script>")]),t._v(" 标签会停止解析，先执行标签当中 "),s("code",[t._v("JavaScript")]),t._v("；如果是外联方式，也需要等待下载并且执行完对应的 "),s("code",[t._v("JavaScript")]),t._v(" 代码，然后才能够继续执行解析 HTML 的工作。HTML解析完成后触发 "),s("code",[t._v("DOMContentLoaded")]),t._v(" 事件，这里我们就可以操作 "),s("code",[t._v("DOM")]),t._v(" 了。最后我们来看这样一段代码，如下：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 一段注释 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一个段落"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div1></div>\n  <div id="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('div2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/broswer-parse.jpg",alt:"渲染流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tips")]),this._v("：上图中的 DOM 树节点类型如何获取呢，这里我们可以在 Chrome 当中选中对应元素，然后在控制台中输入 "),e("code",[this._v("$0.constructor")]),this._v("，即可打印出对应的类型，")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("然后是解析 CSS。可以看到解析 "),s("code",[t._v("HTML")]),t._v(" 和解析 "),s("code",[t._v("CSS")]),t._v(" 是并行处理的，也就是这两部分是同时进行的，不然会造成渲染的内容没有对应的样式。解析 "),s("code",[t._v("CSS")]),t._v(" 遇到 "),s("code",[t._v("<script>")]),t._v(" 标签和上面解析 HTML 的处理方法是一样的，这里不在赘述。CSS 解析器将 CSS 解析成 CSSStyleSheet (也被叫做 CSSOM 树)，这里的 CSSOM 树与 DOM 树结构类似。解析对应关系如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/render-css.jpg",alt:"渲染流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/render-tree.jpg",alt:"渲染流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("元素如果被设置为 display:none，在 DOM 树中依然会显示，但是在 Render 树中不会显示；")]),this._v(" "),e("li",[this._v("元素如果被设置为 visibility:none，那么 DOM 树和 Render 树中都会显示；")]),this._v(" "),e("li",[this._v("我们经常说的脱离文档流，其实就是脱离 Render Tree。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"针对渲染原理进行相关优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对渲染原理进行相关优化"}},[this._v("#")]),this._v(" 针对渲染原理进行相关优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在渲染原理当中我们提到，CSS 解析和HTML解析是同步进行的，那么一个 HTML 文档首先解析的肯定是 HTML，然后才是 CSS，这就导致了 HTML 解析完成后，往往需要等待 CSS 解析。如果 CSS 没有解析完成，我们就需要一直等，这里就是 CSS 阻塞了相关的渲染。因此针对这种情况，我们往往把 CSS 样式表全部通过 "),e("code",[this._v("<style>")]),this._v(" 标签内联到网页当中：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("尽量将 "),s("code",[t._v("JavaScript")]),t._v(" 文件放在 body 的底部；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("body")]),t._v(" 中间尽量不要写 "),s("code",[t._v("<script>")]),t._v(" 标签；")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("async")]),t._v(" 属性和 "),s("code",[t._v("defer")]),t._v(" 属性的方式引入。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"首屏优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化"}},[this._v("#")]),this._v(" 首屏优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"骨架屏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏"}},[this._v("#")]),this._v(" 骨架屏")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/render-sketch.jpg",alt:"渲染流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"实现方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现方案"}},[this._v("#")]),this._v(" 实现方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("绘制静态骨架屏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码方式绘制骨架屏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("自动化生成骨架屏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("使用成熟框架")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后一种方法是使用一些成熟的框架，这些框架当中已经自带有骨架屏的组件，我们只要引入即可。比如 Ant-design 的 "),e("code",[this._v("Skeleton")]),this._v(" 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dom-性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-性能优化"}},[this._v("#")]),this._v(" DOM 性能优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("频繁的操作 "),e("code",[this._v("DOM")]),this._v(" 会导致我们页面结果的变化，根据上面的渲染流程，他也会重新跑一遍，所以很影响性能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("优化方案")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("减少不必要的标签数量，避免标签多层嵌套（因为标签嵌套会导致 DOM 树多层循环遍历）")]),t._v(" "),s("li",[t._v("使用语义化的标签，不仅利于浏览器的解析时间，同事对搜索引擎的抓取也十分友好")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("innerHTML")]),t._v(" 或 "),s("code",[t._v("DocumentFragments")]),t._v(" 减少频繁操作 DOM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"避免重绘和回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免重绘和回流"}},[this._v("#")]),this._v(" 避免重绘和回流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后浏览器就可以根据 Render Tree 绘制具体的页面，当 Render Tree 当中有元素的大小、布局、结构等发生改变时，就会触发"),e("strong",[this._v("回流")]),this._v("，每个页面在首次加载的时候都需要进行至少一次回流；当 Render Tree 有元素属性需要更新，这些属性只是影响元素的外观、风格，那么则会触发"),e("strong",[this._v("重绘")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("触发重绘的相关属性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("color、background 相关属性(如：background-color、background-image 等)")]),this._v(" "),e("li",[this._v("outline 相关属性( outline-color、outline-width )、text-decoration")]),this._v(" "),e("li",[this._v("border-radius、visibility、box-shadow")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("触发回流的操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("如何减少重绘与回流")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("减少 "),s("code",[t._v("table")]),t._v(" 表格的使用")]),t._v(" "),s("li",[t._v("操作 DOM，将相关熟悉缓存起来")]),t._v(" "),s("li",[t._v("修改样式的时候使用类名的方式一次性进行修改")]),t._v(" "),s("li",[t._v("对一些涉及到复杂动画的元素，在不影响相关布局的情况下，尽量将其 position 属性设置为 absolute 或者fixed，因为这样的话我们不会影响其他元素的相关布局，只会自己进行重新绘制，相比较不使用，性能消耗更低")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/render-flow.jpg",alt:"渲染流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tips")]),this._v(": 动画除了可以使用 position 设置为 absolute 或 fixed 优化之外，还可以使用启用硬件加速( GPU加速 )来进行优化，比如说一些移动元素的操作我们可以使用 translate3d() 方法来完成，使用这个方法之后，我们就触发了硬件加速，由于硬件加速使用的是 GPU 绘制，所以速度更快，而且不会引起回流和重绘，性能也可以得到较大的提升。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-loop-优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-优化"}},[this._v("#")]),this._v(" Event Loop 优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们都知道 "),e("code",[this._v("JavaScript")]),this._v(" 是单线程的语言，它在一个时间点只能处理一件事情，完成一件事情之后才可以继续另外一件事情。JavaScript 为了解决这个问题，于是产生了使用异步这种方式来模拟多线程，而支撑异步的就是 "),e("code",[this._v("Event Loop")]),this._v("。下面我就来介绍 Event Loop，关于 Event Loop 整个流程我们来看下面这张图：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/event-loop-flow.jpg",alt:"渲染流程"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("heap")]),t._v(" "),s("p",[t._v("heap 是堆这种数据结构，堆其实就是我们平时所说的二叉树，这里存放的主要是 JavaScript 当中的对象，也是 Event Loop 当中一个重要的环节。")])]),t._v(" "),s("li",[s("p",[t._v("stack")]),t._v(" "),s("p",[t._v("首先 stack 翻译过来的意思就是栈，我们知道栈是一种数据结构，它的特点就是后进先出，所以我们的代码执行的时候，会将代码压入栈中进行执行，当任务完成之后，根据栈后进先出的特点，再将各个任务进行出栈。")]),t._v(" "),s("p",[t._v("上面是假定没有异步任务的情况下 JavaScript 的执行顺序，当我们遇到异步任务，比如：setTimeout、addEventListener 这类异步任务的时候，这个时候异步任务不会直接被压入到栈中，而是会交给浏览器的Web API 进行维护，当这些异步任务执行完成之后，会在任务队列当中放置对应事件。当执行栈当中任务为空的时候，然后浏览器读取任务队列，再把对应的异步任务压入到执行栈执行，这就是我们经常说的事件循环。整个流程如下图：")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/performance/event-loop-run.jpg",alt:"渲染流程"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("Macrotask/Microtask")]),t._v(" "),s("p",[t._v("上面我们提到了任务队列，那么任务队列有两种，一种是 Macrotask，另外一种是 Microtask。从最开始给出的 Event Loop 总的流程图，大家可以看出 Microtask 优先级是高于 Macrotask 的。Microtask 当中的任务也是在执行栈当中的任务执行完成后再进行执行，执行的时候和 Macrotask 有一些区别，Microtask 当中任务不会一个一个压入执行栈，而是所有任务直接压入栈中，当 Microtask 当中的任务执行完毕后，然后我们再从 Macrotask 中取栈顶的第一个任务进行执行。")]),t._v(" "),s("p",[t._v("那么哪些任务属于 Microtask，哪些任务属于 Macrotask 呢，这里我做了一个大概的总结，如下：")]),t._v(" "),s("p",[t._v("Macrotask："),s("code",[t._v("setTimeout")]),t._v("、"),s("code",[t._v("setInterval")]),t._v("、"),s("code",[t._v("I/O")]),t._v("、"),s("code",[t._v("UI Rendering")]),t._v("、"),s("code",[t._v("script当中的所有代码")]),t._v("、"),s("code",[t._v("setImmediate(Node)")])]),t._v(" "),s("p",[t._v("Microtask："),s("code",[t._v("process.nextTick(node)")]),t._v(" 、"),s("code",[t._v("Promise")]),t._v(" 、"),s("code",[t._v("MutationObserver")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Microtask  优先级")]),this._v("：process.nextTick > Promise > MutationOberser")])}],!1,null,null,null);e.default=a.exports}}]);