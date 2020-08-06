<template>
  <div class="verification" >
      <div class="reg_top" v-cursor @click="()=>{$emit('handeleRigiseter')}">
          账号密码登录
          <img src="../assets/register/2.png" alt="">
      </div>
      <div class="logo_box">
           <img class="logo" src="../assets/login/LOGO.png" alt="">
           <p class="">欢迎您的到来</p>
      </div>
      
      <div class="input_box">
          <p class="qian_shuzi">+86 
              <img src="../assets/login/6.png" alt="">
          </p>
         <input  class="input1" type="text" placeholder="请输入账号" style="color:#fff" v-model="phone"  @input="Phone"  name="" id="111123" v-on:keyup.enter = "login1">
         <input  class="input1 input" type="text" placeholder="请输入验证码" style="color:#fff" v-model="code"  @input="Phone"  name="" id="111123" v-on:keyup.enter = "login1">
            <!-- 获取验证码 -->
            <div class="getma" @click="get_code" v-cursor>
                <div class="getma_box"></div>
                <div class="text_yanzhenma">
                    {{getyanma}}
                </div>
            </div>

         <div class="qudenglu" v-cursor @click="login1">
            登陆
        </div>

         <div class="router_text">
                <p v-cursor @click="handleClickRegister">去注册</p>
                <p class="zhaohu" v-cursor  @click="wangjimima">密码找回</p>
            </div>
      </div> 
  </div>
</template>


<script>
import { getCode,HandleRegister,loginByCode,sendVCode} from '../axios/Apilogin'
import { JSEncrypt } from 'jsencrypt';

import {Message} from 'element-ui'; //引入错误提示组件
import Bus from '../axios/Bus';
export default {
  name: '',
  components: {},
  data() {
    return {
        phone:'',
        password:'',
        getyanma:'获取验证码',
        code:"",
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
                    "username":that.phone,

                }
                sendVCode(params).then((res)=>{
                    if(res!=undefined){
                        // console.log(res)
                        if(res.code==1){
                                Message({                                          //element-ui中的展示请求错误的信息
                                    duration:2000,                                
                                    message:"该手机号未注册，请先去注册",
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

      
    login1(e){  //点击登录
        var phonetext=/^1[3456789]\d{9}$/;
        var emalText =  /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        if(!phonetext.test(this.phone)&&!emalText.test(this.phone)){
            Message({                                      //element-ui中的展示请求错误的信息
                message:"请输入正确的手机号",
                type:'error'
            })
        }else if(this.code==""){
             Message({
                duration:2000,                              //element-ui中的展示请求错误的信息+ 
                message:"请输入您的密码",
                type:'error'
            }) 
        }else{
           
            let params={
                "username":this.phone,
                "code":this.code
            }
            loginByCode(params).then((res)=>{
                if(res!=undefined){
                // console.log(res)
                    if(res.code===3){
                    Message({
                            duration:2000,                              //element-ui中的展示请求错误的信息+ 
                            message:res.msg,
                            type:'error'
                        })
                    }else if(res.code===0){
                        console.log(res)
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
        this.$emit('changeRigister1')
    },

    //跳转忘记密码
    wangjimima(){
        this.$emit('wangjipass')

    },
  }
}
</script>

<style scoped>
.verification{
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
        margin-left: 170px;
        margin-top: 5px;
        font-size: 12px;
        color: #666666;
        height: 44px;
        display: flex;
        align-items: center;
    }
    .reg_top img{
        margin-left: 5px;
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
    .input1:-webkit-autofill {
        box-shadow: 0 0 0 1000px #141414 inset;
        -webkit-text-fill-color: #fff;
        caret-color:#fff;
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
        justify-content: space-between;
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








</style>
