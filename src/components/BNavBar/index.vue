<template>
  <footer v-if="show" class="footer">
    <div class="index-footer">
      <router-link exact class="footer-item" v-for="(item,index) in menuList" :to="item.path">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.name}}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "BNavBar",
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        menuList: [
          {
            name: '首页',
            path: '/',
            icon: 'icon-home'
          },
          {
            name: '发现',
            path: '/find',
            icon: 'icon-faxian'
          },
          {
            name: '订单',
            path: '/order',
            icon: 'icon-dingdan'
          },
          {
            name: '我的',
            path: '/my',
            icon: 'icon-wode'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .footer {
    height: 12vh;
    .index-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: .12rem;
      padding-top: 1.2vw;
      background-color: #fff;
      height: 50px;
      -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
      box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
      -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, .1);
      box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, .1);
    }

    .footer-item {
      display: flex;
      flex-direction: column;
      flex: 1;

      .iconfont {
        font-size: 20px;
        margin-bottom: 2px;
      }
    }

    .active {
      span {
        color: @base-color;
      }

      .iconfont {
        color: @base-color;
      }
    }

  }
</style>
