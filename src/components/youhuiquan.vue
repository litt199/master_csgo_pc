<template>
  <div :class="filter?'publicBoxQuan active':'publicBoxQuan'">
        <div class="top">
            <img src="../assets/myCenter/dian.png" alt="">
            <p>送<span>${{price}}</span></p>
            <p>仅限充值满${{limitValue}}时使用</p>
            <p>{{startDate}}-{{expireDate}}</p>
        </div>
         <div class="bottom" >
            <p><span>优惠券类型: </span>充值返利券</p>
            <p><span>规则说明: </span>{{detail}}</p>
            <p><span>限制类型: </span>充值返利券</p>
            <div v-cursor class="btn" @click="handleUse">立即使用</div>
         </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      filter:{
          default:false
      },
      price:{
        default:0,
      },
      limitValue:{
          default:0
      },
      startDate:{
          default:0
      },
      expireDate:{
          default:0
      },
      detail:{
          default:'充值返利'
      }
  },
  components: {},
  data() {
    return {

    }
  },
  methods:{
      handleUse(){
          this.$emit('FhandleUse')
      },
  }
}
</script>

<style scoped>
.publicBoxQuan{
    width: 211px;
    height: 340px;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: 20px;
    border-radius: 10px;
}
.publicBoxQuan.active{
   filter:grayscale(100%)
}
.publicBoxQuan .top{
    width: 100%;
    height: 130px;
    display: flex;
    padding-top: 8px;
    box-sizing: border-box;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    background-image:-webkit-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-moz-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-ms-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-o-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:linear-gradient(to bottom,#d9145f,#f14d70);
}
.publicBoxQuan .top p{
    width: 170px;
    color: #fff;
    font-size: 12px;
    text-align: center;
   
}
.publicBoxQuan .top p span{
    font-size: 36px;
}
.publicBoxQuan .top p:nth-child(4){
    width: 170px;
    color: #000;
}
.publicBoxQuan .bottom{
    padding: 0 17px;
    box-sizing: border-box;
       text-align: left;
    width: 211px;
    height: 208px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    border: 1px solid #d8105e;
 
    position: relative;
}
.publicBoxQuan .bottom p{
 
    color: #fff;
}
.publicBoxQuan .bottom p:nth-child(1){
    margin-top: 30px;
}
.publicBoxQuan .bottom p:nth-child(2){
    margin-top: 8px;
}
.publicBoxQuan .bottom p:nth-child(3){
    margin-top: 8px;
}
.publicBoxQuan .bottom p span{
    color: #ca1159;
}
.publicBoxQuan .bottom .btn{
    width: 170px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-image:-webkit-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-moz-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-ms-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:-o-linear-gradient(to bottom,#d9145f,#f14d70);
    background-image:linear-gradient(to bottom,#d9145f,#f14d70);
    border-radius: 4px;
    position: absolute;
    bottom: 20px;
    color: #fff;
}
</style>
