<template>
  <div class="spread">
    <!--top-->
    <div class="share1">
        <!--活动说明-->
      <div class="actiDescription" v-show="spreadShare1.actiShow1">
        <p class="title">累计推广人数说明</p>
         <div v-for="(item,index) in spreadShare1.remarkArr" :key="index">
          <p>{{(index+1)}}.{{item}}</p>
        </div>
        
      </div>
      <div class="left">
        <div class="top">
          <p class="title">{{spreadShare1.title}}</p>
          <p class="detail" @mouseenter="actiDes1" @mouseleave="actiDes1" v-cursor><img src="../assets/spread/4.png" />活动说明</p>
          <div>
            <p>全站推广人数每达成一个档次，全服推广员即可解锁更高级别ROLL房资格</p>
            <p>参与要求：推广人数≥1</p>
            <p>参与范围：全站所有用户</p>
          </div>

        </div>
        <div class="bottom">
          <p>本期活动时间：{{spreadShare1.listInfo1.startTime}} ~{{spreadShare1.listInfo1.endTime}}</p>
          <p>本期目标人数：<span>{{spreadShare1.listInfo1.joinTarget}}人</span></p>
          <div class="jinduTiao">
            <p class="word">当前进度: {{spreadShare1.listInfo1.joinNum}}</p>
            
            <p class="divJindu">
              <span class="inner" :style="{width:spreadShare1.innerWidth1+'px'}"></span>
            </p>
          </div>
          <div class="tips">
            <img src="../assets/spread/5.png" />依据进度解锁ROLL房，仅可选择1个房间，请谨慎选择！
          </div>
        </div>
      </div>
      <div class="right">
        <p class="title">奖励选择</p>
        <div class="right_box">
          <div class="bottom" v-for="(item,index) in prizePeople" :key="index">
            <img :src="item.prizeImage" alt="">
            <p class="name">{{item.prizeName}}</p>
            <p :class="item.status===0?'state stateLimit':'state'">{{item.statusWord}}</p>
            <p :class="join.fetched1===1?'btn btnAlreadyGet':'btn'" v-cursor @click="joinTips(1,item.level,index,item.prizeName)" v-show="item.status===0?false:true">选择</p>
            </div>
            <div class="getPrize" v-show="showGetPrizeTip">
                  <p class="getPrizeP1">共享活动壹已解锁的ROLL房中</p>
                  <p class="getPrizeP1">只能选择一个，是否确定选择</p>
                  <p class="getPrizeP11">{{chooseName}}？</p>
                  <p class="getPrizeP2 getPrizeP21" @click="joinActivity(1)" v-cursor>是的，我要选择此ROLL房</p>
                  <p class="getPrizeP2" @click="closeJoin(1)" v-cursor>我在考虑一下</p>
              </div>
              <div class="getPrize" v-show="showGetPrizeTip1">
                  <p class="getPrizeP1">不可解锁此ROLL房</p>
                  <p class="getPrizeP1">因为本期活动只能解锁</p>
                  <p class="getPrizeP1">一个ROLL房</p>
                  <p class="getPrizeP1">（您已经解锁 <span>{{join.rollIdName1}}</span>）</p>
                  <p class="getPrizeP2 getPrizeP" @click="closeJoin(1)" v-cursor>好的</p>
              </div>
          </div>
        </div>

    </div>
    <!--bottom-->
    <div class="share1" style="margin-top:20px;">
        <!--活动说明-->
      <div class="actiDescription" v-show="spreadShare2.actiShow2">
        <p class="title">推广充值福利说明</p>
        <div v-for="(item,index) in spreadShare2.remarkArr" :key="index">
          <p>{{(index+1)}}.{{item}}</p>
        </div>
      </div>
      <div class="left">
        <div class="top">
          <p class="title">{{spreadShare2.title}}</p>
          <p class="detail" @mouseenter="actiDes2" @mouseleave="actiDes2" v-cursor><img src="../assets/spread/4.png" />活动说明</p>
          <div>
            <p>全站推广用户的充值充值金额每达成一个档次，全服推广员即可解锁更高级别ROLL房资格</p>
            <p>参与要求：推广人数≥1</p>
            <p> 参与范围：全站所有用户</p>
           
          </div>

        </div>
        <div class="bottom">
          <p>本期活动时间：{{spreadShare2.listInfo2.startTime}} ~{{spreadShare2.listInfo2.endTime}}</p>
          <p>本期目标金额：<span>${{spreadShare2.listInfo2.joinTarget}}</span></p>
          <div class="jinduTiao">
            <p class="word">当前进度: {{spreadShare2.listInfo2.joinNum}}</p>
            
            <p class="divJindu">
              <span class="inner" :style="{width:spreadShare2.innerWidth2+'px'}"></span>
            </p>
          </div>
          <div class="tips">
            <img src="../assets/spread/5.png" />依据进度解锁ROLL房，仅可选择1个房间，请谨慎选择！
          </div>
        </div>
      </div>
      <div class="right">
        <p class="title">奖励选择</p>
        <div class="right_box">
          <div class="bottom" v-for="(item,index) in prizeRank" :key="index">
            <img :src="item.prizeImage" alt="">
            <p class="name">{{item.prizeName}}</p>
            <p  :class="item.status===0?'state stateLimit':'state'">{{item.statusWord}}</p>
            <p :class="join.fetched2===1?'btn btnAlreadyGet':'btn'" v-cursor @click="joinTips(2,item.level,index,item.prizeName)"  v-show="item.status===0?false:true">选择</p>
               
          </div>
          <div class="getPrize" v-show="showGetPrizeTip2">
                  <p class="getPrizeP1">共享活动壹已解锁的ROLL房中</p>
                  <p class="getPrizeP1">只能选择一个，是否确定选择</p>
                  <p class="getPrizeP11">{{chooseName}}？</p>
                  <p class="getPrizeP2 getPrizeP21" @click="joinActivity(2)" v-cursor>是的，我要选择此ROLL房</p>
                  <p class="getPrizeP2" @click="closeJoin(2)" v-cursor>我在考虑一下</p>
              </div>
              <div class="getPrize" v-show="showGetPrizeTip3">
                  <p class="getPrizeP1">不可解锁此ROLL房</p>
                  <p class="getPrizeP1">因为本期活动只能解锁</p>
                  <p class="getPrizeP1">一个ROLL房</p>
                  <p class="getPrizeP1">（您已经解锁 <span>{{join.rollIdName2}}</span>）</p>
                  <p class="getPrizeP2 getPrizeP" @click="closeJoin(2)" v-cursor>好的</p>
              </div>  
        </div>
      </div>
    </div>

    <div class="title_top">
      <div class="title_shu"></div>
      <p  class="title">{{title}}</p>
      <p class="title1">{{title1}}</p>
      <p class="detail" @mouseenter="actiDes3" @mouseleave="actiDes3" v-cursor><img src="../assets/spread/4.png" />活动说明</p>
    </div>
    <div class="rankFlex">
      <div class="actiDescription1" v-show="actiShow3">
        <p class="title">推广排行规则说明</p>
        <p>1.所有达标推广员均有资格参加排行活动；</p>
        <p>2.活动时间为：2020.7.1 ~2020.7.30，活动期间的推广成果将纳入排行统计；</p>
        <p>3.领奖时间为：2020.7.31 ~2020.8.15，若排行在前十名，请及时在领奖时间内到该页面领取奖品，逾期将无法领取；</p>
        <p>4、本活动数据每1小时刷新一次，如遇网络波动，会有部分延迟；</p>
      </div>
        <rankList
        :rankList = "peopleList"
        :title = "peopleTitle"
        :myrank = "myRank"
        :prizelist = "prizePeopleChild"
        :peopleListShow="true"
        ></rankList>
        <rankList
        :rankList = "investList"
        :title = "investTitle"
        :myrank = "myRank"
        :prizelist = "prizeRankChild"
        :investListShow="true"
        ></rankList>
        
    </div>
    <div class="spreadBtn" @click="()=>{this.$router.push({path: '/public_box_home/spread'});}" v-cursor>立即推广</div>
    <div v-show="back_bg" @click="handleBack_bg" class="black_bg"></div>

  </div>
