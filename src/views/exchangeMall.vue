<template>
  <div class="exchangeMall">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>
      <!-- <div class="ROLLfuli">
          兑换商城
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
              <!-- <publicBoxLeft class="public_box"></publicBoxLeft> -->
          <!-- </div> -->
          <!-- 右边开始 -->
           <div class="box_right">
                 <div class="hengxian_box">
                    <div class="right_top_heng">
                        <div class="number_input">
                            <input type="text" v-model='textInput' placeholder="输入" v-on:keyup.enter="search">
                        </div>
                        
                        <div class="all_button" @click="search" v-cursor>
                            <div class="all">搜索</div>
                        </div>
                        <img class="hengxian" src="" alt="">
                        <!-- <div class="all_button" v-cursor>
                            <div class="ling"></div>
                            <div class="all">CSGO</div>
                        </div> -->
                         <div class="all_button price_change1" v-cursor @click="showOption">
                            <div class="allName">{{this.goodsName}}</div>
                             <div class="optionTip"  v-show="isShow">
                                 <div class="changeQunbu" @click="getAllGoods">全部</div>
                                 <div v-for="(item1,index) in fenlei" :key='index' @click="selectClick(item1.name)">{{item1.name}}</div>
                             </div>
                        </div>
                         <div class="all_button price_change" v-cursor @click="changePrice">
                            <div class="all_change">{{PriceData}}</div>
                        </div>
                    </div>
                   
                   <!-- 右边中间开始 -->
                    <div class="qiangxiebox">
                        <div  v-for="(item,index) in fir" :key="item.id" @click="clickmore(item.id,index)">
                              <exchangefirbox 
                              class="exchangeBox" 
                              :Pwidth='142'
                              :Pheight='160'
                              :img='item.image'
                              :locationIndex='index%6'
                              :firtype="item.name"
                              :rank='item.title'
                              :priceFir="'$ '+item.price"
                              :AWP='item.type'
                              :quality='item.quality'
                              v-cursor
                              :borde_color='item.kev'
                              ></exchangefirbox>
                        </div>
                  
                    </div>

                    <!-- 分页 -->
                    <!-- <fenye :total="total" :currentPage='current'  :pageLength="pageLength" @pagechange="pagechange"></fenye> -->
                     <el-pagination
                        class="el_paination"
                        background
                        layout="prev, pager, next"
                        :page-size='pageLength'
                        @current-change='pagechange'
                        :total="total"
                    
                    ></el-pagination>
               </div>

          
          </div>
          <!-- 右边结束 -->
      </div>
      <div class="xuanzhuan" v-show="xuanzhuan">
        <xuanzhuan1
          @Fensure='handleBind(Emessage.id)'
          @changeExit="handleBack_bg"
          :price='Emessage.price'
          :type='Emessage.type'
          :name='Emessage.name'
          :firstate='Emessage.title'
          :firimage='Emessage.image'
          :isShowTitle='isShowTitle'
          :imgBg_true=true
        ></xuanzhuan1>
      </div>

      <div v-show="back_bg" @click="handleBack_bg" class="black_bg"></div>
  </div>
</template>

<script>
import {getFirexchangeMall,postExchange} from '../axios/Apilogin'
import xuanzhuan1 from './xuanzhuan1';
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const doubleBox = () => import("../components/doubleBox")
const exchangefirbox =()=>import('../components/exchangefirbox1')

