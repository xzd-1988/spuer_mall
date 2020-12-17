<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #ddd;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -2px 1px rgba(24, 23, 23, 0.1);

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}
</style>