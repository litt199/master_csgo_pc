<template>
  <div class="dailyFree">

      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>
      <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../assets/ROLL/8.png" alt="">
          <marquee  class="dicent_text" width=800 behavior=scroll direction=left  align=middle>{{this.$store.state.mes}}</marquee>
          <div class="know" v-cursor @click="know">知道了</div>
          <!-- <img src="../assets/ROLL/9.png" class="know" @click="know" alt=""> -->
        </div>
      <!-- <div class="ROLLfuli">
          每日免费
      </div> -->
      <div class="box_left_box">
          <!-- <div class="box_left"> -->
              <!-- <publicBoxLeft class="public_box"></publicBoxLeft> -->
          <!-- </div> -->
          <!-- 右边开始 -->
           <div class="box_right">
               <!-- <div class="right_top">
                    <div class="right_children_left">
                        <img class="di" src="../assets/dailyFree/2.png" alt="">
                        <img class="firearm" v-lazy="list.image" alt="">
                    </div>
                    <div class="right_children_right">
                        <img class="di" src="../assets/dailyFree/3.png" alt="">
                        <div class="right_children_right_top">
                            {{first_text}}
                            <img src="../assets/dailyFree/5.png" alt="">
                           {{ two_text}}
                            <img src="../assets/dailyFree/5.png" alt="">
                           {{ three_text}}
                        </div>

                        <div class="right_children_right_center" @click="FreeToReceive" v-cursor>
                           <img src="../assets/dailyFree/6.png" alt="">
                           <span class="Free">{{FreeToReceivefir}}</span>
                        </div>

                        <div class="right_children_right_bottom">
                            您当前还有<span>{{lotteryNum}}</span>次抽奖机会
                        </div>
                    </div>
               </div> -->
                <div class="right_top">
                        <img  class="right_top_bg" src="../assets/dailyFree/18.png" alt="">
                        <div class="right_top_left">
                            <p>{{first_text}}</p>
                            <p>  {{ two_text}}</p>
                            <p>{{ three_text}}</p>
                        </div>
                        <div class="right_top_img">
                            <img class="fir_img" :src="list.image" alt="">
                        </div>
                        <div class="right_top_p">
                           <p v-cursor  @click="FreeToReceive">{{FreeToReceivefir}}</p> 
                           <p>
                            您当前还有<span>{{lotteryNum}}</span>次抽奖机会

                           </p>
                        </div>
                </div>



                
                <img class="right_center" src="../assets/dailyFree/7.png" alt="">
               
                <div class="four_gezi">
                        <div class="four_gezi_box" v-for="item in Free" :key="item.id" v-cursor>
                            <!-- <img class="bg" src="../assets/dailyFree/19.png" alt=""> -->
                            <img v-lazy="item.img" alt="">
                  
                            <!-- <div class="text">
                                {{item.text}}
                            </div> -->
                        </div>

                </div>
                
                <!-- <img src="../assets/dailyFree/8.png" alt=""> -->
                
          </div>
          <!-- 右边结束 -->
      </div>
     
    <!-- 通知中将消息 -->
    <div class="winning" @click="handleClickWining" v-show="winning==1">
        <img src="../assets/dailyFree/23.png" alt="">
    </div>

    <div class="winning" @click="handleClickWining" v-show="winning==0">
        <img src="../assets/dailyFree/24.png" alt="">
    </div>


  </div>
</template>

<script>

const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const doubleBox = () => import("../components/doubleBox")
const exchangefirbox =()=>import('../components/exchangefirbox')
// import doubleBox from '../components/doubleBox'
import {getDailyFree,GetLuckDraw} from '../axios/Apilogin'
import {Message} from 'element-ui';

