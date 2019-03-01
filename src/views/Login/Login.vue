<template>
  <div class="login-page">
    <div class="warp">
      <div class="logo"><img :src="logo" alt=""></div>
      <div class="phone from">
        <input placeholder="手机号" class="input" v-model="phone" maxlength="11"/>
        <button class="code-btn" @click="getCode" :disabled="disabled">获取验证码</button>
      </div>
      <div class="code from">
        <input placeholder="验证码" class="input" v-model="code" maxlength="6"/>
      </div>
      <div class="xieyi from">
        新用户登录即自动注册，并表示已经同意
        <router-link class="link" to="/">《用户服务协议》</router-link>
      </div>
      <div class="loginBtn from">
        <button class="btn">登录</button>
      </div>
      <div class="about from">
        <router-link to="/about">关于我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageData from '../../utils/images'

  export default {
    name: 'Login',
    data() {
      return {
        logo: ImageData.loginLogo,
        phone: '',
        code: '',
      }
    },
    computed: {
      disabled: function () {
        return !this.phone.trim().length >= 11
      }
    },
    methods: {
      getCode: function () {
        alert('12')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    background-color: #fff;
    min-height: 100vh;

    .warp {
      width: 80%;
    }

    .phone {
      position: relative;
      .code-btn {
        position: absolute;
        right: 12px;
        top: 16px;
        background-color: #fff;
        color: @base-color-gray;
      }
    }

    .xieyi {
      font-size: @base-font-size-d;
      color: @base-color-gray;
      text-align: left;
      line-height: 20px;
    }

    .from {
      margin-top: 16px;
    }

    .link {
      color: @base-color;
    }

    .loginBtn {
      .btn {
        width: 100%;
        border-radius: 4px;
        background-color: @base-color-green;
        height: 40px;
        color: #fff;
        font-size: @base-font-size-m;
      }
    }

    .about {
      color: @base-color-gray;
    }

    .input {
      width: 100%;
      left: 0;
      padding-left: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: @base-color-black;
      height: 48px;
      -webkit-appearance: none;
      font-size: @base-font-size-d;

      &:active {
        border-color: @base-color;
      }

      &:focus {
        border-color: @base-color;
      }
    }

    input::-webkit-input-placeholder {
      color: @base-color-gray;
      font-size: @base-font-size-d;
    }
  }
</style>
