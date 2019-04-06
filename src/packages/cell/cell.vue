<template>
    <a :class="['yd-cell',{'yd-cell-link':isLink}]" :href="linkUrl||'javascript:;'" :style="{'background-color':bgColor}">
        <div class="yd-cell-box">
            <div class="yd-cell-left">
                <span class="yd-cell-title"><slot name="title">{{title}}</slot></span>
                <span class="yd-cell-sub-title"><slot name="sub-title">{{subTitle}}</slot></span>
            </div>
            <div class="yd-cell-right">
                <span class="yd-cell-desc"><slot name="desc">{{desc}}</slot></span>
                <span class="yd-cell-icon"><slot name="icon" v-if="showIcon"><img src="data:image/svg+xml,%3Csvg viewBox='0 0 5 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.215 9.757l3.577-4.17a.931.931 0 0 0 0-1.173L1.215.244a.642.642 0 0 0-1.007 0 .929.929 0 0 0 0 1.172L3.283 5 .208 8.584a.93.93 0 0 0 0 1.173.643.643 0 0 0 1.007 0z' fill='rgb(200,200,205)'/%3E%3C/svg%3E" alt=""></slot></span>
            </div>
        </div>
    </a>
</template>
<script>
export default {
  name: "yd-cell",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    isLink: {
      type: Boolean,
      default: false
    },
    linkUrl: {
      type: String,
      default: null
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#FFFFFF"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>