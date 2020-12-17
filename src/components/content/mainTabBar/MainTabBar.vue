<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/首页-未选中.png" alt="" /><!--修改了,利用了别名-->
      <img slot="item-icon-active" src="../../../assets/img/tabbar/首页.png" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classiFication" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/分类-未选中.png" alt="" />
      <img slot="item-icon-active" src="../../../assets/img/tabbar/分类.png" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img
        slot="item-icon"
        src="../../../assets/img/tabbar/购物车-未选中.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabbar/购物车.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img slot="item-icon" src="../../../assets/img/tabbar/我的-未选中.png" alt="" />
      <img slot="item-icon-active" src="../../../assets/img/tabbar/我的.png" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>