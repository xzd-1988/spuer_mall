<template>
  <div class="wrapper" ref="wrapper">
    <!--绑定ref能明确拿到该标签-->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      dafault: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1.创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // pullUpLoad:true
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    // 2.监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 3.监听上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log('上拉加载更多');
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
