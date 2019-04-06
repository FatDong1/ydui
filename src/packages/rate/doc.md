# Rate 评分

用于快速的评级操作，或对评价进行展示。

## 基础用法

```html
<yd-rate 
    v-model="val"
>
</yd-rate>
```

只读
```html
<yd-rate 
    v-model="val"
    :readOnly="true"
>
</yd-rate>
```


绑定事件

```html
<yd-rate 
    @click="onClick"
>
</yd-rate>
```

自定义尺寸

```html
<yd-rate 
    :size="35"
>
</yd-rate>
```

自定义ICON

```html
<yd-rate
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></yd-rate>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| total | star 总数 | Number | 5
| value | 当前 star 数，可使用 v-model 双向绑定数据 | Number | 3
| size | star 大小 | Number | 25
| spacing | 两个star的间距 | Number | 20
| readOnly | 是否只读 | Boolean | false
| uncheckedIcon | 使用图标(未选中) | String | -
| checkedIcon | 使用图标(选中) | String | -

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的index