<template>
  <div class="doubleBox" @mouseenter="mouserEnter" @mouseleave="mouserLeave">
      <img class="ling" src="../assets/ROLL/13.png">
      <div class="dignbu_img">
          <img :src="fir" alt="">
      </div>
      <img class="firimg1" :src="img3" alt="">

      <div class="lingRight"> 
      
        <div class="ling_left" v-cursor>
                <p class=" p clear_skew">{{titleTop}}</p>
                <p class="p2 clear_skew">开奖时间：{{time}}</p>
        </div>
        <div class="ling_right" v-cursor>

                <div class="text_left clear_skew"> 
                    <div class="textdsd">{{text_left}}</div>
                    <div>{{erxi}}</div>
                </div>
                <div class="text_right clear_skew">等<span>{{num}}</span>件奖品</div>
        </div>
      </div>
    <div class="mouse_enter" v-show="mouseenter1">
        <p>点击详情</p>
    </div>

  </div>
</template>

<script>

export default {
  name: '',
  props:{
      staus:{
          type:Boolean,
          default:true,
      },
  
      titleTop:{
          type:String,
          default:"星会员免费ROLL房第三期"
      },
      img3:{
          type:String,
          default:require('../assets/ROLL/12.png')
      },
      img2:{
          type:String,
          default:require('../assets/ROLL/12.png')
      },
      time:{
          type:String,
          default:"2020-03-28 00:00:00"
      },

      fir:{
          type:String,
          default:require('../assets/ROLL/11.png')
        //   default:require('../assets/ROLL/6.png')
      },
      text_left:{
          type:String,
          default:"M4A4(STrik)",      
        },
      erxi:{
            type:String,
            default:"二西莫夫"
      },
      num:{
          type:Number,
          default:'50'
      },
  },
  components: {},
  data() {
    return {
        mouseenter1:false

    }
  },
  mounted(){
      
  },
  methods:{
    mouserEnter(){   //跳转
      this.mouseenter1 = true;
    },
    mouserLeave(){
        this.mouseenter1 = false;
    }
  }
}
</script>

<style scoped>
    .doubleBox{
         width: 462px;
        height: 186px;
        position: relative;
    }
    .ling{
        width: 430px;
        height: 162px;
        position: absolute;
        top: 14px;
        left: 16px;
  
    }
    .ling_left{
        width: 199px;
        height: 56px;
        position: absolute;
        left: 17px;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }
    .ling_right{
        width: 228px;
        height: 56px;
        /* background: #fff; */
        position: absolute;
        bottom: 0px;
        z-index: 2;
        
    }

    
    .ling_left .p{
        margin-top: 10px;
        color: #fff;
        font-weight: 900;
    }
    .ling_left .p2{
        color: #835968;
        font-weight: 900;
    }
    .title{
        width: 39px;
        height: 16px;
        position: absolute;
        top: 34px;
        right: 40px;
    }
    .right_img{
        position: absolute;
        top:19px;
        left: 23px;
        width: 130px;
        /* height: 100px; */
    }
    .right_img1{
        position: absolute;
        top:36px;
        right: 0px;
    }
    .text_left{
        color:#fff;
        position: absolute;
        bottom: 10px;
        left: 24px;
     
    }
    .textdsd{
        /*text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;*/
        width: 70px;
   
    }
    .text_right{
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #906375;
    }
    .text_right span{
        color: #dd407e;
    }
    .dignbu_img{
        width: 200px;
        height: 160px;
        line-height: 160px;
        position: relative;
        left: 16px;
        top: 15px;
        text-align: center;
    }
    .dignbu_img img{
        width: 182px;
        height: 141px;
    }
    .lingRight{
        width: 230px;
        height: 160px;
        position: absolute;
        top: 12px;
        right: 16px;
    }
    .firimg1{
        width: 118px;
        position: absolute;
        top: 62px;
        right: 59px;
        z-index: 100;
    }
        .mouse_enter{
      width: 430px;
      height: 160px;
      box-sizing: border-box;
      border: 2px solid #e41063;
      border-bottom: none;
      border-image: -webkit-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
      border-image: -moz-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
      border-image: -ms-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
      border-image: -o-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
      border-image: linear-gradient(bottom,rgba(0,0,0,0),#ec1807) 15 15;
      background: -webkit-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
      background: -moz-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
      background: -ms-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
      background: -o-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
      background: linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
      position: absolute;
      top: 14px;
      left: 16px;
      z-index: 100;
    }
    .mouse_enter p{
      width: 430px;
      position: absolute;
      bottom: 22px;
      text-align: center;
      color: #fff;
    }
</style>

