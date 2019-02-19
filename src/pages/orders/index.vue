<template>
  <div class="page orders">
    <div class="card">
      <!-- 头像，名字，主题，条件 -->
      <div class="avatar">
        <open-data type="userAvatarUrl" style="width: 100px;"></open-data>
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
    <div class="card">
      参与人员
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
      userInfo: null
    }
  },
  mounted () {
  },
  methods: {
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
}
</style>

