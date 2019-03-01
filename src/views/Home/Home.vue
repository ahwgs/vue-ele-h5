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
      <div class="home-list-warp">
        123
      </div>

    </div>

    <div v-else class="noData">
      <img :src="noData" alt="">
      <p class="tips">登录查看更多商家</p>
      <router-link class="button" to="/login">登录</router-link>
    </div>

  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeBanner from '../../components/HomeBanner/HomeBanner'
  import ActivityBanner from '../../components/ActivityBanner/ActivityBanner'
  import {Icon} from 'vant'
  import {mapState} from 'vuex'
  import ImageData from '../../utils/images'

  export default {
    name: 'Home',
    components: {
      "van-icon": Icon,
      "home-header": HomeHeader,
      "home-banner": HomeBanner,
      "activity-banner": ActivityBanner
    },
    data() {
      return {
        noData: ImageData.noData,
        bannerList: [
          {name: '美食', image_hash: "/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg"},
          {name: '夜宵', image_hash: "/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg"},
          {name: '商超便利', image_hash: "/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg"},
          {name: '水果', image_hash: "/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg"},
          {name: '医药健康', image_hash: "/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg"},
          {name: '浪漫鲜花', image_hash: "/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg"},
          {name: '汉堡披萨', image_hash: "/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg"},
          {name: '厨房生鲜', image_hash: "/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg"},
          {name: '炸鸡烤串', image_hash: "/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg"},
          {name: '地方菜系', image_hash: "/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg"},
          {name: '麻辣烫', image_hash: "/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg"},
          {name: '速食简餐', image_hash: "/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg"},
          {name: '地方小吃', image_hash: "/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg"},
          {name: '大牌惠吃', image_hash: "/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg"},
          {name: '米粉面馆', image_hash: "/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg"},
          {name: '包子粥店', image_hash: "/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg"},
        ],
        activityList: [
          {name: '品质套餐', desc: '搭配齐全吃的好', image_hash: '/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png'},
          {name: '品质套餐', desc: '搭配齐全吃的好', image_hash: '/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png'},
        ],
        advertisList: [
          {image_hash: '/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg', name: ''},
          {image_hash: '/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg', name: ''},
          {image_hash: '/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg', name: ''},
        ]
      }
    },
    created() {

    },
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin
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
      .home-list-warp {
        background-color: #fff;
      }
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
