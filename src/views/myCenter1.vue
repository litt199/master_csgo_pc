<template>
  <div class="csgo">

       <div class="bg">
            <img  :src="imgbg" alt="" @click="myyouhuiquan3">
        </div>
        <!-- <div class="ROLLfuli">
            个人中心
        </div> -->
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
          <div class="box_left_box">
          <!-- <div class="box_left"> -->
              <!-- <publicBoxLeft class="public_box" v-for="(item,index) in list" :key="index"></publicBoxLeft> -->
          <!-- </div> -->
           <div class="box_right">
               <!-- 个人信息 -->
                <div class="message_box">
                        <!--<img class="img" src="../assets/myCenter/2.png" alt="">-->
                        <div class="message_box_left">
                            <div class="header_box">
                                <img :src="message.avatar==null?avatar:message.avatar" alt="">
                            </div>
                            <div class="header_right_box">
                                <p>个人信息</p>
                                <p>{{message.nickName}}</p>
<!--                                <img src="../assets/myCenter/4.png" alt="">-->
                            </div>
                        </div>
                        <div class="message_box_center">
                                 <p>账户余额</p>
                                <p>${{message.money}}</p>
                                <div class="chognzhi_box">
                                    <div class="div" @click="topUp" v-cursor>
                                        <div class="xie"></div>
                                        充值
                                    </div>
                                    <div class="div1" @click="myyouhuiquan"  v-show="!youhuiquanstate" v-cursor>
                                        <div class="xie1"></div>
                                        我的优惠券
                                    </div>
                                     <div class="div1" @click="myyouhuiquan1" v-show="youhuiquanstate" v-cursor>
                                        <div class="xie1"></div>
                                        我的背包
                                    </div>
                                    <!-- <div class="youhuaxie_box">
                                        <div class="youhuaxie"></div>
                                         我的优惠券
                                        </div> -->
                                </div>
                        </div>
                        <div class="message_box_right">
                                <p>取回须知</p>
                                <p>金额大于 1$ 的饰品即可取回！</p>
                                <p>取回时间0-8天</p>
                                <p>请耐心等待</p>
                                <!--<div class="chognzhi_box1">
                                    <div class="div1">
                                        <div class="xie1"></div>
                                        我要积分
                                    </div>
                                </div>-->
                        </div>
                </div>

            <!-- steam交易链接 -->
            <div class="steam_box">
                <!--<img class="steam_img_bg" src="../assets/myCenter/5.png" alt="">-->
                <div class="steam_box_sizing">
                    <div class="p">
                        <p>steam交易链接</p>
                        <p class="p11">{{transactionUrl}}</p>
                    </div>
                    <!--<img class="steam_img_lianjie" src="../assets/myCenter/6.png" alt="" @click="changeSteamLink">
                    <img src="../assets/myCenter/7.png" alt="">-->
                    <span class="steam_img_lianjie" @click="changeSteamLink" v-cursor>更换交易链接</span>
                    <a target="_blank" href='https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url' class="steam_img_lianjie1">如何获得交易链接</a>
                </div>
               
            </div>
               <!--更换交易链接弹窗-->
               <div class="steam_box_tip" v-show="tipState">
                    <img src="../assets/myCenter/change.png">
                    <img src="../assets/myCenter/changeBtn.png">
                    <input type="text" v-on:keyup.enter = "changeSteamLink" ref="steamLink" placeholder="请更换交易链接"/>
                    <button @click="changeSteamLink">更换</button>
               </div>


               <div class="hengxian_box">
                    <div class="right_top_heng">
                        <!--<img src="../assets/csgo/4.png" alt="">-->
                        <div class="right_top_shu"></div>
                        <p>{{mybackpack}}</p>
                        <!--<img class="hengxian" src="../assets/myCenter/8.png" alt="">-->
                    </div>
                    <div class="heng_top" v-show='!youhuiquanstate'>
                        <el-input placeholder="输入要搜索的饰品名称" v-model="textInput" class="input-with-select" @keyup.enter.native="search" @clear.native="search">
                            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                        </el-input>
                        <p class="changeWord">状态</p>
                        <el-select v-model="itemall" placeholder="全部" class="status" @change="handleItemall">
                            <el-option
                            v-for="item in changeAll"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <p class="changeWord">分类</p>
                        <el-select v-model="changeitem" placeholder="全部" class="status" @change="handleDsnone">
                            <el-option
                            v-for="item in change"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <p class="changeWord1">价格</p>
                        <div class="triangle" @click="priceClick">
                            <div :class="sortByPrice===''?'up':(sortByPrice===1?'up selectup':'up')"></div>
                            <div :class="sortByPrice===''?'down':(sortByPrice===0?'down selectdown':'down')"></div>
                        </div>
                        <div class="selectChecked">
                            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"></el-checkbox>
                            <p class="changeWord">全选</p>
                            <div>已选<span>{{checkedGoods.length}}</span><span>/</span><span>{{goodsOption.length}}</span></div>
                            <div @click="sellTip"  v-cursor>出售</div>
                            <div @click="takeTip"  v-cursor>取回</div>
                        </div>
                        <!--出售物品弹窗-->
                        <div class="sellDiv" v-show="sellState.sellTipState">
                            <p class="p11">您出售{{sellState.sellName}}等<span>{{sellState.sellCount+this.takeCount}}</span>件物品</p>
                            <!--多状态添加的文字-->
                            <p class="p12" v-show="sellState.muchState">其中{{takeState.sellName}}等{{this.takeCount}}件装备在取回中，中途变更为出售平台会以售价为95折回收</p>
                            <p class="p13">将获得${{sellState.sellMoney}}，是否继续？</p>
                            <p class="p14" v-show="sellState.muchState">
                                <el-checkbox :value="showFrozenAccount" @change="takeAllSelect"></el-checkbox>
                                您也可以在本次出售中一键去除“取回中”的饰品
                            </p>
                            <div class="btnDiv">
                              <p @click="sellGoods" class="button button2" v-cursor>是，我要出售</p>
                              <p @click="closeSell" class="button button1" v-cursor>否，我再考虑下</p>
                              
                            </div>
                            
                        </div>
                        <!--取回物品弹窗-->
                        <div class="takeDiv" v-show="takeState.takeTipState">
                            <p class="p11">您取回{{sellState.sellName}}等<span>{{sellState.sellCount}}</span>件物品</p>
                            <p class="p13">取回操作后，仍可在本页面查看取回状态，是否继续？</p>
                            <!--多状态添加的文字-->
                            <p class="p14" v-show="takeState.muchState">已为您自动去除“取回中”的饰品</p>
                            <div class="btnDiv">
                              <p @click="getGoods" class="button button2" v-cursor>是，我要取回</p>
                              <p @click="closeTake" class="button button1" v-cursor>否，我再考虑下</p>
                              
                            </div>

                        </div>
                        <!--物品全部为取回状态-->
                        <div class="allTake" v-show="takeState.allAlreadyTake">
                            <p class="allTakeP1">取回中的饰品不可再次取回</p>
                            <p class="allTakeP2" @click="backFunc" v-cursor>返回</p>
                        </div>

                    </div>
                   
                    <div class="Double_box" v-show="!youhuiquanstate">
                       <publicDobleColor2 @sendAllDataFunc="getAllData" ref="childFunc"></publicDobleColor2>
                    </div>

                    <div class="chassCound" v-show="youhuiquanstate">
                        <youhuiquan  
                         v-for='(item,index) in coundList' :key="index"
                         :price='item.faceValue'
                         :limitValue='item.limitValue'
                         :startDate='item.startDate'
                         :expireDate='item.expireDate'
                         :detail='item.detail'
                         @FhandleUse='clickFuse(item.id,item.couponId,item.faceValue,item.limitValue,item.usedFlag)'
                         :filter='item.usedFlag'
                         >
                        </youhuiquan>
                    </div>
               </div>

               <!--  -->

               <!-- 弹窗取回 -->
                <div class="takeBack" v-show="takeBack">
                    <xuanzhuan1
                        @getGood='getGoods'
                        :goodsDetail="list"
                        :isShowTitle='isShowTitle'
                        :price='Emessage1.price'
                        :type='Emessage1.type'
                        :name='Emessage1.name'
                        :firstate='Emessage1.title'
                        :firimage='Emessage1.image'
                        :shou_text="Emessage1.shou_text"
                        :queding_text='Emessage1.queding_text'
                        @changeExit='handleBack_bg'
                        :imgBg_true='FimgBg_true'
                        @Fensure='Fuensure'
                    ></xuanzhuan1>
                </div>
               <!-- 分页 -->
                <!-- <fenye :total="total" :currentPage='current'  :pageLength="pageLength" @pagechange="pagechange"></fenye> -->
                <!--<el-pagination
                    class="el_paination"
                    background
                    layout="prev, pager, next"
                    :page-size='pageLength'
                    @current-change='handleChangefenye'
                    :total="total"
                ></el-pagination>-->
          </div>
      </div>

      <div class="recharge" v-show="recharge">
          <recharge @next="handleClickNext" @changeExit="handleBack_bg"></recharge>
      </div>

    <!--  -->
      <div v-show="Jutiprice">
            <rechargeMoney
            @goback='handleCkickGoback'
            @qrPage="handleClickNextQr"
            @changeExit="handleBack_bg"
            :price="price"
            :payment="payment"
            :youhuistate='fyouhuistate'
            ></rechargeMoney>
      </div>
      <!-- 二维码组件 -->
      <div v-if="qrCode">
          <reQRCode
              @goback='handleCodeGoback'
              @changeExit="handleBack_bg"
              :price="price"
              :payment="payment"
              :id='youhuiquanId'
              :couponId='youhuiquancouponId'
          ></reQRCode>
      </div>

      <div v-show="back_bg" @click="handleBack_bg" class="black_bg"></div>
  </div>