export default {
  name: '',
  components: {
    publicBoxLeft,
    doubleBox,
    exchangefirbox,

  },
  data() {
    return {
        imgbg:this.$store.state.neiimg[1].image,
        isJoin:false,
        winning:3,
        knowimg:true,
        lotteryNum:0,
        FreeToReceivefir:"免费领取",
        Free:[
            {   
                id:1,
                img:require('../assets/dailyFree/19.png'),
                text:'每天重新登录网站'
            },
            {
                id:2,
                img:require('../assets/dailyFree/20.png'),
    
                text:'提高当天在线时长'
            },
            {
                id:3,
                img:require('../assets/dailyFree/21.png'),

                text:'提高当天充值总额'
            },
            {
                id:4,
                img:require('../assets/dailyFree/22.png'),
    
                text:'绑定steam账号'
            },
        ],
        img:'',
        list:'',
        first_text:'',
        two_text:'',
        three_text:"",
    }
  },
  beforeCreate(){

  },
  methods:{
      //点击中奖知道啦
      handleClickWining(){
          this.winning=3;
      },
      //
      know(){
          this.knowimg=false
      },
      FreeToReceive(){
        if((this.FreeToReceivefir=="已参与")&&(!this.isJoin)){
            this.isJoin=true
              Message({
                    duration:2000,                              //element-ui中的展示请求错误的信息+ 
                    message:"已参与活动",
                    type:'success'
             })
            return
        }
        if(this.FreeToReceivefir=="已参与"){
            return;
        }
        GetLuckDraw().then((res)=>{
            if(res!=undefined){
            //  console.log(res)
             this.winning=res.data.code;
             this.FreeToReceivefir='已参与';
             this.lotteryNum=0;
            }
        })
      }
  },
  mounted(){
      getDailyFree().then((res)=>{
          if(res!=undefined){
            //   console.log(res.data.freeGoods)
            this.list=res.data.freeGoods;
            var  text = res.data.freeGoods.name;
            var str=text.substring(0,text.indexOf(text.match(/\([^\}]+\)/)[0]));//取括号前面的字符串
            var kuohao = text.indexOf(text.match(/\([^\}]+\)/)[0])  //获取括号的位置

            var index=str.indexOf("|");
            this.first_text=str.substring(0,index)
            this.two_text=str.substr(index+1,kuohao)
            this.three_text=text.substring(kuohao+1,text.length-1);
            this.lotteryNum=res.data.lotteryNum;
            
            if(res.data.lotteryNum==0){
                this.FreeToReceivefir='已参与'
            }
          }
          
      })
  }
}
</script>

<style scoped>
.dailyFree{
    width: 1280px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    margin:0 auto;
    position: absolute;
}
.bg{
  /* position: absolute;
  left: 0;
  top: 0; */
}
.ROLLfuli{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
   background-image:-webkit-linear-gradient(left,#f79d00,#ffed8c);
    background-image:-moz-linear-gradient(left,#f79d00,#ffed8c);
    background-image:-ms-linear-gradient(left,#f79d00,#ffed8c);
    background-image:-o-linear-gradient(left,#f79d00,#ffed8c);
    background-image:linear-gradient(left,#f79d00,#ffed8c);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  font-style: italic;
  padding-right: 20px;
}
.box_left_box{
  width: 1000px;
  position: absolute;
  display: flex;
  right: 0px;
  top: 224px;
}
.box_left{
  width: 288px;  

}
.public_box{
  margin-bottom: 23px;
  }
.box_right{
  width: 992px;
  padding-left: 40px;
  box-sizing: border-box;
}
/* 右边的开始 */
.right_top{
    display: flex;
    width: 896px;
    height: 260px;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 37px;
    padding-left: 100px;
    box-sizing: border-box;
    justify-content: space-between;
}
.right_top_bg{
    position: absolute;
    left: 0px;
    top: 0px;
}
.right_top_left{
    position: relative;
    font-size: 30px;
    color: #414040;
    font-weight: 900;
    margin-top: -45px;
}
.right_top_left p:nth-child(3){
    font-size: 18px;
}
.right_top_img{
    position: relative;
    margin-top: -30px;
}
.fir_img{
    width: 270px;
}
.right_top_p{
    position: relative;
    font-size: 16px;
    color: #fff;
     width: 197px;
        
    text-align: center;
}
.right_top_p p:first-child{
    margin-top: 78px;
    margin-bottom: 18px;
}

.right_children_left{
    width: 485px;
    height: 199px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.di{

    position: absolute;
    left: 0;
    top: 0;
    
}
.firearm{
    position: relative;
    width: 300px;
}
.right_children_right{
    width: 363px;
    height: 199px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
    font-style: italic;
    color: #fff;
    padding-top: 31px;
    box-sizing: border-box;
    flex-direction: column;
    
}
.right_children_right_top{
    margin-left: 20px;
    position: relative;
}
.right_children_right_top img{
    margin: 0 6px;
   position: relative;
}
.right_children_right_center{
    margin-top: 35px;
    position: relative;
}
.right_children_right_center img{
    position: absolute;
    left: -35px;
    top: -4px;
   
}
.Free{
    position: relative;
}
.right_children_right_bottom{
    position: relative;
    margin-top: 26px;
    margin-left: -5px;
}
.right_children_right_bottom span{
    color: #f79e03;
}
.right_center{
    margin-top: 65px;
    margin-left: 52px;
}
.four_gezi{
    width: 100%;
    height: 188px;
    display: flex;
    align-items: center;
    margin-left: 38px;
}
.four_gezi_box{
    width: 197px;
    height: 69px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
}
.four_gezi_box .bg{
    position: absolute;
    left: 0;
    top: 0;
}
.four_gezi_box img{
    position: relative;
}
.text{
    width: 62px;
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    margin-left: 10px;
}
.four_gezi .four_gezi_box:last-child .text{
    width: 71px;
}
.winning{
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%);

}
</style>

