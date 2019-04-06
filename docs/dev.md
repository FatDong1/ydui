## 组件分类
- 数据录入。需要用户录入数据的组件，如日期、开关、单选、复选
- 操作反馈。用户点击后进行反馈的组件，如弹窗、提示
- 数据展示。将数据传入组件进行简单的展示
- 导航组件。在多个页面之间频繁切换，如底部的TabBar、顶部的tab切换
- 布局组件。用来布局的组件。如col组件、row组件等
- 基础组件。button之类的基础组件
- 业务组件。可以复用的业务逻辑，由多个UI组件构成，通常需要发请求给后端

## 组件类型
规划中的Vue组件库包含组件（Component）、指令（Directive）和过滤器（Filter）三种类型的存在。

比较特殊的是模态弹窗类（Modal）组件，如Dialog、Toast等等。页面中可能存在很多个Modal，而很多场景下用户的行为只会触发其中一部分，如果把所有可能弹出的Modal（特别是异步的、结构内容复杂的Modal）全部写在页面上，是否妥当？对于多页面应用，每个页面都写一遍或者再封装一层组件是否繁琐而冗余？这个问题在知乎上引发过讨论，尤大（Vue.js作者尤雨溪）本人在参与讨论时给出建议，组件多层嵌套时，应该把Modal放在根组件里，然后在子组件里通过事件触发。在具体应用里，应该这么用，这符合Vue提倡的“状态驱动”。不过在组件库里，我们还是希望提供一种更便捷更通用的方式来使用Modal类型的组件。

参考了Element UI等优秀组件库的做法，我们把Modal类型的组件挂到了Vue.prototype上，使之成为Vue的实例方法，一次安装、全局调用。

```js
this.$dialog(options);
```
因此，我们的组件库组件类型还包括“实例方法”。


## 组件CSS作用域
```
<!-- 不合适的scoped -->
<style scoped>
    .example {
        color: red;
    }
</style>
```
通过scoped属性的确能达到给组件样式设置作用域的目的，基本能避免组件内的样式影响外部，但是它也带来了另外一个问题，就是给外部覆盖内部样式带来了不便。无论组件功能多么通用，接口多么灵活，只要涉及到UI，就难免无法满足所有项目样式需求，所以应该允许在具体的项目中根据需要覆盖组件部分甚至全部样式。而scoped随机生成属性名提高了覆盖样式的难度。

经过权衡，在组件里移除了scoped属性，改用class策略来避免组件内样式影响外部。当然，scoped属性也不是没有存在的意义，它更适合在具体应用中使用，对于复用性高的组件来说，不是最佳选择。


## 图标
SVG更适合移动端组件库
### ICON FONTh和SVG
- SVG虽在PC端个别古董浏览器中兼容较差，但在移动端兼容良好
- ICON FONT被认为是文本，所以一些浏览器会对其进行抗锯齿处理，这可能导致图标不那么锐利，清晰度打折扣
- SVG样式控制比ICON FONT更灵活，甚至可以控制图标各个部分的颜色，实现彩色图标。而这对ICON FONT来说是不可能实现的
- ICON FONT通常是用伪对象或伪类插入页面，其展示受到“line-height”、“vertical-align”、“letter-spacing”、“word-spacing”及字体相关CSS属性影响，也受到字体字符设计本身影响。而SVG在页面中就是一个标签，更方便控制，语义化也更好

## webpack打包配置介绍
### 导出的模块化
`output.libraryTarget`的值设为`umd`。

`umd` 暴露给所有模块定义，允许它和CommonJS/AMD/全局变量一起工作
```
output: {
    libraryTarget: 'umd',
}
```

打包后的js文件
```js
// ydui.js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("ydui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["ydui"] = factory(require("vue"));
	else
		root["ydui"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__19__) {
    // ...
}

// dialog.js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("dialog", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["dialog"] = factory(require("vue"));
	else
		root["dialog"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__38__) {
    // ...
}
```



### 排除公共库
Vue组件库只提供组件，Vue文件自身需要组件库使用者在项目中自行引入，库中无需打包。所以我们可以把Vue加到externals中。
```
externals: {
    vue: 'vue'
}
```
