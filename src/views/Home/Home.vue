<template>
  <div class="home-page">

    <home-header></home-header>

    <div class="searchBtn">
      <router-link to="/search" class="content">
        <van-icon name="search"/>
        <span>搜索饿了么商家、商品名称</span>
      </router-link>
    </div>

    <div class="home-banner">
      <home-banner :banner-list="bannerList"/>
    </div>

    <div class="home-advertising">
      <activity-banner
        :activity-list="activityList"
        :advertis-list="advertisList"
      />
    </div>

    <!-- 推荐商家 -->
    <div class="home-recommended">
      推荐商家
    </div>

    <!-- 筛选 -->
    <div>

    </div>

    <div v-if="isLogin" class="home-list">
      <home-list :list="storeList"></home-list>

    </div>

    <div v-else class="noData">
      <img :src="noData" alt="">
      <p class="tips">登录查看更多商家</p>
      <router-link class="button" to="/login">登录</router-link>
    </div>

  </div>
</template>

<script>
  import HomeHeader from '@components/HomeHeader/HomeHeader'
  import HomeBanner from '@components/HomeBanner/HomeBanner'
  import ActivityBanner from '@components/ActivityBanner/ActivityBanner'
  import HomeList from '@components/HomeList/HomeList'
  import {Icon} from 'vant'
  import {mapState} from 'vuex'
  import ImageData from '@utils/images'

  export default {
    name: 'Home',
    components: {
      "van-icon": Icon,
      "home-header": HomeHeader,
      "home-banner": HomeBanner,
      "activity-banner": ActivityBanner,
      "home-list": HomeList
    },
    data() {
      return {
        noData: ImageData.noData,
        activityList: [
          {name: '品质套餐', desc: '搭配齐全吃的好', image_hash: 'eeedf43e7e53f6e1346c3fda0609f1d3png'},
          {name: '品质套餐', desc: '搭配齐全吃的好', image_hash: 'eeedf43e7e53f6e1346c3fda0609f1d3png'},
        ],
        advertisList: [
          {image_hash: '44837fce9a4ffbec79293357f68ecfcbjpeg', name: ''},
          {image_hash: '2f636e52bca0d6db458e9855b7fc5813jpeg', name: ''},
          {image_hash: '19cd8da44b63fa1208476992df88edc9jpeg', name: ''},
        ]
      }
    },
    created() {
      //店铺列表
      this.$store.dispatch({
        type: 'home/getStoreList',
        payload: {}
      })
      //店铺列表
      this.$store.dispatch({
        type: 'home/getHomeClassifyList',
        payload: {}
      })
    },
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin,
        storeList: state => state.home.storeList,
        bannerList: state => state.home.classifyList
      })
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .home-page {
    min-height: 100vh;
    background-color: #fff;
    .searchBtn {
      padding: 10px 14px;
      background-image: linear-gradient(90deg, #0af, #0085ff);
      .content {
        width: 100%;
        height: 40px;
        background: #fff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        i {
          font-size: 22px;
          margin-right: 4px;
        }
      }
    }
    .home-banner {
      height: 178px;
      width: 100%;
      background-color: #fff;
    }
    .home-advertising {
      width: 100%;
      padding: 0 10px;
    }
    .home-recommended {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .4rem;
      color: #000;
      background-color: #fff;
      margin-top: 10px;
      &:before {
        content: '';
        width: 20px;
        height: 2px;
        background-color: @base-color-gray;
        color: @base-color-gray;
        margin-right: 10px;
      }
      &:after {
        content: '';
        width: 20px;
        height: 2px;
        background-color: @base-color-gray;
        color: @base-color-gray;
        margin-left: 10px;
      }
    }
    .home-list {
      height: 100%;
      background-color: #fff;

    }
    .noData {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: -20px;
      height: 280px;
      img {
        width: 160px;
      }
      .tips {
        color: #6a6a6a;
        font-size: 16px;
        margin: 10px 0;
        font-weight: 400;
      }
      .button {
        border: none;
        background-color: #56d176;
        color: #fff;
        text-align: center;
        font-size: 1.2em;
        font-family: inherit;
        cursor: pointer;
        padding: 10px 25px;
        border-radius: 4px;
      }
    }
  }
</style>
