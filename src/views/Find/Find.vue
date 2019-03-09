<template>
  <div class="find-page">
    <div class="find-discover">
      <router-link class="discover-item" :key="index" :to="item.content_url" v-for="(item,index) in discoverList">
        <div class="content">
          <p class="title" :style="{color:item.title_color}">{{item.title}}</p>
          <p class="subtitle">{{item.subtitle}}</p>
        </div>
        <img class="icon" :src="getDiscoverImg(item.main_pic_hash)" :alt="item.title">
        <img style="display: none;">
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
  import {ELE_IMG_URL} from "../../utils/config";
  import {mapState} from 'vuex'

  export default {
    name: 'Find',
    computed: {
      ...mapState({
        discoverList: state => state.find.discoverList
      })
    },
    methods: {
      getDiscoverImg: function (img) {
        return ELE_IMG_URL + img + '?imageMogr/format/webp/'
      }
    },
    created() {
      this.$store.dispatch({
        type:'find/getFindList',
        payload:{
          token:'1213'
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .find-page {
    min-height: 100vh;
  }

  .find-discover {
    border-width: 1px 0;
    box-sizing: border-box;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    background: #fff;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    .discover-item {
      width: 50%;
      .icon {
        width: 45px;
        height: 45px;
      }
      &:first-child {
        border-right: 1px solid #ededed;
        position: absolute;
        justify-content: space-between;
        align-items: flex-start;
        align-items: normal;
        padding: 20px 15px 0 20px;
      }
      &:first-child {
        .icon {
          width: 75px;
          height: 75px;
          align-self: flex-end;
        }
      }
      &:nth-child(3n + 1) {
        border-right: 1px solid #ededed;
      }
      &:nth-child(2) {
        margin-left: 50%;
      }
      &:nth-child(3) {
        margin-left: 50%;
      }
    }
    .content {
      text-align: left;
      .title {
        font-size: 16px;
      }
      .subtitle {
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>
