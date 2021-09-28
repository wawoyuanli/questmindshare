import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router/router'
import 'bootstrap'
import $ from 'jquery'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/less/varibles.less'
import less from 'less'
Vue.use(less)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
