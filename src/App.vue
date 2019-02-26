<template>
  <div id="app">
    <router-view/>
    <i-nav-bar></i-nav-bar>
  </div>
</template>
<script>
  import BNavBar from './components/BNavBar/index'
  export default {
    components: {
      "i-nav-bar": BNavBar
    }
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
  }
</style>
