import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router/router'
import 'bootstrap'
import $ from 'jquery'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/less/varibles.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  
import i18n from './lang/i18n.js'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale})
import less from 'less'
Vue.use(less)
new Vue({
  render: h => h(App),
  router,
  i18n,
  $ 
}).$mount('#app')
