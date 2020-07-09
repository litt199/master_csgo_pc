import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:localStorage.getItem('token')?localStorage.getItem('token'):'',
      imgUrl:'https://blackholes.oss-cn-shanghai.aliyuncs.com',
      newsList: JSON.parse(localStorage.getItem('mes'))!=null?JSON.parse(localStorage.getItem('mes')):[{
        "content":1234
      },
      {
        "content":1234
      }],
      // neiimg0:'',
      // neiimg1:'',
      // neiimg2:'',
      // neiimg3:'',
      // neiimg4:'',
  },
  getters:{
    neiimg0(){
      if(JSON.parse(localStorage.getItem('imgbgnei'))!=null){
        if(JSON.parse(localStorage.getItem('imgbgnei'))[0]!=""&&JSON.parse(localStorage.getItem('imgbgnei'))[0]!=null){
          return JSON.parse(localStorage.getItem('imgbgnei'))[0]
        }else{
          return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
        }
      }else{
        return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
      }
    },
    neiimg1(){
      if(JSON.parse(localStorage.getItem('imgbgnei'))!=null){
        if(JSON.parse(localStorage.getItem('imgbgnei'))[1]!=""&&JSON.parse(localStorage.getItem('imgbgnei'))[1]!=null){
          return JSON.parse(localStorage.getItem('imgbgnei'))[1]
        }else{
          return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
        }
      }else{
        return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
      }
    },
    neiimg2(){
      if(JSON.parse(localStorage.getItem('imgbgnei'))!=null){
        if(JSON.parse(localStorage.getItem('imgbgnei'))[2]!=""&&JSON.parse(localStorage.getItem('imgbgnei'))[2]!=null){
          return JSON.parse(localStorage.getItem('imgbgnei'))[2]
        }else{
          return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
        }
      }else{
        return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
      }
    },
    neiimg3(){
      if(JSON.parse(localStorage.getItem('imgbgnei'))!=null){
        if(JSON.parse(localStorage.getItem('imgbgnei'))[3]!=""&&JSON.parse(localStorage.getItem('imgbgnei'))[3]!=null){
          return JSON.parse(localStorage.getItem('imgbgnei'))[3]
        }else{
          return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
        }
      }else{
        return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
      }
    },
    neiimg4(){
      if(JSON.parse(localStorage.getItem('imgbgnei'))!=null){
        if(JSON.parse(localStorage.getItem('imgbgnei'))[4]!=""&&JSON.parse(localStorage.getItem('imgbgnei'))[4]!=null){
          return JSON.parse(localStorage.getItem('imgbgnei'))[4]
        }else{
          return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
        }
      }else{
        return {link: "", image: "https://yizu-zbx.oss-cn-shanghai.aliyuncs.com/res/image/2020/6/3439cfa2756f4f82a317d7669cab2fcf.jpg", pos: "bar"}
      }
    }
  },
  mutations: {
     
  },
  actions: {
   
  }
})
