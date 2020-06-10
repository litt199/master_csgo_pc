<template>
  <div class="recharge">
    
      <div class="exit" @click="exit" v-cursor>x</div>
       <div class="login_top">
            <img class="top_img" src="../assets/login/1.png" alt="">
             <p class="text_bg">TOP-UP</p>
            <p class="text_zhuce">充值</p>
            <img class="top_img" src="../assets/login/1.png" alt="">
        </div>

        <div class="top_up">
            <div v-for="(item,index) in list" :key="item.id" v-cursor :class="['up_price',changeIndex==index?'active':'']" @click="handleClickChangePrice(index)">
                <div class="red_box"></div>
                <div class="daole">
                    <p class="daolefu">$</p>
                    <p class="proce">{{item.price}}</p>
                </div>
            </div>
        </div>

        <div class="login_input">
            <div class="linxing"></div>
            <input class="input" type="Number" placeholder="其他金额" v-model="shuruPrice" @input="HandleInput" name="" id="">
        </div>

        <div class="shuomingtext">
            <div>充值最小额度为3美金<br />
付款成功后请手动关闭窗口 充值未到账联系网站客服</div>
        </div>

      <!-- <div class="yanzhengma">
             <div class="login_input">
                <div class=" input_yanzheng">
                    <div class="selete">
                        <el-select v-model="value" placeholder="请选择" class="hei">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :value="item.label">{{item.label}}
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="getma">
                    <div class="getma_box"></div>
                    <div class="text_yanzhenma">
                        {{getyanma}}
                    </div>
                </div>
             
            </div>
        </div> -->

        <div class="login_input login_input1" @click="next">
            <div class="linxing1"></div>
            <div class="tjiao">下一步</div>
        </div>
          <img class="guangbiao" src="../assets/recharge/2.png" alt="">
  </div>
</template>

<script>
import {Message} from "element-ui";
export default {
  name: '',
  components: {},
  data() {
    return {
        changeIndex:1,
        getyanma:'使用抵用券',
        shuruPrice:'',  //输入的金额
        list:[
            {
                id:1,
                price:5,
            },
           {
                id:2,
                price:10,
            },
            {
                id:3,
                price:30,
            },
            {
                id:4,
                price:50,
            },
             {
                id:5,
                price:100,
            },
             {
                id:6,
                price:200,
            },

        ],
         options: [
             {
            value: '选项1',
            label: '黄金糕'
            }, 
            {
            value: '选项2',
            label: '双皮奶'
            }, 
            {
            value: '选项3',
            label: '蚵仔煎'
            }, 
            {
            value: '选项4',
            label: '龙须面'
            }, 
            {
            value: '选项5',
            label: '北京烤鸭'
            }
            ],
            value: '',
    }
  },
  methods:{
      HandleInput(){  //输入的金额
            if(this.shuruPrice!=""){
                this.changeIndex=-1;
            }else{
                this.changeIndex=1
            }
      },
      next(){
        let list=this.list;
        if(this.changeIndex>=0){
            var price=list[this.changeIndex].price;
        }else{
            var price=this.shuruPrice;
        }
        // if(this.shuruPrice!=""){
        //     var price=this.shuruPrice;
        // }else{
        //     var price=list[this.changeIndex].price;
        // }
        if(price>=3 && /^\d*$/.test(price)){
            this.$emit('next',price);
        }else{
            Message({
                message:"请输入大于3美元的整数金额！",
                type:'error'
            })
        }
      },
      handleClickChangePrice(e){
          if(this.changeIndex==e){
            this.changeIndex=-1;
          }else{
            this.changeIndex=e;
          }
          
      },
      exit(){  //点击叉，不显示登陆页面
          this.$emit('changeExit')
      },
  }
}
</script>

