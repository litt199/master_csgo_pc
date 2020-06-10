import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:localStorage.getItem('token')?localStorage.getItem('token'):'',
      imgUrl:'https://blackholes.oss-cn-shanghai.aliyuncs.com',
      mes:"微信、云闪付通道维护中~暂时关闭，请关注其他方式",
      imgL:[
        {
          link:'/public_box_home/Roll',
          image:require('./assets/banner/1.png')
        },
        {
          link:'/public_box_home/Roll',
          image:require('./assets/banner/1.png')
        }
      ],
      neiimg:[
        {
          link:'/public_box_home/Roll',
          image:require('./assets/csgo/1.jpg')
        },
        {
          link:'/public_box_home/Roll',
          image:require('./assets/banner/1.png')
        }
      ],
  },
  mutations: {
      getmes(state,msg){
        console.log(msg)
        state.mes=msg;
      },
      getBanner(state,msg){
        state.imgL=msg;
      },
      getNei(state,data){
        state.neiimg=data
      }
  },
  actions: {
   
  }
})
