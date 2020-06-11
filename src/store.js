import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:localStorage.getItem('token')?localStorage.getItem('token'):'',
      imgUrl:'https://blackholes.oss-cn-shanghai.aliyuncs.com',
      newsList: JSON.parse(localStorage.getItem('mes'))!=""?JSON.parse(localStorage.getItem('mes')):[{
        "content":1234
      },
      {
        "content":1234
      }],
      neiimg:[
        {

          image:require('./assets/csgo/1.jpg')
        },
        {
 
          image:require('./assets/ROLL/1.jpg')
        }
      ],
  },
  mutations: {

   
      getNei(state,data){
        state.neiimg=data
      }
  },
  actions: {
   
  }
})
