<template>
  <div class="register">
     
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
        
             <p class="text_bg">CHANGE PASSWORD</p>
            <p class="text_zhuce">修改密码</p>
          
        </div>

           <div class="login_input">

            <img class="input_img" src="../assets/login/3.png" alt="">
            <input class="input" type="password" v-model="password" placeholder="输入密码"  name="" id="2">
        </div>
        <div class="login_input">

            <img class="input_img" src="../assets/login/3.png" alt="">
            <input class="input" type="password" v-model="password1" placeholder="再次输入密码"  name="" id="3" >
        </div>



        
         <div class="login_input login_input1"   @click="handleLogin">
 
            <div class="tjiao">确定</div>
        </div>
        
       
         <img class="register_bgc" src="../assets/register/1.png" alt="">
  </div>

</template>

<script>
import { JSEncrypt } from 'jsencrypt';
import {login,HandleRegister1} from '../axios/Apilogin'
import {Message} from 'element-ui'; //引入错误提示组件
import Bus from '../axios/Bus';
export default {
  name: '',
  components: {},
  props:{
      phone:{
          default:"",
      },
      code:{
          default:"",
      }
  },
  data() {
    return {
        password:'',
        password1:'',
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
      
      //点击确定修改
      handleLogin(){
          if(this.phone==""){
                Message({                                          //element-ui中的展示请求错误的信息
                    duration:2000,                                
                    message:"请正确输入手机号",
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
                  "mobile":this.phone,
                  "passWord":rsaPassWord,
                  "code":this.code
              }
              HandleRegister1(params).then((res)=>{
                  if(res!=undefined){
                    if(res.code==1){
                        Message({
                                duration:3000,                                 //element-ui中的展示请求错误的信息
                                message:"修改密码出错,请重新修改",
                                type:'error'
                            })
                    }else{
                        this.$emit('none_login')
                        this.password=""
                        this.password1=""

                        Message({     
                                duration:2000,                                 
                                message:"修改成功,请登录吧",
                                type: 'success'
                            })
                        
                    }
                  }
              })
          }
      },
      exit(){  //点击叉，不显示登陆页面
          this.$emit('changeExit')  
      },
    
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
     
      handleRigister(e){
           this.$emit('changeRister')
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
  },

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
        z-index: 999;
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
        width:280px;
        display: flex;
        justify-content: center;
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
        font-size: 24px;
        width: 100%;
        position: absolute;
        top: 9px;
        left: 14.5px;
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
        margin-top: 64px;
        cursor:pointer;
         line-height: 42px;
          background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }
</style>
