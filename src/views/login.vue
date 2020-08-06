<template>
  <div class="login">
      <div class="reg_top" v-cursor>
          <div>
              <p class="number  q">1</p>
              <p>输入手机号</p>
          </div>
          <span></span>
          <div>
              <p class="number">2</p>
              <p>个人信息设置</p>
          </div>
           <span class="span"></span>
          <div>
              <p class="number">3</p>
              <p>steam信息设置</p>
          </div>

      </div>
      <div class="logo_box">
           <img class="logo" src="../assets/login/LOGO.png" alt="">
           <p class="">注册新用户</p>
      </div>
      
      <div class="input_box">
          <p class="qian_shuzi">+86 
              <img src="../assets/login/6.png" alt="">
          </p>
         <input  class="input1" type="text" placeholder="请输入账号" style="color:#fff" v-model="phone"   name="" id="111123" v-on:keyup.enter = "handleRigister">
         <input  class="input1 input" type="text" placeholder="请输入验证码" style="color:#fff" v-model="code"   name="" id="111123" v-on:keyup.enter = "handleRigister">
            <!-- 获取验证码 -->
            <div class="getma" @click="get_code" v-cursor>
                <div class="getma_box"></div>
                <div class="text_yanzhenma">
                    {{getyanma}}
                </div>
            </div>

         <div class="qudenglu" v-cursor @click="handleRigister">
            下一步
        </div>

         <div class="router_text" @click="()=>{$emit('qudenglu')}">
                <p v-cursor >已有帐号,去登陆</p>
            </div>
      </div> 




        <!-- <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">SIGN UP</p>
            <p class="text_zhuce">注册</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>
        <div class="login_input">

            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="text" v-model="phone" @blur="verify_phone(phone)" placeholder="手机号"  name="" id="11223" >
        </div>

        <div class="yanzhengma">
             <div class="login_input">
                <div class=" input_yanzheng"></div>
                <input class="input1" type="text" v-model="code" placeholder="验证码"  name="" id="14556" >
                <div class="getma" @click="get_code" v-cursor>
                    <div class="getma_box"></div>
                    <div class="text_yanzhenma">
                        {{getyanma}}
                    </div>
                </div>
            </div>
        </div>


        <div class="login_input">

            <img class="input_img" src="../assets/login/3.png" alt="">
            <input class="input" type="password" v-model="password" placeholder="输入密码"  name="" id="26" >
        </div>
        <div class="login_input">

            <img class="input_img" src="../assets/login/3.png" alt="">
            <input class="input" type="password" v-model="password1" placeholder="再次输入密码"  name="" id="37">
        </div>
         <div class="login_input">
  
            <img class="input_img" src="../assets/login/4.png" alt="">
            <input class="input" v-model="invition"  type="text" placeholder="邀请码/选填"  name="" id="4" v-on:keyup.enter = "handleLogin">
        </div>
         -->
        <!-- <div class="textxie">
            <div>
                我已阅读并接受<p class="textblack">{{xian}}</p>
            </div>
        </div>

        <div class="login_input login_input1 " @click="handleLogin">
     
            <div class="tjiao">注册</div>
        </div>

        <div class="beginLogin" @click="handleRigister">已有账号,前去登录</div>

         <img class="login_bgc" src="../assets/login/5.png" alt=""> --> 
  </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';
