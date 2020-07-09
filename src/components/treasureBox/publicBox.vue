<template>
  <div class="publicBox" v-cursor>
      <div class="box" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <div class="box_small"   v-top_down="sss">
                <img class="things_img"   v-lazy="img1" alt="">
                <img class="guang_img"  v-lazy="img2" alt="">
                <img class="publci_img"  v-lazy="img" alt="">
                <div class="text_box">
                    <p class="text">{{title}}</p>
                    <p class="price" v-cursor>{{sss==1?seison:price}}</p>
                </div>
                
          </div>
           <div class="location"  v-bg_red='sss'></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'publcibox',
  props:{
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
          default:require('../../assets/treasureBox/public_box/1.png'),
      },
      id:{
          type:String,
          default:"032bc9ce719c4416a825b53fc42e900e",
      },
      img1:{
          type:String,
          default:require('../../assets/treasureBox/public_box/1.png'),
      },
      img2:{
          type:String,
          default:require('../../assets/treasureBox/public_box/1.png'),
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
.box{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #fff;
    justify-content:center;
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    border: 1px solid #fff;
    transform: skewX(-15deg);
    border-image: linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -ms-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -moz-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -o-linear-gradient( #d015a9, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
}
.publci_img{
    width: 128px;
    /* height: 92px; */
    margin-left: 12px;
    position: absolute;
    top: 19px;
    left: 7px;
    z-index: 2;
}
.things_img{
    width: 90px;
    height: 72px;
    margin-left: 12px;
    position: absolute;
    top: 4px;
    left: 12px;
    z-index: 4;
}
.guang_img{
    width: 115px;
    height: 92px;
    margin-left: 12px;
    position: absolute;
    top: 19px;
    left: 1px;
    z-index: 3;
}
.box_small{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.text_box{
    position: absolute;
    left: 27px;
    bottom: 7px;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.text{
    color: #666666;
    /* margin-right: 12px; */
}
.ani .text{
    color: #fff;
}
.ani .price{
        transform: translate(-5px);
        color: #ff65d2;
}
.price{
    color: #fff;

}
.bg_red{
    background: -webkit-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
}
.ani .publci_img{
    animation: topfly 0.6s linear infinite alternate;
}
.ani .things_img{
    animation: topfly 0.6s linear infinite alternate;
}
.ani .guang_img{
    animation: topfly 0.6s linear infinite alternate;
}
@keyframes topfly{
    from{
        top: 4px;
    }
    to{
        top: 15px;
    }
}
</style>

