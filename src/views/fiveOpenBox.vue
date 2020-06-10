<template>
  <div class="csgo">
       <div class="bg">
            <img  :src="imgbg" alt="">
        </div>
        <div class="ROLLfuli">
            <!-- 个人中心 -->
        </div>
          <div class="box_left_box">
          <!-- <div class="box_left"> -->
              <!-- <publicBoxLeft class="public_box"></publicBoxLeft> -->
          <!-- </div> -->
           <div class="box_right">
               <!-- 打开箱子 -->
              <div class="fiveOpen">
                    <div class="one_box">
                        <img class="bgc" src="../assets/fiveOpenBox/3.png" alt="">
                        <div class="red_box">
                            <img  src="../assets/fiveOpenBox/4.png" alt="">
                            <p class="zhanxin">崭新出厂</p>
                        </div>
                      
                        <div class="dao_box">
                            <img src="../assets/fiveOpenBox/6.png" alt="">
                            <p>鼹鼠</p>
                            <p class="text_color">格洛克 18型  <span>$0.37</span></p>
                        </div>
                    </div>
                    <div class="one_two">
                        <img  class="bgc" src="../assets/fiveOpenBox/2.png" alt="">
                         <div class="red_box_two">
                            <img  src="../assets/fiveOpenBox/4.png" alt="">
                            <p class="zhanxin">崭新出厂</p>
                        </div>
                      
                        <div class="dao_box_two">
                            <img src="../assets/fiveOpenBox/7.png" alt="">
                            <p>鼹鼠</p>
                            <p class="text_color">格洛克 18型  <span>$0.37</span></p>
                        </div>
                    </div>

                    <div class="one_three">
                        <img  class="bgc" src="../assets/fiveOpenBox/1.png" alt="">
                        <div class="red_box_three">
                            <img  src="../assets/fiveOpenBox/5.png" alt="">
                            <p class="zhanxin1">久经沙场</p>
                        </div>
                      
                        <div class="dao_box_three">
                            <img src="../assets/fiveOpenBox/8.png" alt="">
                            <p>鼹鼠</p>
                            <p class="text_color">格洛克 18型  <span>$0.37</span></p>
                        </div>
                    </div>
                    <div class="one_four">
                        <img  class="bgc" src="../assets/fiveOpenBox/2.png" alt="">
                        <div class="red_box_two">
                            <img  src="../assets/fiveOpenBox/4.png" alt="">
                            <p class="zhanxin">崭新出厂</p>
                        </div>
                      
                        <div class="dao_box_two">
                            <img src="../assets/fiveOpenBox/7.png" alt="">
                            <p>鼹鼠</p>
                            <p class="text_color">格洛克 18型  <span>$0.37</span></p>
                        </div>
                    </div>

                    <div class="one_five">
                        <img  class="bgc" src="../assets/fiveOpenBox/3.png" alt="">
                          <div class="red_box">
                            <img  src="../assets/fiveOpenBox/4.png" alt="">
                            <p class="zhanxin">崭新出厂</p>
                        </div>
                      
                        <div class="dao_box">
                            <img src="../assets/fiveOpenBox/6.png" alt="">
                            <p>鼹鼠</p>
                            <p class="text_color">格洛克 18型  <span>$0.37</span></p>
                        </div>
                    </div>
                    


              </div>

            <!-- 背包 -->
               <div class="bag_title1">
                   <p>爽到你哭</p>
                   <p>盒子内包含 <span>{{this.numbers}}</span> 件物品</p>
                   <div class="bag_title_border">
                       <img src="../assets/fiveOpenBox/10.png">
                   </div>
                   <div class="bag_title_red">
                       <img src="../assets/fiveOpenBox/9.png">
                   </div>
                   <p class="bag_p">
                       <span @click="openBox(1)" v-cursor>再开 1 次 ${{this.price}}</span>
                       <span>放入背包</span>
                       <span @click="openBox(5)" v-cursor>再开 5 次 ${{this.price*5}}</span>
                   </p>
               </div>
               <div class="hengxian_box">
                    <div class="right_top_heng">
                        <img src="../assets/csgo/1.png" alt="">
                        <p>所有物品展示</p>
                        <img class="hengxian" src="../assets/myCenter/8.png" alt="">
                         <img class="triangle" src="../assets/faq/2.png" alt="">    
                    </div>
                   
                    <div class="Double_box" v-cursor>
                       <publicDobleColor :img_state_show=1
                        class="doblebox" v-for="(item,index) in list" :key="index"></publicDobleColor>
                    </div>
               </div>

          
          </div>

          
      </div>
  </div>
</template>

<script>
    import {GetBasisBox, GetOpenBox} from '../axios/PersonalApi'
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft");  //异步加载组件
const publicDobleColor = ()=>import ('../components/publicDobleColor'); 
const linxingBox =()=>import('../components/lingxingBox')

