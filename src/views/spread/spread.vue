<template>
  <div class="welfare1">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>

      <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../../assets/ROLL/8.png" alt="">
            <vue-seamless-scroll
                :data="newsList"  
                class="dicent_text"
                :class-option="optionLeft"
            >
               <ul class="item">
                  <li class="li" v-for="(item,index) in newsList" :key="index">
                      <span class="title" v-text="item.content"></span>
                  </li>
              </ul>
            </vue-seamless-scroll>
          <div class="know" v-cursor @click="know">知道了</div>
          
        </div>
      <div class="box_left_box">
          <img class="neitubeij" src="../../assets/spread/1.png" alt="" @click="toSpreadCenter" v-cursor>
          <div class="tuiguagnzhongxin">
              <div class="dsdsds">
                  <img src="../../assets/spread/2.jpg" alt="">
                  <P>推广中心</P>
              </div>
              <div class="tuiguangbox">
                  <div class="box_left">
                    <div class="first">
                        <p>我推广的新用户</p>
                        <div class="number">{{personalDetails.myPromotion}}</div>
                    </div>
                    <div class="two">
                         <p>我推广的首充用户</p>
                        <div class="number">{{personalDetails.myRecharegeCount}}</div>
                    </div>
                    <div class="three">
                       <p>我推广的充值总金额</p>
                        <div class="number">${{personalDetails.myRecharegeAmount}}</div>
                    </div>
                  </div>
                  <div class="box_right">
                      <div class="ourtuiguang">
                          <div>我的推广码</div>
                          <div class="fuzhi">
                              <p>{{tuiguangma}}</p>
                             <img v-cursor @click="copyUrl(tuiguangma)" src="../../assets/spread/3.jpg" alt="">
                          </div>
                      </div>
                       <div class="ourtuiguang dsdsdsdsd">
                          <div>我的推广链接</div>
                          <div class="fuzhi">
                            <p>{{tuiguangurl}}</p>
                            <img  v-cursor @click="copyUrl(tuiguangurl)" src="../../assets/spread/3.jpg" alt="">
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="tuiguagnzhongxin">
              <div class="dsdsds">
                  <img src="../../assets/spread/2.jpg" alt="">
                  <P>推广福利</P>
              </div>
            <div class="zuishangceng">
              <div class="sangehezi">
                  <div class="firstds">
                      <p>{{list.name}}</p>
                      <div class="xinyonghuhezi">
                          <div class="dingbu">
                              <p>档位条件</p>
                              <p>奖励</p>
                              <p>状态</p>
                          </div>
                          <div :class="!item.prize.status?'gezi adsdsdewre':'gezi'" v-for="(item,index) in list.infos" :key="index">
                              <div class="xiaogezi yi">
                               ≥{{item.inviteCount}}人
                              </div>
                              <div class="xiaogezi er">
                                                                <p class="psss">  {{item.prize.prizeName}}</p>

                              </div>
                              <div v-if="item.prize.status&&item.prize.fetched" class="xiaogezi san">
                                已领取
                              </div>
                              <div v-if="item.prize.status&&!item.prize.fetched" class="xiaogezi san ">
                                  <p @click="lingqushijian(0,item.level)" class="lingquhh" v-cursor>
                                     领取
                                  </p>
                                                                  
                              </div>
                              <div v-if="!item.prize.status" class="xiaogezi san">
                                  待解锁
                              </div>
                          </div>
                      </div>
                  </div>
              
              </div>

               <div class="sangehezi">
                  <div class="firstds">
                      <p>{{list1.name}}</p>
                      <div class="xinyonghuhezi">
                          <div class="dingbu">
                              <p>档位条件</p>
                              <p>奖励</p>
                              <p>状态</p>
                          </div>
                          <div :class="!item.prize.status?'gezi adsdsdewre':'gezi'" v-for="(item,index) in list1.infos" :key="index">
                              <div class="xiaogezi yi">
                               ≥{{item.rechargeCount}}人
                              </div>
                              <div class="xiaogezi er">
                                 <p class="psss">  {{item.prize.prizeName}}</p>
                              </div>
                              <div v-if="item.prize.status&&item.prize.fetched" class="xiaogezi san">
                                已领取
                              </div>
                              <div v-if="item.prize.status&&!item.prize.fetched" class="xiaogezi san ">
                                  <p @click="lingqushijian(1,item.level)" class="lingquhh" v-cursor>
                                     领取
                                  </p>
                                                                  
                              </div>
                               <div v-if="!item.prize.status" class="xiaogezi san">
                                  待解锁
                              </div>
                          </div>
                      </div>
                  </div>
              
              </div>

               <div class="sangehezi">
                  <div class="firstds">
                      <p>{{list2.name}}</p>
                      <div class="xinyonghuhezi">
                          <div class="dingbu">
                              <p>档位条件</p>
                              <p>奖励</p>
                              <p>状态</p>
                          </div>
                          <div :class="!item.prize.status?'gezi adsdsdewre':'gezi'" v-for="(item,index) in list2.infos" :key="index">
                              <div class="xiaogezi yi">
                                ≥${{item.rechargeAmount}}
                              </div>
                              <div class="xiaogezi er">
                                <p class="psss">          {{item.prize.prizeName}}</p>
                      
                              </div>
                              <div v-if="item.prize.status&&item.prize.fetched" class="xiaogezi san">
                                已领取
                              </div>
                              <div v-if="item.prize.status&&!item.prize.fetched" class="xiaogezi san ">
                                  <p @click="lingqushijian(2,item.level)" class="lingquhh" v-cursor>
                                     领取
                                  </p>
                                                                  
                              </div>
                               <div v-if="!item.prize.status" class="xiaogezi san">
                                  待解锁
                              </div>
                          </div>
                      </div>
                  </div>
              
              </div>
          </div>
        </div>

        <!-- <div class="lijituiguang">立即推广</div> -->
      </div>
      

  </div>
