<template>
  <div class="bottomNavbar">
    <div class="left">
      <div class="shop">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="service">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="favorites">
        <i class="icon favorites"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addToCart">
        <span>加入购物车</span>
      </div>
      <div class="buy">
        购  买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNavbar",
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
};
</script>

<style scoped>
.bottomNavbar {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: white;
  font-size: 14px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.left {
  width: 46%;
  display: flex;
  justify-content: space-around;
}
.left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 8px auto 1px;
  background: url("../../../assets/img/detail/detail_bottom.png") no-repeat 0 0/100%;
}
.left .shop {
  background-position: 0px -98px;
}
.left .service {
  background-position: 0px -54px;
}
.right {
  width: 54%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 49px;
  }
.cart {
  width: 50%;
  background-color: violet;
  color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.buy {
  width: 50%;
  background-color: rgb(53, 40, 53);
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
