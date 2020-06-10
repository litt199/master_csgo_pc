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
        <!--放二维码-->
<!--        <div class="qrCode">-->
<!--            <img :src="paySrc" alt="">-->
<!--        </div>-->
        <div  id="qrcode" ref="qrcode"></div>

        <div class="rqTishi">
            <p>用手机扫码支付完成后，请到账户中心查询余额</p>
        </div>
        <!-- <div class="fanhui" @click="GoBack" v-cursor>
            <div class="linxing1"></div>
            <div class="fanhui_back">返回上一步</div>
        </div> -->

          <img class="guangbiao" src="../assets/recharge/2.png" alt="">

    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'
    import Bus from "../axios/Bus"
    import {GetpayqrCode, PostPayalipy} from '../axios/Apilogin'
    import { Message } from 'element-ui';
    export default {

        name: '',
        components: {},
        props:{
            id:{
                default:'',
            },
            couponId:{
                default:'',
            },
            imgPrice:{
                type:String
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
                img:'',
                payUrl:null,
                paySrc:null,
            }
        },
        created() {    

        },
        mounted() {
            setTimeout(function(){
                // console.log(this.imgPrice)
            },1000)
            var pri;
             console.log(this.payment)
            if(this.couponId!=""&&this.id!=""){
                console.log('使用优惠券')
                pri={
                    "couponId":this.couponId,
                    "money":this.payment,
                    "userCouponId":this.id
                 }
            }else{
                console.log('不适用')
                 pri={
                    "money":this.payment
                 }
            }
            
         
            PostPayalipy(pri).then((res)=>{//获取payUrl
                if(res!=undefined){
                     console.log(res)
                    if(res.code===0){
                            var img=res.data.payUrl;
                            this.img=img;
                            // console.log(img)
                            this.qrcode()
                    }else{
                        Message({
                            message:res.msg,
                            type:'error'
                        })
                    }
              
                
                }
              
            })
        },
        methods:{
            GoBack(){
                this.$emit('goback')
            },
         
            //获取二维码的实例 
            qrcode() {
                let qrcode = new QRCode('qrcode', {
                    width: 132,  
                    height: 132,
                    text: this.img, // 二维码地址
                    colorDark : "#000",
                    colorLight : "#fff",
                })
                
            },
            exit(){  //点击叉，不显示登陆页面
                this.$emit('changeExit')
            },
        },
        beforeDestroy() {
            Bus.$off("payUrl");
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
        z-index: 100;
        transform: translate(-50%,-50%);
        background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
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
      
      
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        position: absolute;
        top: 448px;
        left: 74px;
        border-radius: 5px;
        border: 1px solid #691534;
        background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
        width: 336px;
        height: 42px;
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
    .qrCode{
        width: 170px;
        height: 170px;
    }
    .qrCode img{
        width: 170px;
        height: 170px;
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
    }
    .money_left{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin-top: -2px;
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
        top:0
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
        width: 336px;
        height: 42px;

    }
    .fanhui_back{
        position: absolute;
        text-align: center;
        width: 336px;
        height: 42px;
        line-height: 32px;
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
    #qrcode{
        border:10px solid #fff;
        margin: 40px 0;
        width: 132px;
        height: 132px;
        background-color: #fff;
    }
    .rqTishi{
        text-align: center;
        color: #655e63;
        font-size: 15px;
    }
    .guangbiao{
       position: absolute;
       left: -21px;
       top: -20px;
       z-index: -1;
   }
</style>

