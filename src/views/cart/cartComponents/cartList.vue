<template>
  <div class="cartList">
    <scroll class="scroll" ref="scroll">
        <cart-list-item v-for="(item, index) in cartList" :key="index" :product='item'></cart-list-item>     
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartListItem from './cartListItem.vue';

import { mapGetters } from "vuex";

export default {
  components: { Scroll, CartListItem },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  activated(){
   this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.scroll {
  height: calc(100vh - 131px);
}
</style>