//引入错误提示组件
import {Message} from 'element-ui';
//引入注册api
import { getCode,HandleRegister,getVCode,verifyCode } from '../axios/Apilogin'
import Bus from "../axios/Bus";
export default {
  name: '',
  components: {},
  data() {
    return { 
        invition:"", //储存邀请码
        password1:'',//储存第二次密码
        password:'',//储存第一次密码
        code:'', //储存验证码
        getyanma:'获取验证码',
        xian:"<<blackholeskins服务协议>>",
        phone:'',
        timer:"",  //保持计数器
   }
  },
    mounted() {
        // Bus.$emit("handleLogin",this.handleLogin());
    },
    methods:{
      encrypt(password){//密码加密
        // 从后台获取公钥，这里省略，直接赋值
        let publicKey ='MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n'+'2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==';
        let encryptor = new JSEncrypt()  // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey)  // 设置公钥
        let rsaPassWord = encryptor.encrypt(password)  // 对密码进行加密
        return rsaPassWord;
    },
      //倒计时改变时间
      changeMa(){
          let time = 60;
          this.getyanma = time--;
      },
      //获取验证码
      get_code(e){
             var that=this;  
            //验证手机
            const Phonestate = that.verify_phone(that.phone)
            if(Phonestate&&that.getyanma=="获取验证码"){   //如果手机号返回正确 则调接口
                const params={
                    "mobile":that.phone,
                    isRegist:1,
                }
                getVCode(params).then((res)=>{
                    if(res!=undefined){
                        // console.log(res)
                        if(res.code==1){
                                Message({                                          //element-ui中的展示请求错误的信息
                                    duration:2000,                                
                                    message:"该手机已注册,请直接登录",
                                    type:'error'
                                })
                        }else{
                                that.getyanma = 60+'s';
                                that.timer= setInterval(function(){
                                    let time = that.getyanma;
                                    var times =  parseInt(time.substring(0,2))
                                    let get = times-1;
                                    that.getyanma=get+'s'
                                    if(times===1){
                                            that.getyanma='获取验证码';
                                            clearInterval(that.timer)
                                    }
                                },1000)
                        }
                    }
           
                })
            }
           
      },
      //跳转下一步
      handleRigister(e){
          var that=this;
          if(this.phone==""||this.code==""){   //如果手机号返回正确 则调接口
                   Message({                                          //element-ui中的展示请求错误的信息
                        duration:2000,                                
                        message:"请输入手机号和验证码",
                        type:'error'
                    })
                    return
          }
             const params={
                    "username":that.phone,
                    "code":this.code
                }
              verifyCode(params).then((res)=>{
                    if(res!=undefined){
                   
                        if(res.code==1){
                            Message({                                          //element-ui中的展示请求错误的信息
                                duration:2000,                                
                                message:"验证码错误",
                                type:'error'
                            })
                        }else if(res.code==0){
                            let msg = {
                                registerName:this.phone,
                                code:res.msg
                            }
                              this.$emit('changeRister',msg)
                        }else{
                             Message({                                          //element-ui中的展示请求错误的信息
                                duration:2000,                                
                                message:"未知错误，从重新注册",
                                type:'error'
                            })
                        }
                        this.phone = "";
                        this.code = "";

                    }
           
                })
          
      },
      
      //点击登录按钮
      handleLogin(){
          if(this.phone==""){
                Message({                                          //element-ui中的展示请求错误的信息
                    duration:2000,                                
                    message:"请正确输入手机号",
                    type:'error'
                })
          }else if(this.code==""){
               Message({                                          //element-ui中的展示请求错误的信息
                    duration:2000,                                
                    message:"请输入验证码",
                    type:'error'
                })
          }else if(this.password==""){
                Message({     
                    duration:2000,                                 
                    message:"请输入第一次密码",
                    type:'error'
                })
          }else if(this.password1==""){
                Message({     
                    duration:2000,                                
                    message:"请输入第二次密码",
                    type:'error'
                })
          }else if(this.password!==this.password1){
                Message({     
                    duration:2000,                                
                    message:"两次输入密码不一致",
                    type:'error'
                })
          }else{
              
              var rsaPassWord= this.encrypt(this.password)
              const params={
                  "registerName":this.phone,
                  "passWord":rsaPassWord,
                  "code":this.code
              }
              HandleRegister(params).then((res)=>{
                  if(res!=undefined){
                    if(res.code==1){
                        Message({
                                duration:3000,                                 //element-ui中的展示请求错误的信息
                                message:"该手机号已经注册",
                                type:'error'
                            })
                    }else{
                        this.$emit('none_login')
                        this.phone=""
                        this.password=""
                        this.password1=""
                        this.code=""
                        this.code1=""
                        Message({     
                                duration:2000,                                 
                                message:"注册成功,请登录吧",
                                type: 'success'
                            })
                        
                    }
                  }
              })
          }
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
      //清楚定时器
      clearInterval(this.timer);
  }
}
</script>

<style scoped>
    .login{
            position: fixed;
        top: 50%;
        left: 50%;
        width: 320px;
        height: 469px;
        background-image: linear-gradient(90deg, #141414 0%, #101010 100%);
        border-radius: 12px;
        background: linear-gradient(90deg, #141414 0%, #101010 100%);
        background-image:-moz-linear-gradient(90deg, #141414 0%, #101010 100%);
        background-image:-ms-linear-gradient(90deg, #141414 0%, #101010 100%);
        background-image:-o-linear-gradient(90deg, #141414 0%, #101010 100%);
        background-image:linear-gradient(90deg, #141414 0%, #101010 100%);
        transform: translate(-50%);
        z-index: 99999999999;
        border: 2px solid #393939;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .logo{
        width:195px;
        margin-top: 36px;
    }
    .logo_box{
        text-align: center;
        font-size: 14px;        
    }
    .logo_box p{
        margin-top:10px;
        color: #b1b1b1;
    }
    .input_box{
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
    .qian_shuzi{
        position: absolute;
        top: 6px;
        left: 16px;
        font-size: 14px;
        color: #E60064;
    }
    .qian_shuzi img{
        margin-left: 3px;
        margin-top: -1px;
    }
    .input.input1{
         padding-left:17px;
         padding-right: 100px;
         
    }
    .input1:-webkit-autofill {
        box-shadow: 0 0 0 1000px #141414 inset;
        -webkit-text-fill-color: #fff;
        caret-color:#fff;
    }
     .input1{
        width: 240px;
        height: 34px;
        background: none;
        border: 1px solid #E60064;
        margin-bottom: 20px;
        color: #b1b1b1;
        font-size: 14px;
        border-radius: 17px;
        padding-left: 70px;
        box-sizing: border-box;
    }
     input::-webkit-input-placeholder{
        color:#858686;
        }
        input::-moz-placeholder{
        color:#858686;
        }
        input:-ms-input-placeholder{
        color:#858686;
        }
    .qudenglu{
         width: 240px;
        height: 34px;
         background: linear-gradient(to right,#E60064,#E65064);
        background: -webkit-linear-gradient(to right,#E60064,#E65064);
        background: -moz-linear-gradient(to right,#E60064,#E65064);
        background: -ms-linear-gradient(to right,#E60064,#E65064);
        background: -o-linear-gradient(to right,#E60064,#E65064);
        margin-top: 5px;
        border-radius:17px;
        text-align: center;
        line-height: 34px;
        color: #fff;
        font-size: 14px;
    }
    .router_text{
        justify-content: center;
        display: flex;
        margin-top: 15px;
        color: #cf035b;
        padding:0 10px;
        box-sizing: border-box;
    }
    .zhaohu{
        color: #464646;
    }
    .getma{
        position: absolute;
        top: 60px;
        right: 16px;
        color: #E60064;
        font-size: 14px;
    }










































/*     
    .login_top{
        display: flex;
        width: 160px;
        margin: 50px auto 20px;
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
        font-style: oblique;
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
        width: 336px;
        height: 42px;
        margin-top:21px;
        border: 1px solid #b13e55;
        border-radius:5px;
        text-align: center;
        line-height: 38px;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);

    }
    .login_input1{
        margin-top: 20px;
        cursor:pointer;
         line-height: 42px;
          background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }

  
    .tjiao{
        font-size: 16px;

        z-index: 2;
   
        color: #fff;
        font-style: italic;
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
        font-style: italic;
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
        font-size: 16px;
        color: #fff;
        font-style: italic;
        margin-top: 15px;
        cursor:pointer
    }
    .textxie{
        font-size:14px;

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
    } */
</style>