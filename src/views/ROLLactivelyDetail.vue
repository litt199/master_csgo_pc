<template>
  <div class="welfare">
 
        <div class="bg">
          <!-- <img  src="../assets/ROLL/1.png" alt=""> -->
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
      <!-- <div class="ROLLfuli">
          ROLL福利
      </div> -->
        <div class="box_left_box">
            <!-- <div class="box_left"> -->
                <!-- <publicBoxLeft class="public_box"></publicBoxLeft> -->
            <!-- </div> -->
            <div class="box_right">
                <div class="box_right_top">
                  <div class="box_right_img">
                      <img :src="message.image" alt="" class="rollTop">
                  </div>
                  <div class="box_right_top_box">
                        <!--<img class="bgc" src="../assets/ROLL/detail/1.png" alt="">-->
                        <div class="top_box_center">
                            <div class="Color_text">{{message.title}}{{message.desc}}</div>
                            <p>开奖时间: {{message.endTime}}</p>
                        </div>
                        <div class="timeGone">{{day}}<span>天</span>{{Hour}}<span>时</span>{{min}}<span>分</span>{{miao}}<span>秒</span></div>
                        <div class="top_box_right">
                            <div class="join">
                              <div class="joinBg" v-if="joinBg">
                              
                              </div>
                              <div class="joinBgGone" v-if="!joinBg">
                              
                              </div>
                              <div class="but" v-cursor @click="AtonceClick(message.id)" v-show='joinState'>{{join}}</div>
                              <div class="but" v-cursor v-show="!joinState">{{join}}</div>
                            </div>
                            <p>您可以返回查看更多精彩活动</p>
                        </div>

                    </div>
                    <div class="box_right_heng"></div>
                </div>
                  <!-- 获奖用户 -->
                  <div class="right_center" v-show="!urserAndPrize">
                        <div class="right_top_heng">
                          <img src="../assets/ROLL/detail/4.png" alt="">
                          <p class="right_bottom_title">获奖用户</p>
                          <img class="hengxian" src="../assets/ROLL/detail/3.png" alt="">
                          <div class="all_button">
                              <div class="ling"></div>
                              <div class="all">全部</div>
                          </div>
                      
                         </div>
                        <div class="Double_box">
                              <publicDobleColor 
                              v-for="(item,index) in rollGoods" 
                              class="doblebox" 
                              :key="index"
                              :imgedState=false
                              :img_state_show=1
                              :img1='item.image'
                              :nametype="item.type"
                              :name="item.name"
                              :shoujiastate=false
                              :borde_color="item.kev"
                              :type1='item.type'
                              :firImg="item.image"
                              :nickName="item.nickName"
                              :onlyJiang=true
                              :headerimg='item.avatar==null?"":item.avatar'
                              ></publicDobleColor>
                          </div>
                  </div>
                  <!-- 奖品展示 -->
                  <div class="right_bottom"  v-show="urserAndPrize">
                    <div class="right_top_heng">
                        <img src="../assets/ROLL/detail/4.png" alt="">
                        <p>奖品展示</p>
                        <img class="hengxian" src="../assets/ROLL/detail/3.png" alt="">
                        <div class="all_button">
                            <div class="ling"></div>
                            <div class="all">全部</div>
                        </div>
                    
                    </div>
                    <div class="Double_box Double_box_Jiang">
                          <publicDobleColor 
                          v-for="(item,index) in message.rollGoods" 
                          class="doblebox" 
                          :key="index"
                          :imgedState=false
                          :img_state_show=1
                          :img1='item.image'
                          :nametype="item.type"
                          :name="item.name"
                          :shoujiastate=false
                          :onlyJiang=false
                          ></publicDobleColor>
                    </div>
                  </div>
                  <!-- 参与用户 -->
                  <div class="right_bottom" v-show="urserAndPrize" >
                        <div class="right_top_heng">
                          <img src="../assets/ROLL/detail/4.png" alt="">
                          <p>参与用户</p>
                          <img class="hengxian" src="../assets/ROLL/detail/3.png" alt="">
                          <div class="all_button">
                              <div class="ling"></div>
                              <div class="all">全部</div>
                          </div>
                        </div>
                          <div class="Double_box Double_box_User">
                              <publicBoxJiang 
                              class="doblebox" 
                              v-for="(item,index) in message.joinUser" 
                              :key="index"
                              :type1='item.type'
                              :name="item.name"
                              :firImg="item.image"
                              :nickName="item.nickName"
                              :userState=true
                              :headerimg='item.avatar==null?"":item.avatar'
                              ></publicBoxJiang>
                          </div>
                  </div>


            </div>
        </div>
       <!-- <div class="fillPassword" v-show="fillPasswordjoin">
                <input type="text" v-model="passwordfoll" placeholder="输入密码参加活动">
                <div class="quert" v-cursor @click="fillPassClick(message.id)">确定</div>
        </div>-->

      <div class="fillPassword" v-show="fillPasswordjoin">
        <div class="exit" @click="exit" v-cursor>x</div>
        <div class="login_top">
              <img class="top_img" src="../assets/login/1.png" alt="">
              <p class="text_zhuce">参与密码</p>
              <img class="top_img" src="../assets/login/1.png" alt="">
          </div>
          <div class="login_input">
              <div class="linxing"></div>
              <input class="input" type="text" placeholder="输入密码参加活动" style="color:#fff"  v-model="passwordfoll" >
          </div>
          <div class="login_input login_input1"   @click="fillPassClick(message.id)">
  
              <div class="tjiao">确定</div>
          </div>
          <img class="register_bgc" src="../assets/register/1.png" alt="">
    </div>
    <div v-show="back_bg" @click="handleBack_bg" class="black_bg"></div>

      <div class="getPrize" v-show="showGetPrizeTip">
          <p class="getPrizeP1">推广活动专属ROLL房，</p>
          <p class="getPrizeP1">请前往推广活动页面查看</p>
          <p class="getPrizeP11"></p>
          <p class="getPrizeP2 getPrizeP21" @click="joinActivity" v-cursor>去推广活动页面</p>
          <p class="getPrizeP2" @click="closeJoin" v-cursor>返回</p>
      </div>

      <div v-show="showGetPrizeTip"  @click="closeJoin"  class="black_bg"></div>
  </div>
