<template>
  <div class="publicDobleColor">
      <div class="box" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <img class="state_img"  v-lazy="img_state_show===0?kequ:nokequ"  v-show="imgedState" alt="">
          <div class="box_small"   v-top_down="sss">
                <img v-lazy="img1" alt="" :class="[userState==true?'publci_img publci_img_person':'publci_img']">
                <div class="text_box">
                    <p class="text" v-show="!userState">{{nametype}}</p>
                    <p  class="text text1">{{name}}</p>
                     <p class="text_price" v-show="!userState&&shoujiastate">售价：${{price}}</p>
                     <p class="text_probability" v-show="probabiState==1?true:false">概率：{{probability}}</p>
                    <!-- <p class="price">{{sss==1?seison:price}}</p> -->
                    <!--<img class="img4" src="../assets/publicColor/4.png" alt="">-->
                </div>
                
          </div>
           <div class="location" ></div>
           <div class="location1" v-show="img_state_show==0"  v-bg_red='sss'>
               <!-- 状态为0 可以操纵 -->
               <div class="img_hengxian1_box" v-show="sss==1" v-cursor >
                   <div v-show="img_state_show==0">
                        <p class="chus" v-show="img_state_show==0" @click="recaption">立即取回</p>
                        <img class="img_hengxian1" v-lazy="img_state_show==0?churou:churou1" alt="">
                        <p class="chushou" v-show="img_state_show==0" @click="sell">立即出售</p>
                    </div> 
               </div>

                <!--  -->
                <div class="img_hengxian1_box" v-show="sss==0" v-cursor>
                    <p class="lijichurou">立即出售</p>
                     <img class="img_hengxian1" v-lazy="img_state==1?churou:churou1" alt="">
                     
               </div>  
           </div>
           <div class="xian_bottom" :style="{'background':borde_color}"></div>
      </div>
        <div class="publicBoxJiang" v-show="onlyJiang">
            <div class="header">
                <div class="header_box" v-show="!userState">
                    <img v-lazy="headerimg==''?avatar:headerimg" alt="">  
                </div>
                <div class="header_box_user" v-show="userState">
                    <img v-lazy="headerimg==''?avatar:headerimg" alt="">  
                </div>

                <p>{{nickName}}</p>
            </div>
            <div class="location" ></div>
        </div>
     
  </div>
</template>

<script>

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
          default:161,
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
          type:Number,
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
      type1:{
          default:"M4A4(STrak)"
      },
      name:{
          default:'二西莫夫'
      },
      firImg:{
          default:require('../assets/publicBoxJiang/3.png')
      },
      nickName:{
          default:'etdsadas'
      },
      headerimg:{
          default:""
      },
      userState:{
          default:false,
      },
      onlyJiang:{
          default:false
      }
  },
  components: {},
  data() {
    return {
        avatar:require('../assets/avatar/logo_icon.png'),//默认头像
        kequ:require('../assets/publicColor/2.png'),
        nokequ:require('../assets/publicColor/3.png'),
        churou:require('../assets/publicColor/6.png'),
        churou1:require('../assets/publicColor/7.png'), 
        sss:2,
        seison:'立即购买',
    }
  },
  mounted(){
        //  console.log(this.Pheight)
  },
  methods:{
      enter(){
          this.sss=1;
          this.$emit('enter',1)
      },
      leave(){
          this.sss=2
          this.$emit('leave',2)
      },

      //点击取回商品
      recaption(){
           this.$emit('getGood')
    
      },
      //点击出售商品
      sell(){
          this.img_state = 3;
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
    /*transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);*/
    z-index: 10;
}
.img_hengxian1_box .chus{
    position: absolute;
    left:13px;
    bottom: 8px;
    z-index: 11;
}
.img_hengxian1_box .chushou{
    position: absolute;
    right: 13px;
    bottom: 8px;
    z-index: 11;
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
    left: 13px;
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
    width: 100%;
    
}
.text_price{
    text-align: center;
    height: 19px;
}
.text{

    color: #93747e;
    margin-right: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-align: center;
}
.text1{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
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
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0px;
    bottom: -1px;
    z-index: 9;
}
.lijichurou{
    position: absolute;
    right: 40px;
    bottom: 8px;
}
.bg_red{
     background: -webkit-linear-gradient(bottom,rgba(251,101,151,1),rgba(162,66,152,0.3));
    background: -moz-linear-gradient(bottom,rgba(251,101,151,1),rgba(162,66,152,0.3));
    background: -ms-linear-gradient(bottom,rgba(251,101,151,1),rgba(162,66,152,0.3));
    background: -o-linear-gradient(bottom,rgba(251,101,151,1),rgba(162,66,152,0.3));
    background: linear-gradient(bottom,rgba(251,101,151,1),rgba(162,66,152,0.3));
     
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


.publicBoxJiang{
    width: 142px;
    height: 130px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #100f0f
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: -11;
}
.publicBoxJiang .bg{
    position: absolute;
    top: 0;
    left: 0;
}
.header{
    position: relative;
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header p{
    margin-top: 5px;
    color: #fff;
}
.header_box{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    border: 2px solid #fff;
}
.header_box img{
    width:100%;
}
.header_box_user{
    width: 45px;
    height: 45px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0px 0px 20px #fd611d;
    border-radius: 50%;
    border: 2px solid #fd611d;

}
.header_box_user img{
    width:100%;
}
.firearms{
    position: relative;
    margin: 3px 0;
}
.firearms img{
    width: 83px;
    height: 62px;
}
</style>

