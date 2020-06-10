<template>
  <div class="publicDobleColor">
      <div class="box" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <img class="state_img"  v-lazy="img_state_show===0?weichuli:((img_state_show===1||img_state_show===2)?yiquhui:yisell)"  v-show="imgedStatedata" alt="">
          <div class="box_small">
                <img v-lazy="img1" alt="" :class="[userState==true?'publci_img publci_img_person':'publci_img']">
                <div class="text_box">
                    <p class="text" v-show="!userState" v-text_show="text">{{nametype}}</p>
                    <p  class="text text1">{{name}}</p>
                     <p class="text_price" v-show="!userState">售价：${{price}}</p>
                     <p class="text_probability" v-show="probabiState==1?true:false">概率：{{probability}}</p>
                </div>
                
          </div>
           <div class="location" ></div>
           <div class="location1" v-show="img_state_show==0&&sss===1" 
           :style="{border:'1px solid '+borde_color,background: '-webkit-linear-gradient(bottom,'+borde_color+' 25%,rgba(0,0,0,0) 90%)'}">
               <!-- 状态为0 可以操纵 -->
               <div class="img_hengxian1_box" v-show="sss==1" v-cursor>
                   <div v-show="img_state_show==0">
                        <p class="chus" v-show="img_state_show==0" @click="recaption">取回</p>
                        <!--<img class="img_hengxian1" v-lazy="img_state_show==0?churou:churou1" alt="">-->
                        <p class="chushou" v-show="img_state_show==0" @click="sell">出售</p>
                    </div> 
               </div>
                <!--  -->
                <div class="img_hengxian1_box" v-show="sss==0" v-cursor>
                    <p class="lijichurou">出售</p>
                     <!--<img class="img_hengxian1" v-lazy="img_state==1?churou:churou1" alt="">-->  
               </div>
           </div>
           <div class="location2" v-show="img_state_show==1"></div>
           <div class="fahuo" v-show="img_state_show==1">发货中</div>
           
           <div class="xian_bottom" :style="{'background':borde_color}"></div>
      </div>
     
  </div>
</template>

<script>
import Bus from "../axios/Bus";
export default {

  name: 'publcibox',
  props:{
      shoujiastate:{
          default:true
      },
      imgedState:{
        default:true  
      },
      name:{
          default:"表面淬火"
      },
      nametype:{
          default:"MA14"
      },
      Pheight:{
          type:Number,
          default:160,
      },
      Pwidth:{
          type:Number,
          default:142,
      },
      img1:{
          type:String,
          default:require('../assets/myCenter/3.png')
      },
      img_state:{
          type:Number,
          default:1,
      },
      img_state_show:{
          type:Number,
          default:0
      },
      borde_color:{
          type:String,
      },
      price: {
      
          default:0,
          required:false
      },
      userState:{
          default:false,
      },
      probability:{
          type:Number,
          default:0,
          required:false
      },
      probabiState:{
          default:false
      },
      takeIndex:{
          type:Number,
          default:0
      }
  },
  components: {},
  data() {
    return {
        kequ:require('../assets/publicColor/2.png'),
        nokequ:require('../assets/publicColor/3.png'),
        churou:require('../assets/publicColor/6.png'),
        churou1:require('../assets/publicColor/7.png'), 
        yiquhui:require('../assets/publicColor/9.png'), 
        weichuli:require('../assets/publicColor/10.png'), 
        yisell:require('../assets/publicColor/11.png'), 
        sss:2,
        seison:'立即购买',    
        imgedStatedata:this.imgedState,  
        text:2
    }
  },
  mounted(){
        //  console.log(this.Pheight)
  },
  methods:{
      enter(){
          this.sss=1;
          this.$emit('enter',1)
          if(this.img_state_show==0){
            this.imgedStatedata=false;
            this.text=1
          }else{
            this.imgedStatedata=true;
            this.text=2
          }
          
      },
      leave(){
          this.sss=2
          this.$emit('leave',2)
          if(this.img_state_show==0){
            this.imgedStatedata=true;
            this.text=2
          }else{
            this.imgedStatedata=true;
            this.text=2
          }
      },

      //点击取回商品
      recaption(){
          this.$emit('showTakeBack')
      },
      //点击出售商品
      sell(){
          this.$emit('sellGood')
      }
  }
}
</script>

<style scoped>
.box{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #fff;

    /* justify-content:center; */
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    border: none;
    /*border-image: linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -moz-linear-gradient( #d015a9, #100f10) 30 30;*/
    /* background-color: #201d1d; */
    z-index: 1;
    background: #151313;
}
.location1{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: 10;
    margin-top: 1px;
    border-radius: 4px;
}
.location2{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: 10;
    margin-top: -2px;
    background: #000;
    opacity: 0.8;
}
.fahuo{
    width: 100%;
    z-index: 10;
    position: absolute;
    bottom: 20px;
    text-align: center;
    color: #fff;
    font-size: 12px;
}
.img_hengxian1_box .chus{
    position: absolute;
    left:20px;
    bottom: 16px;
    z-index: 11;
    font-weight: bold;
}
.img_hengxian1_box .chushou{
    position: absolute;
    right: 20px;
    bottom: 16px;
    z-index: 11;
    font-weight: bold;
}
.location1 .img_hengxian1{
    position: absolute;
    left: 5px;
    bottom: 7px;
    z-index: 10;
    
}

.publci_img{
    /* width: 115px;
    height: 92px; */
    margin-left: 12px;
    position: relative;
    /* position: absolute;
    top: 19px;
    left: 1px; */
    width: 84px;
    /* height: 67px; */
    z-index: 2;
    border-radius: 50%;
}
.publci_img_person{
    border-radius: 50%;
}
.state_img{
    position: absolute;
    top: -3px;
    left: 0px;
    z-index: 100;
}
.box_small{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 18px;
}
.text_box{
    position: absolute;
    left: 0px;
    bottom: 2px;
    z-index: 2;
    font-style: italic;
    width: 100%;
    
}
.text{

    color: #93747e;
    /*margin-right: 12px;*/
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.textShow{
    color:#151313 !important;
}
.text1{
    /*width: 95px;*/
    /*margin-left: -4px;*/
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.text_price{
    text-align: center;
    /*margin-left: -7px;*/
}
.text_probability{
    /*margin-left: -12px;*/
}
.img4{
    position: absolute;
    bottom: -2px;
    right: 20px;
}
.ani .text{
    color: #fff;
}
.ani .price{
        transform: translate(-5px);
        -webkit-transform: translate(-5px);
        -moz-transform: translate(-5px);
        -ms-transform: translate(-5px);
        -o-transform: translate(-5px);
        color: #ff65d2;
}
.price{
    color: #fff;

}
.xian_bottom{
    width: 142px;
    height: 2px;
    position: absolute;
    bottom: -1px;
    z-index: 9;
}
.lijichurou{
    position: absolute;
    right: 40px;
    bottom: 8px;
}
.bg_red{
    border: 1px solid rgba(251,101,151,1);
    border-radius: 4px;
    box-shadow: 0px 0px 5px rgba(251,101,151,1); 
    background: -webkit-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -moz-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -ms-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -o-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
}
.ani .publci_img{
    animation: topfly 0.6s linear infinite alternate;
    -webkit-animation: topfly 0.6s linear infinite alternate;
    -moz-animation: topfly 0.6s linear infinite alternate;
    -o-animation: topfly 0.6s linear infinite alternate;
}

@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
/* -webkit-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
-moz-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
-o-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
} */
</style>

