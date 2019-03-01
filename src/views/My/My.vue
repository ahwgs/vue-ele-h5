<template>
  <div class="my-page">

    <!-- 个人资料 -->
    <div class="profile">
      <div class="profile-head">
        <img :src="head" alt="头像">
      </div>
      <div class="profile-info">
        <div v-if="!isLogin" class="toLogin" @click="toLogin">
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
        <span class="iconA"><i class="iconfont icon-icon-test"></i></span>
        <span>红包</span>
      </div>
      <div class="card-item">
        <span class="iconB"><i class="iconfont icon-jinbi"></i></span>
        <span>金币</span>
      </div>
    </div>

    <template>
      <i-cell-item text="我的地址" link="/my/address" icon-style="color:rgb(74, 165, 240)" style="margin-top:10px"
                   icon="icon-dizhi"/>
    </template>

    <template>
      <i-cell-item text="金币商城" icon-style="color:rgb(148, 217, 74)" style="margin-top:10px" icon="icon-jinbi"/>
      <i-cell-item text="分享拿10元现金" icon-style="color:rgb(74, 165, 240)" style="border-top: 1px solid #ddd"
                   icon="icon-lipin"/>
    </template>

    <template>
      <i-cell-item text="我的客服" icon-style="color:rgb(148, 217, 74)" style="margin-top:10px" icon="icon-kefu"/>
      <i-cell-item text="下载饿了么App" icon-style="color:rgb(74, 165, 240)" style="border-top: 1px solid #ddd"
                   icon="icon-app"/>
      <i-cell-item text="规则中心" icon-style="color:rgb(74, 165, 240)" style="border-top: 1px solid #ddd"
                   icon="icon-wendang"/>
    </template>

  </div>
</template>

<script>
  import ImageData from '../../utils/images'
  import {Icon} from 'vant'
  import {mapState} from 'vuex'
  import CellItem from '../../components/CellItem/CellItem'

  export default {
    name: 'My',
    components: {
      "vant-icon": Icon,
      "i-cell-item": CellItem
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
    background-color: #F5F5F5;
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
      background-color: #fff;
      height: 82px;
      width: 100%;
      .card-item {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        span {
          font-weight: 600;
        }
        &:last-child {
          border-left: 1px solid rgb(221, 221, 221);
        }
        .iconfont {
          font-size: 18px;
          color: #fff;
        }
        .iconA {
          width: 25px;
          height: 25px;
          background-color: #FF5F3E;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .iconB {
          background-color: #6AC20B;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