</template>

<script>
import Bus from '../axios/Bus'
import {ChangeSteamLink,PersonalBag} from "../axios/PersonalApi";
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft");  //异步加载组件
const publicDobleColor2 = ()=>import ('../components/publicDobleColor2');
const linxingBox =()=>import('../components/lingxingBox')
import xuanzhuan1 from '../views/xuanzhuan1';

const youhuiquan =()=>import('../components/youhuiquan')

import {
    GetPeople,
    GetProplePrice,
    postGetGood,
    postSellGood,
    PostPayalipy,
    getFirexchangeMall,
    userCenterCoupons
} from '../axios/Apilogin';
import {postGetGood1,postSellGood1,} from '../axios/PersonalApi';
import recharge from './recharge'
import rechargeMoney from './rechargeMoney'
// import fenye from '../components/fenye'
// import reQRCode from './reQRCode'
const reQRCode =()=>import('./reQRCode')
import { Message } from 'element-ui';
import QRCode from 'qrcodejs2'  // 引入qrcode
export default {
  name: '',
  components: {
    publicBoxLeft,
    publicDobleColor2,
    linxingBox,
    recharge,
    rechargeMoney,
    reQRCode,
    xuanzhuan1,
    youhuiquan,
  },
 
  data() {
    return {
        
        imgbg:this.$store.getters.neiimg4.image,
        avatar:require('../assets/avatar/logo_icon.png'),//头像
        youhuiquanShow:true,
        fyouhuistate:0,  //判断是否使用了优惠券
        youhuiquanId:"",  //储存用户使用优惠券id
        youhuiquancouponId:'',  //储存优惠券的id
        mybackpack:"我的背包",
        coundList:[],  //储存优惠券的数组
        youhuiquanstate:false,
        Emessage1:"",  //保存弹窗的内容
        Emessage:"",  //保存取回商品的内容
        takeBack:false,
        isShowTitle:false,
        FimgBg_true:true,
        knowimg:true,
        total: 1,     //记录总条数
        pageLength: 15,//每页显示条数
        current: 1,   //当前的页数
        pageNum:1,
        textInput:"",
        itemall:'全部',
        changeitem:'全部',
        change:[
            {
                value: '全部',
                label: '全部'
            },
            {
                value: '印花及武器箱',
                label: '印花及武器箱'
            },
            {
                value: '匕首',
                label: '匕首'
            },
            {
                value: '手枪',
                label: '手枪'
            },
            {
                value: '步枪',
                label: '步枪'
            },
            {
                value: '冲锋枪',
                label: '冲锋枪'
            },
            {
                value: '微型冲锋枪',
                label: '微型冲锋枪'
            },
            {
                value: '重型武器',
                label: '重型武器'
            },
            {
                value: '手套',
                label: '手套'
            },
            {
                value: '探员',
                label: '探员'
            },
            {
                value: '其他',
                label: '其他'
            }
        ],
        changeAll:[
            {
                value: '全部',
                label: '全部'
            },
            {
                value: '等待发货',
                label: '等待发货'
            },
            {
                value: '已发货',
                label: '已发货'
            },
            {
                value: '已售出',
                label: '已售出'
            }
        ],
        disnone:false,
        disnone1:false,
        goodsName:"",
        price:0,
        payment:0,
        Jutiprice:false,  //具体金额按钮
        back_bg:false,  //背景按钮
        qrCode:false,//二维码显示
        recharge:false,  //选择金额按钮
        transactionUrlTrue:'',  //储存正确的交易链接
        transactionUrl:'',  //储存交易链接
        header:require('../assets/myCenter/3.png'),
        tipState:false,
        goodsState:0,
        gopindex:0,  //储存商品的index用的
        youPageNum:1,
        youPageSize:8,
        box:[],
        message:'',
        list:[],
        goodsOption:[],//所有可操作的物品
        allGoodsLength:0,
        checkAll: false,
        isIndeterminate: false ,//是否处于选择一部分的状态，只控制样式
        checked:false,//是否勾选
        checkedCount:0,
        checkedGoods:[],//所有选中的物品
        allId:"",//传入的id
        allIdMemery:"",
        allIdCut:"",
        takeCount:0,//取回中的物品数量
        sellState:{
            "sellTipState":false,
            "sellName":"",
            "sellCount":0,
            "sellMoney":0,
            "muchState":false
        },
        takeState:{
            "takeTipState":false,
            "takeName":"",
            "muchState":false,
            "allAlreadyTake":false
        },
        showFrozenAccount:false,
        sortByPrice:""

        
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

  watch:{
    // 　isage(){
    // 　　console.log('Emessage.title发生变化')
    // 　}
  },
  created(){
      var that=this;
      Bus.$on('fourceMycenter',data=>{   //事件总线，为了刷新当前页面
          if(data==1){ 
            that.MycenterGetProplePrice();  //获取钱包
            const params={
                'pageNum':this.pageNum,
                'pageSize':this.pageLength
            }
            that.MycenterGetPeople(params);
          }
      })
      Bus.$on('shuaxin',data=>{   //事件总线，为了刷新当前页面
          if(data==1){
            //   console.log(data)
            //   location.reload()//刷新
             that.MycenterGetProplePrice();  //获取钱包
            //   Object.assign(that.$data, that.$options.data().call(that))   //合并对象
          }
      })

  },
  destroyed(){
      Bus.$off('fourceMycenter');
  },

  mounted(){
      const params={
          'pageNum':this.pageNum,
          'pageSize':this.pageLength
      }
     this.MycenterGetPeople(params);
     this.MycenterGetProplePrice();
  },
  methods:{
    //priceClicka价格排序
        priceClick(){
          if(this.sortByPrice===""){
             this.sortByPrice=0;
            this.search()
          }else if( this.sortByPrice===0){
            this.sortByPrice=1;
            this.search()
          }else if( this.sortByPrice===1){
            this.sortByPrice="";
            this.search() 
          }
        },
        //恢复选框状态
        recoverFunc(){
          this.allIdCut=""
          this.showFrozenAccount=false;
          this.isIndeterminate = false;
          this.checkAll = false;
          this.checkedGoods = [];
          this.allId = "";
          var check = {
              "checked":this.checkAll,
              "checkedGoods":this.checkedGoods,
              "goodsOption":this.goodsOption,
              "isIndeterminate":this.isIndeterminate 
          }
          this.$refs.childFunc.childChecked(check)
        },
        backFunc(){
          this.takeState.allAlreadyTake=false;
          this.back_bg=false;
          this.move();
        //   this.recoverFunc()
          
        },
        takeAllSelect(){//出售时点击选框去掉已取回的物品
            //截取掉的id
            // console.log("----------------------this.allId-------------------一开始传入的传入的id")
            // console.log(this.allId)
            if(this.showFrozenAccount==false){
                this.showFrozenAccount=true;
                //剪切掉的取回中物品-开始
                var idCode = this.allId.split(",",this.checkedGoods.length)
                this.allIdCut = idCode.slice(-this.takeCount);
                this.allIdCut = this.allIdCut.join(",")
                //剪切掉的取回中物品-结束
                this.allId = this.allId.split(",",this.checkedGoods.length-this.takeCount).join(",")+",";
            }else if(this.showFrozenAccount==true){
                this.showFrozenAccount=false;
                this.allId = this.allId+this.allIdCut+",";
                this.allIdCut=""
            }          
            //去掉取回中的物品id
            // console.log("----------------------this.allId-------------------最后传入的id")
            // console.log(this.allId)
            // console.log("----------------------this.allIdCut")
            // console.log(this.allIdCut )
            // console.log("-----------------------------------------------------------------")
        },
        closeSell(){
            this.allId = this.allIdMemery;
            this.showFrozenAccount=false;
            this.allIdCut="";
            this.sellState.sellTipState=false
            this.back_bg=false;
            this.move();
        },
        closeTake(){
          this.takeState.takeTipState=false;
          this.back_bg=false;
          this.move();
          
        //   this.recoverFunc()
        },
        //出售弹窗
        sellTip(){
            if(this.allId=="," || this.allId==""){
                Message({
                    message:"请选择饰品！",
                    type:'success'
                })
            }else if(this.takeCount == this.checkedGoods.length){
              if(this.allId=="," || this.allId==""){
                  Message({
                      message:"请选择饰品！",
                      type:'success'
                  })
                } else{
                   this.sellState.sellTipState=true;
                    this.back_bg=true
                    this.stop();
                }
            }else{
                this.sellState.sellTipState=true;
                this.back_bg=true
                this.stop();
            }
        },
        //取回弹窗
        takeTip(){
        //   console.log(this.allId)
            if(this.allId=="," || this.allId==""){
                Message({
                    message:"请选择饰品！",
                    type:'success'
                })
            }else if(this.takeCount == this.checkedGoods.length){
              if(this.allId=="," || this.allId==""){
                  Message({
                      message:"请选择饰品！",
                      type:'success'
                  })
                } else{
                   this.takeState.allAlreadyTake=true;
                   this.back_bg=true
                   this.stop();
                }
            }else{
                this.takeState.takeTipState=true;
                this.back_bg=true
                this.stop();
            }
        },
        //遍历checkedCount
        checkedCountbl(){
          //恢复初始状态
          this.allId = "";
          this.allIdCut="";
          this.showFrozenAccount=false;
          this.sellState.sellMoney=0;
          this.sellState.sellName="";
          this.sellState.muchState=false;
          this.takeState.takeName=""
          this.takeCount=0;
          var indexGoods0=0;
          var indexGoods1=0;
          //根据state状态遍历得到this.checkedGoods，后面去allId就会按照顺序
          var max=null;
            for(var i=0; i< this.checkedGoods.length; i++){
　　　　　　　　　　//外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
                for(var j=i; j< this.checkedGoods.length; j++){
                    if( this.checkedGoods[i].state> this.checkedGoods[j].state){
                        //如果arr[j]大就把此时的值赋值给最大值变量max
　　　　　　　　　　　　　 max=this.checkedGoods[j];
                        this.checkedGoods[j]=this.checkedGoods[i];
                        this.checkedGoods[i]=max;
                    }
                }
            }
        //   console.log("-------------改变顺序之后   打印checkedGoods")
        //   console.log(this.checkedGoods)
          this.checkedGoods.forEach((item,index)=>{
              if(item.state===1){
                this.sellState.sellMoney = Number(this.sellState.sellMoney)+(item.price*0.95);
              }else{
                this.sellState.sellMoney = Number(this.sellState.sellMoney)+item.price;
              }
              this.allId+=item.id+",";
              if(item.state===0){
                  this.takeState.muchState=true//多种状态标识
                  if(indexGoods0<=1){
                      this.sellState.sellName +=item.name+""+item.type+",";
                  }
                  indexGoods0++;
              }
              if(item.state===1){
                  this.sellState.muchState=true//多种状态标识
                  if(indexGoods1<=1){
                      this.takeState.takeName +=item.name+""+item.type+",";
                  }
                  indexGoods1++
              }
              if(item.state===1){//计算有几个取回中的饰品
                  this.takeCount++;
              } 
          })


          this.allIdMemery = this.allId;
        //   console.log("-------------allId")
        //   console.log(this.allId)
          
          this.sellState.sellCount = this.checkedGoods.length-this.takeCount;
          this.sellState.sellMoney=this.sellState.sellMoney.toFixed(2)
        },
      //获取子组件传过来的值
      getAllData(data){
        //   console.log("------------------------从子组件传过来的值")
        //   console.log(data)
          this.checkAll = data.checkAll
          this.isIndeterminate = data.isIndeterminate
          this.checkedGoods = data.checkedGoods;
          this.goodsOption = data.goodsOption;
          this.pageNum = data.pageNum;
          this.checkedCountbl();
          
      },
      //多选框事件
      handleCheckAllChange(val){   
        if(this.goodsOption.length===0){
            Message({
                message:"无可选饰品！",
                type:'success'
            })
            this.checkAll=false;
            this.isIndeterminate=false;
        }else{
            this.checkedGoods = val ? this.goodsOption : [];
            this.checkedCount = this.checkedGoods.length;
            var check = {
                "checked":this.checkAll,
                "checkedGoods":this.checkedGoods,
                "goodsOption":this.goodsOption
            }
            this.isIndeterminate = this.checkedCount > 0 && this.checkedCount < this.goodsOption.length;
            this.$refs.childFunc.childChecked(check)
            this.checkedCountbl();
        }
        
      },
      //变化分页e
      handleChangefenye(e){
          if(this.youhuiquanstate){
            this.youPageNum=e;
            this.gitCoundList()
          }else{
             const params={
                'pageNum':e,
                'pageSize':this.pageLength,
            }
            this.MycenterGetPeople(params);
          }
      },


      //点击使用优惠券
      clickFuse(id,couponId,faceValue,limitValue,usedFlag){
          if(!usedFlag){
                this.Jutiprice=true;
                this.price=limitValue+faceValue;
                this.payment=limitValue;
                this.youhuiquanId=id;
                this.youhuiquancouponId=couponId;
                this.fyouhuistate=1;  //代表使用优惠券
          }else{
                 Message({
                  message:'该优惠券已使用',
                  type:'error'
                })
          }
       
      },

      //banner显示我的优惠券
      myyouhuiquan3(){
          this.youhuiquanstate=true;
          this.mybackpack='我的优惠券';
          this.pageLength=8;
          this.gitCoundList();
      },
      //打开优惠券
      myyouhuiquan(){
        //   console.log(this.youhuiquanstate);
          this.youhuiquanstate=!this.youhuiquanstate;
        //   console.log(this.youhuiquanstate);

          this.mybackpack='我的优惠券';
          this.pageLength=8;
          this.gitCoundList();
      },
      //返回我的背包
      myyouhuiquan1(){
          this.youhuiquanstate=!this.youhuiquanstate;
          this.mybackpack='我的背包';
          this.pageLength=24;
        const params={
          'pageNum':this.pageNum,
          'pageSize':this.pageLength
        }
        this.MycenterGetPeople(params);
      },
      

      //时间戳转换为时间
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        // var h = date.getHours() + ':';
        // var m = date.getMinutes() + ':';
        // var s = date.getSeconds();
        return Y+M+D;
    },

     //改变时间戳方法
     changeDate(data){
         data.forEach((item,index)=>{
            item.startDate= this.timestampToTime(item.startDate);
            item.expireDate= this.timestampToTime(item.expireDate);
         })
     },


      //获取优惠券列表
      gitCoundList(){
         const data={
             pageNum:this.youPageNum,
             pageSize:this.youPageSize
         }
          userCenterCoupons(data).then((res)=>{
      
                if(res!=undefined){
                    let list = res.data.list
                    this.coundList=list;
                    this.total=res.data.total;
                    // console.log("--------------优惠券total:" + this.total);
                    this.changeDate(list);
                }
          })
      },


      //Fuensure确定取回商品
      Fuensure(){
          var message_id = this.Emessage1.id;
          var stateUpqueding=this.Emessage1.stateUpqueding
        //   console.log(message_id)
          if(stateUpqueding===0){
              this.getGoods(message_id,this.gopindex)  //调用取回方法
          }else if(stateUpqueding===1){
            //   console.log(stateUpqueding)
              this.sellGoods(message_id,this.gopindex)  //调用出售方法
          }
      },

      //获取商品展示显示出售
    FsellGood(index){
        this.gopindex=index;
        this.takeBack=true
        var lists = JSON.parse(JSON.stringify(this.list[index]));
        lists.shou_text='确定出售吗'
        lists.queding_text='确定出售'
        lists.stateUpqueding=1;   //为了确定是出售还是取回 1，是出售，0是取回
        this.FimgBg_true=false
        this.isShowTitle=true;
        this.Emessage1=lists;
    },

    //回去商品
    FshowTakeBack(index){
        this.gopindex=index;
        this.takeBack=true
        var lists = JSON.parse(JSON.stringify(this.list[index]));
        lists.shou_text='确定取回吗'
        lists.queding_text='确定取回';
        lists.stateUpqueding=0;   //为了确定是出售还是取回 1，是出售，0是取回
        this.FimgBg_true=true;
        this.isShowTitle=false;
        // console.log(lists)
        lists.price=lists.type+'|'+lists.title;
        lists.type=""
        var listJSON = JSON.parse(JSON.stringify(lists))
        this.Emessage1=listJSON;

    },
      know(){
          this.knowimg=false
      },
      pagechange:function(currentPage){//根据当前页数请求渲染数据
        // this.fenyeList = this.list.slice((currentPage-1)*pageLength,currentPage*pageLength)
        const params={
              'pageNum':currentPage,
              "pageSize":this.pageLength,
          }
          GetPeople(params).then((res)=>{
              if(res!=undefined){
                var dataList = res.data;
                var datafunList = this.dataList(dataList)
                this.list=datafunList;
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
                break;
            
            }
            });
         return data;
     },
     //搜索内容
     search(){
         if(this.goodsName=="全部"){
            this.goodsName=""
         }
          const searchParam={
            'pageNum':this.pageNum,
            'pageSize':this.pageLength,
            'item':this.textInput,
            "goodsState":this.goodsState,
            "category":this.goodsName,
            "sortByPrice":this.sortByPrice
          }
        //   console.log("----------------------------searchParam")
        //   console.log(searchParam)
          this.$refs.childFunc.childGetBag(searchParam)
     },
      //请选择按钮
      handleDsnone(value){
        // console.log('------------------请选择按钮')
        // console.log(value)
          this.changeitem=value;
          this.goodsName = value;
          if(value=="全部"){
            this.goodsName="";
          }else{
              this.goodsName=value;
          }
          var that=this;
          var params={
              "pageNum":this.pageNum,
              "pageSize":this.pageLength,
              "category":this.goodsName,
              'item':this.textInput,
              "goodsState":this.goodsState,
              "sortByPrice":this.sortByPrice
          }
        this.$refs.childFunc.childGetBag(params)

      },
      //全部按钮选择
      handleItemall(value){
        // console.log("--------------------全部按钮选择")
        // console.log(value)
          this.itemall=value;
          if(value=="全部"){
            this.goodsState=0;
          }else if(value=="等待发货"){
            this.goodsState=1;
          }else if(value=="已发货"){
              this.goodsState=2;
          }else{
              this.goodsState=3;
          }
           const params={
              'pageNum':this.pageNum,
              'pageSize':this.pageLength,
              'item':this.textInput,
              "goodsState":this.goodsState,
              "category":this.goodsName,
              "sortByPrice":this.sortByPrice
           }
        //   this.MycenterGetPeople(params);
          this.$refs.childFunc.childGetBag(params)
      },
      //全部按钮
      selectChangeAll(){
          this.disnone=!this.disnone;
      },

      //请选择按钮
      selectChange(){
          this.disnone1=!this.disnone1;
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


    handleBack_bg(){
        this.recharge=false;
        this.back_bg=false;
        this.Jutiprice=false;
        this.qrCode = false;
        this.tipState = false;
        this.takeBack=false; 
        this.takeState.allAlreadyTake=false;
        this.takeState.takeTipState=false;
        this.sellState.sellTipState=false;
        this.move(); 
    },
      //充值按钮
      topUp(){
        this.recharge=true;
        this.back_bg=true;
        this.fyouhuistate=0;
        this.stop();
      },

     //选中好了金额，跳转下一步
    handleClickNext(data){  
        this.recharge=false;
        this.Jutiprice=true;
        this.qrCode = false;
        this.price=data;
        this.payment=data;
    },

      //选好金额，确认提交，出现二维码
      handleClickNextQr(data){
        //   console.log(data)
          this.recharge=false;
          this.Jutiprice=false;
          this.qrCode = true;
          if(data.youhuistate!=1){
             this.youhuiquanId='';
             this.youhuiquancouponId=""  //如果是1，就是取消使用优惠券
          }
          this.price=data.price;
          this.payment=data.payment;
         
         
      },

       //点击返回上一步
    handleCkickGoback(){
        this.recharge=true;
        this.Jutiprice=false;
        this.qrCode = false;
    },
      //二维码页面返回上一步
      handleCodeGoback(){
          this.recharge=false;
          this.Jutiprice=true;
          this.qrCode = false;
      },
      //获取账户余额
      MycenterGetProplePrice(){
        GetProplePrice().then((res)=>{
                if(res!=undefined){
                    this.message=res.data;
                    
                    if(res.data.transactionUrl==null){
                            this.transactionUrl='请更换交易链接'
                    }else{
                        this.transactionUrl=res.data.transactionUrl
                        this.transactionUrlTrue=res.data.transactionUrl
                    }
                }
            })
      },
      //获取背包东西
     MycenterGetPeople(params){
        GetPeople(params).then((res)=>{
            if(res!=undefined){
                this.total=res.total;
                var dataList=res.data;
                var datafunList = this.dataList(dataList)
                this.list=datafunList;
                // console.log("-----------------我的背包total:" + this.total)
                // console.log(res);
                this.current=1;
                //将商品放入goodsOption中
                this.goodsOption=[];
                var temp = [];
                for(var i=0 ;i<dataList.length; i++){
                    if(dataList[i].state==0||dataList[i].state==1){
                        this.goodsOption.push(dataList[i])
                    }
                } 
                // this.goodsOption = temp.sort(this.goodsSort("price"))
            }
        })
     },
     goodsSort(price){
        return function(a,b){
          var price1=a[price];
          var price2=b[price];
          return price1-price2;
        };
      },
     showTakeBack(){
         this.takeBack=true;
     },
    //取回商品
    getGoods(){
        //去掉已取回的饰品
        this.allId = this.allId.split(",",this.checkedGoods.length-this.takeCount).join(",")+","
        // console.log("----------------去掉")
        // console.log(this.allId)
        const data={
            'id':this.allId
        }
        postGetGood1(data).then((res)=>{
            if(res!=undefined){
                if(res.code==0){
                    Message({
                        message:res.msg,
                        type:'success'
                    })
                    //重新获取背包和金额
                    this.MycenterGetProplePrice();  //获取钱包
                    const params={
                        'pageNum':this.pageNum,
                        'pageSize':this.pageLength,
                        'item':this.textInput,
                        "goodsState":this.goodsState,
                        "category":this.goodsName,
                        "sortByPrice":this.sortByPrice
                    }
                    this.$refs.childFunc.MycenterGetPeople(params);
                    this.takeBack=false;
                    this.sellState.sellTipState=false;
                    this.takeState.takeTipState=false;
                    this.back_bg=false;
                    this.move();
                    this.recoverFunc()
                }else{
                    Message({
                        message:res.msg,
                        type:'error'
                    })
                }
                
            }
        })

    },
    showSell(){
      
    },
    //出售商品
    sellGoods(){
        const params={
            "id":this.allId
        }
        postSellGood1(params).then((res)=>{
            if(res!=undefined){
                if(res.code==0){
                        Message({
                            message:"出售成功",
                            type:'success'
                        })
                        // console.log(this.list)
                        this.takeBack=false;
                        /*this.list[index].state=3;
                        // console.log(this.list[index].price)
                        var qqqqqq= Number(this.message.money) + this.list[index].price
                        // console.log(qqqqqq)
                        this.message.money = qqqqqq.toFixed(2);
                        localStorage.setItem('message',this.message.money);*/
                        Bus.$emit("moneySell",1);//金额变化
                        //重新获取背包和金额
                        this.MycenterGetProplePrice();  //获取钱包
                        const params={
                            'pageNum':this.pageNum,
                            'pageSize':this.pageLength,
                            'item':this.textInput,
                            "goodsState":this.goodsState,
                            "category":this.goodsName,
                            "sortByPrice":this.sortByPrice
                        }
                        this.$refs.childFunc.MycenterGetPeople(params);
                        this.sellState.sellTipState=false;
                        this.takeState.takeTipState=false;
                        this.back_bg=false;
                        this.move();
                        this.recoverFunc()
                }else{
                    Message({
                        message:res.msg,
                        type:'error'
                    })
                }
            }
        })
    },
 

      mouseent(e){
        //   console.log(e)
      },
      mouseleave(e){
        //   console.log(e)
      },
      //更换交易链接弹窗
      changeSteamLink(){
          if(this.tipState == false){
              if(this.transactionUrl=="请更换交易链接"){
                this.$refs.steamLink.value="";
              }else{
                  this.$refs.steamLink.value = this.transactionUrl;
                //   console.log(this.transactionUrl);
              }
              this.tipState = true;
              this.back_bg=true;
              this.stop();
          }else {
              this.tipState = false;
              this.back_bg=false;
              this.transactionUrl = this.$refs.steamLink.value;
              this.move();
              //更改交易链接接口
              const params = {
                  "transactionUrl":this.transactionUrl
              }
              ChangeSteamLink(params).then((res)=>{
                  if(res!=undefined){
                    if(res.msg=="交易链接不正确"){
                        if(this.transactionUrl){
                            this.transactionUrl=this.transactionUrlTrue;
                            Message({
                                message:"交易链接格式错误，请重新填写！",
                                type:'error'
                            })
                        }else{
                            if(this.transactionUrlTrue){
                                this.transactionUrl=this.transactionUrlTrue;
                            }else{
                                this.transactionUrl="请更换交易链接"
                            }
                            
                        }

                    }else {
                        // console.log("更改交易链接接口请求成功");
                    }
                  }
              })

          }

      },
      getLoginState(){
          GetProplePrice().then((res)=>{
              if(res!=undefined){
                  this.message = "";
              }
          })
      }
  },
    watch:{
      "$route":"getLoginState"
    }
}
</script>

<style scoped>
.csgo{
    width: 1280px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    margin:0 auto;
    position: absolute;
}
.bg{
  /* position: absolute;
  left: 0;
  top: 0; */
}
.ROLLfuli{
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
  top: 229px;
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
  /*width: 60px;*/
  height: 24px;
  position: relative;
  text-align: center;
  line-height: 23px;
  color: #fff;
  /* font-style: italic; */
  margin-right: 10px;
    z-index: 10000;
   /* position: relative; */
}
.ling{
  position:absolute;
  top:0;
  left: 0;
  background: #631936;
  /*width: 60px;*/
  height: 24px;
  transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
}
.all{
    position: relative;
    background: #631936;
    width: 92px;
    /* transform: skewX(-15deg); */

    /* -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg); */
}
.all1{
    position: relative;
    background: #631936;
    width: 72px;
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
    margin-top: 35px;
    position: relative;
}
.right_top_heng p{
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
    line-height: 36px;
    height: 38px;
}
.hengxian{
    margin-left: 8px;
    width: 430px;
    margin-top: 16px;
}
.box{
    margin-right: 13px;
    margin-bottom: 10px;
}


/* 个人信息单独css */
.message_box{
    width: 905px;
    height: 132px;
    position: relative;
    display: flex;
    box-sizing: border-box;
    border: 1px solid #e41063;
    border-image: -webkit-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#e41063,rgba(0,0,0,0)) 15 15;
   
}

.message_box .img{
    position: absolute;
    top:0px;
    left:0px;
}
.message_box_left{
    width: 338px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #e41063;
    border-image: -webkit-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#e41063,rgba(0,0,0,0)) 15 15;
}
.header_box{
    width: 94px;
    height: 94px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 20px #421920;
    margin-left: 35px;
}
.header_box img{
    width: 94px;
    height: 94px;
}
.header_right_box{
    margin-left: 38px;
}
.header_right_box p:first-child{
    color: #5b474a;
}
.header_right_box p:nth-child(2){
    width: 130px;
    color: #fff;
    font-size: 16px;
    font-weight: 900;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.header_right_box img{
    margin-left:-5px;
    margin-top: 8px;
}
.message_box_center{
    width: 277px;
    height: 100%;
    display: flex;
    flex-direction:column;
    color: #ffffff;
    position: relative;
    padding-left: 79px;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid #e41063;
    border-image: -webkit-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#e41063,rgba(0,0,0,0)) 15 15;
}
.message_box_center p:first-child{
    color: #735b5f;
}
.message_box_center p:nth-child(2){
    color: #fff;
    font-size: 18px;
    font-weight: 900;
}
.chognzhi_box{
    margin-top: 5px;
    display: flex;
    margin-left: -10px;
}
.chognzhi_box1{
      margin-top: 5px;
    display: flex;
    margin-left: -5px;
}
.chognzhi_box .div{
    width: 43px;
    height: 22px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a61a4a;

}
.chognzhi_box .div1{
    width: 100px;
    height: 22px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a61a4a;
}
.xie{
    width: 43px;
    height: 20px;
    border: 1px solid #a61a4a;
    position: absolute;
    top: 0;
    left: 0;
}
.xie1{
     width: 80px;
    height: 20px;
    border: 1px solid #a61a4a;
    position: absolute;
    top: 0;
    left: 10px;
}
.youhuaxie_box{
    width: 69px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a61a4a;
    margin-left: 10px;
}
.youhuaxie{
     width: 69px;
    height: 20px;
    border: 1px solid #a61a4a;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
}
.message_box_right{
    width: 291px;
    height: 100%;
    display: flex;
    flex-direction:column;
    color: #ffffff;
    position: relative;
    justify-content: center;
    padding-left: 75px;
    box-sizing: border-box;
    border: 1px solid #e41063;
    border-image: -webkit-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#e41063,rgba(0,0,0,0)) 15 15;
}
.message_box_right p:first-child{
    color: #735b5f;
}
.message_box_right p:nth-child(2){
    color: #fff;
}
.steam_box{
    width: 905px;
    height: 69px;
    margin-top: 26px;
    position: relative;
    border: 1px solid #e41063;
    border-image: -webkit-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#e41063 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#e41063,rgba(0,0,0,0)) 15 15;
}
.steam_img_bg{
    position: absolute;
    top: 0;
    left: 0;
}
.steam_box_sizing{
    position: relative;
    display: flex;
    padding-left: 30px;
    align-items: center;
    
    height: 100%;
}
.p{
    width: 500px;
    color: #dfdfdf;
   
}
.p .p11{
    width: 535px;
}
.p1{
    color: #4a3b3f;
}
.steam_img_lianjie{
    display: inline-block;
    width: 90px;
    height: 22px;
    margin-left: 66px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    border: 1px solid #e41063;
    font-size: 10px;
    color: #e41063;
}
.steam_img_lianjie1{
    display: inline-block;
    width: 120px;
    height: 22px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    border: 1px solid #e41063;
    font-size: 10px;
    color: #e41063;
    margin-right: 100px;
}
.doblebox{
    margin-right: 11px;
    margin-bottom: 17px;
}
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
    top: 1088px;
}
.fenye_box{
    margin-right: 8px;
    margin-left: 8px;
}
.black_bg{
  width: 100%;
  height: 1080px;
  position: fixed;
  background: #000;
  opacity: 0.5;
  z-index: 50;
  top: 0;
}
.box_right .steam_box_tip{
    width: 858px;
    height: 50px;
    position: absolute;
    top: 167px;
    left: 8px;
    z-index: 51;
}
.box_right .steam_box_tip input{
    width: 760px;
    height: 43px;
    line-height: 43px;
    position: absolute;
    top: 0px;
    left: 25px;
    font-size: 16px;
    background-color:rgba(0,0,0,0);/*背景变为透明*/
    border-color: transparent;/*边框变为透明*/
    color: #fff;
}
.box_right .steam_box_tip button{
    width: 77px;
    height: 43px;
    position: absolute;
    top: 0px;
    right: 21px;
    font-size: 16px;
    background-color:rgba(0,0,0,0);/*背景变为透明*/
    border-color: transparent;/*边框变为透明*/
    color: #fff;
}
.box_right .steam_box_tip img:nth-child(1){
    width: 760px;
    position: absolute;
    top: 0;
    height: 43px;
}
.box_right .steam_box_tip img:nth-child(2){
    width: 89px;
    position: absolute;
    top: 0px;
    right: 16px;
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
.disnone,.disnone1{
    background: #fff;
    padding: 0 10px 0 10px;
    margin-top: 4px;
    color: #fff;
    background: url(../assets/exchangeMall/xiala.png);
    background-size: 100% 100%;

}
.search{
    width: 203px;
    height: 21px;
    border: 1px solid #5e1a3e;
    margin-right: 10px;
    position: relative;
    
}
.search input{
    width: 140px;
    height: 21px;
    line-height: 21px;
   /* border-top: 1px solid #4b1d28;
    border-left: 1px solid #4b1d28;
    border-bottom: 1px solid #4b1d28;*/
    border: none;
    background: none;
    padding-left: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
}
.search .searchBtn{
    width: 63px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    float: right;
    background: #e81865;
    color: #fff;
    border: 1px solid #e81865;
    position: absolute;
    top: -1px;
    right: 0;
}
.takeBack{
  position: relative;
  z-index: 1111;
}
.chassCound{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.el_paination{
    position: absolute;
    top: 1130px;
    right: 100px;
}
.heng_top{
    display: flex;
    flex-direction: row;
    margin-top: 16px;
}
.right_top_shu{
    width: 6px;
    height: 24px;
    background-image: linear-gradient(0deg, #E60064 0%, #E65064 100%);
    border-radius: 4px;
}
.sellDiv,.takeDiv{
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
    padding: 20px;
}
.allTake{
    width: 334px;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index: 110;
    color: #fff;
    background: #E60064;
    background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
}
.allTakeP1{
  margin-top: 30px;
  color: #842336;
  font-size: 14px;
  font-weight: bold;
}
.allTakeP2{
  width: 216px;
  height: 34px;
  line-height: 34px;
  margin-top: 30px;
  margin-left: 59px;
  border:1px solid #842336;
  border-radius: 24px;
  margin-bottom: 22px;
  color: #842336;
}
.sellDiv p{ 
  font-size: 13px;
}
.sellDiv .p11{
  line-height: 24px;
}
.sellDiv .p12{
  line-height: 24px;
}
.sellDiv .p13{
  margin-top: 35px;
  line-height: 24px;
}
.sellDiv .p14{
  margin-top: 30px;
  line-height: 24px;
}
.takeDiv .p12{
  line-height: 24px;
}
.takeDiv .p13{
  margin-top: 35px;
  line-height: 24px;
}
.takeDiv .p14{
  margin-top: 30px;
  line-height: 24px;
}

.btnDiv{
  width: 334px;
  margin-top: 16px;
}
.button{
  text-align: center;
  width: 216px;
  height: 36px;
  line-height: 36px;
  margin-left: 58px;
  border-radius: 24px;
  margin-bottom: 15px;
  
}
.button2{
  background: #842336;
}
.button1{
  border:1px solid #842336;
}
</style>
<style>
.sellDiv .p14 .el-checkbox__inner{
  background: #fff;
  border:1px solid #fff;
}
.heng_top .el-select input.el-input__inner{
    background-image: linear-gradient(90deg, #141414 0%, #101010 100%);
    border-radius: 12px;
    height: 24px;
    width: 110px;
    border: 1px solid #3f3f3f;
}
.heng_top .el-select .el-input.is-focus input.el-input__inner{
    border: 1px solid #E60064;
}
.heng_top .el-select input.el-input__inner:focus{
    border: 1px solid #E60064;
}
.heng_top i.el-select__caret.el-input__icon.el-icon-arrow-up{
    line-height: 24px;
    color: #666666;
}
/*
li.el-select-dropdown__item{
    background-color: #111111;
}
li.el-select-dropdown__item.hover{
    background-color: #111111;
}
ul.el-scrollbar__view.el-select-dropdown__list{
    border: 1px solid #E60064;
}*/
.changeWord{
    font-family: SourceHanSansCN-Normal;
    font-size: 12px;
    color: #AAAAAA;
    letter-spacing: 0;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
}
.changeWord1{
    font-family: SourceHanSansCN-Normal;
    font-size: 12px;
    color: #AAAAAA;
    letter-spacing: 0;
    padding: 0px 13px 0px 20px;;
    height: 24px;
    line-height: 24px;
}
.heng_top div.input-with-select.el-input.el-input-group.el-input-group--append{
    width: 176px;
    height: 24px;
    background-image: linear-gradient(90deg, #141414 0%, #101010 100%);
    border-radius: 12px;
}
.heng_top input.el-input__inner{
    width: 176px;
    height: 24px;
    background-image: linear-gradient(90deg, #141414 0%, #101010 100%);
    border-radius: 12px;
    border: 1px solid #3f3f3f;
}
.heng_top input.el-input__inner:focus{
    border: 1px solid #E60064;
}

.heng_top input.el-input__inner::-webkit-input-placeholder{
    font-family: SourceHanSansCN-Normal;
    font-size: 12px;
    color: #666666;
    letter-spacing: 0;
}
.heng_top button.el-button.el-button--default{
    width: 0px;
}
.heng_top div.el-input-group__append{
    background: none;
    border: none;
    position: relative;
    left: -23px;
    padding: 0;
    color: #E60064;
}
.triangle{
    margin-right: 10px;
    margin-top: 3px;
}
.triangle .up{
    width:0;
    height:0;
    border-width:0 4px 4px;
    border-style:solid;
    border-color:transparent transparent #AAA;
    margin:4px auto;
    position:relative;
}
.triangle .down{
    width:0;
    height:0;
    border-width:4px 4px 0;
    border-style:solid;
    border-color:#AAA transparent transparent ;
    margin:4px auto;
    position:relative;
}
.triangle .selectup{
  border-color: transparent transparent #E60064;
}
.triangle .selectdown{
  border-color:#E60064 transparent transparent;
}
.selectChecked{
    display: flex;
    flex-direction: row;
    margin-left: 60px;
    height: 24px;
    line-height: 25px;
}
.selectChecked div:nth-child(3){
    width: 90px;
    height: 24px;
    line-height: 24px;
    font-family: SourceHanSansCN-Regular;
    font-size: 12px;
    color: #AAAAAA;
    letter-spacing: 0;
    text-align: center;
}
.selectChecked div:nth-child(4){
    width: 80px;
    height: 24px;
    line-height: 24px;
    /*background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);*/
    background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
    border-radius: 17px;
    /*color: #666666;*/
    color:#fff;
    text-align: center;
    margin: 0px 12px;
    font-family: SourceHanSansCN-Bold;
    font-size: 14px;
    letter-spacing: 0;
}
.selectChecked div:nth-child(5){
    width: 80px;
    height: 24px;
    line-height: 24px;
    /*background-image: linear-gradient(90deg, #464646 0%, #3E3E3E 100%);*/
    background-image: linear-gradient(90deg, #E60064 0%, #E65064 100%);
    border-radius: 17px;
    /*color: #666666;*/
    color:#fff;
    text-align: center;
    font-family: SourceHanSansCN-Bold;
    font-size: 14px;
    letter-spacing: 0;
}
.heng_top span.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #222222;
    border: 1px solid #464646;
}
.heng_top span.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #E60064;
    border-color: #E60064;
}
.heng_top span.el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: #E60064;
}
.heng_top .el-checkbox ::after{
  transition: none!important;
}
.heng_top .el-radio ::after{
  transition: none!important;
}


</style>
