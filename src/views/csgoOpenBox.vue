<template>
  <div class="csgo">
       <div class="bg">
            <img  :src="imgbg" alt="">
        </div>
        <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../assets/ROLL/8.png" alt="">
                 <vue-seamless-scroll
                :data="this.$store.state.newsList"  
                class="dicent_text"
                :class-option="optionLeft"
            >
               <ul class="item">
                  <li class="li" v-for="(item,index) in this.$store.state.newsList" :key="index">
                      <span class="title" v-text="item.content"></span>
                  </li>
              </ul>
            </vue-seamless-scroll>
          <div class="know" v-cursor @click="know">知道了</div>
          <!-- <img src="../assets/ROLL/9.png" class="know" @click="know" alt=""> -->
        </div>
         
        <!-- <div class="ROLLfuli124">
            CSGO开箱
        </div> -->
          <div class="box_left_box">
          <!-- <div class="box_left">
              <publicBoxLeft class="public_box"></publicBoxLeft>
          </div> -->
         
           <div class="box_right">
               <div class="hengxian_box" v-for="(item,index) in list" :key="index">
                    <div class="right_top_heng">
                        <img src="../assets/csgo/1.png" alt="">
                        <p>{{item.groupName}}</p>
                        <img class="hengxian" src="../assets/csgo/2.png" alt="">
                        <img class="triangle" src="../assets/csgo/3.png" alt="">
                    </div>
                    <div class="Double_box">
                        <div v-for="(item1,index) in item.goodsInfo"  :key='index' @click="boxClick(index)">
                            <indexPublicBox
                                    @enter="mouseent"
                                    @leave='mouseleave'
                                    class="box"
                                    :title='item1.name'
                                    :price="'$'+item1.price"
                                    :img="item1.image"
                                    :img1="item1.goodsImage"
                                    :img2="item1.bgImage"
                                    :Pheight='172'
                                    :Pwidth='145'
                                    :imgPwidth='134'
                                    :img1Pwidth='99'
                            >
                            </indexPublicBox>
                        </div>

                    </div>
               </div>
          </div>

          
      </div>
  </div>
</template>

<script>
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
import {getCsgoBox} from '../axios/Apilogin'
const indexPublicBox = ()=>import('../components/indexPublicBox')
export default {
  name: '',
  components: {
      publicBoxLeft,
      indexPublicBox
  },
  data() {
    return {
      imgbg:this.$store.state.neiimg[0].image,
      knowimg:true,
        list:[
          {}
        ],
        imgUrl:this.$store.state.imgUrl

    }
  },
     computed: {
      optionLeft () {
          return {
                  direction: 0,
                  limitMoveNum: 2,
                  singleHeight:19,
                  waitTime:3000
              }
      }
    },
  mounted(){
    getCsgoBox().then((res)=>{
      if(res!=undefined){
        this.list=res.data;
      }
        

    })
  },
  methods:{
      mouseent(e){
        //   console.log(e)
      },
      mouseleave(e){
        //   console.log(e)
      },
      boxClick(index){
          this.$router.push({path: '/public_box_home/openBox?id=' + this.list[0].goodsInfo[index].id});
      },
      //隐藏小喇叭
      know(){
        this.knowimg=false
      },
  }
}
</script>

<style scoped>
.csgo{
    width: 1280px;
    padding-bottom: 20px;
    margin:0 auto;
    position: absolute;
}
.bg{
  /* position: absolute;
  left: 0;
  top: 0; */
}
.ROLLfuli124{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
   background-image:-webkit-linear-gradient(left,#c400ab,#f756a6);
    background-image:-moz-linear-gradient(left,#c400ab,#f756a6);
    background-image:-ms-linear-gradient(left,#c400ab,#f756a6);
    background-image:-o-linear-gradient(left,#c400ab,#f756a6);
    background-image:linear-gradient(left,#c400ab,#f756a6);
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
  width: 992px;
     height: 1200px;
    box-sizing: border-box;
   overflow-y: scroll;
   overflow-x: hidden;
 
}
.box_right::-webkit-scrollbar { width: 0 !important }
.box_right { -ms-overflow-style: none; }
.box_right { overflow: -moz-scrollbars-none; }
.all_button{
  width: 60px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 80px;
  text-align: center;
  line-height: 23px;
  color: #fff;
   /* position: relative; */
}
.ling{
  position:absolute;
  top:0;
  left: 0;
  background: #ec1807;
  width: 60px;
  height: 24px;
  transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
}
.all{
  position: relative;
}
.Double_box{
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 20px;
  margin-top: 10px;
}
.hengxian_box{
    margin-bottom: 20px;
}
.doube_box{
  margin-right: 13px;
  margin-bottom: 13px;
}
.right_top_heng{
    display: flex;
    align-items: center;
    margin-left: 40px;
}
.right_top_heng p{
   font-size: 16px;
    background-image:-webkit-linear-gradient(left,#c400ab,#f756a6);
    background-image:-moz-linear-gradient(left,#c400ab,#f756a6);
    background-image:-ms-linear-gradient(left,#c400ab,#f756a6);
    background-image:-o-linear-gradient(left,#c400ab,#f756a6);
    background-image:linear-gradient(left,#c400ab,#f756a6);
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

</style>
