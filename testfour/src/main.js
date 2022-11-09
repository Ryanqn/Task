import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import axios from 'axios'


// axios.defaults.baseURL='http://127.0.0.1:4523/m1/1021699-0-default'
axios.defaults.baseURL='http://lib.xxr120.xyz:8000'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
