<template>
  <div class="search-page">
    <div class="search">
      <router-link class="search-back" to="/">
        <van-icon name="arrow-left"/>
      </router-link>
      <van-search
        v-model="searchWord"
        placeholder="输入商家、商品名称"
        show-action
        class="search-input"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <section v-if="showHistory">
      <header class="label">历史搜索
        <van-icon @click="hideHistory" name="failure"/>
      </header>
      <section class="value">
        <div @click="onHotSearch(item)" class="item" v-for="(item,index) in historyList" :key="index">{{item}}</div>
      </section>
    </section>
    <section style="margin-top: 15px">
      <header class="label">热门搜索</header>
      <section class="value">
        <div @click="onHotSearch(item)" class="item" v-for="(item,index) in hotSearchList" :key="index">{{item}}</div>
      </section>
    </section>
  </div>
</template>

<script>
  import {Icon, Search} from 'vant'

  export default {
    name: "Search",
    components: {
      "van-icon": Icon,
      "van-search": Search
    },
    data() {
      return {
        searchWord: '',
        hotSearchList: ['好吃的', '不好吃的'],
        historyList: ['1111', '2222', '3333'],
        showHistory: true
      }
    },
    methods: {
      onSearch: function () {

      },
      hideHistory: function () {
        this.showHistory = false
      },
      onHotSearch: function (item) {
        this.searchWord = item;
        this.getSearch(item)
      },
      getSearch: function (key) {

      }
    }
  }
</script>

<style scoped lang="less">
  .search-page {
    min-height: 100vh;
    background-color: #fff;

    .search {
      display: flex;
    }

    .search-back {
      background-color: #fff;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 4px;
    }

    .search-input {
      display: flex;
      flex: 1;
    }

    .label {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 8px 14px 8px 14px;
      color: #666;
      font-weight: 700;
    }

    .value {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .item {
      border-radius: 4px;
      color: #666;
      padding: 6px 10px;
      background-color: #f7f7f7;
      margin-left: 14px;
      margin-top: 10px;
    }
  }
</style>
