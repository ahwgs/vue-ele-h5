<template>
  <aside class="filter">
    <div class="filter-header">
      <div
        class="item"
        :class="hasActiveItem(item)?'activeItem':''"
        @click="handleLeftFilterList"
      >
        {{activeOrderBy.name}}
        <span class="iconText"><van-icon name="arrow-down"/></span>
      </div>
      <template v-for="(item,index) in filterData.outside_sort_filter">
        <div
          class="item"
          :class="hasActiveItem(item)?'activeItem':''"
          @click="handleChangeActive(item)"
        >
          <img class="icon" v-if="item.image_hash" :src="getIcon(item.image_hash)" alt="">
          {{item.name}}
        </div>
      </template>
      <div
        class="item"
      >筛选
      </div>
    </div>
    <van-popup
      position="top"
      get-containet="filter"
      v-model="showFilterContent"
    >
      <div class="filter-extend">
        <div v-for="(item ,index) in filterData.inside_sort_filter">
          {{item.name}}
        </div>
      </div>
    </van-popup>
  </aside>
</template>


<script>
  import {formatImgWithEle, findIndex} from '@utils/utils'
  import {Icon, Popup} from 'vant';

  export default {
    name: "HomeFilter",
    components: {
      "van-icon": Icon,
      "van-popup": Popup
    },
    props: {
      filterData: {
        type: Object
      }
    },
    data() {
      return {
        activeOrderBy: {
          name: '综合排序',
          key: 'order_by',
          value: 0
        },
        activeList: [],
        showFilterContent: false
      }
    },
    created() {
      console.log('排序', this.filterData.inside_sort_filter)
    },
    methods: {
      handleLeftFilterList() {
        //左侧下拉
        window.scrollTo(0, 1000)
        this.showFilterContent = true
      },
      hasActiveItem(target) {
        //判断这个item 在不在已经激活的里面
        let list = this.activeList
        console.log('hasActiveItem', target)
        if (!list || list.length < 1) return false
        let resultIndex = -1
        list.map((item, index) => {
          if (item.key === target.key && item.value === target.value) {
            resultIndex = index
          }
        })
        return resultIndex >= 0
      },
      handleChangeActive(target) {
        //order_by 只能有一个 也可以同时存在super_vip
        let list = this.activeList
        if (list.length === 0) {
          list.push(target)
        } else {
          const targetList = list.filter(item => {
            return item.key === target.key + ''
          })
          if (targetList.length < 1) {
            list.push(target)
          } else {
            const index = findIndex(list, target.key, 'key')
            //判断是否相同
            const isSame = list[index].value === target.value
            if (isSame)
              list.splice(index, 1)
            else
              list.splice(index, 1, target)
          }
        }
        this.activeList = list
        this.$emit('onGetList', list)
      },
      getIcon: function (imgUrl) {
        return formatImgWithEle(imgUrl) + '?imageMogr/format/webp/thumbnail/568x/'
      }
    }
  }
</script>

<style scoped lang="less">
  .filter {
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 101;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    font-size: 14px;
  }

  .filter-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .activeItem {
    font-weight: bold;
  }

  .icon {
    width: 12px;
  }

  .item {
    display: flex;
    align-items: center;
    .iconText {
      display: flex;
    }
  }

  .filter-extend {
    display: flex;
    flex-direction: column;
  }
</style>
