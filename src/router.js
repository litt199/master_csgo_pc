import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index'
import ROLLWelfare from './views/ROLLwelfare.vue'
import csgoOpenBox from './views/csgoOpenBox'
import myCenter from './views/myCenter'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue'),
      meta:{
        title:'Obcase'  
      }
    },
    {
      path: '/public_box_home',
      name: 'public_box_home',
      component: () => import(/* webpackChunkName: "about" */ './views/public_box_home.vue'),
      meta:{
        title:'Obcase'  
      },
      children:[
        // {
        //   path: '/public_box_home/dailyFree',
        //   name: 'dailyFree',
        //   component: () => import(/* webpackChunkName: "about" */ './views/dailyFree.vue')
        // },
        {
          path: '/public_box_home/faq',
          name: 'faq',
          component: () => import(/* webpackChunkName: "about" */ './views/faq.vue')
        },
        {
          path: '/public_box_home/faq1',
          name: 'faq1',
          component: () => import(/* webpackChunkName: "about" */ './views/faq1.vue')
        },
        {
          path: '/public_box_home/faq2',
          name: 'faq1',
          component: () => import(/* webpackChunkName: "about" */ './views/faq2.vue')
        },
        {
          path: '/public_box_home/csgo',
          name: 'csgo',
          component: () => import(/* webpackChunkName: "about" */ './views/csgoOpenBox.vue')
        },
        {
          path: '/public_box_home/openBox',
          name: 'openBox',
          component: () => import(/* webpackChunkName: "about" */ './views/openBox.vue')
        },
        {
          path: '/public_box_home/fiveOpenBox',
          name: 'fiveOpenBox',
          component: () => import(/* webpackChunkName: "about" */ './views/fiveOpenBox.vue')
        },
        {
          path: '/public_box_home/myCenter',
          name: 'myCenter',
          component: () => import(/* webpackChunkName: "about" */ './views/myCenter.vue')
        },
        
        {
          path: '/public_box_home/Roll',
          name: 'Roll',
          component: () => import(/* webpackChunkName: "about" */ './views/ROLLwelfare.vue')
        },
        {
          path: '/public_box_home/ROLLactivelyDetail',
          name: 'ROLLactivelyDetail',
          component: () => import(/* webpackChunkName: "about" */ './views/ROLLactivelyDetail.vue')
        },
        {
          path: '/public_box_home/exchangeMall',
          name: 'exchangeMall',
          component: () => import(/* webpackChunkName: "about" */ './views/exchangeMall.vue')
        },
      ]
    },

    // {
    //   path: '/dailyFree',
    //   name: 'dailyFree',
    //   component: () => import(/* webpackChunkName: "about" */ './views/dailyFree.vue')
    // },
 
  ]
})
