<template>
  <div id="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>

    <tab-bar-control
      class="tebbar-control"
      :titles="['流行', '新款', '精选']"
      @tabControlClick="tabControlClick"
      ref="tabControl1"
      v-show="isTabControlFixed"
    />

    <scroll
      class="content"
      ref="scroll"
      :probeType="2"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-bar-control
        class="tebbarcontrol"
        :titles="['流行', '新款', '精选']"
        @tabControlClick="tabControlClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" /><!--使用计算属性返回,就能避免过长-->
    </scroll>
    <back-top @click.native="backClick" v-show="isshowBackTop" />
  </div>
</template>

<script>
// 导入公共组件
import NavBar from "../../components/common/navbar/NavBar";
import TabBarControl from "../../components/content/tabbarControl/TabBarControl.vue";
// 导入单独组件
import FeatureView from "./childComponents/FeatureView.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
// 导入的是封装的方法
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import { debounce } from "../../common/utils.js";
import {itemListenerMixin} from '../../common/mixin'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabBarControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isshowBackTop: false,
      tabControlOffSetTop: 0,
      isTabControlFixed: false,
      saveY: 0
    };
  },
  mixin:[itemListenerMixin],
  created() {
    //网页加载前进行网络请求
    this.getHomeMultidata();
    // 请求并保存商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3.页面加载好后就开始监听图片的加载
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    // 对监听事件进行保存
    this.itemImgListenter = () => {
      // this.scroll && this.$refs.scroll.refresh();
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListenter);
  },
  destroyed() {
    console.log("首页销毁了");
  },
  activated() {
    // 回到首页后立即回到上次保存的位置信息
    this.$refs.scroll.scrollTo(0, this.saveY);
    // 记得刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 离开的时候保存当前位置信息
    this.saveY = this.$refs.scroll.getScrollY();
    // 离开后取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListenter);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 网络请求相关的方法
     */

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 加载完后主动调用这个函数才能进行下一步的加载
        this.$refs.scroll.finishPullUp();
      });
    },
    /**
     * 事件监听相关的方法
     */
    tabControlClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // console.log("回到顶部");
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1.判断backtop是否显示
      this.isshowBackTop = -position.y > 1000;
      // 2.决定tancontrol是否吸顶(position,fixed)
      this.isTabControlFixed = -position.y > this.tabControlOffSetTop;
    },
    //防抖函数
    // debounce(func, delay) {
    //   let timer = null
    //   return function(...args){
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(()=>{
    //       func.apply(this,args)
    //     },delay)
    //   }
    // }
    loadMore() {
      //上拉加载
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      this.tabControlOffSetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}
.home-navbar {
  background-color: var(--color-tint);
  color: aliceblue;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
/* 吸顶效果 */
/* .tebbar-control {
  background-color: #fff;
  position: sticky; 粘滞滚动
  top: 43px;
  z-index: 9;
} */
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  right: 0;
  left: 0;
  top: 44px;
  bottom: 49px;
}
.tebbar-control {
  position: relative;
  z-index: 9;
  background-color: white;
}
</style>
