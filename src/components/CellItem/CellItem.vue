<template>
  <section class="cell-com">
    <router-link :to="link" class="cell-com-item">
      <div class="label"><i :style="iconStyle" class="iconfont" :class="icon"></i></div>
      <div class="value">
        {{text}}
        <vant-icon name="arrow"/>
      </div>
    </router-link>
  </section>
</template>

<script>
  import {Icon} from 'vant'

  export default {
    name: "CellItem",
    components: {
      "vant-icon": Icon,
    },
    props: {
      link: {
        type: String,
        default: '/'
      },
      icon: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: '单元格文字'
      },
      iconStyle: {
        type: String,
        default: 'color:#bbb'
      }
    }
  }
</script>

<style scoped lang="less">
  .cell-com {
    display: flex;
    background: #fff;
    height: 54px;
    align-items: center;
    .cell-com-item {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0 12px 0 14px;
    }
    .label {
      margin-right: 10px;
      margin-top: -4px;
      i {
        font-size: 22px;
      }
    }
    .value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      font-size: 14px;
      i {
        color: #bbb;
      }
    }
  }
</style>
