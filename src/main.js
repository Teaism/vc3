import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import Axios from 'axios'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 配置axios
Axios.defaults.baseURL = '127.0.0.1:8080'
Vue.prototype.$axios = Axios

// 配置mint-ui
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