</template>

<script>
import Bus from '../../axios/Bus'
import {Message} from 'element-ui'
import {promotionmyInfo,fetchPrize} from '@/axios/Apilogin'
import {GetRankPrize} from '@/axios/PersonalApi'
export default {
  name: '',
  components: {

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
      tuiguangurl:"https://323232232332323",
      tuiguangma:11234,
      list:[],
      list1:[],
      list2:[],
      personalDetails:"", 
      knowimg:true,
      imgbg:this.$store.getters.neiimg1.image,
      newsList: [{
         "content":1234
      },
       {
         "content":1234
       }],
       l:"",  //储存获取的id
    }
  },
  created(){
    var that=this;
    Bus.$on('changeTimer',content=>{   //监听重新开箱事件
        // console.log(_this.stateRegister);
        if(content==1){
          that.getTUIGAUNG();
        }
    })
  
  },

  mounted(){

     //判断是否有跳转过来的数据，有的话，就储存到本地
    this.decideQuery(this.$route.query.id);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

     
     //获取推广码
    this.getTUIGAUNG();

      // 获取自己的数据
      promotionmyInfo().then((res)=>{  
          if(res!=undefined){
            this.personalDetails=res.data;
          }
      })

    this.getRank();
  },



  methods:{
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

    //获取推广码
    getTUIGAUNG(){
   
          let extensioncode = localStorage.getItem('fuzhineirong')
          console.log(extensioncode)
          if(extensioncode!=undefined){
                let url = window.location.href;
                if(url.indexOf('localhost')==-1){
                    this.tuiguangurl='https://obcase.cn?id='+extensioncode;
                }else{
                      this.tuiguangurl=url+'?id='+extensioncode;
                }
              //  this.tuiguangurl=url+'?id='+extensioncode;

                this.tuiguangma=extensioncode
          }
    
    },

    //判断是否有跳转过来的数据，有的话，就储存到本地
    decideQuery(query){

      if(query==null){
        return
      }else{
        localStorage.setItem('decide',query)
      }
    },


    //toSpreadCenter去推广活动中心
    toSpreadCenter(){
      this.$router.push({path: '/public_box_home/spreadCenter'});
    },
     //获取推广的福利
    getRank(){
      const params={
        "isShare":0,
        "asc":1
      }
    GetRankPrize(params).then((res)=>{
         if(res!=undefined){
           if(res.code==0){
              const resDate = res.data;
              this.l = res.data;
              console.log(resDate)
              this.list=resDate[0]
  
              this.list1=resDate[1]
              this.list2=resDate[2]
           }else{
               Message({
                message:res.msg,
                type:'error'
              })
           }
     
          }
    })
  },

    //实现复制功能
    copyUrl(data){
        let url = data;
        let oInput = document.createElement('input');
        oInput.value = url;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象; 选择的是文本
        document.execCommand("Copy"); // 执行浏览器复制命令
        this.$message({
          message: '已成功复制到剪切板',
          type: 'success'
        });
        oInput.remove()
      },


    //点击领取奖励
    lingqushijian(ind,level){
    console.log(this.l[ind].id,level)
      const params={
        "promotionId":this.l[ind].id,
        "rank":level
      }
        fetchPrize(params).then((res)=>{
          if(res!=undefined){
            if(res.code==0){
              this.getRank();
               Message({
                message:"领取成功,已自动放入背包",
                type:'success'
              })
            }else{
               Message({
                message:res.msg,
                type:'error'
              })
            }
          }
        })
    },

    know(){
      this.knowimg=false
    },
  }
}
</script>

<style scoped>
.welfare1{
    width: 1280px;
    padding-bottom: 20px;
    margin:0 auto;
    position: absolute;
    left: 0;
    top: 0;
}

