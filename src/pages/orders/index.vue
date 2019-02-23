<template>
  <div class="page orders">
    <div class="card">
      <!-- 头像，名字，主题，条件 -->
      <div class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="header">
        <div class="username">
          <open-data type="userNickName"></open-data>
        </div>
        <div class="title">
          2019-2-19一点点奶茶 小分队
        </div>
      </div>
    </div>
    <div class="table">
      <div
        class="table-item"
        v-for="(item, index) in listData"
        :key="index">
        <span class="image">
          <open-data type="userAvatarUrl"></open-data>
        </span>
        <span class="uname">
          <open-data type="userNickName"></open-data>
        </span>
        <div class="tea-info">
          <div class="tea-name">
            <span class="size">大</span>
            <span class="name">珍珠奶茶</span>
          </div>
          <div class="tea-tag">
            <!-- 是否加冰：热，常温，去冰，加冰 -->
            <span>
              <img src="/static/images/hot-1.png" v-show="item.hot === 1">
              <img src="/static/images/hot-2.png" v-show="item.hot === 2">
              <img src="/static/images/hot-3.png" v-show="item.hot === 3">
              <img src="/static/images/hot-4.png" v-show="item.hot === 4">
            </span>
            <!-- 几分甜：全，7，5，3，0 -->
            <span></span>
            <!-- 加料：珍珠，波霸，红豆，椰果，仙草 -->
            <span>
              <img src="/static/images/m-1.png" v-show="item.material1 === 1 || item.material2 === 1">
              <img src="/static/images/m-2.png" v-show="item.material1 === 2 || item.material2 === 2">
              <img src="/static/images/m-3.png" v-show="item.material1 === 3 || item.material2 === 3">
              <img src="/static/images/m-4.png" v-show="item.material1 === 4 || item.material2 === 4">
              <img src="/static/images/m-5.png" v-show="item.material1 === 5 || item.material2 === 5">
            </span>
          </div> 
        </div>
      </div>
    </div>
    <div class="card">
      我要参与
    </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: null,
      listData: [
        { teaName: '珍珠奶茶', size: '大', hot: 1, material1: 1, material2: 2, sweet: 10 },
        { teaName: '珍珠奶茶', size: '大', hot: 2, material1: 3, material2: 4, sweet: 7 },
        { teaName: '珍珠奶茶', size: '大', hot: 3, material1: 1, material2: 3, sweet: 5 },
        { teaName: '珍珠奶茶', size: '大', hot: 4, material1: 1, material2: 4, sweet: 3 },
        { teaName: '珍珠奶茶', size: '大', hot: 1, material1: 4, material2: 5, sweet: 0 }
      ]
    }
  },
  mounted () {
  },
  methods: {
    getUrl (num) {
      return `../../assets/image/hot-${num}.png`
    },
    hasM (m, num) {
      return m.indexOf(`${num}`) > -1
    }
  }
}
</script>

<style lang="less">
.page.orders {
  .avatar {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .header {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1.2em;
  }
  .username {
    font-size: 14px;
    color: #aaa;
  }
  .title {
    font-size: 16px;
  }
  .table-item {
    .image,
    .uname {
      display: inline-block;
      vertical-align: middle;
      line-height: 48px;
      font-size: 14px;
    }
    .image {
      height: 32px;
      width: 32px;
      margin-right: 8px;
      border-radius: 50%;
      overflow: hidden;
    }
    .tea-info {
      float: right;
      margin-top: 8px;
      font-size: 12px;
      .tea-tag {
        margin-top: 4px;
      }
      span {
        padding: 0 4px;
        color: #333;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>

