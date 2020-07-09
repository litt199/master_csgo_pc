<template>
  <div class="register">
     
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">LOGIN</p>
            <p class="text_zhuce">登录</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>

        <div class="login_input">
            <div class="linxing"></div>
            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="text" placeholder="手机号" style="color:#fff" v-model="phone"  @input="Phone"  name="" id="111123" v-on:keyup.enter = "login1">
        </div>

        <div class="login_input">
            <div class="linxing"></div>
            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="password" v-model="password" placeholder="请输入您的密码"  name="" id="4323256" v-on:keyup.enter = "login1">
        </div>

         <div class="login_input login_input1"   @click="login1">
            <div class="linxing1"></div>
            <div class="tjiao">登录</div>
        </div>
        
        <div class="text_kuaijie">
            <p class="P_text" @click="handleClickRegister">注册账号</p>
            <p v-cursor class="P_text" @click="handleClickSteamRegister">快捷登录</p>
            <p v-cursor @click="wangjimima">忘记密码</p>
        </div>

         <img class="register_bgc" src="../assets/register/1.png" alt="">
  </div>

</template>

<script>
import { JSEncrypt } from 'jsencrypt';
import {login} from '../axios/Apilogin'
import {Message} from 'element-ui'; //引入错误提示组件
import Bus from '../axios/Bus';
export default {
  name: '',
  components: {},
  data() {
    return {
        phone:'',
        password:'',
    }
  },
    mounted() {
      // Bus.$emit("login1",this.login1());
    },
    created:function(){
    // let _this = this;
    // document.onkeydown = function(e){    //监听用户按键键盘事件，如果按enter，就点击登录
    //     let _key = window.event.keyCode;
    //     if(_key === 13){
    //         _this.login1()
    //     }
    //  }
    },
  methods:{
      exit(){  //点击叉，不显示登陆页面
          this.$emit('changeExit')
          Bus.$emit('changeTimer',1)  
      },
    
      clear(){   //清楚输入框内容
        this.phone='';
        this.password=''
      },

      Phone(e){    //获取手机号
          // console.log(this.phone)
      },
    encrypt(password){//密码加密
        // 从后台获取公钥，这里省略，直接赋值
        let publicKey ='MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n'+'2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==';
        let encryptor = new JSEncrypt()  // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey)  // 设置公钥
        let rsaPassWord = encryptor.encrypt(password)  // 对密码进行加密
        return rsaPassWord;
    },
      
    login1(e){  //点击登录
        var phonetext=/^1[3456789]\d{9}$/;
        var emalText =  /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        if(!phonetext.test(this.phone)&&!emalText.test(this.phone)){
            Message({                                      //element-ui中的展示请求错误的信息
                message:"请输入正确的手机号",
                type:'error'
            })
        }else if(this.password==""){
             Message({
                duration:2000,                              //element-ui中的展示请求错误的信息+ 
                message:"请输入您的密码",
                type:'error'
            }) 
        }else{
            var rsaPassWord= this.encrypt(this.password)
            let params={
                "username":this.phone,
                "password":rsaPassWord
            }
            login(params).then((res)=>{
                if(res!=undefined){
                // console.log(res)
                    if(res.code===3){
                    Message({
                            duration:2000,                              //element-ui中的展示请求错误的信息+ 
                            message:res.msg,
                            type:'error'
                        })
                    }else if(res.code===0){
                        this.$emit('changeState',2)
                        Bus.$emit('changeTimer',1)
                            localStorage.setItem('token',res.data.token)  //储存本地的token
                            Message({
                                duration:2000,                              //element-ui中的展示请求错误的信息+ 
                                message:"登录成功",
                                type:'success'
                            })
                            const path=this.$route.path;
                            if(path=="/public_box_home/myCenter"){
                                Bus.$emit('fourceMycenter',1)     //如果是当前是个人中心页面的话，就刷新个人中心页面
                            }
                    }
                }
              
            })
        }
    },
    //跳转快捷登录
    handleClickSteamRegister(){
        this.$emit('changeSteamRigister')
    },

    // 跳转注册
    handleClickRegister(){
        this.$emit('changeRigister')
    },

    //跳转忘记密码
    wangjimima(){
   
        this.$emit('wangjipass')

    },
  }
}
</script>

<style scoped>

 .register{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 490px;
        height: 425px;
        background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
        transform: translate(-50%);
        z-index: 99999999999;
        /* background: linear-gradient(#232123, #65072c); */
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .register_bgc{
        width: 535px;
        height: 475px;
        position: absolute;
        left: -20px;
        top: -20px;
        z-index: -1;
    }
    .exit{
        position: absolute;
        top: 0px;
        color: #fff;
        font-size:30px;
        right: 10px;
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
        width: 336px;
        height: 42px;
        margin-top: 25px;
    }
    .login_input1{
        margin-top:51px;
        cursor:pointer;
    }
    .linxing{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);
        left: 0;
        border-radius: 5px;
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);
        border-radius: 5px;
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
     .input_img{
        position: absolute;
        top: 7px;
        left: 18px;
    }
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
     -webkit-transition-delay: 99999s;
     -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
}
    .input{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        width: 206px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-style: italic;
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
    .text_kuaijie{
        display: flex;
        color: #7d7a7a;
        margin-top: 25px;
        font-size: 16px;
    }
    .P_text{
        margin-right: 10px;
        cursor: pointer;
    }
</style>
