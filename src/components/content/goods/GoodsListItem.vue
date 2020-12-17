<template>
  <div class="goodsItem">
    <img v-lazy="showImage" alt="" @load="imageLoad" @click="goodsItemClick" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsItemClick() {
      // console.log('跳转到详情页');
      this.$router.push("/detail/" + this.goodsItem.iid);
      // this.$router.push({
      //   path:'',
      //   query:
      // })
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
};
</script>

<style scoped>
.goodsItem {
  position: relative;
  width: 48%;
  text-align: center;
  margin-bottom: 16px;
  font-size: 14px;
}
.goodsItem img {
  width: 100%;
  border-radius: 6px;
}
.goodsItem-info {
  bottom: 6px;
  position: absolute;
  overflow: hidden;
}
.goodsItem-info,
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;
}
.price {
  color: var(--color-high-text);
  padding-right: 24px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -14px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
