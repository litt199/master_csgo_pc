<template>
  <div class="recharge123">
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">TOP-UP</p>
            <p class="text_zhuce">充值</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>
        
        <div class="ten_money">
            <p><span>$</span>{{price}}</p>
            <p class="chongzhi">充值金额</p>
        </div>
        <div class="ten_money_color">
            <p><span>$</span>{{payment}}.00</p>
            <p class="zhifu">支付金额</p>
        </div>

        <div class="money_box" v-cursor>
            <img class="bg" src="../assets/rechargemoney/1.png" alt="">
            <!-- <div :class="payzhifu==1?'xuanzhong':'xuanzhong xuanzhongweixin'"></div> -->
            <div class="money_left"  @click="zhifubao">
                <img src="../assets/rechargemoney/4.png" alt="">
                <p>支付宝</p>
            </div>
            <div class="money_left" @click="weixin">
                <img class="wexintu" src="../assets/rechargemoney/6.png" alt="">
                <p>微信</p>
            </div>
        </div>

        <!-- <div class="money_box_1">
            <img class="bg" src="../assets/rechargemoney/2.png" alt="">
            <div class="tuixiao">
                推销码
            </div>
            <input type="text" placeholder="输入推销码或推广码" placeholder-class="place">
        </div> -->

        <div class="checked">
            
            <!-- <p>我已阅读并接受<span> blackholeskins服务协议>> </span></p> -->
        </div>

        <div class="login_input login_input1" @click="confimClick">
            <div class="linxing1"></div>
            <div class="tjiao">确定提交</div>
        </div>

        <div class="fanhui" v-show='youhuistate==0' @click="GoBack" v-cursor>
            返回上一步
        </div>
          <img class="guangbiao" src="../assets/recharge/2.png" alt="">

  </div>
</template>

<script>

import Bus from "../axios/Bus";
import {Message} from 'element-ui'
export default {
  name: '',
  components: {},
  props:{
      youhuistate:{   //判断是否是使用优惠券
          default:0,
      },
      price:{
          default:10,
      },
      payment:{
          default:10
      }
  },
  data() {
    return {
        getyanma:'使用抵用券',
        payzhifu:1,
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
      GoBack(){
          this.$emit('goback')
      },
      confimClick(){
         const data={
             payment:this.payment,
             youhuistate:this.youhuistate,
             price:this.price
         }
         this.$emit("qrPage",data)
      },
      exit(){  //点击叉，不显示登陆页面
          this.$emit('changeExit')
      },

      //选择支付宝支付
      zhifubao(){
          this.payzhifu=1;
      },
      //选择微信支付
      weixin(){
         Message({
            message:"暂不支持微信支付",
            type:'error'
        })
          this.payzhifu=2;
      },
  }
}
</script>

<style scoped>
   .recharge123{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 490px;
        height: 677px;
        z-index: 1000;
        
       transform: translate(-50%,-50%);
       -webkit-transform: translate(-50%,-50%);
       -moz-transform: translate(-50%,-50%);
       -ms-transform: translate(-50%,-50%);
       -o-transform: translate(-50%,-50%);
            background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
        /* background: linear-gradient(#232123, #65072c); */
        display: flex;
        flex-direction: column;
        align-items: center;
    
    }
    .login_top{
        display: flex;
        width: 160px;
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
        width: 105px;
        text-align: center;
        line-height: 32px;

        font-weight: 700;
    }
    .text_bg{
        font-size: 25px;
       
        position: absolute;
        top: 9px;
        left: 36.5px;
        color: #2d2d2d;
        font-weight: 700;
        z-index: -1;
    }
    .login_input{
        position: relative;
        width: 365px;
        height: 42px;
        margin-top: 40px;
    }
    .login_input1{
        margin-top:39px;
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
        border-radius: 8px;
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
      
        font-weight: 700;
    }
    .ten_money{
        font-size: 36px;
        font-weight: 900;
  
        color: #454043;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .ten_money span{
        font-size: 26px;
    }
    .chongzhi{
        font-size: 16px;
        font-weight: 500;
        margin-top: -5px;
    }
    .ten_money_color{
        position: relative;
        color: #e60f64;
        font-size: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 900;

        margin-top: 20px;
    }
    .ten_money_color span{
        font-size: 26px;
    }
    .zhifu{
        font-size: 16px;
        margin-top: -5px;
    }
    .money_box{
        width: 385px;
        height: 66px;
        margin-top: 43px;
        position: relative;
        display: flex;
        align-items: center;  
        margin-left: 15px; 
    }
    .money_left{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48%;
        margin-top: -2px;
    }
    .xuanzhong{
        width: 46%;
        background-color: #f64974;
        height: 42px;
        transform: skewX(-16deg);
        position: absolute;
        left: 19px;
        top: 12px;
        transition: all ease 0.3s;

    }
    .xuanzhong.xuanzhongweixin{
        left: 198px;
        transition: all ease 0.3s;
    }
    
    .money_left p{
        font-size: 16px;
        color:#fff;
        margin-left: 5px;

        font-weight: 900;
    }
     .bg{
        position: absolute;
        left: 0;
        top:0px
    }
    .money_box_1{
           width: 385px;
        height: 66px;
        margin-top: 0px;
        position: relative;
        display: flex;
        align-items: center;
     }
     .tuixiao{
         position: relative;
         display: flex;
         /* align-items: center; */
         width: 139px;
         justify-content: center;
         color: #fff;
         font-weight: 900;
   
         font-size: 15px;
     }
     .money_box_1 input{
         position: relative;
        margin-left: 0px;
        width: 207px;
         height: 30px;
         background: none;
         text-align: center;
         border: none;
     }
    .fanhui{
        font-size: 16px;
        color: #fff;
        font-weight: 900;

        margin-top: 20px;
    }
    .money_box_1 input::-webkit-input-placeholder{
        color: #e60f64;
        font-size: 15px;
    }
    .money_box_1 input::-moz-placeholder{ 
            color: #e60f64;        
    }
    .money_box_1 input:-ms-input-placeholder{
            color: #e60f64;        
    }
    .checked{
        position: relative;
        color: #e60f64;
        font-size: 15px;
        margin-top: 20px;
    }
    .checked span{
        text-decoration: underline;
    }
   .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
   .wexintu{
       width: 26px;
       height: 24px;
   }
   .guangbiao{
       position: absolute;
       left: -21px;
       top: -20px;
       z-index: -1;
   }
</style>

