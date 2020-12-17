<template>
  <div class="tabbar-control">
    <div
      class="tabbar-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarControl",

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
      itemClick(index){
          this.currentIndex=index;
          this.$emit('tabControlClick',index)
      }
      
  },
};
</script>

<style>
.tabbar-control {
  display: flex;
  text-align: center;
}
.tabbar-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding-bottom:5px;
  border-bottom: 2px solid rgb(241, 154, 154);
}
/* .tabbar-control-item:hover{//通过css伪类显示谁当前选中
    color: rgb(253, 170, 184);
    border-bottom: 2px solid rgb(253, 170, 184);;
} */
</style>