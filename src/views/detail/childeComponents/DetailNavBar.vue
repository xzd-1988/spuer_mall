<template>
  <div class="navBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <div class="titleItem" v-for="(item, index) in titles" :key="index" @click="titleClick(index)" :class="{active:index===titleIndex}">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      titleIndex:0
    };
  },
  methods: {
      titleClick(index){
          this.titleIndex=index;
          this.$emit('titleClick',this.titleIndex)
      },
      backClick(){
          this.$router.go(-1);//go(-1)相当于back()
        //   this.$router.back()
      }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.titleItem {
  flex: 1;
  font-size: 12px;
}
.back img {
  margin-top: 10px;
  width: 22px;
  height: 22px;
}
.active{
    color: var(--color-high-text);
}
</style>
