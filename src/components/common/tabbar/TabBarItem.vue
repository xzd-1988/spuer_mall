<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/首页.png" alt="">
    <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green", //由App.vue传入的颜色,但是没有传入的话这个就是默认的颜色
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // home -> item1(/home)  =  true
      // home -> item1(/my)  =  false
      return this.$route.path.indexOf(this.path) != -1; //动态判断路径是否跟相等,然后返回一个true或false的值
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (!this.isActive) {//不添加这个判断的话重复点击就会报错
        this.$router.replace(this.path);
      }
    },
  },
};
</script>

<style>
.tab-bar-item {
  text-align: center;
  flex: 1;
  height: 49px; /*标准tabbar的高度 */
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: -10px;
}
.tab-bar-item img {
  width: 16px;
  height: 16px;
  vertical-align: middle; /*去除图片下面多余的3px像素空间 */
}
</style>