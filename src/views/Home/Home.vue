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
      banner区域
    </div>

    <div class="home-advertising">
     广告区域
    </div>


  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import {Icon} from 'vant'

  export default {
    name: 'Home',
    components: {
      "van-icon": Icon,
      "home-header": HomeHeader
    }
  }
</script>

<style scoped lang="less">
  .home-page {
    min-height: 100vh;
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
        i{
          font-size: 22px;
          margin-right: 4px;
        }
      }
    }
    .home-banner{
      height: 24vh;
      width: 100%;
      background-color: #fff;
    }
    .home-advertising{
      height: 24vh;
      width: 100%;
      background-color: #2D8CFD;
    }
  }
</style>
