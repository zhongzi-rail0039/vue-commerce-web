import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js'
import './assets/css/index.css'
import './assets/css/base.css'

Vue.use(VueAxios, axios)
// 提升开关
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
