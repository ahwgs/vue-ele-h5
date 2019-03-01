<template>
  <van-swipe class="home-banner" :autoplay="3000"  show-indicators indicator-color="#00a6ff">
    <van-swipe-item class="item-list" :key="index" v-for="(item,index) in trueBannerList">
      <div class="item" :key="id" v-for="(it,id) in item">
        <div class="icon"><img :src="getEleIcon(it.image_hash)" :alt="it.name"></div>
        <div class="name">{{it.name}}</div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  import {ELE_IMG_URL} from "../../utils/config";

  export default {
    name: "HomeBanner",
    components: {
      "van-swipe": Swipe,
      "van-swipe-item": SwipeItem
    },
    props: {
      bannerList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      trueBannerList: function () {
        let list = []
        let data = this.bannerList
        for (let i = 0; i < data.length; i += 10) {
          list.push(data.slice(i, i + 10));
        }
        return list
      }
    },
    methods:{
      getEleIcon:function (url) {
        return ELE_IMG_URL + url + '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";
  .home-banner {
    height: 100%;
    width: 100%;
  }
  .item-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .activityImg{
    width: 140px;
    height: 90px;
  }
  .item{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4px;
    height: 64px;
    .icon{
      width: 45px;
      height: 45px;
    }
    .name{
      color: @base-color-gray;
      margin-top: 4px;
      font-size: @base-font-size-s;
    }
  }
</style>