</template>
<script>
import { Message } from 'element-ui';
import rankList from "../components/rank"
import {GetRankList,GetRankPrize,JoinActi,GetPrize} from "../axios/PersonalApi"
export default {
  name: '',
  components: {
    rankList
  },
  data() {
    return {
      back_bg:false,
      actiShow3:false,
      title:"上月推广排行",//标题
      title1:"每月推广排名奖励，推广越多，奖励越多",
      peopleTitle:{
        title:"推广人数",
        show:false,
      },
      investTitle:{
        title:"推广充值",
        show:true,
      },
      peopleList:[],
      //人数排名
      investList:[],
      //本页面奖励
      prizePeople:[],
      prizeRank:[],
      //传入子组件奖励
      prizePeopleChild:[],
      prizeRankChild:[],
      myRank:{
        rankpeople:0,
        fetchedStart1:0,
        fetchedEnd1:0,
        fetchedStart2:0,
        fetchedEnd2:0,
        fetched2:0,
        rankInvest:0,
        inviteCount:0,
        rechargeAmount:0
      },
      dataInfo:[],
      spreadShare1:{
          "title":null,
          "remark":null,
          "remarkArr":[],
          "actiShow1":false,
          "innerWidth1":25,
          "pepleNum1":0,
          "listInfo1":[]
      },
      spreadShare2:{
          "title":null,
          "remark":null,
          "remarkArr":[],
          "actiShow2":false,
          "innerWidth2":25,
          "pepleNum2":0,
          "listInfo2":[]
      },
      join:{
        "level":0,
        "index":0,
        "rollIdName1":"",//已参与的roll名称
        "rollId1":null,
        "fetched1":0,

        "rollIdName2":"",
        "rollId2":null,
        "fetched2":0,
      },
      chooseName:null,
      showGetPrizeTip:false,
      showGetPrizeTip1:false,
      showGetPrizeTip2:false,
      showGetPrizeTip3:false,
    }
  },
  mounted(){
     this.getRankList();//获取排行榜数据（活动排行榜）
  },
  created(){
   
       
  },
  methods:{
    handleBack_bg(){
      this.showGetPrizeTip=false;
      this.showGetPrizeTip1=false;
      this.showGetPrizeTip2=false;
      this.showGetPrizeTip3 = false;
      this.back_bg=false;
      this.move(); 
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
    //解锁Roll房弹窗
    joinTips(num,level,index,name){
      if(this.join.fetched1 == 1&&num==1){
        this.showGetPrizeTip1=true;
      }else if(this.join.fetched1 == 0&&num==1){
        this.chooseName = name;
        this.showGetPrizeTip=true;
        this.join.level = level;
        this.join.index = index;
      }
      if(this.join.fetched2 == 1&&num==2){
        this.showGetPrizeTip3=true;
      }else if(this.join.fetched2 == 0&&num==2){
        this.chooseName = name;
        this.showGetPrizeTip2=true;
        this.join.level = level;
        this.join.index = index;
      }
      this.back_bg=true;
      this.stop();
    },
    closeJoin(num){
      if(num===1){
        if(this.join.fetched1 == 1){
          this.showGetPrizeTip1=false;
        }else if(this.join.fetched1 == 0){
          this.showGetPrizeTip=false;
        }
        this.back_bg=false;
        this.move();
      }else{
        if(this.join.fetched2 == 1){
          this.showGetPrizeTip3=false;
        }else if(this.join.fetched2 == 0){
          this.showGetPrizeTip2=false;
        }
        this.back_bg=false;
        this.move();
        
      }
      
    },
    //参加活动
    joinActivity(num){
      var rollId = null;
      if(num==1){
        rollId = this.join.rollId1
      }else if(num==2){
        rollId = this.join.rollId2
      }
      const params={
        "promotionId":rollId,
        "level":this.join.level
      }
      JoinActi(params).then(res=>{
        // console.log(res)
        if(res!=undefined){
          if(res.code===0){
              this.getRankPrize();
              Message({
                message:"参与成功！",
                type:'error'
              })

          }else if(res.code===1){

          }
          this.showGetPrizeTip=false;
          this.showGetPrizeTip2=false;
          this.showGetPrizeTip1=false;
          this.showGetPrizeTip3=false;
          this.back_bg=false;
          this.move();
          
        }
      })
      
    },
    //说明弹窗
    actiDes1(){
      this.spreadShare1.actiShow1=!this.spreadShare1.actiShow1;
    },
    actiDes2(){
      this.spreadShare2.actiShow2=!this.spreadShare2.actiShow2;
    },
    actiDes3(){
      this.actiShow3=!this.actiShow3;
    },
    //排序前面补零
    getNum(num,length){
      return (Array(length).join('0') + num).slice(-length);
    },
    //获取排行数据
    getRankList(){
      this.peopleList = [];
      this.investList = [];
      this.prizePeopleChild=[];
      this.prizeRankChild=[];
      GetRankList().then(res=>{
        if(res!=undefined){

          // console.log("---------------getRankList")
          // console.log(res.data)
          var falseData = {
            "inviteCount": "/",
            "inviteRecharegeAmount": "/",
            "ranking": "/",
            "userId": "/",
            "userName": "/",
          }
          //前十名
          this.peopleList = res.data.promotionRank;
          this.investList = res.data.rechargeRank;
          for(var i = 0 ;i <10 ;i++){
            if(this.peopleList.length<10){
              this.peopleList.push(falseData);
            }
            if(this.investList.length<10){
              this.investList.push(falseData);
            }
          }
          this.myRank.promotionId1 = res.data.prizes[0].id;
          this.myRank.promotionId2 = res.data.prizes[1].id;
          this.myRank.fetchedStart1 = res.data.prizes[0].prizeStartTime;
          this.myRank.fetchedEnd1 = res.data.prizes[0].prizeEndTime;
          this.myRank.fetchedStart2 = res.data.prizes[1].prizeStartTime;
          this.myRank.fetchedEnd2 = res.data.prizes[1].prizeEndTime;
          //底部奖品
          var fetched11=0;
          var fetched12=0;
          res.data.prizes[0].infos.forEach((value,index)=>{
            this.prizePeopleChild.push(value.prize)
            if(value.prize.fetched == 1){
              fetched11=1;
            }
          })
          if(fetched11==1){
              this.myRank.fetched1=1;
          }else{
            this.myRank.fetched1=0;
          }
          res.data.prizes[1].infos.forEach((value,index)=>{
            // console.log(value)
            this.prizeRankChild.push(value.prize)
            if(value.prize.fetched == 1){
              fetched12=1;
            }
             
          })
          if(fetched12==1){
              this.myRank.fetched2=1;
          }else{
            this.myRank.fetched2=0;
          }
          //我的排名情况
          if(res.data.myPromotionRank.ranking>10||res.data.myPromotionRank.ranking=="未上榜"||res.data.myPromotionRank.ranking==0){
            this.myRank.rankpeople = "未上榜";
          }else{
            this.myRank.rankpeople = res.data.myPromotionRank.ranking;
          }
          this.myRank.inviteCount = res.data.myPromotionRank.inviteCount;
          if(res.data.myRecharegeRank.ranking>10||res.data.myRecharegeRank.ranking=="未上榜"||res.data.myRecharegeRank.ranking==0){
            this.myRank.rankInvest = "未上榜";
          }else{
            this.myRank.rankInvest = res.data.myRecharegeRank.ranking;
          }
          this.myRank.rechargeAmount = res.data.myRecharegeRank.rechargeAmount;
          this.getRankPrize();//获取获奖详情（推广活动列表）
        }
      })
    },
    getRankPrize(){
      const params = {
        "isShare":1,
        "asc":1
      }
      GetRankPrize(params).then(res=>{
        if(res!=undefined){
          this.prizeRank=[];
          this.prizePeople=[];

          var dataInfo = res.data;
          this.rollId = res.id;
          this.spreadShare1.title = res.data[0].name;
          this.spreadShare1.listInfo1=res.data[0];
          this.spreadShare1.remarkArr = res.data[0].remark;
          this.join.rollId1 = this.spreadShare1.listInfo1.id

          this.spreadShare2.title = res.data[1].name;
          this.spreadShare2.listInfo2=res.data[1];
          this.spreadShare2.remarkArr = res.data[1].remark;
          this.join.rollId2 = this.spreadShare2.listInfo2.id
          //计算进度条场地，灰色：374px,计算红色的
          if(Math.ceil((this.spreadShare1.listInfo1.joinNum/this.spreadShare1.listInfo1.joinTarget)*374)>25){
            this.spreadShare1.innerWidth1 = Math.ceil((this.spreadShare1.listInfo1.joinNum/this.spreadShare1.listInfo1.joinTarget)*374);
          }
          if( Math.ceil((this.spreadShare2.listInfo2.joinNum/this.spreadShare2.listInfo2.joinTarget)*374)>25){
            this.spreadShare2.innerWidth2 = Math.ceil((this.spreadShare2.listInfo2.joinNum/this.spreadShare2.listInfo2.joinTarget)*374);
          }     
          //合并两个接口的值
          dataInfo[0].infos.forEach((item,index)=>{ 
            if(item.prize.fetched===1){
              this.join.rollIdName1=item.prize.prizeName;
              this.join.fetched1=1;
            }
            if(item.prize.status==0){
                item.prize.statusWord="推广人数≥"+item.inviteCount+"解锁"
                item.prize.level=item.level
            }else{
              item.prize.statusWord="已解锁"
              item.prize.level=item.level
            }
            this.prizePeople.push(item.prize)
          })
          dataInfo[1].infos.forEach((item,index)=>{
            if(item.prize.fetched===1){
              this.join.rollIdName2=item.prize.prizeName;
              this.join.fetched2=1;
            }
            if(item.prize.status==0){
                item.prize.statusWord="推广金额≥"+item.inviteCount+"解锁"
                item.prize.level=item.level
            }else{
              item.prize.statusWord="已解锁"
              item.prize.level=item.level
            }
            this.prizeRank.push(item.prize)
          })
        }
      })
    },

  }
}
</script>


<style scoped>
.rankFlex .actiDescription1{
  position: absolute;
  top: 0px;
  left: 442px;
  width: 474px;
  padding: 20px;
  background-image: linear-gradient(90deg, #272727 0%, #191919 100%);
  border-radius: 12px;
  z-index: 888;
  border:1px solid #464646;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  letter-spacing: 0;
  line-height: 18px;
  z-index: 999999;

}
.rankFlex .actiDescription1 .title{
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-bottom: 8px;
}
.title_top .detail{
  position: absolute;
  right: 38px;
  top: 5px;
  width: 76px;
  height: 20px;
  background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);
  border-radius: 17px;
  text-align: center;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  text-indent: 10px;

}
.title_top .detail img{
  width: 12px;
  position: absolute;
  display: inline-block;
  top: 4px;
  left: 6px;
}
.title_top{
    display: flex;
    align-items: center;
    margin-top: 35px;
    position: relative;
}
.title_top .title1{
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA!important;
  letter-spacing: 0;
  margin-left: 10px;
}
.title_top .title{
    /* font-size: 16px;*/
    background-image:-webkit-linear-gradient(left,#e61364,#ff5477);
    background-image:-moz-linear-gradient(left,#e61364,#ff5477);
    background-image:-ms-linear-gradient(left,#e61364,#ff5477);
    background-image:-o-linear-gradient(left,#e61364,#ff5477);
    background-image:linear-gradient(left,#e61364,#ff5477);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
    font-weight: 900;
    margin-left: 14px;
    font-family: SourceHanSansCN-Bold;
    font-size: 24px;
    color: #E60064;
    letter-spacing: 0;
    line-height: 38px;
    height: 38px;
}
.title_shu{
    width: 6px;
    height: 24px;
    background-image: linear-gradient(0deg, #E60064 0%, #E65064 100%);
    border-radius: 4px;
}
.rankFlex{
  width: 1000px;
  display: flex;
  justify-content: space-around;
  margin-left: -24px;
  position: relative;
}
.share1{
  width: 945px;
  height: 302px;
  border-radius: 12px;
  border: 2px solid #222222;
  display: flex;
  position: relative;
  
}
.share1 .left{
  width: 380px;
  height: 262px;
  margin: 20px 0px 20px 20px;
  padding-right: 20px;
  border-right: 1px solid #222;

}
.share1 .left .top{
  width: 100%;
  height: 131px;
  position: relative;
}
.share1 .left .top .title{
  font-family: SourceHanSansCN-Bold;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  width: 113px;
  height: 24px;
  line-height: 24px;

}
.share1 .left .top .detail{
  position: absolute;
  right: 0;
  top: 5px;
  width: 76px;
  height: 20px;
  background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);
  border-radius: 17px;
  text-align: center;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  text-indent: 10px;

}
.share1 .left .top .detail img{
  width: 12px;
  position: absolute;
  top: 4px;
  left: 6px;
}
.share1 .left .top div{
  width: 360px;
  height: 85px;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 10px;
}
.share1 .left .bottom{
  padding-top: 20px;
  width: 100%;
  height: 131px;
  border-top: 1px solid #222;

}
.share1 .left .bottom p:nth-child(1){
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
}
.share1 .left .bottom p:nth-child(2){
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
}
.share1 .left .bottom p:nth-child(2) span{
  color: #E60064;
}
.share1 .left .bottom .jinduTiao{
    width: 100%;
    height: 18px;
    margin-top: 20px;
    position: relative;
}
.share1 .left .bottom .jinduTiao p:nth-child(1){
    width: 100%;
    height: 18px;
    line-height: 12px;
    font-family: SourceHanSansCN-Regular;
    font-size: 12px;
    color: #E60064;
    letter-spacing: 0;
}
.share1 .left .bottom .jinduTiao .divJindu .inner{
  height: 12px;
  display: inline-block;
  border-radius: 6px;
  background: #E60064;
  position: absolute;
  color: #fff;
  line-height: 10px;
  text-indent: 5px;
  font-family: SourceHanSansCN-Regular;
  font-size: 10px;
}
.share1 .left .bottom .jinduTiao p:nth-child(2){
  width: 374px;
  height: 12px;
  background: #222;
  border-radius: 6px;
  /*position: absolute;
  top: 1px;
  left: 90px;*/
}
.share1 .left .bottom .tips{
  font-family: SourceHanSansCN-Regular;
  font-size: 10px;
  color: #100F0F;
  letter-spacing: 0;
  width: 365px;
  height: 20px;
  background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);
  border-radius: 12px;
  margin-top: 20px;
  padding-left: 10px;
  position: relative;
  text-indent: 12px;
}
.share1 .left .bottom .tips img{
    display: inline-block;
    width: 12px;
    position: absolute;
    top: 3px;
    left: 7px;
}
.share1 .right{
    width: 514px;
    height: 262px;
    margin: 20px 0px 20px 0px;
    padding-left: 20px;
}
.right_box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}
.share1 .right .title{
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
}
.share1 .right .bottom{
  width: 66px;
  height: 110px;
  margin-right: 33px;
  /*margin-top: 8px;*/

}
.share1 .right .bottom img{
  display: inline-block;
  width: 66px;
}
.share1 .right .bottom .name{
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  width: 66px;
  height: 18px;
  display: inline-block;
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  text-overflow:ellipsis;
  text-align: center;
}
.share1 .right .bottom .state{
  margin: -3px 0px 4px 0px;
  width: 70px;
  text-align: center;
  height: 16px;
  font-family: SourceHanSansCN-Regular;
  font-size: 10px;
  color: #87C702;
  letter-spacing: 0;

}
.stateLimit{
  font-family: SourceHanSansCN-Regular;
  font-size: 10px;
  color: #E60064!important;
  letter-spacing: 0;
  text-align: center;
}
.share1 .right .bottom .btn{
  width: 60px;
  text-align: center;
  height: 18px;
  line-height: 16px;
  background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
  border-radius: 17px;
  font-family: SourceHanSansCN-Bold;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  margin-left: 3px;
}
.btnAlreadyGet{
  background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%)!important;
  color: #100F0F!important;
}
.actiDescription{
  position: absolute;
  top: 20px;
  left: 410px;
  width: 474px;
  padding: 20px;
  background-image: linear-gradient(90deg, #272727 0%, #191919 100%);
  border-radius: 12px;
  z-index: 888;
  border:1px solid #464646;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  letter-spacing: 0;
  line-height: 18px;

}
.actiDescription .title{
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-bottom: 8px;
}
.spreadBtn{
  width: 226px;
  height: 48px;
  line-height: 48px;
  background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
  border-radius: 24px;
  font-family: SourceHanSansCN-Bold;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  margin-top: 30px;
  margin-left: 365px;
  
}
.getPrize{
    width: 334px;
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
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
  color:#fff;
  margin-bottom: 45px;
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
