<template>
  <div class="welfare1">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>

      <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../assets/ROLL/8.png" alt="">
            <vue-seamless-scroll
                :data="newsList"  
                class="dicent_text"
                :class-option="optionLeft"
            >
               <ul class="item">
                  <li class="li" v-for="(item,index) in newsList" :key="index">
                      <span class="title" v-text="item.content"></span>
                  </li>
              </ul>
            </vue-seamless-scroll>
          <div class="know" v-cursor @click="know">知道了</div>
          
        </div>
      <div class="box_left_box">
          <div class='tobbar_top'>
            <router-link to="/public_box_home/dailyFreeNew/dailyFreeChildren">
              <p @click="hanlechangeTopBar" :class="riactive?'meiri active':'meiri'" v-cursor>每日免费</p>
            </router-link>
            <router-link to="/public_box_home/dailyFreeNew/Roll">
                <p @click="hanlechangeTopBar1" :class="!riactive?'roll active':'roll'" v-cursor>ROLL福利</p>
            </router-link>
          </div>

          <router-view>

          </router-view>



          
      </div>
      

  </div>
</template>

<script>
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const doubleBox = () => import("../components/doubleBox")
// import doubleBox from '../components/doubleBox'
const rechargeMoney = ()=>import('./rechargeMoney')


export default {
  name: '',
  components: {
    publicBoxLeft,
    doubleBox,
    rechargeMoney,
  },
   computed: {
      optionLeft () {
        return {
                direction: 0,
                limitMoveNum: 2,
                singleHeight:19,
                waitTime:3000
            }
      }
    },
  data() {
    return {
       imgbg:this.$store.getters.neiimg2.image,
       newsList: [{
         "content":1234
       },
       {
         "content":1234
       }
       ],
       knowimg:true,  //轮播文字
       riactive:true,
    
    } 
  },
  methods:{
      //切换每日免费和roll福利的点击事件
    hanlechangeTopBar(){
      this.riactive=true;
    },
    hanlechangeTopBar1(){
      this.riactive=false;

    },
    //关闭顶部通知栏
    know(){
      this.knowimg=false
    },

  }

  


    
}
</script>

<style scoped>
.welfare1{
    width: 1280px;
    padding-bottom: 20px;
    margin:0 auto;
    position: absolute;
    left: 0;
    top: 0;
}

.ROLLfuli123{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
  background: -webkit-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -moz-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -ms-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -o-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  font-weight: 900;
  font-style: italic;
  padding-right: 20px;
}
.box_left_box{
   width: 1000px;
  position: absolute;
  display: flex;
  right: 0px;
  top: 221px;
  flex-direction: column;

}
.tobbar_top{
  color: #fff;
  display: flex;
 
  margin:40px auto 0;
}
.tobbar_top p{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 34px;
  background-color: #454545;
  border-radius: 15px 0 0 15px;

}
.tobbar_top .roll{
  border-radius: 0 15px 15px 0;
}
.tobbar_top .active{
   transition: all linear 1s;
 background: -webkit-linear-gradient(right,#E65064,#E60064);
  background: -moz-linear-gradient(right,#E65064,#E60064);
  background: -ms-linear-gradient(right,#E65064,#E60064);
  background: -o-linear-gradient(right,#E65064,#E60064);
  background: linear-gradient(right,#E65064,#E60064);

}

</style>

