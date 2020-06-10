<template>
  <div class="register">
     
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">LOGIN</p>
            <p class="text_zhuce">修改密码</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>

        <div class="login_input">
            <div class="linxing"></div>
            <img class="input_img" src="../assets/login/2.png" alt="">
            <input class="input" type="text" placeholder="手机号" style="color:#fff"  v-model="phone"  name="" id="123" >
        </div>

        <div class="yanzhengma">
             <div class="login_input">
             
                <input class="input1" type="text" v-model="code"  placeholder="验证码"  v-cursor  name="" id="1" v-on:keyup.enter = "handleLogin">
                <div class="getma" @click="get_code" v-cursor>
                    <div class="getma_box"></div>
                    <div class="text_yanzhenma">
                        {{getyanma}}
                    </div>
                </div>
            </div>
        </div>

         <div class="login_input login_input1"   @click="login11234545">
 
            <div class="tjiao">确定</div>
        </div>
        
        <div class="topOneBu" @click="handletopOne">
            返回上一步
        </div>

        <img class="register_bgc" src="../assets/register/1.png" alt="">
  </div>

</template>

<script>
import { JSEncrypt } from 'jsencrypt';
import {login,getCode,getVCode} from '../axios/Apilogin'
import {Message} from 'element-ui'; //引入错误提示组件
import Bus from '../axios/Bus';
export default {
  name: '',
  components: {},
  data() {
    return {
        code:"",
        phone:'',
        password:'',
        getyanma:"获取验证码",
        codeMessage:'0000',
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
      //返回上一步
      handletopOne(){
          this.$emit('FhandtopOne')
      },


     login11234545(){
        //   this.$emit('queding')
         if(this.phone==""){
              Message({     
                    duration:2000,                                 
                    message:"请输入手机号",
                    type:'error'
            })
         }else if(this.code==""){
              Message({     
                    duration:2000,                                 
                    message:"请输入验证码",
                    type:'error'
            })
         }else if(this.code==this.codeMessage){
                const data={
                    phone:this.phone,
                    code:this.code
                }
             this.$emit('queding',data);
             this.phone="";
             this.code="";

        }else{
             Message({     
                    duration:2000,                                 
                    message:"验证码输入错误",
                    type:'error'
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
      //获取验证码
      get_code(e){
             var that=this;  
            //验证手机
            const Phonestate = that.verify_phone(that.phone)
            if(Phonestate&&that.getyanma=="获取验证码"){   //如果手机号返回正确 则调接口
                const params={
                    "mobile":that.phone
                }
                getVCode(params).then((res)=>{
                    if(res!=undefined){
                        console.log(res)
                        this.codeMessage=res.data;  //把验证码，储存再data中
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
           
                })
            }
           
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
    .topOneBu{
        font-size: 16px;
        color: #fff;
        font-weight: 900;
        margin-top: 20px;
        cursor: pointer;
    }
</style>
