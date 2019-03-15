<template>
  <section class="store-item">
    <div class="item-header">
      <div class="header-logo">
        <img :src="getLogo(this.item.image_path,this.item)" alt="">
      </div>
      <div class="header-title">
        <section class="title-item f">
          <h3 class="title">
            <span v-show="item.is_premium===true" class="brand">品牌</span>
            <span class="name">{{item.name}}</span>
          </h3>
          <ul>
            <li @click="changeShowMask" style="font-weight: 600">...</li>
          </ul>
        </section>
        <section class="title-item s">
          <div class="star">
            <span class="star-f">
              <my-rate :count="item.rating"/>
            </span>
            <span class="star-s">{{item.rating}}</span>
            <span class="star-t">月售{{item.recent_order_num}}单</span>
          </div>
          <div></div>
        </section>
        <section class="title-item t">
          <div class="delivery">
            <span>￥{{item.float_minimum_order_amount}}起送</span>
            <span>|</span>
            <span>{{item.float_delivery_fee>0?`配送费￥${item.float_delivery_fee}`:`免配送费`}}</span>
          </div>
          <div class="delivery">
            <span>{{getDistance(item.distance)}}</span>
            <span>|</span>
            <span>{{item.order_lead_time}}分钟</span>
          </div>
        </section>
      </div>
    </div>
    <div class="item-body">
      <section class="tag-list">
        <span class="tag-warp" v-for="(tag,index) in item.support_tags"><span class="tag">{{tag.text}}</span></span>
      </section>
    </div>
    <div v-if="showMask" @click="changeShowMask" class="item-mask">
      <div class="mask-circle">
        <span @click="doLikeItem">不喜欢</span>
      </div>
    </div>
  </section>
</template>

<script>
  import {formatImgWithEle} from '@utils/utils'
  import {ELE_IMG_URL} from "@utils/config";
  import MyRate from '@components/common/MyRate'

  export default {
    name: "HomeListItem",
    components: {
      "my-rate": MyRate
    },
    props: {
      item: {
        type: Object,
      }
    },
    data() {
      return {
        showMask: false,
      }
    },
    methods: {
      getLogo: function (path, item) {
        console.log('我是每一条的数据', item)
        return ELE_IMG_URL + formatImgWithEle(path) + ''
      },
      changeShowMask: function () {
        this.showMask = !this.showMask
      },
      doLikeItem: function () {
        this.$toast('您点击了不喜欢');
      },
      getDistance: function (distance) {
        if (distance < 100) {
          return '即将送达'
        }
        else if (distance < 1000) {
          return distance + 'm'
        } else {
          return (distance / 1000).toFixed(2) + 'km'
        }
      },
      getTagStyle: function (tag) {
        let result = {
          color: '#' + tag.color,
          borderColor: '#' + tag.border,
        }
        return JSON.stringify(result)
      }
    }
  }
</script>

<style scoped lang="less">
  .store-item {
    position: relative;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: 12px;
    line-height: normal;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    position: relative;
  }

  .item-header {
    display: flex;
    padding: 0 10px;
    .header-logo {
      width: 75px;
      height: 75px;
      img {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, .08);
      }
    }
    .header-title {
      display: flex;
      flex-direction: column;
      padding-left: 15px;
      justify-content: space-between;
      width: calc(100% - 80px);
      padding-top: 2px;
      padding-bottom: 2px;
      .title-item {
        display: flex;
        justify-content: space-between;
      }
      .title {
        display: flex;
        margin: 0;
        padding: 0;
        color: #333;
        font-weight: 700;
        overflow: hidden;
        font-size: 14px;
        .brand {
          display: inline-block;
          margin-right: 4px;
          font-size: 12px;
          background-color: #FFEB17;
          color: #6F3F15;
          padding: 2px 4px;
          border-radius: 4px;
        }
      }
      .star {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-right: 4px;
        }
        .star-f {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: -4px;
        }
      }
      .delivery {
        span {
          &:nth-child(2) {
            margin: 0 4px;
            color: #ddd;
          }
        }
      }
    }
  }

  .item-body {
    padding-left: 100px;
    .tag-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 10px 15px 0 0 ;
      .tag-warp {
        position: relative;
        white-space: nowrap;
        .tag {
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transform: scale(.8);
          border: 1px solid #ddd;
        }
      }
    }
  }

  .item-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    .mask-circle {
      width: 60px;
      height: 60px;
      background-color: #fff;
      color: #000;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
