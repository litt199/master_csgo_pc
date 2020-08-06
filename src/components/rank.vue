<template>
    <div class="rankList">
      <p class="rankTitle">{{title.title}}排名</p>
      <div class="rankList_Bottom">
        <div class="rankList_Bottom_tile">
          <p>排名</p>
          <p>{{title.title}}</p>
          <p>账号</p>
        </div>
        <div class="list" v-for="(item,index) in rankList" :key="item.index" v-show="peopleListShow">
          <img v-show="((index+1)<=3)?true:false" v-lazy="(index+1)===1?imgSrc.imgTop1:(index+1)===2?imgSrc.imgTop2:(index+1)===3?imgSrc.imgTop3:''" alt="">
          <p>No.{{getNum(index+1,2)}}</p>
          <p>{{item.inviteCount}}</p>
          <p>{{item.userName}}</p>
        </div>
        <div class="list" v-for="(item,index) in rankList" :key="item.index" v-show="investListShow">
          <img v-show="((index+1)<=3)?true:false" v-lazy="(index+1)===1?imgSrc.imgTop1:(index+1)===2?imgSrc.imgTop2:(index+1)===3?imgSrc.imgTop3:''" alt="">
          <p>No.{{getNum(index+1,2)}}</p>
          <p>{{item.inviteRecharegeAmount}}</p>
          <p>{{item.userName}}</p>
        </div>
        <!--排名开始-->
        <div class="bottom" v-show="!title.show">
          <div class="myrank">我的{{title.title}}：<span>{{myrank.inviteCount}}</span></div>
          <div class="myrank1">我的排名：<span>{{myrank.rankpeople}}</span></div>
          <div class="myrank2" v-if="myrankChange.fetched1==1">已领取</div>
          <div v-else :class="(myrank.rankpeople<=10&&isDuringDate(myrank.fetchedStart1,myrank.fetchedEnd1)&&myrank.fetched1==0)?'myrank2 select':'myrank2'" @click="isDuringDate(myrank.fetchedStart1,myrank.fetchedEnd1)&&getPrize(1,myrank.promotionId1)" v-cursor>领取奖励</div>
        </div>

        <div class="bottom" v-show="title.show">
          <div class="myrank">我的{{title.title}}：<span>${{myrank.rechargeAmount}}</span></div>
          <div class="myrank1">我的排名：<span>{{myrank.rankInvest}}</span></div>
          <div v-if="myrankChange.fetched2==1"  class="myrank2">已领取</div>
          <div v-else :class="(myrank.rankInvest<=10&&isDuringDate(myrank.fetchedStart2,myrank.fetchedEnd2)&&myrank.fetched2==0)?'myrank2 select':'myrank2'" @click="isDuringDate(myrank.fetchedStart2,myrank.fetchedEnd2)&&getPrize(2,myrank.promotionId2)" v-cursor>领取奖励</div>
        </div>
      </div>
       <!--排名结束-->
      <!--奖励开始-->
      <div class="rankBottom">
        <p class="title">排名奖励</p>
        <div class="prizeAll">
          <div class="prizeList" v-for="(item,index) in prizelist" :key="index">
            <div v-show="index<4">
              <p class="p1" v-show="index<3">No.{{index+1}}</p>
                <p class="p2" v-show="index===3">No.{{index+1}}-10</p>
                <img class="img1" :src="item.prizeImage" alt="">
              <p class="p3">{{item.prizeName}}</p>
              <!--<div class="p3Show" v-show="true" ref="p3Show">{{item.prizeName}}</div>-->
            </div>
          </div>
          
        </div>
      </div>
      
       <!--奖励结束-->
       
    </div>
