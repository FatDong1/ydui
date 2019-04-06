## 开发组件
1. `npm run dev`打开demo展示主页
2. `npm run add`添加组件，并录入参数，自动生成组件目录

## 打包
`npm run build`

## 测试
`npm run test`



## 页面直接引用

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://xxxxxxxx/dist/ydui.min.css">
</head>
<body>
    <div id="app">
        <nut-button @click="showDialog">
            Button
        </nut-button>
    </div>

    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
    <!-- 引入YdUI组件库 -->
    <script src="https://xxxxxxxx/dist/ydui.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            methods: {
                showDialog() {
                    this.$dialog({
                        title: "确定删除此订单？",
                        content: "删除后将从你的记录里消失，无法找回"
                    });
                }
            }
        });
    </script>
</body>
</html>
```

> 在页面中直接引入，将无法使用 **主题换肤** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法


## 加载示例

```javascript
import Vue from 'vue';
import YdUI from '@ydui/ydui';
import '@ydui/ydui/dist/ydui.css';

YdUI.install(Vue);
```

> 注意：这种方式将会导入所有组件

> 服务端渲染请引入YdUI的 **commonjs** 版本 **ydui.common.js**

```javascript
//服务端渲染使用YdUI的commonjs版本
import YdUI from '@ydui/ydui/dist/ydui.common.js';
```

## 按需加载

以下两种方式都可以实现只加载用到的组件，从而减少加载的文件体积。

### 1. 使用 webpack 插件 **[@nutui/babel-plugin-seperate-import](https://www.npmjs.com/package/@nutui/babel-plugin-separate-import)** (推荐)

首先安装 **@nutui/babel-plugin-separate-import** 插件

```bash
npm i @nutui/babel-plugin-separate-import -D
```

然后配置一下 **.babelrc** 文件

```bash
{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
        "style": "css"
    }]
  ]
}
```
> style 选项值为 "css" 时加载组件对应的css文件，为 "scss" 时加载对应的scss文件。无style选项时，不自动加载样式文件。

接下来，我们就可以在项目里只引入用到的组件了。默认情况下，样式也无需单独引入。插件会自动将代码转换为方式二的手动引入方式。

```javascript
import Vue from 'vue';
import { Dialog,Picker } from '@ydui/ydui';

Dialog.install(Vue);
Picker.install(Vue);
```
如果需要按需加载 scss 文件（如需要自定义主题）时，除了需要把 style 选项值设为为 **scss** 外，还需要修改 webpack 配置文件的 sass-loader 配置，如下所示：

```
{
    loader: 'sass-loader',
    options: {
        data: `@import "@ydui/ydui/dist/styles/index.scss"; `
    }
}
```

### 2. 手动引入

```javascript
import Vue from 'vue';
import Button from '@ydui/ydui/dist/packages/button/button.js';  // 加载构建后的JS
import '@ydui/ydui/dist/packages/button/button.css';  //加载构建后的CSS
//主题定制等场景需要加载SCSS,而不是构建后的CSS
//import '@ydui/ydui/dist/packages/button/button.scss'; 

Button.install(Vue);
```

## 组件使用

1.使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

2.组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 webpack 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、postcss 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等

3.组件具体用法以文档为准