.ROLLfuli123{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
  background: -webkit-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -moz-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -ms-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: -o-linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  background: linear-gradient(bottom,#843a1a 0%,rgba(0,0,0,0) 50%);
  font-weight: 900;
  font-style: italic;
  padding-right: 20px;
}
.box_left_box{
   width: 1000px;
  position: absolute;
  display: flex;
  right: 0px;
  top: 221px;
  flex-direction: column;

}
.tuiguagnzhongxin{
  margin-top: 40px;
}
.dsdsds{
  display: flex;
  color: #ff006e;
  align-items: center;
}
.dsdsds img{
  margin-right: 10px;
  width: 10px;
  height: 27px;
}
 .dsdsds p{
  font-size: 20px;
}
.tuiguangbox{
  width: 940px;
  height: 119px;
  margin-top: 20px;
  margin-left: 6px;
  display: flex;
}
.box_left{
  width: 570px;
  height: 120px;
  border-radius: 10px;
  background-color: #262626;
  display: flex;
}
.box_right{
  width: 347px;
  height: 120px;
  background-color: #252525;
  margin-left: 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.first{
  width: 162px;
  border-right: 2px solid #100f0f;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.first p{
  color: #fff;
  font-size: 12px;
}
.first div{
  color: #87c702;
  font-size: 36px;
  text-shadow: 0 0 30px #87c702;
}
.two{
  width: 198px;
  border-right: 2px solid #100f0f;
  height: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.two p{
  color: #fff;
  font-size: 12px;
}
.two div{
  color: #039eba;
  font-size: 36px;
  text-shadow: 0 0 30px #039eba;
}
.three{
  width: 198px;
  height: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.three p{
  color: #fff;
  font-size: 12px;
}
.three div{
  color: #e60064;
  font-size: 36px;
  text-shadow: 0 0 30px #e60064;
}
.ourtuiguang{
  display: flex;
  align-items: center;
  color: #5a5a5a;
  font-size: 14px;
}
.fuzhi{
  width: 210px;
  height: 30px;
  background-color: #191919;
  border-radius: 20px;
  margin-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
}
.dsdsdsdsd{
  margin-top: 10px;
}
.dsdsdsdsd .fuzhi{
  margin-left: 8px;
}
.fuzhi img{
  position: absolute;
  top: 3px;
  right: 5px;
}
.fuzhi P{
  width: 70%;
  margin-left: 10px;
  color: #ee0067;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap
}
.sangehezi{
  margin-top: 20px;
  margin-right: 77px;
}
.zuishangceng .sangehezi:last-child{
  margin-right: 0px;
}
.firstds{
  width: 280px;
  height: 443px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.firstds p{
  color: #515151;
  font-size: 20px;
  font-weight: 800;
}
.xinyonghuhezi{
  width: 100%;
  height: 400px;
  border: 2px solid #232323;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 10px;
}
.dingbu{
    background: -webkit-linear-gradient(right,#89c901,#38c083);
  background: -moz-linear-gradient(right,#89c901 ,#38c083);
  background: -ms-linear-gradient(right,#89c901 ,#38c083);
  background: -o-linear-gradient(right,#89c901 ,#38c083);
  background: linear-gradient(right,#89c901,#38c083);
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
}
.yansebutong{
  background: -webkit-linear-gradient(left,#e60264,#e64f64);
  background: -moz-linear-gradient(left,#e60264 ,#e64f64);
  background: -ms-linear-gradient(left,#e60264 ,#e64f64);
  background: -o-linear-gradient(left,#e60264 ,#e64f64);
  background: linear-gradient(left,#e60264,#e64f64);
}
.yanstong{
   background: -webkit-linear-gradient(left,#01aac7,#5d39c0);
  background: -moz-linear-gradient(left,#01aac7 ,#5d39c0);
  background: -ms-linear-gradient(left,#01aac7 ,#5d39c0);
  background: -o-linear-gradient(left,#01aac7 ,#5d39c0);
  background: linear-gradient(left,#01aac7,#5d39c0);
}
.firstds .dingbu p{
   font-size: 14px;
   color: #fff;
}
.gezi{
  height: 35px;
  width: 100%;
  border-bottom:2px solid #232323;
  display: flex;
}
.adsdsdewre.gezi .xiaogezi{
  color: #858585;
}
.xiaogezi{

  border-right: 2px solid #232323;
  height:35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c3c3c3;
}
.yi{
  width: 80px;
}
.er{
  width: 137px;

}
.xiaogezi.er .psss{
    width: 90%;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #858585;
}
.san{
  width: 56px;
  border-right: none;
  color: #77af04;
}
.san .lingquhh{
  padding: 1px 8px;
  border-radius: 20px;
  background-color: #e64564;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}
.zuishangceng{
  display: flex;
}
.lijituiguang{
  width: 225px;
  height: 48px;
  background-color: #e61664;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size:16px;
  margin: 50px auto 0;
}
.neitubeij{
  width: 100%;
  height:167px;
}
</style>

