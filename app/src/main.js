import Vue from 'vue'
import App from './App.vue'

import router from './router'
import request,{baseUrl} from './utils/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import store from './store'

Vue.use(ElementUI)

Vue.prototype.$request = request;
Vue.prototype.baseUrl = baseUrl;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
