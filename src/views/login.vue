<template>
  <div class="login">
        <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">SIGN UP</p>
            <p class="text_zhuce">注册</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>
        <div class="login_input">

            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="text" v-model="phone" @blur="verify_phone(phone)" placeholder="手机号"  name="" id="" v-on:keyup.enter = "handleLogin">
        </div>

        <div class="yanzhengma">
             <div class="login_input">
                <div class=" input_yanzheng"></div>
                <input class="input1" type="text" v-model="code" placeholder="验证码"  name="" id="1" v-on:keyup.enter = "handleLogin">
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
            <input class="input" type="password" v-model="password" placeholder="输入密码"  name="" id="2" v-on:keyup.enter = "handleLogin">
        </div>
        <div class="login_input">

            <img class="input_img" src="../assets/login/3.png" alt="">
            <input class="input" type="password" v-model="password1" placeholder="再次输入密码"  name="" id="3" v-on:keyup.enter = "handleLogin">
        </div>
        <div class="login_input">
  
            <img class="input_img" src="../assets/login/4.png" alt="">
            <input class="input" v-model="invition"  type="text" placeholder="邀请码/选填"  name="" id="4" v-on:keyup.enter = "handleLogin">
        </div>
        
        <div class="textxie">
            <!-- <div>
                我已阅读并接受<p class="textblack">{{xian}}</p>
            </div> -->
        </div>

        <div class="login_input login_input1 " @click="handleLogin">
     
            <div class="tjiao">注册</div>
        </div>

        <div class="beginLogin" @click="handleRigister">已有账号,前去登录</div>

         <img class="login_bgc" src="../assets/login/5.png" alt="">
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
                    "registerName":that.phone
                }
                getCode(params).then((res)=>{
                    if(res!=undefined){
                        console.log(res)
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
      handleRigister(e){
           this.$emit('changeRister')
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
        width: 490px;
        height: 609px;
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
     
    }
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
        font-size: 16px;
        color: #fff;
        font-style: italic;
        margin-top: 15px;
        cursor:pointer
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
</style>