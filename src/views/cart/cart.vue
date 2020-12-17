<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar><div slot="center">购物车({{ cartLength }})</div></nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部结算 -->
    <cart-button-bar></cart-button-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from "./cartComponents/cartList.vue";

import { mapGetters } from "vuex";
import CartButtonBar from "./cartComponents/cartButtonBar.vue";

export default {
  components: { NavBar, CartList, CartButtonBar },
  name: "cart",
  computed: {
    //辅助函数的两种写法 可以把在getters中定义的数组和对象转成计算属性
    ...mapGetters(["cartLength"])
    // ...mapGetters({
    //   键值对
    //   Length:'cartLength',
    //   List:'cartList'
    // })
  }
};
</script>

<style scoped></style>
