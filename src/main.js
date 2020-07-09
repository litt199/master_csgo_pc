import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';

import {Pagination} from 'element-ui'
Vue.use(Pagination)

//引入图片懒加载
import VueLazyload from 'vue-lazyload' 
Vue.use(VueLazyload)

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})




  



//注册全局组件
import publicBox from './components/treasureBox'
Vue.use(publicBox)

//注册全局自定义指令
import directive from './components/directive'
Vue.use(directive)

//使用axios 
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
