<template>
  <div class="treasure_box">
       
        <div class="right">
            <div class="right_box">
              <img class="shu" src="../assets/treasureBox/2.png" alt="">
              <div class="text">
                热门宝箱
              </div>
              <img src="../assets/treasureBox/1.png" alt="">
            </div>
            <div class="xiangzi_box" >
                <div  v-for="(item,index) in list" :key="index" @click="boxClick(index)">
                    <indexPublicBox
                        :Pwidth='188'
                        :Pheight='219'
                        class="publicbox"
                        :title='item.name'
                        :price="'$'+item.price"
                        :img="item.image"
                        :id="item.id"
                        :img2='item.hoverColor'
                        :img1="item.goodsImage"
                    ></indexPublicBox>
                </div>

            </div>
            <div class="more_box">
                <img class="button" v-cursor  @click="moreBox" src="../assets/treasureBox/3.png" alt="">
                <div class="imformation">
                    <img class="bgc" src="../assets/treasureBox/4.png" alt="">
                    <div class="waimiandebaox">

                   
                    <div class="message_box">
                      <img src="../assets/treasureBox/8.png" alt="">
                      <div class="imformation_data">
                          <P class="register">已开箱</P>
                          <P class="number">{{number.opened}}</P>
                      </div>
                    </div>

                    <div class="message_box">
                      <img src="../assets/treasureBox/5.png" alt="">
                      <div class="imformation_data">
                          <P class="register">注册用户</P>
                          <P class="number">{{number.registered}}</P>
                      </div>
                    </div>

                    <div class="message_box">
                      <img src="../assets/treasureBox/6.png" alt="">
                      <div class="imformation_data">
                          <P class="register">在线用户</P>
                          <P class="number">{{number.onLine}}</P>
                      </div>
                    </div>

                    <div class="message_box">
                      <img src="../assets/treasureBox/7.png" alt="">
                      <div class="imformation_data">
                          <P class="register">已兑换
                            
                          </P>
                          <P class="number">{{number.exchanged}}</P>
                      </div>
                    </div>
                 </div>

                </div>
            </div>
        </div>
      
  </div>
</template>

<script>
import {indexGetBox,getNumber} from '../axios/Apilogin'
import indexPublicBox from '../components/indexPublicBox'

export default {
  name: '',
  components: {
      indexPublicBox,
  },
  data() {
    return {
      imgUrl:this.$store.state.imgUrl,
      list:[],
      number:"",
 
    }
  },
  mounted(){
      var that=this;
       indexGetBox().then((res)=>{   //轮播图

          if(res!=undefined){
             this.list=res.data
          }
       }),
      that.getN(); 
       that.NumberTime=setInterval(function(){
         that.getN();
       },15000)
       
  },
  destroyed(){
    this.NumberTime=null;
  },
  methods:{
      getN(){
          getNumber().then((res)=>{   //首页数字
          if(res!=undefined){
              this.number=res.data;
          }
        })
      },

      moreBox(){
         this.$router.push({
            path:"/public_box_home/csgo"
        })
      },
      boxClick(e){
          this.$router.push({path: '/public_box_home/openBox?id=' + this.list[e].id});
      }
  }
}
</script>

<style scoped>
    .treasure_box{
        /* margin-left: 69px; */
        margin-top: 35px;
        display: flex;
    }
    .treasure_box .img{
        width: 185px;
        height: 222px;
    }
    .right{
      /* margin-left:50px; */
      width: 1280px;
      /* margin: 0 auto; */
    }
    .right_box{
      display: flex;
    }
    .xiangzi_box{
      display: flex;
      margin-top: 25px;
      justify-content: center;
    }
    .shu{
      width: 12px;
      height: 18px;
    }
    .publicbox{
      margin-right: 29px;
    }
    .text{
        background-image:-webkit-linear-gradient(left,#ee276a,#fc6987);
        background-image:-moz-linear-gradient(left,#ee276a,#fc6987);
        background-image:-ms-linear-gradient(left,#ee276a,#fc6987);
        background-image:-o-linear-gradient(left,#ee276a,#fc6987);
        background-image:linear-gradient(left,#ee276a,#fc6987);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        text-fill-color:transparent;
        font-size: 16px;
        font-weight: 700;
        margin-left: 6px;
        font-style: italic;
        line-height: 18px;
        padding-right: 10px;
    }
    .more_box{
      width: 100%;
      text-align: center;
    }
    .more_box .button{
      /* margin-right: 20px; */
      margin-top: 15px;
      margin-bottom: 20px;
      
    }
    .imformation{
      width: 1147px;
      height: 84px;
      position: relative;
      margin-top: 10px;
      margin: 0 auto;
      display: flex;
      
    }
      .waimiandebaox{
      width: 720px;
      height: 84px;
      position: relative;
      margin-top: 10px;
      margin: 0 auto;
      display: flex;
    }
    .imformation .bgc{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 1147px;
      height: 85px;
    }
    .message_box{
      position: relative;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      /* font-style: italic; */
    }
  
    .imformation_data{
      font-size: 16px;
      color: #f15a96;
      
    }
    .register{
      font-size: 14px;
      color: #8b4e65;
      padding-right: 10px;
      
    }
    .number{
        /* background-image:-webkit-linear-gradient(left,#ec1807,#ff621d);
        background-image:-moz-linear-gradient(left,#ec1807,#ff621d);
        background-image:-ms-linear-gradient(left,#ec1807,#ff621d);
        background-image:-o-linear-gradient(left,#ec1807,#ff621d);
        background-image:linear-gradient(left,#ec1807,#ff621d);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        text-fill-color:transparent;
        text-shadow: 0 0 10px #ff621d;    
        padding-right: 10px;
        font-weight: 900; */
        color: #ff5f9d;
        font-size: 20px;
    }
</style>

