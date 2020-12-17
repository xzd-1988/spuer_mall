import {
  debounce
} from './utils'
import BackTop from "../components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListenter: null,
      refresh:null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListenter = () => {
      // this.scroll && this.$refs.scroll.refresh();
      this.refresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListenter);
    // console.log('我是混入');
  },
}

export const backTopMixin={
  components:{
    BackTop
  },
  data() {
    return {
      isshowBackTop: false,
    }
  },
  methods: {
    BackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    showBackTop(position){
       // 1.判断backtop是否显示
       this.isshowBackTop = -position.y > 1000;
    }
  },
}