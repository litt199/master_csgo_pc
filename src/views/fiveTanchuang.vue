<template>
  <div class="fiveliankai">
        <div class="exit" @click="exit" v-cursor>x</div>
        <img class="bg" src="../assets/fiveLiankai/1.png" alt="">
        <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
            <p class="text_zhuce">确定饰品</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>
        
        <div class="fiv_box">
            <div class="fiv_small_box" v-for="(item,index) in list" :key='index'>
                <img class="fir" v-lazy="item.image" alt="">
                <img class="yuanpan" src="../assets/fiveLiankai/2.png" alt="">
                <div class="textbox123">

                      <p class="shoujia">售价<span>${{item.price}}</span></p>
                        <p class="mess">{{item.name}}|{{item.type}}<span>{{sta}}</span></p>
                </div>
              
            </div>
        </div>

        <div class="login_input login_input1"   @click="exit">
            <div class="linxing1"></div>
            <div class="tjiao1">确定</div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props:{
      sdsds:{
          type:Array
      },
      image:{
          default:require("../assets/fiveLiankai/3.png")
      },
      price:{
          default:'59.3'
      },
      name:{
          default:'运动手套'
      },
      type:{
          default:'马纳米风云'
      },
      sta:{
          default:'战痕累累'
      }
  },
  data() {
    return {
        list:[
            {
                image:require("../assets/fiveLiankai/3.png")
            },
            {
                image:require("../assets/fiveLiankai/3.png")
            },
            {
                image:require("../assets/fiveLiankai/3.png")
            },
            {
                image:require("../assets/fiveLiankai/3.png")
            },
            {
                image:require("../assets/fiveLiankai/3.png")
            },
        ]
    }
  },
  watch:{
      sdsds:{
          handler:function(val,oldval){
            
               this.list=val
           },
           deep:true//对象内部的属性监听，也叫深度监听
      }
      
  },
  methods:{
      exit(){
          this.$emit('yingcangfive')
      }
  }
}
</script>

<style scoped>
    .fiveliankai{
        width: 1073px;
        height: 418px;
        position: relative;
        display: flex;
      
        align-items: center;
        flex-direction: column;
    }
    .login_input{
        position: relative;
        width: 365px;
        height: 42px;
        margin-top: 40px;
    }
    .login_input1{
        margin-top:35px;
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
        transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        border: 1px solid #691534;
        background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }
      .tjiao1{
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
        font-style: italic;
        font-weight: 700;
    }
    .bg{
        position: absolute;
        left: 0;
        top: 0;
    }
     .login_top{
        display: flex;
        margin-top: 20px;
        position: relative;
    }
    .top_img{
        width: 27px;
        height: 45px;
    }
    .text_zhuce{
        font-size: 26px;
        color:#e60f64;
        margin: 0 5px;
        text-align: center;
        line-height: 44px;
        font-style: oblique;
        font-weight: 700;
    }
    .fiv_box{
        width: 100%;
        display: flex;
        position: relative;
        color: #fff;
    }
    .fiv_small_box{
        width: 20%;
        height: 240px;
         display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .fir{
        width: 126px;
        /* height: 77px; */
        margin-top:32px;
        position: relative;
        z-index: 10;
    }
    .yuanpan{
        position: absolute;
        left: 10px;
        top: 102px;
    }
    .textbox123{
        position: absolute;
        left: 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
        bottom: 0px;
        width: 100%;
    }
    .shoujia{
        margin-top: 50px;
       
    }
    .shoujia span{
        color: #e60f64;
        font-size: 16px;
    }
    .mess{
        margin-top: 8px;
      
    }
    .mess span{
        color: #e60f64;
    }
     .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
</style>
