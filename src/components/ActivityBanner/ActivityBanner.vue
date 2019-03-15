<template>
  <div>
    <van-swipe class="home-banner" :show-indicators="false">
      <van-swipe-item class="item-list" :key="index" v-for="(item,index) in activityList">
        <div class="act-item">
          <h3 class="title">{{item.name}}</h3>
          <div class="desc">{{item.desc}}</div>
          <div class="buy">立即抢购 ></div>
          <img class="activityImg" :src="getActivityBanner(item.image_hash)" :alt="item.name">
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="3000" class="home-advertis" show-indicators indicator-color="#00a6ff">
      <van-swipe-item class="item-list" :key="index" v-for="(item,index) in advertisList">
        <img style="width: 100%" :src="getAdvertisBanner(item.image_hash)" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  import {ELE_IMG_URL} from "@utils/config";
  import {formatImgWithEle} from '@utils/utils'

  export default {
    name: "HomeBanner",
    components: {
      "van-swipe": Swipe,
      "van-swipe-item": SwipeItem
    },
    props: {
      activityList: {
        type: Array,
        default: () => []
      },
      advertisList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      getActivityBanner: function (imgUrl) {
        return ELE_IMG_URL + formatImgWithEle(imgUrl) + '?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/'
      },
      getAdvertisBanner: function (imgUrl) {
        return ELE_IMG_URL + formatImgWithEle(imgUrl) + '?imageMogr/format/webp/thumbnail/568x/'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .home-advertis {
    height: 88px;
    width: 100%;
  }

  .item-list {
    margin-bottom: 10px;
    .act-item {
      width: 100%;
      height: 110px;
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #F6F6F6;
      text-align: left;
      padding: 14px 0 0 14px;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        font-size: 14px;
        font-weight: 500;
        color: #777;
        margin: 8px 0;
      }
      .buy {
        color: #af8260;
        font-weight: 600;
      }
      .activityImg {
        position: absolute;
        width: 140px;
        height: 90px;
        right: 0;
        top: 15px;
      }
    }
  }
</style>