</template>

<script>
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const publicDobleColor = ()=>import ('../components/publicDobleColor');
const publicBoxJiang = ()=>import ('../components/publicBoxJiang');
const linxingBox =()=>import('../components/lingxingBox');

// import doubleBox from '../components/doubleBox'
import {
    getRollFuli,
    postRollJon,
    postPassword,
    getRolldata,
    GetPeople,
    postSellGood,
    GetProplePrice,
} from '../axios/Apilogin';
import {Message} from 'element-ui';
import fenye from '../components/fenye';
export default {
  name: '',
  components: {
    publicBoxLeft,
    publicDobleColor,
    publicBoxJiang,
      linxingBox,
      fenye
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
  data() {
    return {
      joinState:true,
          back_bg:true,
       chooseName:"12334",
       showGetPrizeTip:false,
      imgbg:this.$store.getters.neiimg2.image,
      avatar:require('../assets/avatar/logo_icon.png'),//头像
        knowimg:true,
        back_bg:false,
        fillPasswordjoin:false,  //参加又密码的活动，显示填写密码
        urserAndPrize:true, //活动正在进行时，显示用户和奖品展示
        passwordfoll:"",  //填入密码
        playState:'正在进行',
        join:"立即参与",
        joinBg:true,
        day:'00',
        Hour:'00',
        min:'00',
        miao:'00',
        img:'',
        message:'',
        rollGoods:[],
        fenyeList:[],
        fir:[],
      list:[
        {
          
        }
      ]
    }
  },
  beforeCreate(){
 
  },
  mounted(){
        this.getRollFuli();
  },
  methods:{
     closeJoin(){
      this.showGetPrizeTip=false
    },

    joinActivity(){
        this.$router.push({  
          path: '/public_box_home/spreadCenter', 
        })
    },
    Rollmessage(){
        this.showGetPrizeTip=true     
    },
    //取消
    handleBack_bg(){
        this.fillPasswordjoin=false;
        this.back_bg=false;
        this.move(); 
    },
    know(){
      this.knowimg=false
    },
    /***滑动限制***/
      stop(){
        var mo=function(e){e.preventDefault();};  //e.preventDefault是取消事件的默认动作
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动   //监听touchmove 鼠标滚动事件，
      },
      /***取消滑动限制***/
      move(){
        var mo=function(e){e.preventDefault();};  
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
      },
      getRollFuli(){//获取当前信息
          var that=this;
          let Rollid=this.$route.query.Rollid;  // 带过来的id
          //获取当前信息
          getRollFuli(Rollid).then((res)=>{
            if(res!=undefined){
              this.message=res.data;
              // console.log("---------------------rll福利res.data");
              // console.log(this.message.joinWay);
                var dataList = res.data.rollGoods;
                var datafunList = this.dataList(dataList)
                this.rollGoods=datafunList;
              if(res.data.millis>0){
                  this.Timer(res.data.millis)
              }
              if(!res.data.join){
                  this.join="已参与"
                  this.joinState=false
              }
              if(!res.data.status){
                  this.join="该活动已结束"
                  this.joinBg=false;
                  this.playState='已结束';
                  this.urserAndPrize=false
                   this.joinState=false
              }
            }
          })
      },
       //封装添加图片颜色函数
     dataList(data){
        data.forEach((item,i) => {
                switch(item.level){
                case '普通级':
                item.kev = "rgb(176, 195, 217)";
                break;
                case '受限':
                item.kev = "rgb(136, 71, 255)";
                break;
                case '保密':
                item.kev = "rgb(211, 44, 230)";
                break;
                case '军规级':
                item.kev = "rgb(75, 105, 255)";
                break;
                case '工业级':
                item.kev = "rgb(94, 152, 217)";
                break;
                case '消费级':
                item.kev = "rgb(176, 195, 217)";
                break;
                case '违禁':
                item.kev = " rgb(228, 174, 57)";
                break;
                case '隐秘':
                item.kev = " rgb(235, 75, 75)";
                break;
                case '非凡':
                item.kev = "rgb(235, 75, 75)";
                case null:
                item.kev = "rgb(213, 7, 22)";
                break;
            
            }
            });
         return data;
        //  console.log("------------------data");
        //  console.log(data);
     },
    //填写密码参与
    fillPassClick(id){
      const data={
        'id':id,
        'pwd':this.passwordfoll
      }
      postPassword(data).then((res)=>{
        if(res!=undefined){
          if(res.code==1){
              Message({
                message:res.msg,
                type:'error'
              })
          }else if(res.code==0){
            Message({
                message:'参与成功',
                type:'success'
              })
              this.fillPasswordjoin=false
              this.back_bg=false;
              this.move();
              this.ba
              let Rollid=this.$route.query.Rollid;  // 密码参与后立即更新参与用户信息
              getRollFuli(Rollid).then((res)=>{
                if(res!=undefined){
                  this.message=res.data;
                    var dataList = res.data.rollGoods;
                    var datafunList = this.dataList(dataList)
                    this.rollGoods=datafunList;
                }
              })
          }
        }
     
      })
    },
    //活动点击理解参与
    AtonceClick(id){
      if(this.message.joinWay===4){
        this.showGetPrizeTip=true
      }else{
           const data={
              "id":id
            }
           postRollJon(data).then((res)=>{
            if(res!=undefined){
            if(res.msg=='success'){
                this.join='已参与'
                // GetProplePrice().then((res)=>{
                //     console.log("-----------------------用户个人信息")
                //     console.log(res.data)
                //     this.message.joinUser.push({
                //         "avatar": res.data.avatar,
                //         "nickName": res.data.nickName
                //     })
                // })
                //获取当前信息
                let Rollid=this.$route.query.Rollid;  // 带过来的id
                getRollFuli(Rollid).then((res)=>{
                  if(res!=undefined){
                    this.message=res.data;
                      var dataList = res.data.rollGoods;
                      var datafunList = this.dataList(dataList)
                      this.rollGoods=datafunList;
                  }
                })
            }else if(res.code===1){//已参与
                this.getRollFuli();
                // Message({                                      //element-ui中的展示请求错误的信息
                //      message:res.msg,
                //      type:'error'
                //  })
            }else if(res.code===2){
              this.fillPasswordjoin=true;
              this.back_bg=true;
              this.stop();
            }else if(res.code==3){
                Message({
                    message:res.msg,
                    type:'error'
                  })
              }
            }
          })
      }
   

  },

    //封装秒数转化为具体时间
    Timer(m){
        let day = Math.floor( m / (60 *60 *24))   //剩余天
        let Hour=Math.floor(m / (60 *60)-day*24)   //剩余小时
        let min = Math.floor( m /(60)-day*24*60-Hour*60 )  //剩余分钟
        let miao = Math.floor( m -day*24*60*60-Hour*60*60-min*60 );
        this.day=day
        this.Hour=Hour
        this.min=min
        this.miao=miao

        this.AutoTime(day,Hour,min,miao)
        // this.AutoTime(4,0,2,3)
       
    },
    //封装自动减少时间
    AutoTime(day,Hour,min,miao){
      var that=this;
        
        that.change_timer=setInterval(function(){
              that.miao=miao--;
              if(miao==-1){
                miao=59;
              }if(miao==58){
                 that.min=that.min-1;
              }
              if(that.min==-1){
                  that.min=59;
                  that.Hour=that.Hour-1;
              }if(that.Hour==-1){
                  that.Hour =23;
                  that.day =that.day-1;
              }if(that.day==-1){
                  that.day=0
              }else if(that.day==0&&that.Hour==0&&that.min==0&&that.miao==0){
                clearInterval(that.change_timer)
                  that.day=day
                  that.Hour=Hour
                  that.min=min
                  that.miao=miao
              }
              
        },1000)
    },
    exit(){
      this.fillPasswordjoin=false;
      this.back_bg=false;
      this.move();
    }
   /* pagechange(currentPage){//根据当前页数请求渲染数据
    this.fenyeList = this.message.joinUser.slice((currentPage-1)*this.pageLength,currentPage*this.pageLength)
    },*/
  },
  destroyed(){
    clearInterval(this.change_timer)
  }

}
</script>

<style scoped>
.welfare{
    width: 1280px;
    height: 1500px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    margin:0 auto;
    position: absolute;
    z-index: 0;
}
.bg{
  /* position: absolute;
  left: 0;
  top: 0; */
}
.ROLLfuli{
  position: relative;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
   background-image:-webkit-linear-gradient(left,#ec1807,#ff621d);
    background-image:-moz-linear-gradient(left,#ec1807,#ff621d);
    background-image:-ms-linear-gradient(left,#ec1807,#ff621d);
    background-image:-o-linear-gradient(left,#ec1807,#ff621d);
    background-image:linear-gradient(left,#ec1807,#ff621d);
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
  top: 239px;
}
.box_left{
  width: 288px;  

}
.public_box{
  margin-bottom: 23px;
  }
.box_right{
  width: 992px;
  margin-top: -10px;
  position: relative;

}
.box_right .box_right_img{
  width: 415px;
  height: 323px;
  line-height: 323px;
  text-align: center;
  box-sizing: border-box;
  border: 2px solid #e41063;
  border-image: -webkit-linear-gradient(bottom,rgba(0,0,0,0),#ec1807);
  border-image: -moz-linear-gradient(bottom,rgba(0,0,0,0),#ec1807);
  border-image: -ms-linear-gradient(bottom,rgba(0,0,0,0),#ec1807);
  border-image: -o-linear-gradient(bottom,rgba(0,0,0,0),#ec1807);
  border-image: linear-gradient(bottom,rgba(0,0,0,0),#ec1807);

}
/* 单独css */
.rollTop{
  width: 373px;
}
.box_right_top{
  width: 890px;
  height: 323px;
  margin-bottom: 39px;
  box-sizing: border-box;
  border: 2px solid #e41063;
  border-bottom: none;
  border-image: -webkit-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
  border-image: -moz-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
  border-image: -ms-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
  border-image: -o-linear-gradient(bottom,rgba(0,0,0,0) ,#ec1807) 15 15;
  border-image: linear-gradient(bottom,rgba(0,0,0,0),#ec1807) 15 15;
  background: -webkit-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -moz-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -ms-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -o-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
}
.box_right_top_box{
    width: 476px;
    height: 323px;
    position: absolute;
    top: -16px;
    right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.timeGone{
  font-size: 35px;
  color: #fff;
  position: absolute;
  bottom: 137px;
  font-weight: 900px;
}
.timeGone span{
  font-size: 19px;
}
.box_right_heng{
  width: 890px;
  height: 6px;
  background: #eb1707;
  position: absolute;
  top: 323px;
  left: 0px;
}
.but{
  width: 158px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.box_right_top_box .bgc{
    position: absolute;
    left: 0;
    top: 0;
}
.top_box_left{
    position: relative;
}
.activeBg{
    width: 116px;
    height: 116px;
    border-radius: 50%;
    margin-left: 15px;
    overflow: hidden;
}
.top_box_center{
    position: relative;
    font-size: 16px;
    color: #fff;
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.top_box_center p{
  color: #7f5867;
}
.Color_text{
    /*background-image:-webkit-linear-gradient(top,#ff621d,#dedbda);
    background-image:-moz-linear-gradient(top,#ff621d,#dedbda);
    background-image:-ms-linear-gradient(top,#ff621d,#dedbda);
    background-image:-o-linear-gradient(top,#ff621d,#dedbda);
    background-image:linear-gradient(top,#ff621d,#ff621d);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;*/
  font-size: 26px; 
  font-weight: 900;
  color:#fff;
}
.top_box_center{
    font-weight: 500;
}
.top_box_right{
    font-size: 14px;
    color: #e60964;
    position: absolute;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 40px;
}
.top_box_right p{
  margin-top: 4px;
  color: #fff;
}
.top_box_right .join{
  position: relative;
}
.top_box_right .join img{
  width: 100%;
}
.top_box_right div:nth-child(1){
    font-size: 22px;
    font-weight: 900;
}
.right_top_heng{
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 30px;
    position: relative;
}
.right_top_heng p{
  width: 74px;
   font-size: 16px;
   background-image:-webkit-linear-gradient(left,#94140a,#ff621d);
    background-image:-moz-linear-gradient(left,#94140a,#ff621d);
    background-image:-ms-linear-gradient(left,#94140a,#ff621d);
    background-image:-o-linear-gradient(left,#94140a,#ff621d);
    background-image:linear-gradient(left,#94140a,#ff621d);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  font-style: italic;
  margin-left: 7px;
  padding-right: 10px;
}
.hengxian{
    margin-left: 8px;
}
.box{
    margin-right: 13px;
    margin-bottom: 10px;
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
  background: #ec1807;
  width: 60px;
  height: 24px;
    /*transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);*/
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
.Double_box_Jiang{
  width: 992px;
  max-height: 400px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none; 
}
.Double_box_Jiang::-webkit-scrollbar{
    display: none;
}
.Double_box_User{
  width: 992px;
  max-height: 400px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none; 
}
.Double_box_User::-webkit-scrollbar {
    display: none;
}
.hengxian_box{
    margin-bottom: 20px;
}
.doube_box{
  margin-right: 13px;
  margin-bottom: 13px;
}
.doblebox{
    /*margin-right: 20px;*/
    margin-bottom: 17px;
    margin-left: 20px;
}
/*.fillPassword{
  width: 300px;
  height: 100px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.quert{
  border: 1px solid #333;
  margin-left: 20px;
}*/
.fenye{
    width: 100%;
    height: 100px;
    /* position: absolute; */
    /* right: 0;
    bottom: 50px; */
    /*margin-top: 458px;*/
    margin-left: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1113px;
}
.fenye_box{
    margin-right: 8px;
    margin-left: 8px;
}
.shang{
    position: relative;
    color: #ff3e82;
    font-size: 14px;
    border: 1px solid #5c1432;
    padding: 3px 13px;
    margin-right: 8px;
    margin-left: 8px;
    transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
    /* background-color: #201d1d; */
    z-index: 1;
    background-image:-webkit-linear-gradient(top,#171717,#0d0909);
    background-image:-moz-linear-gradient(top,#171717,#0d0909);
    background-image:-ms-linear-gradient(top,#171717,#0d0909);
    background-image:-o-linear-gradient(top,#171717,#0d0909);
    background-image:linear-gradient(top,#171717,#0d0909);

}
.right_user{
  height: 362px;
  overflow: hidden;
  box-sizing: border-box;
   overflow-y: scroll;
   overflow-x: hidden;
}
.right_user::-webkit-scrollbar { width: 0 !important }
.right_user { -ms-overflow-style: none; }
.right_user { overflow: -moz-scrollbars-none; }
.joinBg{
  width: 150px;
  height: 40px;
  background-image:-webkit-linear-gradient(top,#ec1907,#fe5e1c);
  background-image:-moz-linear-gradient(top,#ec1907,#fe5e1c);
  background-image:-ms-linear-gradient(top,#ec1907,#fe5e1c);
  background-image:-o-linear-gradient(top,#ec1907,#fe5e1c);
  background-image:linear-gradient(top,#ec1907,#fe5e1c);
  border-radius: 22px;
}
.joinBgGone{
  width: 150px;
  height: 40px;
  border-radius: 22px;
  background: #646464;

}
/*******************************************************************************************************************/
 .fillPassword{
        position: fixed;
        top: 30%;
        left: 50%;
        width: 490px;
        height: 325px;
        background: linear-gradient( #201217, #0f0f0f);
        background-image:-moz-linear-gradient(#201217,#0f0f0f);
        background-image:-ms-linear-gradient(#201217,#0f0f0f);
        background-image:-o-linear-gradient(#201217,#0f0f0f);
        background-image:linear-gradient(#201217,#0f0f0f);
        transform: translate(-50%);
        z-index: 999;
        /* background: linear-gradient(#232123, #65072c); */
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .register_bgc{
        width: 535px;
        height: 360px;
        position: absolute;
        top: -15px;
        z-index: -1;
    }
    .exit{
        position: absolute;
        top: 0px;
        color: #fff;
        font-size:30px;
        right: 10px;
    }
    .login_top{
        display: flex;
        width: 160px;
        margin: 36px auto 20px;
        position: relative;
      
    }
    .top_img{
        width: 27px;
        height: 45px;
    }
    .text_zhuce{
        font-size: 26px;
        color:#e60f64;
        width: 105px;
        text-align: center;
        line-height: 32px;
    
        font-weight: 700;
            position: relative;
    top: 6px;
    left: 2px;
    }
    .login_input{
        position: relative;
        width: 336px;
        height: 42px;
        margin-top: 25px;
    }
   
    .linxing{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);
        left: 0;
        border-radius: 5px;
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);
        border-radius: 5px;
        border: 1px solid #691534;
        background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }
    .tjiao{
        font-size: 16px;
        position: absolute;
        top:50%;
        right: 41%;
        z-index: 2;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        color: #fff;
 
        font-weight: 700;
    }
     .input_img{
        position: absolute;
        top: 7px;
        left: 18px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-transition-delay: 99999s;
        -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
    }
    .input{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        width: 206px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-style: italic;
        left: 116px;
    }
     input::-webkit-input-placeholder{
        color:#e60f64;
    }
    input::-moz-placeholder{
    color:#e60f64;
    }
    input:-ms-input-placeholder{
    color:#e60f64;
    }
    .input{

        width: 206px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-style: italic;
    }
    .input1{
    

        width: 181px;
        height: 25px;
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-style: italic;
    }
    input::-webkit-input-placeholder{
        color:#e60f64;
    }
    input::-moz-placeholder{
     color:#e60f64;
    }
    input:-ms-input-placeholder{
    color:#e60f64;
    }
    .input_img{
        position: absolute;
        top: 7px;
        left: 18px;
    }
     .login_input{
        position: relative;
        width: 336px;
        height: 42px;
        margin-top:21px;
        border: 1px solid #b13e55;
        border-radius:5px;
        text-align: center;
        line-height: 38px;
        box-shadow: 0px 0px 10px rgba(177, 62, 86, 0.5);

    }
    .login_input1{
        margin-top: 64px;
        cursor:pointer;
         line-height: 42px;
          background:linear-gradient(to right,#ba023f,#ff537b);
        background:-webkit-linear-gradient(to right,#ba023f,#ff537b);
        background:-moz-linear-gradient(to right,#ba023f,#ff537b);
        background:-ms-linear-gradient(to right,#ba023f,#ff537b);
        background:-o-linear-gradient(to right,#ba023f,#ff537b);
    }
    .black_bg{
      width: 100%;
      height: 1080px;
      position: fixed;
      background: #000;
      opacity: 0.3;
      z-index: 50;
      top: 0;
      left: 0;
    }
    .getPrize{
    width: 334px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 110;
    color: #fff;
    background: #E60064;
    background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
    border-radius: 16px;
    text-align: center;
    padding: 60px 20px 40px 20px;
}
.getPrizeP1{
  color: #842336;
  font-size: 14px;
  font-weight: bold;
}
.getPrizeP11{
  margin-bottom: 20px;
}
.getPrizeP2{
  width: 216px;
  height: 34px;
  line-height: 34px;
  margin-left: 59px;
  border:1px solid #842336;
  border-radius: 24px;
  margin-bottom: 12px;
  color: #842336;
}
.getPrizeP21{
  background: #842336;
  color: #fff;
}
.getPrizeP{
  margin-top: 40px;
}
.getPrizeP1 span{
  color:#fff;
}
.black_bg{
  width: 100%;
  height: 1080px;
  position: fixed;
  background: #000;
  opacity: 0.5;
  z-index: 50;
  top: 0;
  left: 0;
}
</style>

