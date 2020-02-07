import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

import './assets/base.css'
import './assets/index.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
