<template>
  <div class="cartButtonBar">
    <div class="check-content">
      <check-button
        class="check-button"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice">合计: ¥{{ totalPrice }}</div>
    <div class="Settlement" @click="calcClick">
      <span>去结算({{ checkCartLength }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartButtonBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },
    checkCartLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length == 0) {
        return false;
      }
      // 1.使用filter
      //  return !(this.cartList.filter(item=>!item.checked).length)
      // 2.使用find
      // if (this.cartList.length===0) {
      //   return false
      // }else{
      // return !this.cartList.find(item=>!item.checked)
      // }
      // 3.使用普通遍历
      for (let item of this.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.cartList.find(item=>item.checked)) {
        this.$toast.show("请选择要付钱的商品", 2000);
      }
    }
  }
};
</script>

<style scoped>
.cartButtonBar {
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  background-color: #eee;
}
.check-content {
  display: flex;
  height: 40px;
  align-items: center;
  margin-left: 6px;
  margin-right: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.Settlement {
  position: absolute;
  right: 0;
  display: flex;
  height: 40px;
  width: 100px;
  background-color: var(--color-tint);
  line-height: 40px;
  justify-content: center;
  align-items: center;
}
</style>
