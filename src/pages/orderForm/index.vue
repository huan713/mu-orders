<template>
  <div class="page">
    <div class="card">
      <div class="form-item">
        <button
          @click="showList"
          type="default"
          size="large">
          {{ activeMenu }}
        </button>
      </div>
      <div class="form-item">
        <input class="input" type="number" placeholder="单人订购上限">
      </div>
      <div class="form-item">
        <input class="input" type="number" placeholder="订购总数量上限">
      </div>
      <div class="form-item">
        <input class="input" type="number" placeholder="配送费">
      </div>
    </div>
    <div class="card">
      <picker
        mode="date"
        :value="date"
        start="2015-09-01"
        end="2017-09-01"
        @change="dateChange"
      >
        <view class="picker">
          截至时间: {{date}}
        </view>
      </picker>
    </div>
    <div class="card-o" style="margin-top: 32px;">
      <button type="primary">完 成</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeMenu: '一点点奶茶',
      itemList: [
        '一点点奶茶'
      ],
      date: ''
    }
  },
  methods: {
    dateChange (e) {
      this.date = e.mp.detail.value
    },
    showList () {
      this.$refs.actionsheet.show()
    }
  }
}
</script>

