# 描述

用于....

## 基础用法

```html
<yd-xxx 
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></yd-xxx>
```


绑定事件

```html
<yd-xxx 
    @click="onClick"
>
</yd-xxx>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5


## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的index