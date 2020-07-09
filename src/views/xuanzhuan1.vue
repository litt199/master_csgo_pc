<template>
  <div class="recharge">
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <p class="text_zhuce">{{shou_text}}</p>
        </div>
        
        <div class="yuanpan">
            <!-- <img class="bg" v-show="imgBg_true" src="../assets/xuanzhuan/guang.png" alt=""> -->
            <img class="fir" v-lazy="firimage" alt="">
        </div>

        <!-- 这里是取回出现 -->
            
        <div class="shoujia" v-show="!isShowTitle">
            <span v-show="isShowTitle">售价</span> <span>${{price}}</span>
        </div>
        <div class="name" v-show="!isShowTitle">
             <span v-show="isShowTitle"> {{type}}| </span> <span>{{name}}</span>
        </div>
        <div class="title" v-show="!isShowTitle">
            <p>{{firstate}}</p>
        </div>

        <!--<div class="title" v-show="isShowTitle">
            <p>预计1-8日取回到货</p>
        </div>-->

        <!-- 下面回收 -->
        <div class="shoujia1" v-show="isShowTitle">
            <span>${{price}}</span>
        </div>
        <!--<div class="name" v-show="isShowTitle">
            系统回收价
        </div>-->

        <div class="login_input login_input1"  v-if="text_state" @click="shouClick">
            <div class="linxing1"></div>
            <div class="tjiao" >{{queding_text}}</div>
        </div>


        <div class="login_input login_input1"  v-else  @click="shouClick1">
            <div class="linxing1"></div>
            <div class="tjiao1">确定</div>
        </div>
        
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props:{
      imgBg_true:{
          default:false,
      },
      queding_text:{
          default:"确定兑换"
      },
      shou_text:{
          default:'确定兑换吗?'
      },
      text_state:{
          default:true,
      },
      firimage:{
          default:require('../assets/xuanzhuan/4.png')
      },
      name:{
          default:'迈阿密风云'
      },
      price:{
        default:'0.0'  
      },
      type:{
          default:'运动手套（★）'
      },
      firstate:{
          default:'战痕累累'
      },
      isShowTitle:{
          default:'true'
      },
      isDuihuan:{
          default:false
      }
  },
  data() {
    return {
        getyanma:'使用抵用券',
        list:[
            {
                id:1,
                price:5,
            },
           {
                id:2,
                price:10,
            },
            {
                id:3,
                price:30,
            },
            {
                id:4,
                price:50,
            },
             {
                id:5,
                price:100,
            },
             {
                id:6,
                price:200,
            },

        ],
         options: [
             {
            value: '选项1',
            label: '黄金糕'
            }, 
            {
            value: '选项2',
            label: '双皮奶'
            }, 
            {
            value: '选项3',
            label: '蚵仔煎'
            }, 
            {
            value: '选项4',
            label: '龙须面'
            }, 
            {
            value: '选项5',
            label: '北京烤鸭'
            }
            ],
            value: '',
    }
  },
  methods:{
      shouClick1(){
          this.$emit('changeExit')
      },
      //确定取回
      shouClick(){
        this.$emit('Fensure')
      },
      exit(){  //点击叉，不显示登陆页面
          this.$emit('changeExit')
      },
  }
}
</script>

<style scoped>
   .recharge{
        position: fixed;
        top: 54%;
        left: 50%;
        width: 493px;
        height: 562px;
       transform: translate(-50%,-50%);
       -webkit-transform: translate(-50%,-50%);
       -moz-transform: translate(-50%,-50%);
       -ms-transform: translate(-50%,-50%);
       -o-transform: translate(-50%,-50%);
        z-index: 100;
        /* background: linear-gradient(#232123, #65072c); */
        display: flex;
        flex-direction: column;
        align-items: center;
        /*background-image: url(../assets/xuanzhuan/1.png);*/
        background: #191919;
        box-sizing: border-box;
        border: 2px solid #e41063;
        border-image: -webkit-linear-gradient(#e61064 ,rgba(0,0,0,0)) 15 15;
        border-image: -moz-linear-gradient(#e61064 ,rgba(0,0,0,0)) 15 15;
        border-image: -ms-linear-gradient(#e61064 ,rgba(0,0,0,0)) 15 15;
        border-image: -o-linear-gradient(#e61064 ,rgba(0,0,0,0)) 15 15;
        border-image: linear-gradient(#e61064,rgba(0,0,0,0)) 15 15;
    }
    .login_top{
        display: flex;
        position: absolute;
        top: 36px;
    }
    .top_img{
        width: 27px;
        height: 45px;
    }
    .text_zhuce{
        font-size: 26px;
        color:#e60f64;
        margin: 0 5px;
        text-align: center;
        line-height: 44px;
        font-weight: 700;
    }
 
    .login_input{
        position: absolute;
        width: 365px;
        height: 42px;
        margin-top: 40px;
        bottom: 68px;
    }
    .login_input1{
        margin-top:20px;
        cursor:pointer;
        text-align: center;
    }
    .linxing{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        /*transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);*/
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        /*transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);*/
        border: 1px solid #691534;
        background:linear-gradient(to bottom,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to bottom,#ba023f,#ff537b);
        background:-moz-linear-gradient(to bottom,#ba023f,#ff537b);
        background:-ms-linear-gradient(to bottom,#ba023f,#ff537b);
        background:-o-linear-gradient(to bottom,#ba023f,#ff537b);
        border-radius: 4px;
    }
    .tjiao{
        font-size: 16px;
        position: absolute;
        top:50%;
        right: 33%;
        z-index: 2;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        color: #fff;
        font-weight: 700;
    }
    .tjiao1{
        font-size: 16px;
        position: absolute;
        top:50%;
        right: 41%;
        z-index: 2;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        color: #fff;
        font-weight: 700;
    }
    .title{
        position: absolute;
        width: 208px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 139px;
        font-size: 16px;
    }
    .title img{
        position: absolute;
        left: 0;
        top: 0;
    }
    .title p{
        position: relative;
        color: #fff;
        font-size: 16px;
        color: #e60f64;
        font-weight: bold;
    }
    .yuanpan{
        width: 384px;
        height: 128px;
        position: absolute;
        left: 43px;
        top: 165px;
    }
    .yuanpan .bg{
        position: absolute;
        left: -40px;
        top: -120px;
    }
    .yuanpan .fir{
        width: 254px;
        position: absolute;
        left: 50%;
        top: -76px;
        transform: translate(-50%);
        /* -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -ms-transform: translate(-50%);
        -o-transform: translate(-50%); */
        animation: rotate 3s linear infinite;
    }
   @keyframes rotate{
       0%{
            transform: translate(-50%,10px)
       }
       50%{
            transform: translate(-50%,-10px)

       }
       100%{
             transform: translate(-50%,10px)

       }

   }
   .shoujia{

        color: #fff;
        font-size: 14px;
        position: absolute;
        bottom: 190px;
         font-size: 16px;
    }
    .shoujia1{

        color: #fff;
        font-size: 14px;
        position: absolute;
        bottom: 140px;
         font-size: 20px;
    }
   .shoujia span{
       color: #e60f64;
       font-weight: bold;
      font-size: 20px;
    
   }
    .name{
        color: #fff;
        position: absolute;
        bottom: 170px;
        font-size: 16px;
    }
   .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
    .guangbiao{
       position: absolute;
       left: -21px;
       top: -20px;
       z-index: -1;
   }
</style>

