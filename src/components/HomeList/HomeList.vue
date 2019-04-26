<template>
  <van-list
    v-model="loadList"
    :finished="listFinished"
    finished-text="没有更多了"
    @load="onLoad"
    class="home-list-warp"

  >
    <list-item
      v-for="(item,index) in list"
      :key="index"
      :item="item.restaurant"/>
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
      },
      laodding: {
        type: Boolean,
        default: false
      },
      listFinished: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        finished: false,
      };
    },
    computed: {
      loadList: {
        get() {
          return this.laodding
        },
        set(newValue) {

        }
      }
    },
    methods: {
      onLoad() {
        console.log('触发回调')
        this.$emit('onload')
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
