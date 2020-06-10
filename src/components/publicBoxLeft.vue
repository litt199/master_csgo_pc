<template>
<div class="bx">
  
    <div class="boxLeft" v-for="(item,index) in list" @mouseenter="mouseen(index)" @mouseleave="mousele(index)" :key="index">
        <div class="mouseEnter" v-show="item.state">
            <!--<img class="mouseEnterImg" src="../assets/publicBoxLeft/4.png" alt="">-->
            <div class="mouseEnterImg"></div>
            <div class="mouenter_header">
                  <img class="headerimgtou" :src="item.avatar==null?avatar:item.avatar" alt="">
            
            </div>
            <p class="header_name">{{item.nickName}}</p>
        </div>
        <div class="boxLeftBg"></div>
            <!--<img class="bg" v-lazy="img1" alt="">-->
            <img class="knife" v-lazy="item.image" alt="">
          <div class="boxLeftbg">
                <img src="" alt="">
                <!-- <img class="small_img" src="../assets/publicBoxLeft/1.png" alt="" v-show="!item.state"> -->
                <div class="text" v-show="!item.state" :style="'color:'+item.kev">
                  {{item.name}}
                </div>
          </div>
          <div :class="'bottomColor bottomColor'+item.code"></div>
    </div>
    
  </div>
</template>

<script>
import {getPublicBoxLeftImg} from '../axios/Apilogin'
export default {
  props:{
    headerImg:{
      default:require('../assets/publicBoxLeft/2.png')
    },
    img1:{
      type:String,
      default:require('../assets/publicBoxLeft/2.png'),   //动态图片 要加require
    },
    knife:{
      type:String,
      default:require('../assets/publicBoxLeft/3.png')
    },
    name:{
      type:String,
      default:'M4AI消音型闪回(破损不堪)'
    }
  },
  name: '',
  components: {},
  data() {
    return {
          avatar:require("../assets/avatar/logo_icon.png"),//头像
          mouseeNTRER:false,
          leftTimer:null,
          // websock: null,
          list:[],
          img:require('../assets/publicBoxLeft/1.png')
    }
  },
  mounted(){
      getPublicBoxLeftImg().then((res)=>{
        if(res!=undefined){
            console.log(res)
            var dataList = res.data;
            dataList.forEach((item,i) => {
                item.state=false;
                switch(item.level){
                case '普通级':
                item.code = 1;
                item.kev = "rgb(176, 195, 217)";
                break;
                case '受限':
                item.code = 2;
                item.kev = "rgb(136, 71, 255)";
                break;
                  case '保密':
                  item.code = 3;
                item.kev = "rgb(211, 44, 230)";
                break;
                  case '军规级':
                  item.code = 4;
                item.kev = "rgb(75, 105, 255)";
                break;
                  case '工业级':
                  item.code = 5;
                item.kev = "rgb(94, 152, 217)";
                break;
                  case '消费级':
                  item.code = 6;
                item.kev = "rgb(176, 195, 217)";
                break;
                  case '违禁':
                  item.code = 7;
                item.kev = " rgb(228, 174, 57)";
                break;
                  case '隐秘':
                  item.code = 8;
                item.kev = " rgb(235, 75, 75)";
                break;
                  case '非凡':
                  item.code = 9;
                item.kev = "rgb(235, 75, 75)";
                break;
              
              }
            });
            this.list=dataList;
            console.log(this.avatar);
            console.log('----------------dataList');
            console.log(dataList)
        }
       
      })
      this.upDateleftRes()
  },
   created() {
     
    },
  destroyed() {
      
      clearInterval(this.leftTimer);
    },
   methods: {
      mouseen(e){

        this.$set(this.list[e],"state",true)
      },
      mousele(e){

        this.$set(this.list[e],"state",false)
      },
       upDateleftRes(){
             this.leftTimer = setInterval( () =>{
                 getPublicBoxLeftImg().then((res)=>{
                   console.log(res)
                   if(res!=undefined){
                  
                     var dataList=res.data;
                       dataList.forEach((item,i) => {
                          item.state=false;
                          switch(item.level){
                          case '普通级':
                          item.code = 1;
                          item.kev = "rgb(176, 195, 217)";//白
                          break;
                          case '受限':
                          item.code = 2;
                          item.kev = "rgb(136, 71, 255)";//紫色
                          break;
                            case '保密':
                            item.code = 3;
                          item.kev = "rgb(211, 44, 230)";//玫紫
                          break;
                            case '军规级':
                            item.code = 4;
                          item.kev = "rgb(75, 105, 255)";//蓝
                          break;
                            case '工业级':
                            item.code = 5;
                          item.kev = "rgb(94, 152, 217)";//绿
                          break;
                            case '消费级':
                            item.code = 6;
                          item.kev = "rgb(176, 195, 217)";//蓝
                          break;
                            case '违禁':
                            item.code = 7;
                          item.kev = " rgb(228, 174, 57)";//黄
                          break;
                            case '隐秘':
                            item.code = 8;
                          item.kev = " rgb(235, 75, 75)";//橘红
                          break;
                            case '非凡':
                            item.code = 9;
                          item.kev = "rgb(235, 75, 75)";//橘红
                          break;
                        
                        }
                      });
                   }
                   this.list=dataList;
                 })
             },15000)
       },
    },
}
</script>

