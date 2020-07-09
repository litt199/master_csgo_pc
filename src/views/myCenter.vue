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
                    <span class="steam_img_lianjie" @click="changeSteamLink">更换交易链接</span>
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
                        <img src="../assets/csgo/4.png" alt="">
                        <p>{{mybackpack}}</p>
                        <img class="hengxian" src="../assets/myCenter/8.png" alt="">
                        <div class="search"  v-show="!youhuiquanstate">
                            <input type="text" placeholder="输入" v-model="textInput">
                            <div class="searchBtn"  v-cursor @click="search">搜索</div>
                        </div>
                        <div class="all_button" @click="selectChangeAll" v-cursor  v-show="!youhuiquanstate">
                            <div class="ling"></div>
                            <div class="all1">{{itemall}}</div>
                            <div class="disnone"  v-show="disnone">
                                <div v-for="(item,index) in changeAll" @click="handleItemall(index)" :key='item'>{{item}}</div>
                            </div>
                        </div>
                         <!-- <div class="all_button">
                            <div class="ling"></div>
                            <div class="all">CSGO</div>
                        </div> -->
                         <div class="all_button" @click="selectChange" v-cursor v-show="!youhuiquanstate">
                            <div class="ling"></div>
                            <div class="all" >{{changeitem}}</div>
                            <div class="disnone1" v-show="disnone1">
                                <div v-for="(item,index) in change" :key='item' @click="handleDsnone(index,item)">{{item}}</div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="Double_box" v-show="!youhuiquanstate">
                        
                       <publicDobleColor1
                       class="doblebox" 
                       v-for="(item,index) in list" 
                       :key="index"
                       :name="item.type"
                       :nametype='item.name'
                       :img1="item.image"
                       :img_state_show='item.state'
                       :price="item.price"
                       @showTakeBack="FshowTakeBack(index)"
                       @showSell='showSell'
                       :borde_color='item.kev'
                       :takeIndex="index"
                        @sellGood="FsellGood(index)"
                       ></publicDobleColor1>
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
                <el-pagination
                    class="el_paination"
                    background
                    layout="prev, pager, next"
                    :page-size='pageLength'
                    @current-change='handleChangefenye'
                    :total="total"
                ></el-pagination>
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
const publicDobleColor1 = ()=>import ('../components/publicDobleColor1');
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
    publicDobleColor1,
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
        pageLength: 24,//每页显示条数
        current: 1,   //当前的页数
        pageNum:1,
        textInput:"",
        itemall:'全部',
        changeitem:'全部',
        change:[
            '全部',
            '印花及武器箱',
            '匕首',
            '手枪',
            '步枪',
            '冲锋枪',
            '微型冲锋枪',
            '重型武器',
            '手套',
            '探员',
            '其他',
        ],
        changeAll:[
            '全部',
            '等待发货',
            '已发货',
            '已售出',
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
        message:'',
        list:[],
      
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
    // this.gitCoundList();
  },
  methods:{
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
              "category":this.goodsName
           }

         //获取背包东
        GetPeople(searchParam).then((res)=>{
            if(res!=undefined){
              if(res.data==""){
                Message({
                  message:'没有搜到您输入的内容',
                  type:'error'
                })
              
              }else{
                this.total=res.total;
                var dataList=res.data;
                var datafunList = this.dataList(dataList)
                this.list=datafunList;
                
              }
            }
        })
     },
      //请选择按钮
      handleDsnone(e,name){
          this.changeitem=this.change[e];
          this.goodsName = name;
          if(this.goodsName=="全部"){
            this.goodsName="";
          }
          var that=this;
          var params={
              "pageNum":1,
              "pageSize":this.pageLength,
              "category":this.goodsName,
              'item':this.textInput,
              "goodsState":this.goodsState,
          }
          GetPeople(params).then((res)=>{   //根据中文名获取展示数据
            if(res!=undefined){
                // console.log(res)
                that.list = res.data;
                that.total=res.total;
            }
          })

      },
      //全部按钮选择
      handleItemall(e){
          this.itemall=this.changeAll[e];
          this.goodsState=e;
          if(this.goodsName=="全部"){
            this.goodsName="";
          }
           const params={
              'pageNum':this.pageNum,
              'pageSize':this.pageLength,
              'item':this.textInput,
              "goodsState":this.goodsState,
              "category":this.goodsName
           }
          this.MycenterGetPeople(params);
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
        this.takeBack=false
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
            }
        })
     },
     showTakeBack(){
         this.takeBack=true;
     },
    //取回商品
    getGoods(id,index){
  
        const data={
            'id':id
        }
        postGetGood(data).then((res)=>{
            if(res!=undefined){
      
                if(res.code==0){
                    Message({
                        message:res.msg,
                        type:'success'
                    })
                    this.takeBack=false;
                    this.list[index].state=1;
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
    sellGoods(id,index){
    
          const params={
            'id':id
        }
        postSellGood(params).then((res)=>{
            if(res!=undefined){

                if(res.code==0){
                         Message({
                            message:"出售成功",
                            type:'success'
                        })
                        this.takeBack=false;
                        this.list[index].state=3;
                        // console.log(this.list[index].price)
                        var qqqqqq= Number(this.message.money) + this.list[index].price
                        // console.log(qqqqqq)
                        this.message.money = qqqqqq.toFixed(2);
                        localStorage.setItem('message',this.message.money);
                        Bus.$emit("moneySell",1);//金额变化
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
   font-size: 16px;
   background-image:-webkit-linear-gradient(left,#e61364,#ff5477);
    background-image:-moz-linear-gradient(left,#e61364,#ff5477);
    background-image:-ms-linear-gradient(left,#e61364,#ff5477);
    background-image:-o-linear-gradient(left,#e61364,#ff5477);
    background-image:linear-gradient(left,#e61364,#ff5477);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  margin-left: 7px;
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
}
.el_paination{
    position: absolute;
    top: 1130px;
    right: 100px;
}
</style>
