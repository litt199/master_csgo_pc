<template>
  <div class="dailyFree">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>
      <!-- <div class="ROLLfuli123">
          常见问题
      </div> -->
      <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../assets/ROLL/8.png" alt="">
        <marquee  class="dicent_text" width=800 behavior=scroll direction=left  align=middle>{{this.$store.state.mes}}</marquee>
          <div class="know" v-cursor @click="know">知道了</div>
          <!-- <img src="../assets/ROLL/9.png" class="know" @click="know" alt=""> -->
        </div>
      <div class="box_left_box">
          <!-- <div class="box_left">
              <publicBoxLeft class="public_box"></publicBoxLeft>
          </div> -->

            <div class="box_right">
                <div class="hengxian_box">
                    <div class="right_top_heng">
                        <img src="../assets/faq/3.png" alt="">
                        <p>关于我们</p>
                        <img class="hengxian" src="../assets/faq/6.png" alt="">
                        <img class="triangle" src="../assets/faq/2.png" alt="">
                    </div>
                   
               </div>
               <div  class="title123">
                   <p>欢迎来到OBCASE！</p>
                   <p>OBCASE是一家游戏饰品开箱品台，平台隶属于蜀冈—瘦西湖风景名胜区博电电子商务中心，主要从事STEAM平台的虚拟增值业务。</p>
                   <p><span>OBCASE是工作室运营项目之一。OBCASE致力于为用户打造纯粹、便捷的饰品娱乐。OBCASE有权处理任何违规的操作，例如插件、爬虫、恶意注册等相关行为，网站将采取封禁操作。</span></p>                   
                   <p class="mingc">公司名称：<span>蜀冈—瘦西湖风景名胜区博电电子商务中心</span></p>
                   <p>公司地址：<span>扬州市蜀冈—瘦西湖风景名胜区老虎山路5-7号19</span></p>
                   <p>公司邮箱：<span>obcase@163.com</span></p>
               </div>
            </div>
      </div>    
  </div>
</template>

<script>
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const doubleBox = () => import("../components/doubleBox")
const exchangefirbox =()=>import('../components/exchangefirbox')
// import doubleBox from '../components/doubleBox'
export default {
  name: '',
  components: {
    publicBoxLeft,
    doubleBox,
    exchangefirbox
  },
  props:{
     
  },
  data() {
    return {
      imgbg:this.$store.state.neiimg[1].image,
        knowimg:true,
        img:'',
        fir:[
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },

          
        ],     
    }
  },
  mounted(){
   

  },
  beforeCreate(){
    let count = 0;
    var imgs =  require('../assets/ROLL/1.png')
    
    let image = new Image();
    image.src = imgs;
    this.img = image;
  },
  methods:{
      know(){
          this.knowimg=false
      }
  }
}
</script>

<style scoped>
.dailyFree{
    width: 1280px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    margin:0 auto;
    position: absolute;
}
.box_right{
  width: 944px;
  /* padding-left: 40px; */
  box-sizing: border-box;
  overflow-y: scroll;
  height: 1100px;
}
.box_right::-webkit-scrollbar { width: 0 !important }
.box_right { -ms-overflow-style: none; }
.box_right { overflow: -moz-scrollbars-none; }
.bg{
  /* position: absolute;
  left: 0;
  top: 0; */
}
.ROLLfuli123{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
   background-image:-webkit-linear-gradient(left,#ba023f,#ff537b);
    background-image:-moz-linear-gradient(left,#ba023f,#ff537b);
    background-image:-ms-linear-gradient(left,#ba023f,#ff537b);
    background-image:-o-linear-gradient(left,#ba023f,#ff537b);
    background-image:linear-gradient(left,#ba023f,#ff537b);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
    font-weight: 900;
    font-style: italic;
    padding-right: 20px;
}
.box_left_box{
  width: 1000px;
  position: absolute;
  display: flex;
  right: 0px;
  top: 223px;
}
.box_left{
  width: 288px;  

}
.public_box{
  margin-bottom: 23px;
  }
.box_right{
  width: 944px;
  /* padding-left: 40px; */
  box-sizing: border-box;
  overflow-y: scroll;
  height: 1100px;
}
.box_right::-webkit-scrollbar { width: 0 !important }
.box_right { -ms-overflow-style: none; }
.box_right { overflow: -moz-scrollbars-none; }
/* 右边的开始 */
.right_top{
    display: flex;
}

.hengxian_box{
    margin-bottom: 34px;
}
.doube_box{
  margin-right: 13px;
  margin-bottom: 13px;
}
.right_top_heng{
    display: flex;
    align-items: center;
    /* margin-left: 40px; */
}
.right_top_heng p{
   font-size: 16px;
    background-image:-webkit-linear-gradient(left,#ba023f,#ff537b);
    background-image:-moz-linear-gradient(left,#ba023f,#ff537b);
    background-image:-ms-linear-gradient(left,#ba023f,#ff537b);
    background-image:-o-linear-gradient(left,#ba023f,#ff537b);
    background-image:linear-gradient(left,#ba023f,#ff537b);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  margin-left: 7px;
}
.hengxian{
    margin-left: 8px;
}
.box{
    margin-right: 13px;
    margin-bottom: 10px;
}

.title{
    margin-top: 50px;
}
.title_first{
    width: 944px;
    height: 46px;
    position: relative;
    display: flex;
    align-items: center;
    background:linear-gradient(to top,#0c0808,#181717);
    background:-webkit-linear-gradient(to top,#0c0808,#181717);
    background:-moz-linear-gradient(to top,#0c0808,#181717);
    background:-ms-linear-gradient(to top,#0c0808,#181717);
    background:-o-linear-gradient(to top,#0c0808,#181717);
    box-sizing: border-box;
    border: 1px solid #9f1950;
    border-image: -webkit-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#9f1950,rgba(0,0,0,0)) 15 15;
}
.title_first img{
    position: absolute;
    top: 0;
    left: 0;
}
.number{
    position: relative;
    color: #fff;
    font-size: 24px;
    margin-left: 25px;
    margin-top: -5px;
    font-style: italic;
    font-weight: 900;
}
.question{
    position: relative;
    font-size: 14px;
    color: #bc1c53;
    font-style: italic;
    margin-left: 20px;
}
.title_question{
    margin-top: 37px;
    padding-left: 20px;
    font-size: 12px;
    color: #fff;
    font-weight: normal;
    
}
.title_question p{
    margin-left: 13px;
}
.title_question_box{
    display: flex;
}
.answer{
    margin-top: 13px;
    color: #c4b1b9;
}
.title123{
    font-size: 14px;
    color: #fff;
}
.title123 span{
  color: #dfdfdf;
  font-size: 13px;
  font-weight: 100;
}
.mingc{
  margin-top: 13px;
}
.title123 p:nth-child(2){
  margin-top: 16px;
}
</style>

