<template>
  <div class="my-page">

    <!-- 个人资料 -->
    <div class="profile">
      <div class="profile-head">
        <img :src="head" alt="头像">
      </div>
      <div class="profile-info">
        <div v-if="isLogin" class="toLogin" @click="toLogin">
          <span class="login">登录/注册</span>
          <span class="loginTips"><i class="iconfont icon-shoujihao"></i>登录后享更多特权</span>
        </div>
        <div v-else class="no-Login">
          <span>123</span>
        </div>
      </div>
      <div class="profile-right">
        <vant-icon name="arrow"/>
      </div>
    </div>

    <!-- 个人资料页卡片 -->
    <div class="card">
      <div class="card-item">
        <span><i></i></span>
        <span>红包</span>
      </div>
      <div class="card-item">
        <span><i></i></span>
        <span>金币</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageData from '../../utils/images'
  import {Icon} from 'vant'
  import {mapState} from 'vuex'

  export default {
    name: 'My',
    components: {
      "vant-icon": Icon
    },
    data() {
      return {
        head: ImageData.defauleHead
      }
    },
    computed: {
      ...mapState({
        isLogin: state => state.user.isLogin
      })
    },
    methods: {
      toLogin: function () {
        let localUrl = encodeURIComponent(window.location.href)
        this.$router.push(`/login?redirect=${localUrl}`)
      }
    }

  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .my-page {
    min-height: 100vh;

    .profile {
      display: flex;
      padding: 24px 16px;
      background-image: linear-gradient(90deg, #0af, #0085ff);
      color: #fff;
      align-items: center;

      .profile-info {
        margin-left: 18px;
        flex: 1;
        overflow: hidden;

        .login {
          font-size: 20px;
        }

        .loginTips {
          margin-top: 6px;

          i {
            font-size: 12px;
          }
        }

        .toLogin {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .noLogin {

        }
      }

      .profile-head {
        border-radius: 100%;

        img {
          width: 60px;
          height: 60px;
          border-radius: 100%;
        }
      }
    }

    .card {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      height: 82px;
      .card-item{

      }
    }
  }
</style>
