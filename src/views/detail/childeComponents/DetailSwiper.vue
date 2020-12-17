<template> 
      <swiper class="detail-swiper">
          <swiper-item v-for="(item,index) in topImages" :key="index">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'

export default {
  components: {
      Swiper,
      SwiperItem,
   },
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 260px;
    overflow: hidden;
}
</style>