// import doubleBox from '../components/doubleBox'
import {Message} from 'element-ui'
import Bus from "../axios/Bus";
export default {
  name: '',
  components: {
    publicBoxLeft,
    doubleBox,
    exchangefirbox,
    xuanzhuan1,

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
       newsList: [{
         "content":1234
       },
       {
         "content":1234
       }],
      imgbg:this.$store.state.neiimg[0].image,
        duihuanBtn:"确认兑换",
        total: 1,     //记录总条数
        pageLength: 30,//每页显示条数
        current: 1,   //当前的页数
        pageNum:1,
        knowimg:true,
        back_bg:false,  //储存是否显示黑色屏幕
        firstate:"",  //储存枪的磨损
        Emessage:'',  //储存弹窗的内容
        img:'',
        textInput:"",  //储存搜索内容
        PriceData:'价格从高到低',
        xuanzhuan:false,  //储存旋转页面，是否出现
        isShow:false,
        goodsName:"请选择",
        isShowTitle:true,
        fir:[

        ],
        fenlei:[
            {
                "id":1,
                "name":"印花"
            },
            {
                "id":2,
                "name":"钥匙"
            },
            {
                "id":3,
                "name":"铭牌"
            },
            {
                "id":4,
                "name":"贴纸"
            },
            {
                "id":5,
                "name":"刀"
            },
            {
                "id":6,
                "name":"音乐盒"
            },
            {
                "id":7,
                "name":"手枪"
            },
            {
                "id":8,
                "name":"步枪"
            },
            {
                "id":9,
                "name":"散弹枪"
            },
            {
                "id":10,
                "name":"机枪"
            },
            {
                "id":11,
                "name":"手套"
            },
            {
                "id":12,
                "name":"探员"
            },
            {
                "id":13,
                "name":"冲锋枪"
            }
    ],
        list:[]
    }
  },
  beforeCreate(){

  },
    mounted(){
       var news=JSON.parse(localStorage.getItem('mes'));

       this.newsList=news;

        this.getAllGoods();
        // Bus.$emit("search",this.search())
  },

  methods:{
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
    //获取全部商品
    getAllGoods(){
        var that=this;
        const params={
            "pageNum":this.pageNum,
            "pageSize":this.pageLength
        }
        getFirexchangeMall(params).then((res)=>{   //获取兑换商城的内容
          if(res!=undefined){
              // console.log(res.data)
              this.goodsName="全部"
              this.textInput=""
              // that.fir = res.data;
              this.total=res.total
              var dataList = res.data;
              var datafunList = this.dataList(dataList)
              that.fir=datafunList;
          }
        })
    },
       //取消兑换
    handleBack_bg(){
        this.xuanzhuan=false;
        this.back_bg=false;
        this.move(); 
    },

    //点击兑换商品出现弹窗
    clickmore(id,e){
        this.xuanzhuan=true;
        this.back_bg=true;
        let firlist=this.fir;
        this.Emessage=firlist[e]
        if(this.Emessage.title == ""){
            this.isShowTitle = false;
        }else {
            this.isShowTitle = true;
        }
        this.stop();
    },
      selectClick(name) {
          this.goodsName = name;
          var that=this;
          const params={
              "pageNum":this.pageNum,
              "pageSize":this.pageLength,
              "keyWord":name
          }
          getFirexchangeMall(params).then((res)=>{   //获取兑换商城的内容
            if(res!=undefined){
              this.total=res.total
                // that.fir = res.data;
              var dataList = res.data;
              var datafunList = this.dataList(dataList)
              that.fir=datafunList;
            }
          })
      },

 
    //确定兑换商品
    handleBind(e){
      // console.log('12334')
      const data={
        id:e
      }
      postExchange(data).then((res)=>{
        if(res!=undefined){
     
           Message({
            message:res.msg,
            type:'success'
          })
          if(res.msg=="账户余额不足"){
             Bus.$emit("yao",1);
          }
          this.xuanzhuan=false;
          this.back_bg=false;
          Bus.$emit('moneySell',1)
          this.move();
        }
      })
    },

     //搜索内容
     search(){
          const searchParam={
          "pageNum":this.pageNum,
          "pageSize":this.pageLength,
          "keyWord":this.textInput
          }
          getFirexchangeMall(searchParam).then((res)=>{   //获取兑换商城的内容
            if(res!=undefined){
              if(res.data==""){
                Message({
                  message:'没有搜到您输入的内容',
                  type:'error'
                })
              
              }else{
                  this.total=res.total
                  // this.fir = res.data
                  var dataList = res.data;
                  var datafunList = this.dataList(dataList)
                  this.fir=datafunList;
              }
            }
          })
     },

     //价格筛选
     changePrice(){
       let isdesc;
       if(this.PriceData=="价格从高到低"){
         isdesc =0;
        this.PriceData='价格从低到高'
       }else if(this.PriceData=="价格从低到高"){
          isdesc =1;
          this.PriceData='价格从高到低'
       }
        const isDesc={
          "pageNum":this.pageNum,
          "pageSize":this.pageLength,
          "isDesc":isdesc
        }
        getFirexchangeMall(isDesc).then((res)=>{   //获取兑换商城的内容
        if(res!=undefined){
          // this.fir = res.data
          this.total=res.total
          // console.log("--------------total:"+res.total);
          var dataList = res.data;
          var datafunList = this.dataList(dataList)
          this.fir=datafunList;
          this.goodsName="全部"
          this.textInput=""
        }
          
        })
     },
      showOption(){
          this.isShow = !this.isShow;
      },
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
     pagechange(currentPage){//根据当前页数请求渲染数据
          var that=this;
        // this.fenyeList = this.fir.slice((currentPage-1)*pageLength,currentPage*pageLength)
        if(this.goodsName=="全部" && this.textInput==""){
          var params={
              'pageNum':currentPage,
              "pageSize":this.pageLength,
          }
        }else{
          if(this.textInput!=""){
            var params={
                'pageNum':currentPage,
                "pageSize":this.pageLength,
                "keyWord":this.textInput
            }
          }else{
            var params={
                'pageNum':currentPage,
                "pageSize":this.pageLength,
                "keyWord":this.goodsName
            }
          }
        }
          getFirexchangeMall(params).then((res)=>{   //获取兑换商城的内容
            if(res!=undefined){
                // that.fir = res.data;
                this.total=res.total
                // console.log("--------------total:"+res.total);
                var dataList = res.data;
                var datafunList = this.dataList(dataList)
                that.fir=datafunList;
            }
          })
     },

  },
    watch:{

    },
    beforeDestroy() {

    }

}
</script>

