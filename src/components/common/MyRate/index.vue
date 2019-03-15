<template>
  <div class="rate">
    <div class="rate-gray-warp">
      <img :src="rateNoneImg" alt="">
    </div>
    <div class="rate-warp" :style="getRateCount()">
      <img :src="rateImg" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    props: {
      count: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        rateImg: ImageData.rate,
        rateNoneImg: ImageData.rateNone,
      }
    },
    methods: {
      getRateCount: function () {
        let res = 100
        if (this.count) {
          res = (this.count / 5).toFixed(2) * 100
        }
        return `width:${res}%`
      }
    }
  }
</script>

<style scoped lang="less">
  .rate {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    .rate-warp {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
    .rate-gray-warp {
      display: flex;
    }
    img{
      width: 1.493333rem;
      width: 14.933333vw;
      height: .266667rem;
      height: 2.666667vw;
      -webkit-flex: none;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      max-width: none;
    }
  }
</style>
