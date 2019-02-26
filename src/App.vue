<template>
  <div id="app">
    <router-view/>
    <i-nav-bar :show="showNavBar"></i-nav-bar>
  </div>
</template>
<script>
  import BNavBar from './components/BNavBar/index'
  import {mapState} from 'vuex'
  export default {
    components: {
      "i-nav-bar": BNavBar
    },
    computed: {
      ...mapState({
        showNavBar: state => state.app.showNavBar
      })
    },
  }
</script>
<style lang="less">
  @import "assets/less/base";
  @import "assets/less/config";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F5F5F5;
    min-height: 100vh;
  }
</style>
