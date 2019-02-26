<template>
  <div class="order-page" v-if="isLogin">
    123
  </div>
  <div v-else class="noData">
    <img :src="noData" alt="">
    <p class="tips">登录后查看订单</p>
    <router-link class="button" to="/login">立即登录</router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ImageData from '../../utils/images'
  import {PullRefresh} from 'vant';

  export default {
    name: 'Order',
    components: {
      "van-pull-refresh": PullRefresh
    },
    data() {
      return {
        noData: ImageData.noData,

      }
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
  .noData {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    img {
      width: 200px;
    }
    .tips {
      color: #6a6a6a;
      font-size: 18px;
      margin: 10px 0;
      font-weight: 400;
    }
    .button {
      padding: .266667rem;
      padding: 2.666667vw;
      min-width: 3.2rem;
      min-width: 32vw;
      border: none;
      border-radius: .053333rem;
      border-radius: .533333vw;
      background-color: #56d176;
      color: #fff;
      text-align: center;
      font-size: 1.2em;
      font-family: inherit;
      cursor: pointer;
    }
  }

  .order-page {
    min-height: 88vh;

  }
</style>
