<template>
  <div class="login">
          <div class="reg_top" v-cursor>
            <div>
                <p class="number  q">1</p>
                <p>输入手机号</p>
            </div>
            <span class="spa"></span>
            <div>
                <p class="number  q">2</p>
                <p>个人信息设置</p>
            </div>
            <span class="span spa"></span>
            <div>
                <p class="number q">3</p>
                <p>steam信息设置</p>
            </div>

        </div>
        <div class="login_top">
            <img class="logo" src="../assets/login/LOGO.png" alt="">
            <p class="text_zhuce">注册新用户</p>
        </div>

        <div class="login_input">
            <!-- <img class="input_img" src="../assets/login/3.png" alt=""> -->
            <input class="input" type="text" v-model="steamUrl" placeholder="输入steam交易链接"  name="" id="26" >
        </div>
       
        <div class="login_input login_input1 " @click="handleLogin">
            <div class="tjiao">完成注册</div>
        </div>
        <!--<div class="beginLogin" @click="handleLogin">跳过，直接完成</div>-->
        <!-- <img class="login_bgc" src="../assets/login/5.png" alt=""> -->
  </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';
//引入错误提示组件
import {Message} from 'element-ui';
//引入注册api
import { getCode,HandleRegister } from '../axios/Apilogin'
import Bus from "../axios/Bus";
export default {
  name: '',
  components: {},
  data() {
    return { 
        getyanma:'获取验证码',
        xian:"<<blackholeskins服务协议>>",
        registerExtensionCode:'',//邀请码
        steamUrl:''
   }
  },
    mounted() {

    },
    methods:{
        handleLoginsteam(){
            if(this.steamUrl==""){
                Message({
                        duration:3000,                                 //element-ui中的展示请求错误的信息
                        message:"请输入steam链接",
                        type:'error'
                    })
                    return
            }
            this.handleLogin();
        },

      //完成注册
      handleLogin(){
        var params = this.$store.state.code;
        
        const paramss={
               "passWord":params.passWord,
                "code":params.code,
                "nickName":params.nickName,
                "registerExtensionCode":params.registerExtensionCode,
                "steamUrl":this.steamUrl,
                "registerName":params.registerName
        }
        console.log(paramss)
        HandleRegister(paramss).then((res)=>{
            if(res!=undefined){
                console.log(res)
            if(res.code==1){
                Message({
                        duration:3000,                                 //element-ui中的展示请求错误的信息
                        message:"该手机号已经注册",
                        type:'error'
                    })
            }else{
        
                this.steamUrl="";
                Message({     
                        duration:2000,                                 
                        message:"注册成功,请登录吧",
                        type: 'success'
                    })
                      this.$emit('changeRister')
            }
            }
        })
      },
      //验证手机号
      verify_phone(phone){    
            var phonetext=/^1[3456789]\d{9}$/;
            var emalText =  /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
            if(!phonetext.test(phone)&&!emalText.test(phone)){
                Message({     
                    duration:2000,                                 //element-ui中的展示请求错误的信息
                    message:"请输入正确的手机号",
                    type:'error'
                })
                return false
            }
            else{
                return true
            }
      }
    //   
  },
  //页面卸载
  destroyed(){
   
   
  }
}
</script>

