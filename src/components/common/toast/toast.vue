<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // message: {
    //   type: String,
    //   default: ""
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
      return {
          message:'',
          isShow:false
      }
  },
  methods: {
      show(message,duration){
          this.isShow=true;
          this.message=message
          setTimeout(() => {
              this.isShow=false;
              this.message=''
          }, duration);
      }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 6px;
  background: rgba(58, 53, 53, 0.842);
}
</style>
