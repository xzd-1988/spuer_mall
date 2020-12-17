<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="commentInfo">
    <div class="info-header">
      <div class="header-title">
        用户评价
      </div>
      <div class="header-more">更多</div>
      <img src="../../../assets/img/common/arrow-left.svg" alt="" />
      <!-- <i class="arrow-right"></i> -->
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate: function(value) {
      // 1.将时间戳转化为Date对象
      let date = new Date(value * 1000);
      //   2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<style scoped>
.commentInfo {
  position: relative;
  margin-bottom: 16px;
  background-color: rgb(247, 247, 247);
  border-radius: 6px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background-color: #fff;
}
.info-header img {
  height: 18px;
  width: 18px;
  background-color: black;
}
.header-more {
  padding-left: 230px;
  border-radius: 6px;
}
.info-user {
  display: flex;
  align-items: center;
}
.info-user img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.info-user,
.info-detail {
  padding-top: 6px;
}
.info-imgs img{
  width: 140px;
  height: 160px;
  padding: 6px;
}
</style>
