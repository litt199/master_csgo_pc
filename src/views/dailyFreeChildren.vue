<template>
  <div class="">
        <div class="nav_left">
              <div class="huadong">
                  <div v-for=" (item,index) in list" :key="index" :class="huaIndex==index?'act kuai':'kuai'" @click="iwantToDraw(index)">
                        <p v-if="item.money!=null">${{item.money}}</p>
                        <p v-if="item.money!=null" class="huames">现金红包</p>


                        <p v-if="item.money==null&&item.goodsId==null">谢谢参与</p>       
                        <p v-if="item.goodsId=='1'">我要抽奖</p>       

                        <img v-if="item.goodsPiture!=null" :src="item.goodsPiture" alt="" class="xiaotupian">  
                        <p v-if="item.goodsName!=null" class="huames xianshixiaodian">{{item.goodsName}}</p>

                  </div>
                  <div class="chance">
                    您当前还有 <span>{{total}}</span> 次抽奖机会
                  </div>
              </div>
             <div class="huaDongNews">
                <div class="roll">获奖名单：</div>
                <div class="dsdsdsw"   ref='area'>
                      <ul class="plam_box" ref='con1'>
                        <li v-for="(item,index) in palmNews" :key="index">
                            恭喜{{item.nickName}}获得: 
                            <span v-if="item.goodsName==null"> ${{item.money}}</span>
                            <span class="dsdsddsdsdsdd" v-if="item.goodsName!=null"> {{item.goodsName}} </span>
                        </li>
                      </ul>
                      <ul class="plam_box" ref='con2'>
                        <li v-for="(item,index) in palmNews" :key="index">
                          恭喜{{item.nickName}}获得: 
                            <span v-if="item.goodsName==null"> ${{item.money}}</span>
                            <span class="dsdsddsdsdsdd" v-if="item.goodsName!=null"> {{item.goodsName}} </span>
                          
                        </li>
                      </ul>
                </div>
             </div>
          </div>
         
          <div class="nav_bottom">
              <div class="winners">中奖信息</div>
              <div class="btto_box">
                  <div v-for="(item,index) in allzhongjiang" :key="index"  class="nav_bottom_list">
                    <img v-if="item.goodsPiture!=null" :src="item.goodsPiture" alt="">
                    <div class="daole" v-if="item.money!=null">${{item.money}}</div>
                    <p v-if="item.money==null" class="dsds dsdsddsdsdsdd">{{item.goodsName}}</p>
                    <p v-if="item.money!=null" class="dsds">现金奖励</p>
                    <p>{{item.createDate}}</p>  
                  </div>
                 
              </div>
              
          </div>
          <div class="explain nav_bottom">
              <div class="dsdsdsds">每日免费规则说明<span></span></div>
              <div class="pppp"> 
                <p>1. 注册用户每日可免费获得一次“免费抽取”的次数，除此无其他获取方式 </p>
                <p>2. “每日免费”的奖品包含武器皮肤和奖金；其中武器皮肤放至您的背包中；中奖为“奖金”时，将直接在您的余额中增加</p>
                <p>3. 可通过“提高当天在线时长”、“提高当日充销或开箱次数”、“完善个人信息”等方式增加抽中优质奖品的概率</p>
                <p>4. 本活动为平台提供的福利，仅作为娱乐或体验开箱的一种方式</p>
              </div>
              
          </div>

          <div v-if="showTanchuang" class="">
              <div class="bgcccc" @click="exit"></div>
              <div class="tanchuang">
                    <p  v-if="!zhongjiangimg">${{mongey}}</p>
                    <img class="dsdsdwewe" v-if="zhongjiangimg" :src="zhongjiangimg" alt="">
                    <p>恭喜中奖</p>
                    <p v-if="zhongjiangimg">获得:<span>{{chucunmignzi}}</span></p>
                    <p v-if="!zhongjiangimg">获得:现金红包</p>
                    <p v-if="zhongjiangimg">已存入背包</p>
                    <p v-if="!zhongjiangimg">已发放至余额</p>
                    <p v-cursor v-if="!zhongjiangimg" @click="topMyCnter">查看我的余额</p>
                    <p v-cursor v-if="zhongjiangimg" @click="topMyCnter">前往背包查看</p>
                    <p  v-cursor @click="exit">知道了</p>
                    
              </div>
          </div>
  </div>
