<template>
  <div class="recharge">
      <!--<div class="exit" @click="exit" v-cursor>x</div>-->
       <div class="login_top">
            <p class="text_zhuce">{{shou_text}}</p>
        </div>
        


        <div class="yuanpan">
            <img class="bg" src="../assets/xuanzhuan/guang.png" alt="">
            <img class="fir" v-lazy="firimage" alt="">
        </div>
            
        <div class="shoujia">
            售价 <span>${{price}}</span>
        </div>
        <div class="name">
            {{type}} <span>/</span> <span>{{name}}</span>
        </div>
        <div class="title" v-show="isShowTitle">
            <p>{{firstate}}</p>
        </div>

        <div class="login_input login_input1"  v-if="text_state" @click="shouClick">
            <div class="linxing1"></div>
            <div class="tjiao" >确定取回</div>
        </div>
  </div>
</template>

<script>
import Bus from '../axios/Bus'
export default {
  name: '',
  components: {},
  props:{
      goodsDetail:[]
  },
  data() {
    return {
        takeIndex:0,
        isShowTitle:true,
        firstate:this.goodsDetail[takeIndex].title,
        getyanma:'使用抵用券',
        shou_text:'确定兑换吗?',
        text_state:true,
        firimage:this.goodsDetail[takeIndex].image,
        name:this.goodsDetail[takeIndex].name,
        price:this.goodsDetail[takeIndex].price,
        type:this.goodsDetail[takeIndex].type,
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
  created(){
        Bus.$on('takeIndex',data=>{   //事件总线，为了刷新当前页面
          this.takeIndex=data;
      })
  },
  methods:{
      shouClick(){
          const data={
              id:this.goodsDetail[takeIndex].id,
              index:this.takeIndex
          }
        //   console.log(data)
          this.$emit('getGood',data)
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
        top: 50%;
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
        width: 138px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
        bottom: 139px;
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
        left: 0;
        top: 0;
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
    }
   .shoujia span{
       color: #e60f64;
       font-weight: bold;
   }
    .name{
        color: #fff;
        position: absolute;
        bottom: 170px;
    }
   .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
</style>

