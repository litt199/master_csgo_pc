import Vue from 'vue'
import Router from 'vue-router'



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
          path: '/public_box_home/spread',
          name: 'spread',
          component: () => import(/* webpackChunkName: "about" */ './views/spread/spread.vue')
        },
        {
          path: '/public_box_home/dailyFreeNew',
          name: 'dailyFreeNew',
          component: () => import(/* webpackChunkName: "about" */ './views/dailyFreeNew.vue'),
          children:[
            {
              redirect:'/public_box_home/dailyFreeNew/dailyFreeChildren',
              path:'/'
            },
            {
              path: '/public_box_home/dailyFreeNew/dailyFreeChildren',
              name: 'dailyFreeChildren',
              component: () => import( './views/dailyFreeChildren.vue')
            },
            {
              path: '/public_box_home/dailyFreeNew/Roll',
              name: 'Roll',
              component: () => import( './views/ROLLwelfare.vue')
            }
          ]
        },
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
          component: () => import(/* webpackChunkName: "about" */ './views/myCenter1.vue')
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
        {
          path: '/public_box_home/spreadCenter',
          name: 'spreadCenter',
          component: () => import(/* webpackChunkName: "about" */ './views/spread/spreadCenter.vue')
        },
      ]
    },

    {
      path: '/four',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    },
    {
      path: '*', // 页面不存在的情况下会跳到404页面
      redirect: '/four',
      name: 'notFound',
      hidden: true
    }
  ],
  
})