export default {
  name: '',
  components: {
    publicBoxLeft,
    publicDobleColor,
    linxingBox
  },
  data() {
    return {
      imgbg:this.$store.state.neiimg[1].image,
        header:require('../assets/myCenter/3.png'),
        price:0,
        numbers:0,
        list:[
          {
            
          }
        ],
        box:[
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
           {

          },
          {

          },

        ],

    }
  },
    mounted() {
        const params = "032bc9ce719c4416a825b53fc42e900e";//this.$route.query.id;
        GetBasisBox(params).then((res)=>{
          if(res!=undefined){
            this.box[0] = res.data[0].box;
            this.list = res.data[0].goodsList;
            this.price = this.box[0].price;
            this.numbers = this.list.length;
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
        openBox(openNum){
            const params = {
                "id":"032bc9ce719c4416a825b53fc42e900e",//this.$route.query.id,
                "openNum":openNum
            }
            GetOpenBox(params).then((res)=>{
                // if(res.data.status == 400){
                //     console.log("资金不足");
                // }else {
                  if(res!=undefined){
                    if(openNum == 1){
                        this.openStatusTimes=true;
                    }else {
                        this.openStatusTimes=false;
                    }
                    this.openStatus = !this.openStatus;
                    this.box = res.data;
                    // }
                  }
            })

        }
  }
}
</script>

<style scoped>
    .csgo{
        width: 1280px;
        padding-bottom: 20px;
        /* background-color: #0d0c0e; */
        margin:0 auto;
        position: relative;
    }
    .bg{
      position: absolute;
      left: 0;
      top: 0;
    }
    .ROLLfuli{
      position: relative;
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
      top: 191px;
    }
    .box_left{
      width: 288px;

    }
    .public_box{
      margin-bottom: 23px;
      }
    .box_right{
      width: 992px;
        position: relative;
    }
    .all_button{
      width: 60px;
      height: 24px;
      position: relative;
      text-align: center;
      line-height: 23px;
      color: #fff;
      font-style: italic;
      margin-right: 10px;
       /* position: relative; */
    }
    .ling{
      position:absolute;
      top:0;
      left: 0;
      background: #631936;
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
        /* margin-left: -10px; */
      padding-top: 20px;

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
        margin-top: 18px;
        position: relative;
        margin-left: 23px;
        font-style: italic;
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

    .doblebox{
        margin-right: 14px;
        margin-bottom: 17px;
    }
    /* 5连开箱css */
    .fiveOpen{
      display: flex;
      align-items: center;
      /*margin-top: -90px;*/
    }
    .one_box{
      width: 161px;
      height: 146px;
      position: relative;
      margin-left: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #e61364;
    }
    .one_box .bgc{
      position: absolute;
      top: 0;
      left: 0;
    }
    .red_box{
      position: absolute;
      left: 27px;
      top:-3px
    }
    .zhanxin{
      position: absolute;
      color: #fff;
      top: 0px;
      left: 13px;
    }
    .zhanxin1{
       position: absolute;
      color: #fff;
      top:4px;
      left: 20px;

    }
    .dao_box{
      margin-top: 23px;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
    }
    .dao_box img{
      margin-left: 10px;
    }
    .dao_box p{
      margin-right: 20px;
    }
    .text_color{
      color: #fff;
    }
    .dao_box span{
      color: #e61364;
    }
    .one_two{
      width: 211px;
      height: 186px;
      position: relative;
      margin-left: -30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #e61364;
    }
    .red_box_two{
        position: absolute;
      left: 37px;
      top:-3px
    }
    .one_two .bgc{
      position: absolute;
      top: 0;
      left: 0;
    }
    .dao_box_two{
      margin-top: 40px;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
    }

    .dao_box_two img{
      margin-left: 10px;
      margin-bottom: 10px;
    }
    .dao_box_two p{
      margin-right: 25px;
    }
    .dao_box_two span{
      color: #e61364;
    }


    .one_three{
      width: 282px;
      height: 239px;
      position: relative;
       margin-left: -40px;
        display: flex;
      align-items: center;
      flex-direction: column;
      color: #e61364;
    }
    .one_three .bgc{
      position: absolute;
      top: 0;
      left: 0;
    }
    .red_box_three{
       position: absolute;
      left: 46px;
      top:-5px
    }

    .dao_box_three{
      margin-top: 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      font-size: 18px;
    }

    .dao_box_three img{
      margin-left: 10px;
      margin-bottom: 10px;
    }
    .dao_box_three p{
      margin-right: 32px;
    }
    .dao_box_three span{
      color: #e61364;
    }



    .one_four{
       width: 211px;
      height: 186px;
      position: relative;
      margin-left: -40px;
       display: flex;
      align-items: center;
      flex-direction: column;
      color: #e61364;
    }
    .one_four .bgc{
      position: absolute;
      top: 0;
      left: 0;
    }
    .one_five{
        width: 161px;
      height: 146px;
      position: relative;
      margin-left: -30px;
       display: flex;
      align-items: center;
      flex-direction: column;
      color: #e61364;
    }
    .one_five .bgc{
      position: absolute;
      top: 0;
      left: 0;
    }
    /*过度提示*/
    .bag_title1{
        position: relative;
        margin-top: 30px;
     
        height: 120px;
        width: 880px;
    }
    .bag_title p{
        text-align: center;
        font-style:italic;
        font-family: "Microsoft YaHei";
    }
    .bag_title p:nth-child(1){
        color: #e81264;
        font-weight: bold;
        font-size: 18px;
        font-style:italic
    }
    .bag_title p:nth-child(2){
        font-size: 15px;
        color:#656565;
    }
    .bag_title p:nth-child(2) span{
        color: #e81264;
    }
    .bag_title .bag_p{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 39px;
        margin-top: 12px;
        font-size: 18px;
        color: #fff;
    }
    .bag_title .bag_p span{
        width: 190px;
        height: 39px;
        line-height: 39px;
        font-size: 16px;
        text-align: center;
        z-index: 1;
    }
    .bag_title .bag_p span:nth-child(2){
        font-weight: bold;
    }
    .bag_title .bag_title_border{
        width: 582px;
        position: absolute;
        top: 66px;
        left: 149px;
    }
    .bag_title .bag_title_border img{
        width: 100%;
    }
    .bag_title .bag_title_red{
        width: 194px;
        position: absolute;
        top: 66px;
        left: 343px;
        height: 39px;
    }
    .bag_title .bag_title_red img{
        width: 100%;
        height: 39px;
    }




</style>