</template>

<script>

import {Message} from 'element-ui'
import {getRolldata,everyDayPrize,everyDayPrizeList,allRecord,recordAll,getCodeNumber} from '../axios/Apilogin'
import Bus from '../axios/Bus'
export default {
  name: '',
  components: {
  

  },
  data() {
    return {
      chucunmignzi:'',
      showTanchuang:false,
      mongey:0,  //储存中奖金额
      zhongjiangimg:"",  //储存图片
 //获奖名单
      palmNews:[
        {
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },
        {
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },
        {
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        },{
          title:"138100000000",
          msg:"AK-47",
          level:"二西莫夫"
        }
      ],  
       list:[
         {
           img:"",
          title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
         title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
          title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
         title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
           title:'我要抽奖',
         },
         {
           img:"",
           title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
          title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
          title:'0',
           msg:"谢谢惠顾"
         },
         {
           img:"",
           title:'0',
           msg:"谢谢惠顾"
         },
         
       ],
       imgbg:this.$store.getters.neiimg2.image,
       newsList: [{
         "content":1234
       },
       {
         "content":1234
       }
       ],
       knowimg:true,  //轮播文字
       riactive:true,
       huaIndex:1, //小方块转到哪里
      
       timerMi:"", //定时任务
       timerSet:20,  //定时器执行速度
       rightTimer:"",  //右侧定时器
       datemine:0,  //奖品顺序
       allzhongjiang:[],   //自己中奖内容
       total:0,  //抽奖的次数
       suo:"",  //控制抽奖的锁
    } 
   
  },
  destroyed(){
     Bus.$off('changeTimer')
  },
  created(){
    var that=this;
    Bus.$on('changeTimer',content=>{   //监听登录事件
        // console.log(_this.stateRegister);
        if(content==1){
          that.everyDayPr();
            this.allre();
          //获取自己中奖内容
          this.recordAlls();
          //显示抽奖次数
          this.getcode()
        }
    })
  },
  mounted(){
    var area = this.$refs.area;
    var con1 = this.$refs.con1;
    var con2 = this.$refs.con2;
    area.scrollTop = 0;
    this.rightTimer = setInterval(function(){
          if(area.scrollTop>= con1.scrollHeight) {
            area.scrollTop = 0;
          }else{
            area.scrollTop ++; //向上滚动
    
          } 
    },50)

  //获取奖品内容
  this.everyDayPr()
  //获取中奖名单
  this.allre();
  //获取自己中奖内容
  this.recordAlls();
  //显示抽奖次数
  this.getcode()
  },
  destroyed(){
    
     this.timerMi=null;
     this.rightTimer=null
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
    //显示弹窗
  exit(){
    this.showTanchuang=false
  },

  topMyCnter(){
    this.$router.push({
      path:"/public_box_home/myCenter"
    })
  },
    //显示几次抽奖信息
    getcode(){
      getCodeNumber().then((res)=>{
        if(res.code==0){
          this.total=res.total
        }
      })
    },
    
  //获取自己的中奖内容
    recordAlls(){
      recordAll().then((res)=>{
      
        if(res!=undefined){
          if(res.code==0){
              this.allzhongjiang=res.data;
          }
        }
      })
    },


  //获取获奖名单
  allre(){
     allRecord().then((res)=>{
        if(res!=undefined){
          if(res.code==0){
              this.palmNews=res.data
          }
        }
     })
  }, 


    //获取抽奖的奖品内容
    everyDayPr(){
        everyDayPrizeList().then((res)=>{
 
          if(res!=undefined){
            if(res.code==0){
              let evelist = res.data;
              const title={
                goodsId:"1",
                img:'',
                title:'我要抽奖'
              }
           
              evelist.splice(4,0,title)
              this.list=evelist;
  
            }
          }
        })
    },

    //点击我要抽奖
    iwantToDraw(e){
      if(e==4){
        if(this.suo){
          return
        }
        this.suo=true;
        everyDayPrize().then((res)=>{
          if(res!=undefined){
            if(res.code==0){
                this.datemine= res.data.index;
                console.log(res.data)
                  this.mongey=res.data.money;
                  this.zhongjiangimg=res.data.goodsPiture;
                  this.chucunmignzi=res.data.goodsName;
                this.open();
            }else{
              Message({
                message:res.msg,
                type:'error'
              })
              this.suo=false;
            }
          }else{
              this.suo=false;
          }
        })
      }
    },



  //定时器方法
    dingshiqi(index,controller,timerSet,arr){
      var that=this;

      //根据返回的数值，来确定，我需要到哪个地方停下来
      let deterMine = that.datemine;
 
        that.timerMi = setInterval(function(){   //定时任务            
            if(index ===arr.length){   //如果小方块到最后一个，则自动变为第一个
              index=0;
            }
            that.huaIndex = arr[index] 
            index++; //下标加1
            controller++;  //控制器速度加1
            if(controller>30&&controller<80){
              timerSet = 50;
              clearInterval(that.timerMi)
              that.dingshiqi(index,controller,timerSet,arr)
            }else if(controller>80&&controller<90){
              timerSet =100;
              clearInterval(that.timerMi)
              that.dingshiqi(index,controller,timerSet,arr)
            }else if(controller>90&&controller<95){
              timerSet = 200;
              clearInterval(that.timerMi)
              that.dingshiqi(index,controller,timerSet,arr)
            }else if(controller>95&&controller<99){
              timerSet = 300;
              clearInterval(that.timerMi)
              that.dingshiqi(index,controller,timerSet,arr)
            }else if(controller>99&&controller<101){
              timerSet = 400;
              clearInterval(that.timerMi)
              that.dingshiqi(index,controller,timerSet,arr)
            }else if(controller>102+deterMine){
              clearInterval(that.timerMi)
              that.recordAlls();  //刷新下面的中奖列表
              that.getcode();  //刷新次数
              Bus.$emit('moneySell',1)
              that.suo=false;
              setTimeout(() => {
                   if(that.mongey!=null||that.zhongjiangimg!=null){
                  that.showTanchuang=true;
              }
              }, 1000);
              
              
            }
          },timerSet)
    },


    //执行速度和时间时间
      open(){
          var arr = [1,2,5,8,7,6,3,0]
          var that=this;
          var controller = 0;  //控制器，专门控制定时任务的执行快慢的
          var timerSet = that.timerSet;     //获取定时器的速度时间
          var index=1;  //起始位置
          this.dingshiqi(index,controller,timerSet,arr)
      },
  }
}
</script>