<style scoped>
   .recharge{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 490px;
        height: 677px;
       
        transform: translate(-50%,-50%);
       -webkit-transform: translate(-50%,-50%);
       -moz-transform: translate(-50%,-50%);
       -ms-transform: translate(-50%,-50%);
       -o-transform: translate(-50%,-50%);
        z-index: 100;
        background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
        display: flex;
        flex-direction: column;
        z-index: 1999;
        align-items: center;
        /* background-image: url(../assets/recharge/1.png); */
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
        font-style: oblique;
        font-weight: 700;
    }
    .text_bg{
        font-size: 25px;
        font-style: italic;
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
        margin-top: 40px;
    }
    .login_input1{
        margin-top:39px;
        cursor:pointer;
        text-align: center;
    }
    .linxing{
        width: 344px;
        height: 100%;
        position: absolute;
        top: 0;
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
        right: 36%;
        z-index: 2;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        color: #fff;
        /* font-style: italic; */
        font-weight: 700;
    }
     .input_img{
        position: absolute;
        top: 7px;
        left: 18px;
    }
    .input{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        
        width: 206px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        text-align:center;vertical-align:middle;
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
    .top_up{
        width: 336px;
        height: 172px;
        /* background-color: #fff; */
        margin-top: 10px;
        display: flex;
        flex-wrap:wrap;
      
    }
    .up_price{
        width: 100px;
        height: 76px;
        position: relative;
        margin-left: 11px;
        margin-bottom: 15px;
          display: flex;
        align-items: center;
        justify-content: center;
    }
    .active .red_box{
        background-color: #e60f64;
    }
    .active .daole{
        color: #151414;
    }
    .red_box{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
         background-color: #151414;
        border-radius: 8px;
        border: 1px solid #e60f64;
    
    }
    .daole{
        font-size: 26px;
        position: absolute;
      
        /* z-index: 10px;
        top:18px;
        left: 31px; */
        display: flex;
        color: #e60f64;
        /* font-style: italic; */
    }
    .daolefu{
        font-weight: 900;
    }
    .proce{
        font-size: 36px;
        font-weight: 900;
        line-height: 36px;
    }
    .shuomingtext{
        margin-top: 30px;
        width: 350px;
        text-align: center;
        color: #655e63;
        font-size: 15px;
    }

    .input_yanzheng{
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
        text-align: center;
    }
    .input1{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 46%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        width: 181px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        text-align: center;

        text-align: center;
        vertical-align:middle;
    }
    .getma{
        width: 102px;
        height: 100%;
        position:absolute;
        top:0;
        left: 0;
        font-size: 16px;
        color: #fff;
    }
   .getma_box{
       width: 100%;
       height: 100%;
       background:linear-gradient(to right,#ba023f,#ff537b);
       background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
       background:-moz-linear-gradient(to right,#ba023f,#ff537b);
       background:-ms-linear-gradient(to right,#ba023f,#ff537b);
       background:-o-linear-gradient(to right,#ba023f,#ff537b);
       transform: skewX(-15deg);
       -webkit-transform: skewX(-15deg);
       -moz-transform: skewX(-15deg);
       -ms-transform: skewX(-15deg);
       -o-transform: skewX(-15deg);
   }
   .text_yanzhenma{
       position: absolute;
       top: 7px;
       left: 12px;
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
    }
    .textxie{
        font-size:14px;
        font-style: italic;
        color: #d30f5c;
        margin-top: 18px;
    }
    .textblack{
        float: right;
        text-decoration:underline;
        cursor: pointer;
    }
    .selete{
      
        float: right;
    }
    .hei{
        background-color: #151414;
        background:none;
    }
    .el-input{
        background-color: #151414;
    }
    .el-input__inne{
        background-color: #151414;
    }
   .exit{
       position: absolute;
       top: 0px;
       color: #fff;
       font-size:30px;
       right: 10px;
   }
   .guangbiao{
       position: absolute;
       left: -21px;
       top: -20px;
       z-index: -1;
   }
   
</style>

