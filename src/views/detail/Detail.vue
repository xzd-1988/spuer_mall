<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-navBar"
      @titleClick="titleClick"
      ref="navbar"
    />
    <scroll class="content" ref="scroll" :probeType="2" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info
        ref="param"
        :paramsInfo="paramsInfo"
      ></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-navbar @addCart="addToCart" />
    <back-top @click.native="BackTop" v-show="isshowBackTop" />
    <toast :message="message" :show='show'></toast>
  </div>
</template>

<script>
// 传入网络请求的方法
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail";
import { backTopMixin, itemListenerMixin } from "../../common/mixin";
// 引入封装好的组件
import DetailNavBar from "./childeComponents/DetailNavBar.vue";
import DetailSwiper from "./childeComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childeComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childeComponents/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childeComponents/DetailGoodsInfo.vue";
import DetailParamInfo from "./childeComponents/DetailParamInfo.vue";

import DetailCommentInfo from "./childeComponents/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { debounce } from "../../common/utils";
import DetailBottomNavbar from "./childeComponents/DetailBottomNavbar.vue";

import {mapActions} from 'vuex'
import Toast from '../../components/common/toast/toast.vue';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomNavbar,
    Toast
  },
  mixins: [itemListenerMixin, backTopMixin], //混入
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      titleTopY: [],
      getTitleTopY: null,
      titleIndex: 0,
      message:'',
      show:false
    };
  },
  created() {
    //   1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(res);
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //   4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 7.获取评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 8.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
    // 给getTitleTopY赋值并对其进行防抖
    this.getTitleTopY = debounce(() => {
      this.titleTopY = [];
      this.titleTopY.push(0);
      this.titleTopY.push(this.$refs.param.$el.offsetTop);
      this.titleTopY.push(this.$refs.comment.$el.offsetTop);
      this.titleTopY.push(this.$refs.recommend.$el.offsetTop);
      this.titleTopY.push(Number.MAX_VALUE); //赋一个极大的值
    }, 100);
  },
  mounted() {},
  updated() {},
  methods: {
    ...mapActions(['addCart']),
    titleClick(index) {
      //点击标题滚动到相应的位置
      this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 500);
    },
    imageLoad() {
      // 监听图片的加载完成后并刷新
      this.refresh();
      this.getTitleTopY();
    },

    contentScroll(position) {
      // 判断backtop是否显示
      this.showBackTop(position);
      // 根据滚动,标题栏进行相应的改变
      // 1.获取y值
      const positionY = -position.y;
      // 2.将position与getTitleTopY的值相对比
      /*positionY在0~this.$refs.param.$el.offsetTop之间,index为0
        positionY在this.$refs.param.$el.offsetTop~this.$refs.comment.$el.offsetTop之间,index为1
        positionY在this.$refs.comment.$el.offsetTop~this.$refs.recommend.$el.offsetTop之间,index为2
        positionY超过this.$refs.recommend.$el.offsetTop,index为3*/
      let length = this.titleTopY.length;
      for (let i = 0; i < length - 1; i++) {
        //length-1为了防止越界
        //遍历数组用of
        // console.log(i+1);//str类型
        // if (positionY > this.titleTopY[ parseInt(i)] && positionY<this.titleTopY[ parseInt(i)+1]) {
        //   console.log(i);
        // }
        // if (
        //   this.titleIndex != i &&
        //   ((i < length - 1 &&
        //     positionY >= this.titleTopY[i] &&
        //     positionY < this.titleTopY[i + 1]) ||
        //     (i == length - 1 && positionY >= this.titleTopY[i]))
        // ) {
        //   this.titleIndex = i;
        //   this.$refs.navbar.titleIndex = this.titleIndex;
        // }
        if (
          this.titleIndex != i &&
          positionY >= this.titleTopY[i] &&
          positionY < this.titleTopY[i + 1]
        ) {
          this.titleIndex = i;
          this.$refs.navbar.titleIndex = this.titleIndex;
        }
      }
    },
    addToCart() {
      // 添加到购物车
      // 1.获取购物车需要展示的东西
      // console.log(this.goods);
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 把actions里面的方法映射到普通组件里面
      this.addCart(product).then(res=>{
      //  this.show=true,
      //  this.message=res
      //  setTimeout(() => {
      //    this.show=false,
      //    this.message=''
      //  }, 1600);
      console.log(res);
      this.$toast.show(res,2000)
      })

      // 2.将商品添加到购物车界面
      // this.$store.commit('addCart',product)
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
    }
  },
  destroyed() {
    // 离开后取消监听
    this.$bus.$off("itemImageLoad", this.itemImgListenter);
  }
};
</script>

<style scoped>
.content {
  height: calc(100vh - 93px);
}
.detail-navBar {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: white;
}
</style>
