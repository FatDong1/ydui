<template>
  <div
    :class="['yd-dialog-wrapper',customClass,{'yd-dialog-image-wrapper':type==='image'}]"
    :id="id"
  >
    <transition :name="animation?'ydFade':''">
      <div
        :class="'yd-dialog-mask'"
        :style="{'background':maskBgStyle}"
        @click="modalClick"
        v-show="curVisible"
      ></div>
    </transition>
    <transition :name="animation?'ydEase':''">
      <div class="yd-dialog-box" v-show="curVisible" @click="modalClick">
        <div class="yd-dialog" @click.stop>
          <a href="javascript:;" v-if="closeBtn" @click="closeBtnClick" class="yd-dialog-close"></a>
          <template v-if="type==='image'">
            <a href="javascript:;" @click="imageLinkClick" class="yd-dialog-link">
              <img :src="imgSrc" class="yd-dialog-image" alt>
            </a>
          </template>
          <template v-else>
            <div class="yd-dialog-body">
              <span class="yd-dialog-title" v-html="title" v-if="title"></span>
              <div class="yd-dialog-content" v-if="$slots.default" :style="{textAlign}">
                <slot></slot>
              </div>
              <div
                class="yd-dialog-content"
                v-html="content"
                v-else-if="content"
                :style="{textAlign}"
              ></div>
            </div>
            <div class="yd-dialog-footer" v-if="!noFooter">
              <button
                class="yd-dialog-btn yd-dialog-cancel"
                v-if="!noCancelBtn"
                @click="cancelBtnClick(cancelAutoClose)"
              >{{cancelBtnTxt || ydTranslate('lang.dialog.cancelBtnTxt')}}</button>
              <button
                class="yd-dialog-btn yd-dialog-ok"
                v-if="!noOkBtn"
                :class="{'disabled':okBtnDisabled}"
                :disabled="okBtnDisabled"
                @click="okBtnClick"
              >{{okBtnTxt || ydTranslate('lang.dialog.okBtnTxt')}}</button>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import locale from "../../mixins/locale";

const lockMaskScroll = (bodyCls => {
  let scrollTop;
  return {
    afterOpen: function() {
      scrollTop =
        document.scrollingElement.scrollTop || document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + "px";
    },
    beforeClose: function() {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls);
        document.scrollingElement.scrollTop = scrollTop;
      }
    }
  };
})("dialog-open");

export default {
  name: "yd-dialog",
  mixins: [locale],
  props: {
    id: {
      default: null
    },
    title: {
      default: ""
    },
    content: {
      default: ""
    },
    type: {
      default: ""
    },
    link: {
      default: ""
    },
    imgSrc: {
      default: ""
    },
    animation: {
      type: Boolean,
      default: true
    },
    lockBgScroll: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelBtnTxt: {
      default: ""
    },
    okBtnTxt: {
      default: ""
    },
    okBtnDisabled: {
      type: Boolean,
      default: false
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      default: "center"
    },
    onOkBtn: {
      default: null
    },
    onCloseBtn: {
      default: null
    },
    onCancelBtn: {
      default: null
    },
    closeCallback: {
      default: null
    },
    onClickImageLink: {
      default: null
    },
    maskBgStyle: {
      default: ""
    },
    customClass: {
      default: ""
    }
  },
  data() {
    return {
      curVisible: false
    };
  },
  methods: {
    modalClick() {
      if (!this.closeOnClickModal) return;
      this.close("modal");
    },
    close(target) {
      this.$emit("close", target);
      this.$emit("close-callback", target);
      if (
        typeof this.closeCallback === "function" &&
        this.closeCallback(target) === false
      ) {
        return;
      }
      this.curVisible = false;
    },
    okBtnClick() {
      this.$emit("ok-btn-click");
      if (typeof this.onOkBtn === "function") {
        this.onOkBtn.call(this);
      }
    },
    cancelBtnClick(autoClose) {
      this.$emit("ok-btn-click");
      if (typeof this.onCancelBtn === "function") {
        if (this.onCancelBtn.call(this) === false) return;
      }
      autoClose && this.close("cancelBtn");
    },
    closeBtnClick() {
      if (typeof this.onCloseBtn === "function") {
        if (this.onCloseBtn.call(this) === false) return;
      }
      this.close("closeBtn");
    },
    //图片类型弹窗中的链接点击事件，默认跳转
    imageLinkClick() {
      if (this.onClickImageLink && this.onClickImageLink.call(this) === false)
        return;
      if (this.link) location.href = this.link;
    }
  },
  created() {
  },
  watch: {
    visible: {
      handler(val) {
        this.curVisible = val;
      },
      immediate: true
    },
    curVisible(val) {
        if (this.lockBgScroll) {
          //锁定or解锁页面滚动
          lockMaskScroll[val?'afterOpen':'beforeClose']();
        }
    }
  }
};
</script>