<style scoped>
.boxLeft{
  margin-left: 30px;
  width: 202px;
  height: 138px;
  position: relative;
  margin-bottom: 23px;
}
.boxLeftbg{
    width: 202px;
    height: 138px;
    position: absolute;;
    top:0;
    left: 0;
    box-shadow: 0px 0px 20px #000; 
    /*left: 16px;
    border: 1px solid #fff;*/
    /*transform: skewX(-14deg);
    -webkit-transform: skewX(-14deg);
    -moz-transform: skewX(-14deg);
    -ms-transform: skewX(-14deg);
    -o-transform: skewX(-14deg);*/
    /*border-image: linear-gradient( #7d1642, #2b2222) 30 30;
    border-image: -webkit-linear-gradient( #7d1642, #2b2222) 30 30;
    border-image: -moz-linear-gradient( #7d1642, #2b2222) 30 30;*/
    /* background-color: #201d1d; */
}
.boxLeftBg{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    opacity: 0.7;
    background: #0f0f0f;
}
.small_img{
    width: 29px;
    height: 14px;
    position: absolute;
    bottom: 29px;
    left: 12px;
}
.text{
    font-size: 12px;
    position: absolute;
    left: 12px;
    bottom: 6px;
    font-weight: 900;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 154px;
    color: #fff;
}
.boxLeft .bg{
    width: 202px;
    height: 138px;
    position: absolute;
    left: 0px;
    top: 0px;
    
}
.mouseEnter{
  position: absolute;
  width: 204px;
  height: 138px;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.mouseEnterImg{
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
}
.knife{
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  /* z-index: 100; */
  width: 148px;
  /* height: 99px; */
    /* opacity: 0; */
  
}
.mouenter_header{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: absolute;
  left:50%;
  top: 40%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.mouenter_header img{
  width:100%;
}
.headerimgtou{
  position: absolute;
  left: 0px;
  top: 0px;
}
.header_name{
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 22px;
  color: #fff;
  /* font-size:  16px; */
  text-align: center;
}
.bottomColor{
  width: 202px;
  height: 3px;
  /*background-image: linear-gradient(to right,#d50715,#dd5041);*/
  position: absolute;
  bottom: -3px;
}
.bottomColor1{
  background-image: linear-gradient(to right,#b0c3d9,#dae6f3);
  background-image: -webkit-linear-gradient(to right,#b0c3d9,#dae6f3);
  background-image: -moz-linear-gradient(to right,#b0c3d9,#dae6f3);
  background-image: -ms-linear-gradient(to right,#b0c3d9,#dae6f3);
  background-image: -o-linear-gradient(to right,#b0c3d9,#dae6f3);
}
.bottomColor2{
  background-image: linear-gradient(to right,#8847ff,#a47af1);
  background-image: -webkit-linear-gradient(to right,#8847ff,#a47af1);
  background-image: -moz-linear-gradient(to right,#8847ff,#a47af1);
  background-image: -ms-linear-gradient(to right,#8847ff,#a47af1);
  background-image: -o-linear-gradient(to right,#8847ff,#a47af1);
}
.bottomColor3{
  background-image: linear-gradient(to right,#d32ce6,#e175ed);
  background-image: -webkit-linear-gradient(to right,#d32ce6,#e175ed);
  background-image: -moz-linear-gradient(to right,#d32ce6,#e175ed);
  background-image: -ms-linear-gradient(to right,#d32ce6,#e175ed);
  background-image: -o-linear-gradient(to right,#d32ce6,#e175ed);
}
.bottomColor4{
  background-image: linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -webkit-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -moz-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -ms-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -o-linear-gradient(to right,#348ef1,#6ad8f1);
}
.bottomColor5{
  background-image: linear-gradient(to right,#005f38,#2cffc4);
  background-image: -webkit-linear-gradient(to right,#005f38,#2cffc4);
  background-image: -moz-linear-gradient(to right,#005f38,#2cffc4);
  background-image: -ms-linear-gradient(to right,#005f38,#2cffc4);
  background-image: -o-linear-gradient(to right,#005f38,#2cffc4);
}
.bottomColor6{
  background-image: linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -webkit-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -moz-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -ms-linear-gradient(to right,#348ef1,#6ad8f1);
  background-image: -o-linear-gradient(to right,#348ef1,#6ad8f1);
}
.bottomColor7{
  background-image: linear-gradient(to right,#f16903,#f1ef01);
  background-image: -webkit-linear-gradient(to right,#f16903,#f1ef01);
  background-image: -moz-linear-gradient(to right,#f16903,#f1ef01);
  background-image: -ms-linear-gradient(to right,#f16903,#f1ef01);
  background-image: -o-linear-gradient(to right,#f16903,#f1ef01);
}
.bottomColor8{
  background-image: linear-gradient(to right,#d50614,#dd5042);
  background-image: -webkit-linear-gradient(to right,#d50614,#dd5042);
  background-image: -moz-linear-gradient(to right,#d50614,#dd5042);
  background-image: -ms-linear-gradient(to right,#d50614,#dd5042);
  background-image: -o-linear-gradient(to right,#d50614,#dd5042);
}
.bottomColor9{
  background-image: linear-gradient(to right,#d50614,#dd5042);
  background-image: -webkit-linear-gradient(to right,#d50614,#dd5042);
  background-image: -moz-linear-gradient(to right,#d50614,#dd5042);
  background-image: -ms-linear-gradient(to right,#d50614,#dd5042);
  background-image: -o-linear-gradient(to right,#d50614,#dd5042);
}

</style>