</template>
<script>
import { Message } from 'element-ui';
import {GetPrize} from "../axios/PersonalApi"
export default {
  name: '',
  components: {},
  props:{
      rankList:{
          type:Array,
          default:[]
      },
      peopleListShow:{
        default:false
      },
      investListShow:{
        default:false
      },
      title:{
          type:Object,
          default:{}
      },
      prizelist:{
        type:Array,
          default:[]
      },
      myrank:{
        type:Object,
        default:{}
      }
  },
  data() {
    return {
        myrankChange:this.myrank,
        imgSrc:{
            "imgTop1":require("../assets/spread/top1.png"),
            "imgTop2":require("../assets/spread/top2.png"),
            "imgTop3":require("../assets/spread/top3.png"),
        },
        p3Show:false,
        p3ShowName:null,
        
    }
  },
  mounted(){

  },
  created(){
    // console.log("-------------------------子组件")
    // console.log(this.prizelist)
    // console.log(this.myrank)  
  },
  methods:{
    //计算时间
    isDuringDate(beginDateStr, endDateStr){
        var curDate = new Date(),
            beginDate = new Date(beginDateStr),
            endDate = new Date(endDateStr);
        if (curDate >= beginDate && curDate <= endDate) {
            return true;
        }
        return false;
    },
    //领取奖励
    getPrize(num,promotionId){
      if(num===1&&this.myrank.rankpeople=="未上榜"){
        return;
      }
      if(num===2&&this.myrank.rankInvest=="未上榜"){
        return;
      }
      const params={
        "promotionId":promotionId
      }
      GetPrize(params).then(res=>{
        if(res!=undefined){
          if(res.code===0){
            this.myrankChange.fetched1=true;
            this.myrankChange.fetched2=true;
            // this.$emit("getMyRank");
             Message({
                message:"领取成功,已自动放入背包",
                type:'success'
             })
          }
        }
      });
    },
    //排序前面补零
    getNum(num,length){
      return (Array(length).join('0') + num).slice(-length);
    },
  }
}
</script>
<style scoped>
.rankList{
  width: 450px;
}
.rankTitle{
  font-family: SourceHanSansCN-Bold;
  font-size: 24px;
  color: #444444;
  letter-spacing: 0;
  text-align: center;
  margin: 5px 0;
}
.rankList_Bottom{
  width: 450px;
  /*height: 460px;*/
  border: 2px solid #222222;
  border-radius: 12px;
}
.rankList_Bottom_tile{
  width: 450px;
  height: 52px;
  background: #222222;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.rankList_Bottom_tile p{
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  letter-spacing: 0;
  text-align: center;
}
.rankList_Bottom .list{
  width: 450px;
  height: 33px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.rankList_Bottom .list img{
    width: 22px;
    height: 15px;
    position: absolute;
    left: 30px;
    top: 7px;
}
.rankList_Bottom .list p{
  width: 150px;
  height: 33px;
  line-height: 33px;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  color: #AAAAAA;
  letter-spacing: 0;
  text-align: center;
  border: 1px solid #222222;
}
.rankList_Bottom .bottom{
  width: 450px;
  height: 80px;
  background: #222222;
  border-radius: 0px 0px 8px 8px;
  position: relative;
}
.rankList_Bottom .bottom .myrank{
  position: absolute;
  top: 18px;
  left: 31px;
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #AAAAAA;
  letter-spacing: 0;
}
.rankList_Bottom .bottom .myrank span{
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
}
.rankList_Bottom .bottom .myrank1{
  position: absolute;
  top: 42px;
  left: 31px;
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #AAAAAA;
  letter-spacing: 0;
}
.rankList_Bottom .bottom .myrank1 span{
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #E60064;
  letter-spacing: 0;
}
.rankList_Bottom .bottom .myrank2{
  position: absolute;
  top: 26px;
  right: 31px;
  width: 96px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);
  border-radius: 17px;
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
}
.select{
  background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%)!important;
  color: #FFFFFF!important;
}
.rankBottom{
  width: 450px;
  height: 180px;
  border: 2px solid #222222;
  border-radius: 12px;
  margin-top: 10px;
}
.rankBottom .title{
  font-family: SourceHanSansCN-Bold;
  font-size: 24px;
  color: #444444;
  letter-spacing: 0;
  text-align: center;
  height: 65px;
  line-height: 65px;
}
.prizeAll{
  width: 450px;
  display: flex;
  justify-content: space-around;
  /*margin-left: 20px;*/
}
.prizeList{
  height: 98px;
}
.prizeList .img1{
  display: inline-block;
  width: 87px;
  height: 60px;
}
.prizeList .p1,.p2{
  font-family: SourceHanSansCN-Bold;
  font-size: 14px;
  color: #E60064;
  text-align: center;
}
.prizeList .p3{
  font-family: SourceHanSansCN-Regular;
  width: 87px;
  font-size: 10px;
  color: #AAAAAA;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.p3Show{
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 0px;
  color: #fff;
}
</style>
