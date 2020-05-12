// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 导入elementUI的样式表
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'


Vue.config.productionTip = false

import {Message} from 'element-ui'
Vue.prototype.$message = Message

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