<style scoped>
    .login{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 320px;
        height: 418px;
        background-color: #fff;
        transform: translate(-50%);
        z-index: 9999;
        background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: linear-gradient(90deg, #141414 0%, #101010 100%);
        border-radius: 12px;
        border: 2px solid #262626;
    }
    .login_top{
        display: flex;
        width: 195px;
        margin: 35px auto 15px;
        position: relative;
        flex-direction: column;
      
    }
    .login_top img{
        width: 195px;
    }
    .top_img{
        width: 27px;
        height: 45px;
    }
    .text_zhuce{
        /* font-size: 26px; */
        /* color:#e60f64; */
        width: 100%;
        text-align: center;
        line-height: 32px;
        /* font-style: oblique; */
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #AAAAAA;
        letter-spacing: 0;
        text-align: center;
    }
    .text_bg{
        font-size: 25px;
        font-style: italic;
        position: absolute;
        top: 0;
        left: 26.5px;
        color: #2d2d2d;
        z-index: -1;
    }
    .login_input{
        position: relative;
        width: 240px;
        height: 34px;
        margin-top:21px;
        margin-bottom: 10px;
        border: 1px solid #E60064;
        /* border-image:linear-gradient(to right,#E60064,#E65064) 1 10; */
        text-align: center;
        line-height: 30px;
        /* box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5); */
        background: #100F0F;
        border-radius: 17px;

    }
    .login_input1{
        margin-top: 20px;
        cursor:pointer;
         line-height: 33px;
        background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }

  
    .tjiao{
        font-size: 14px;

        z-index: 2;
   
        color: #fff;
        /* font-style: italic; */
    }
    .input_yanzheng{
          width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
 
       border: 1px solid #691534;
    
    }
    .input{

        width: 206px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        /* font-style: italic; */
        
    }
    .input:-webkit-autofill {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #fff !important;
        caret-color:#fff;
    }
    .input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
    }
    .input:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
    }
    .input::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
    }
    .input:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
    }
    .input1{
        width: 181px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-style: italic;
        position: absolute;
        z-index: 10;
        top: 7px;
        left: 64px;
    }
    .getma{
        width: 102px;
        height: 100%;
        position:absolute;
        top:0;
        right: 0;
        font-size: 16px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   .getma_box{
       width: 100%;
       height: 100%;
       background:linear-gradient(to right,#ba023f,#ff537b);
       -webkit-background:linear-gradient(to right,#ba023f,#ff537b);
       -moz-background:linear-gradient(to right,#ba023f,#ff537b);
       -ms-background:linear-gradient(to right,#ba023f,#ff537b);
       -o-background:linear-gradient(to right,#ba023f,#ff537b);
  
        position: absolute;
        left: 0;
        top: 0;
   }
   .text_yanzhenma{
       /* position: absolute;
       top: 7px;
       left: 12px; */
       position: relative;
   }
    input::-webkit-input-placeholder{
        color:#e60f64;
    }
    input::-moz-placeholder{
     color:#e60f64;
    }
    input:-ms-input-placeholder{
    color:#e60f64;
    }
    .input_img{
        position: absolute;
        top: 7px;
        left: 18px;
    }
    .beginLogin{
        font-family: SourceHanSansCN-Regular;
        font-size: 12px;
        color: #E60064;
        letter-spacing: 0;
        text-align: center;
        margin-top: 10px;
    }
    .textxie{
        font-size:14px;
        /* font-style: italic; */
        color: #d30f5c;
        margin-top: 18px;
    }
    .textblack{
        float: right;
        text-decoration:underline;
        cursor: pointer;
    }
    .login_bgc{
         position: absolute;
        left: -20px;
        top: -20px;
        z-index: -1;
    }
    .star{
        color: #E60064;
        position: relative;
        top: -27px;
        left: 233px;
        font-size: 20px;
        width: 50px;
    }
        .reg_top{
        width: 100%;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 29px;
        margin-top: 15px;
        font-size: 12px;
        color: #666666;
        height: 44px;
        display: flex;
        align-items: center;
    }
    .reg_top div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .reg_top span{
        width: 71px;
        height: 2px;
        background-color: #464646 ;
        position: absolute;
        left: 74px;
        top: 24px;
    }
    .reg_top .span{
        left: 176px;
        top: 24px;
    }
    .reg_top .spa{
        background: linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-moz-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-ms-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-o-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:linear-gradient(90deg, #E60064 0%, #E65064 100%);
    }
    .q.number{
        background: linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-moz-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-ms-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:-o-linear-gradient(90deg, #E60064 0%, #E65064 100%);
        background-image:linear-gradient(90deg, #E60064 0%, #E65064 100%);
    }
    .number{
        width: 24px;
        height: 24px;
        background-color: #444444;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-bottom: 5px;
    }
</style>