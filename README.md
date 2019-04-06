## 开发
### 开发组件
[查看开发文档](./docs/dev.md)
1. `npm run dev`打开demo展示主页
2. `npm run add`添加组件，并录入组件参数，自动生成组件目录，并自动添加跳转链接到/docs/introduce.md

### 组件目录说明
```
├─__test__                    自动化测试文件，执行`npm run test`将会调用该文件
│      │
│      └─index.test.js        自动化测试文件，执行`npm run test`将会调用该文件
│
├─textbox.vue                 组件vue文件
│
├─textbox.scss                组件引入的样式 
│
├─doc.md                      组件文档。/docs/introduce.md将会跳转到这个md文件
│
└─demo.vue                    组件的demo页面，执行`npm run dev`后，点击对应组件会跳转到对应的demo页面
```

### 打包
`npm run build`

### 测试
`npm run test`

## 组件文档
[查看文档](./docs/introduce.md)

## 如何引入？
[查看文档](./docs/start.md)

## 国际化
[查看文档](./docs/nternational.md)

## 主题定制化
[查看文档](./docs/theme.md)

## 删除组件
1. 删除/src/packages对应的组件目录
2. 删除/src/config.json的配置
3. 删除/docs/introduce.md的链接跳转
