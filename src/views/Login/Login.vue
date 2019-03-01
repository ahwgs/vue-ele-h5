<template>
  <div class="login-page">
    <div class="warp">
      <div class="logo"><img :src="logo" alt=""></div>
      <div class="phone from">
        <input class="input" v-model="phone" maxlength="11"/>
      </div>
      <div class="code from">
        <input class="input" v-model="code" maxlength="6"/>
      </div>
      <div class="xieyi from"></div>
      <div class="loginBtn from"></div>
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
        code: ''
      }
    }
  }
</script>

<style scoped lang="less">
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

    .logo {

    }
    .from{
      margin-top: 20px;
    }

    .input {
      width: 100%;
      left: 0;
      padding-left: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #333;
      height: 48px;
      -webkit-appearance: none;
      font-size: 14px;
    }
  }
</style>
