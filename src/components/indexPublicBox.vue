<template>
  <div class="publicBox123" v-cursor>
      <div class="box" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <img class="circle" src="../assets/csgo/5.png" alt="">
          <div class="box_small"   v-top_down="sss">
                <div class="img_box">
                    <img :class="things_imgtrue?'things_img active':'things_img '" :style="{width:img1Pwidth+'px',top:imgPtop+'px'}"   v-lazy="img1" alt="">
                    <img class="guang_img" :style="{width:img2Pwidth+'px'}"  v-lazy="img2" alt="">
                    <!-- 箱子图片 -->
                    <img class="publci_img"   v-lazy="img" alt="">   
               </div> 
                <div class="text_box">
                    <p class="text">{{title}}</p>
                    <div class="price" v-cursor>
                        <p class="kaiqi" v-show="sss==1">开启</p>
                        <p class="heise_text"> {{sss==1?price:price}}</p>
                       
                    </div>
                </div>
                
          </div>
           <!-- <div class="location"  v-show="sss==1"></div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'publcibox',
  props:{
      things_imgtrue:{
          type:Boolean,
          default:false
      },
      imgPtop:{
        type:Number,
        default:21,
      },
      img1Pwidth:{
        type:Number,
        default:136,
      },
      img2Pwidth:{
        type:Number,
        default:156,
      },
      imgPwidth:{
        type:Number,
        default:183,
      },
      Pheight:{
          type:Number,
          default:156,
      },
      Pwidth:{
          type:Number,
          default:132,
      },
      title:{
          type:String,
          default:'基佬紫'
      },
      price:{
          type:String,
          default:'15'
      },
      img:{
          type:String,
          default:require('../assets/treasureBox/public_box/1.png'),
      },
      id:{
          type:String,
          default:"032bc9ce719c4416a825b53fc42e900e",
      },
      img1:{
          type:String,
          default:require('../assets/treasureBox/public_box/1.png'),
      },
      img2:{
          type:String,
          default:require('../assets/treasureBox/public_box/1.png'),
      }
  },
  components: {},
  data() {
    return {
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
  }
}
</script>

<style scoped>
.img_box{
    width: 183px;
    height: 200px;
    position: relative;

}
.box{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #fff;
    justify-content:center;
    /* background-color: #000; */
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: -1;
    /* border: 1px solid #fff; */
    transform: skewX(-15deg);
    background: #191717;
}
.publci_img{
    width: 183px;
    /* height: 92px; */
    /* margin-left: 12px; */
   
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
}
.things_img{
    width: 136px;
    /* height: 72px; */
    margin-left: 12px;
    position: absolute;
    top: 4px;
    left: 7px;
    z-index: 4;
}
.guang_img{
    width: 156px;
    /* height: 92px; */
    margin-left: 12px;
    position: absolute;
    top: 19px;
    left: 14px;
    z-index: 3;
}
.box_small{
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 2;
}
.text_box{
    /* position: absolute;
    left: 27px;
    bottom: 7px;
    z-index: 2; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /*font-style: italic;*/
}
.text{
    color: #666666;
    /* margin-right: 12px; */
    font-style: italic;
}
.ani .text{
    color: #fff;
}

.heise_text{
     width: 88px;
    height: 20px;
    border-radius: 10px;
    background-color: #000;
    position: absolute;
    top: 0px;
    right: 0px;
    color: #fff;
    line-height: 18px;
    text-align: center;
    transition: width ease 0.3s;
}
.ani .heise_text{
    width: 70px;
    height: 20px;
    border-radius: 10px;
    background-color: #000;
    position: absolute;
    top: 0px;
    right: 1px;
    color: #fff;
    line-height: 18px;
    text-align: center;
    transition: width ease 0.3s;
}
.ani .price{
    width: 122px;
    height: 22px;
    background-color: #e60e64;
    color: #100f0f;
    line-height: 20px;
    text-align: left;
    padding-left: 15px;
    box-sizing: border-box;
    transition: width ease 0.3s;
}
.price{
    color: #fff;
    width: 88px;
    height: 20px;
    text-align: center;
    border:1px solid #e60e64;
    border-radius: 10px;
    margin-top: 2px;
    transition: width ease 0.3s;
    position: relative;
    background-color: #e60e64;
}
.kaiqi{
    font-family: SourceHanSansCN-Regular;
    font-size: 12px;
    color: #FFFFFF;
}
.bg_red{
    background: -webkit-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
}
/* .ani .publci_img{
    animation: topfly 0.7s linear infinite alternate;
} */
.ani .things_img{
    animation: topflydww 0.7s linear infinite alternate;
}
.ani .things_img.active{
    animation: topflydww2 0.7s linear infinite alternate;
}
.ani .guang_img{
    animation: xuan 2s linear infinite ;
}
@keyframes topfly{
    from{
        top: 100px;
    }
    to{
        top: 90px;
    }
}
@keyframes topflydww2{
    from{
        top: 32px;
    }
    to{
        top: 28px;
    }
}
@keyframes topflydww{
    from{
        top: 20px;
    }
    to{
        top:15px;
    }
}

@keyframes xuan{
    0%{
        top:25px;
         opacity: 0;
    }
    10%{
        top: 19px;
        opacity: 0.8;
    }
    100%{
        top: -50px;
        opacity: 0;
    }
}
.circle{
    width: 173px;
    position: absolute;
    top: 64px;
    left: 0;
}

</style>

