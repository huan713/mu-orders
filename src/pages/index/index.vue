<template>
  <div class="page">
    <card>
      <a href="/pages/orderForm/main" style="text-align: center;">
        <img src="/static/images/tea.png" class="menu-image">
        <button type="default" size="large">下午茶集结令</button>
      </a>
    </card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less">
.menu-image {
  width: 160px;
  height: 160px;
}
</style>
