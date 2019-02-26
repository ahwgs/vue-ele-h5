<template>
  <header class="header">
    <div class="header-index">
      <van-icon class="iconL" name="location"/>
      <span class="text">福鼎家园</span>
      <van-icon class="iconX" name="arrow-down"/>
    </div>
  </header>

</template>

<script>
  import {Icon} from 'vant';

  export default {
    name: "HomeHeader",
    components: {
      "van-icon": Icon
    }
  }
</script>

<style scoped lang="less">
  .header {
    padding: 14px 14px 0 14px;
    background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
    .header-index {
      display: flex;
      height: 35px;
      align-items: center;
      .text{
        font-size: 20px;
        font-weight: 600;
      }
      .iconL{
        font-size: 20px;
        font-weight: 600;
        margin-right: 5px;
        margin-top: -4px;
      }
      .iconX{
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
</style>
