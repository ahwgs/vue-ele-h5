<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    class="home-list-warp"

  >
    <list-item v-for="(item,index) in list" :key="index" :item="item.restaurant" />
  </van-list>
</template>

<script>
  import {List} from 'vant';
  import HomeListItem from '@components/HomeListItem/HomeListItem'

  export default {
    name: "HomeList",
    components: {
      "van-list": List,
      "list-item": HomeListItem
    },
    props: {
      list: {
        type: Array,
      }
    },
    data() {
      return {
        loading: false,
        finished: false
      };
    },
    methods: {
      onLoad() {
        console.log('首页店铺数据', this.list)
        // 异步更新数据
        // setTimeout(() => {
        //   for (let i = 0; i < 10; i++) {
        //     this.list.push(this.list.length + 1);
        //   }
        //   // 加载状态结束
        this.loading = false;
        //
        //   // 数据全部加载完成
        //   if (this.list.length >= 40) {
        //     this.finished = true;
        //   }
        // }, 500);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/config";

  .home-list-warp {
    background-color: #fff;
  }
</style>
