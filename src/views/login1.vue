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
            <span class="span"></span>
            <div>
                <p class="number">3</p>
                <p>steam信息设置</p>
            </div>

        </div>
        <!-- <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">SIGN UP</p>
            <p class="text_zhuce">注册</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div> -->
        <div class="login_top">
            <img class="logo" src="../assets/login/LOGO.png" alt="">
            <p class="text_zhuce">注册新用户</p>
        </div>
        <!-- <div class="login_input">
            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="text" v-model="phone" @blur="verify_phone(phone)" placeholder="手机号"  name="" id="11223" >
        </div> -->
        <!-- <div class="yanzhengma">
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
        </div> -->
        <div class="login_input">
            <!-- <img class="input_img" src="../assets/login/3.png" alt=""> -->
            <input class="input" type="password" v-model="password" placeholder="输入密码"  name="" id="26" >
            <div class="star">*</div>
        </div>
        <div class="login_input">
            <!-- <img class="input_img" src="../assets/login/3.png" alt=""> -->
            <input class="input" type="password" v-model="password1" placeholder="再次输入密码"  name="" id="37">
            <div  class="star">*</div>
        </div>
        <!-- <div class="login_input">
            <img class="input_img" src="../assets/login/4.png" alt="">
            <input class="input" v-model="invition"  type="text" placeholder="邀请码/选填"  name="" id="4" v-on:keyup.enter = "handleLogin">
        </div>
         -->
         <div class="login_input">
            <!-- <img class="input_img" src="../assets/login/3.png" alt=""> -->
            <input class="input" type="name" v-model="nickName" placeholder="输入昵称"  name="" id="26" >
            <div  class="star">*</div>
        </div>
        <div class="login_input">
            <!-- <img class="input_img" src="../assets/login/3.png" alt=""> -->
            <input class="input" type="invition" v-model="registerExtensionCode" placeholder="输入邀请码"  name="" id="26" v-on:keyup.enter="handleNext">
        </div>
        <div class="textxie">
            <!-- <div>
                我已阅读并接受<p class="textblack">{{xian}}</p>
            </div> -->
        </div>
        <div class="login_input login_input1 " @click="handleNext">
            <div class="tjiao">下一步</div>
        </div>
        <div class="beginLogin" @click="handleLogin" v-cursor>跳过，直接完成</div>
        <!-- <div class="login_input login_input1 " @click="handleLogin">
            <div class="tjiao">注册</div>
        </div>
        <div class="beginLogin" @click="handleRigister">已有账号,前去登录</div> -->
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
  props:{
      topCode:"",
  },
  data() {
    return { 
        registerExtensionCode:"", //储存邀请码
        password1:'',//储存第二次密码
        password:'',//储存第一次密码
        nickName:'',//昵称
        code:'', //储存验证码
        getyanma:'获取验证码',
        xian:"<<blackholeskins服务协议>>",
        phone:'18110789999',
        timer:"",  //保持计数器
  
        steamUrl:''
   }
  },
    mounted() {
        // Bus.$emit("handleLogin",this.handleLogin());
        let idCode = localStorage.getItem('decide')
  
        if(idCode!=undefined){
            this.registerExtensionCode=idCode
        }
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
      handleRigister(e){
           this.$emit('changeRister')
      },
      //下一步
      handleNext(){
     
        
         if(this.password==""){
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
          }else if(this.nickName==""){
               Message({                                          //element-ui中的展示请求错误的信息
                    duration:2000,                                
                    message:"请输入昵称",
                    type:'error'
                })
          }else{
                 var rsaPassWord= this.encrypt(this.password)
                const params={
                    "passWord":rsaPassWord,
                    "code":this.topCode.code,
                    "registerName":this.topCode.registerName,
                    "nickName":this.nickName,
                    "registerExtensionCode":this.registerExtensionCode,
                }
                this.$store.commit('setCode',params)   
                this.$emit('changeRister')
                this.password = "";
                this.password1 = "";
                this.nickName = "";
                this.registerExtensionCode = "";
          }
     
      },
       //完成注册
      handleLogin(){    
        var rsaPassWord= this.encrypt(this.password)    
        const paramss={
               "passWord":rsaPassWord,
                "code":this.topCode.code,
                "nickName":this.nickName,
                "registerExtensionCode":this.registerExtensionCode,
                "steamUrl":"",
                "registerName":this.topCode.registerName
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
                      this.$emit('closeLogin')//关闭注册页面弹出登陆页面
            }
            }
        })
      },
      
      //点击登录按钮
      dsdasdasdsadsad(){
         if(this.password==""){
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
          }else if(this.nickName==""){
               Message({                                          //element-ui中的展示请求错误的信息
                    duration:2000,                                
                    message:"请输入昵称",
                    type:'error'
                })
          }
          else{
              console.log(this.code)
              var rsaPassWord= this.encrypt(this.password)
              const params={
                  "passWord":rsaPassWord,
                  "code":this.code,
                  "nickName":this.nickName,
                  "registerExtensionCode":this.registerExtensionCode,
           
              }
              console.log(params);
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
                        this.invition=""
                        this.nickName=""
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
        height: 548px;
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
        margin: 35px auto 0px;
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
        /*font-style: italic;*/
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
        /*font-size: 16px;
        color: #fff;
        font-style: italic;
        margin-top: 15px;
        cursor:pointer*/
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