<style scoped>
.nav_left{
  width: 975px;
  height: 435px;
  display: flex;
}
.huadong{
  width: 502px;
  height: 310px;
  display: flex;
  flex-flow: wrap;
  margin-left: 77px;
  margin-top: 50px;
}
.huames{
  font-size: 12px;
}
.kuai{
 width: 164px;
  height: 100px;
  background: -webkit-linear-gradient(top,#272727,#191919);
  background: -moz-linear-gradient(top,#272727,#191919);
  background: -ms-linear-gradient(top,#272727,#191919);
  background: -o-linear-gradient(top,#272727,#191919);
  background: linear-gradient(top,#272727,#191919);
  border-radius: 12px;
  margin-right: 3px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #AAAAAA;
  font-size: 14px;
}
.kuai.act{
   width: 160px;
   height: 96px;
   border:2px solid #E60064;
   color: #fff;
}
.huadong .kuai:nth-child(5){
  background: -webkit-linear-gradient(right,#E65064,#E60064);
  background: -moz-linear-gradient(right,#E65064,#E60064);
  background: -ms-linear-gradient(right,#E65064,#E60064);
  background: -o-linear-gradient(right,#E65064,#E60064);
  background: linear-gradient(right,#E65064,#E60064);
  font-size: 20px;
  color: #fff;
  cursor:pointer
}
.huadong .kuai:nth-child(5):hover{
 font-size: 19px;
}
.chance{
  margin: 20px auto;
  font-size: 14px;
  color: #AAAAAA;
}
.chance span{
  color: #e63464;
}
.huaDongNews{
    height: 300px;
	width: 260px;
    margin-top: 45px;
    margin-left: 100px;
    color: #fff;
    overflow: hidden;
}
.huaDongNews .roll  {
  font-size: 16px;
  margin-bottom: 20px;
}
.dsdsdsw{
  overflow: hidden;
  height: 300px;
	width: 260px;
}
.plam_box{

  overflow: hidden;
  font-size: 12px;
}
.plam_box li{
  margin-bottom: 13px;
  color:#AAAAAA ;
     overflow: hidden;/*超出部分隐藏*/
     white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
}
.plam_box li span{
  color: #E60064;
}
.nav_bottom{
  width: 911px;
  height: 157px;
  border: 2px solid #464646;
  border-radius: 12px;
  margin-left: 77px;
  margin-top: 20px;
  display: flex;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
 
}
.btto_box{
  display: flex;
}
.explain.nav_bottom{
  border: none;
  display: block;
  color: #666666;
}
.nav_bottom_list{
    font-size: 12px;
    width: 130px;
    justify-content: flex-end;
    align-items:center;
    height: 90%;
    display: flex;
    flex-direction: column;
 
}
.nav_bottom_list img{
  width: 100px;
  margin-bottom: -10px;
}
.nav_bottom_list .dsds{
  color: #E60064;
  width: 80%;
  display: flex;
  justify-content: center;
}
.winners{
  position: absolute;
  color: #fff;
  font-size: 14px;
  left: 15px;
  top: 5px;
}
.dsdsdsds{
  width: 100%;
  height: 20px;
  align-items: center;
  display: flex;
}
.explain span{
  width: 750px;
  margin-left: 20px;
  height: 2px;
  background-color: #222222 ;
  display: block;
}
.pppp{
  margin-top: 10px;
}
.xiaotupian{
  width: 80px;
}
.xianshixiaodian{
  width: 80%;
   overflow: hidden;/*超出部分隐藏*/
     white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    margin-top: -10px;
}
.dsdsddsdsdsdd{
  
   overflow: hidden;/*超出部分隐藏*/
     white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
}
.daole{
  font-size: 40px;
  color: #e63e64;
}
.tanchuang{
  width: 320px;
  height: 418px;
  background: -webkit-linear-gradient(left,#E60064 ,#E65064);
  background: -moz-linear-gradient(left,#E60064 ,#E65064);
  background: -ms-linear-gradient(left,#E60064,#E65064);
  background: -o-linear-gradient(left,#E60064,#E65064);
  background: linear-gradient(left,#E60064,#E65064);
  position: absolute;
  left: 25%;
  top: -50px;
  border-radius: 12px;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  color: #fff;
}
.tanchuang p:first-child{
  font-size: 60px;
  margin-top: 60px;
}
.tanchuang p:nth-child(2){
  font-size: 32px;
  font-weight: 800;
   margin-top: 30px;
}
.tanchuang p:nth-child(3){
  font-size: 14px;
}
.tanchuang p:nth-child(4){
  color: #840039;
  margin-top: 15px;
}
.tanchuang p:nth-child(5){
  width: 215px;
  height: 34px;
  background-color: #840039;
  color: #fff;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  border-radius: 20px;
  margin-top: 25px;
}
.tanchuang p:last-child{
  width: 215px;
  height: 34px;
  font-weight: 800;
  border:1px solid #840039;
  color: #840039;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 20px;
}
.bgcccc{
  width: 1910px;
  height: 1080px;
  background-color: #000;
  position: fixed;
  opacity: 0.7;
  top: 0;
  left: 0px;
  z-index: 10;
}
.dsdsdwewe{
  width: 162px;
  margin-top:0px;
}
</style>
