import Vue from 'vue'
import App from './App'
import '@/assets/style/main.less'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
