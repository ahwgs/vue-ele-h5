<template>
    <div class="search-result-page">
      <div class="search">
        <router-link class="search-back" to="/search">
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

      <div v-if="searchList.length<1" class="no-result">
        <img class="no-result-img" :src="noData" alt="">
        <div>
          <p>附近没有搜索结果</p>
          <p>换个关键词试试吧</p>
        </div>
      </div>
    </div>
</template>

<script>
    import {Icon, Search} from 'vant'
    import {mapState} from 'vuex'
    import ImageData from '../../utils/images'
    export default {
        name: "SearchResult",
        components: {
          "van-icon": Icon,
          "van-search": Search
        },
      data(){
          return{
            searchWord:'',
            noData: ImageData.noData,
          }
      },
      created(){
        console.log(this.$route)
        const keyword = this.$route.query.keyword
        if(keyword) this.searchWord = keyword
      },
      computed: {
        ...mapState({
          searchList:state => state.search.searchList,
        })
      },
      methods:{
        onSearch:function () {
          try {
            const searchWord = this.searchWord
            if (searchWord.trim() === '') {
              this.$toast('请输入搜索内容')
              return
            }
            this.setHistory([searchWord])
            console.log('搜索词', this.searchWord);
            this.getSearch(searchWord)
          }catch (e) {
            console.log(e)
          }
        },
        getSearch: function (key) {
          try {
            this.$store.dispatch({
              type:'search/getSearchList',
              payload:{
                keyword:key
              }
            }).then(()=>{
              this.$router.replace(`/search/result?keyword=${key}`)
            })
          }catch (e) {

          }
        },
        setHistory: function (list) {
          this.$store.commit({
            type: 'search/changeHistoryList',
            payload: list
          })
        }
      }
    }
</script>

<style scoped lang="less">
.search-result-page{
  min-height: 100vh;

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
  .no-result{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 20px 0;
    .no-result-img{
      width: 80px;
    }
    div{
      display: flex;
      text-align: left;
      flex-direction: column;
      p{
        &:first-child{
          color: #666;
          font-size: 16px;
          margin-top: 0;
        }
        color: #999;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
}
</style>
