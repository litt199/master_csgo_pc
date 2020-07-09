<template>
  <div class="recharge">
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
            <p class="text_zhuce">{{shou_text}}</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>
        
        <div class="title" v-show="isShowTitle">
            <img src="../assets/xuanzhuan/2.png" alt="">
            <p>{{firstate}}</p>
        </div>

        <div class="yuanpan">
            <img class="bg" src="../assets/xuanzhuan/3.png" alt="">
            <img class="fir" v-lazy="firimage" alt="">
        </div>
            
        <div class="shoujia">
            售价 <span>${{price}}</span>
        </div>
        <div class="name">
            {{type}} <span>/</span> <span>{{name}}</span>
        </div>

        <div class="login_input login_input1"  v-if="text_state" @click="shouClick">
            <div class="linxing1"></div>
            <div class="tjiao" >确定兑换</div>
        </div>


        <div class="login_input login_input1"  v-else    @click="exit">
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
      shou_text:{
          default:'确定兑换吗'
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
        default:'10000'  
      },
      type:{
          default:'运动手套（★）'
      },
      firstate:{
          default:'战痕累累'
      },
      isShowTitle:{
          default:'true'
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
      shouClick(){
          this.$emit('quedingClick')
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
        width: 490px;
        height: 502px;
  
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
        background-image: url(../assets/xuanzhuan/1.png);
    }
    .login_top{
        display: flex;
        margin: 36px auto 20px;
        position: relative;
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
        font-style: oblique;
        font-weight: 700;
    }
 
    .login_input{
        position: relative;
        width: 365px;
        height: 42px;
        margin-top: 40px;
    }
    .login_input1{
        margin-top:16px;
        cursor:pointer;
        text-align: center;
    }
    .linxing{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        border: 1px solid #691534;
        background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
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
        font-style: italic;
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
        font-style: italic;
        font-weight: 700;
    }
    .title{
        position: relative;
        width: 138px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
    }
    .title img{
        position: absolute;
        left: 0;
        top: 0;
    }
    .title p{
        position: relative;
        color: #fff;
        font-size: 14px;
        color: #e60f64;
    }
    .yuanpan{
        width: 384px;
        height: 128px;
        margin-top: 82px;
        position: relative;
    }
    .yuanpan .bg{
        position: absolute;
        left: 0;
        top: 0;
    }
    .yuanpan .fir{
        width: 254px;
        position: absolute;
        left: 50%;
        top: -107px;
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
        margin-top: 20px;
        color: #fff;
        font-size: 14px;
    }
   .shoujia span{
       color: #e60f64;
       font-weight: bold;
   }
    .name{
        color: #fff;
    }
   .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
</style>