<style scoped>
.exchangeMall{
    width: 1280px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    margin:0 auto;
    position: absolute;
}


.box_left_box{
  width: 1000px;
  position: absolute;
  display: flex;
  right: 0px;
  top: 219px;
}
.box_left{
  width: 288px;  

}
.public_box{
  margin-bottom: 23px;
  }
.box_right{
  width: 992px;
 
}
.all_button{
  width: 60px;
  height: 24px;
  position: relative;
  top: 0;
  text-align: center;
  line-height: 23px;
  color: #fff;
  margin-right: 5px;
  font-style: italic;
   /* position: relative; */
}
.all_button.price_change{
  width: 98px;
  height: 24px;
  position: relative;
  top: 0;
  text-align: center;
  line-height: 23px;
  color: #fff;
  margin-right: 5px;
  margin-top: 3px;
}
.all_button.price_change1{
  margin-top: 3px;

}

.all{
  position: relative;
  width: 60px;
  height: 20px;
  background-color: #fc4d75;
  margin-left: -2px;
  margin-top: 2px;
  font-style: italic;
  text-align: center;
  line-height: 20px;
}
.Double_box{
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 43px;
}
.doube_box{
  margin-right: 13px;
  margin-bottom: 13px;
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
    position: relative;
    
}
.right_top_heng p{
   font-size: 16px;
   background-image:-webkit-linear-gradient(to left,#c400ab,#f756a6);
    background-image:-moz-linear-gradient(to left,#c400ab,#f756a6);
    background-image:-ms-linear-gradient(to left,#c400ab,#f756a6);
    background-image:-o-linear-gradient(to left,#c400ab,#f756a6);
    background-image:linear-gradient(to left,#c400ab,#f756a6);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  margin-left: 7px;
}
.hengxian{
    margin-left: 8px;
    width:530px ;
}
.box{
    margin-right: 13px;
    margin-bottom: 10px;
}
.number_input{
    position: relative;
}
.number_input input{
    width: 139px;
    height: 20px;
    border-top: 1px solid #4b1d28;
    border-left: 1px solid #4b1d28;
    border-bottom: 1px solid #4b1d28;
    background: none;
    padding-left: 5px;
    box-sizing: border-box;
    color: #fff;
    
}
.qiangxiebox{
    margin-top: 17px;
    display: flex;
    flex-wrap: wrap;
}
.exchangeBox{
    margin-right: 13px;
    margin-bottom: 13px;
}
.xuanzhuan{
  position: relative;
  z-index: 51;
}
.black_bg{
  width: 100%;
  height: 1080px;
  position: fixed;
  background: #000;
  opacity: 0.3;
  z-index: 50;
}
.optionTip{
    width:58px;
    z-index: 10000;
    position: relative;
    background: #fff;
    color: #fff;
    margin-top: 4px;
    left: 1px;
    top: 2px;
    background: url("../assets/exchangeMall/xiala.png");
    background-size: 100% 100%;
}
.optionTip div{
    width: 58px;
    height: 20px;
    line-height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.allName{
    position: relative;
    padding-left: 2px;
    padding-right: 2px;
    height: 20px;
    line-height: 20px;
    background: #631936;
}
.all_change{
  width: 100px;
  height: 20px;
  background-color: #631936;
  line-height: 20px;
}
.el_paination{
    position: absolute;
    top: 1130px;
    right: 100px;
}
</style>

