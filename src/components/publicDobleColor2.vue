<template>
  <div class="publicDobleColor">
      <div class="box"  @mouseenter="enter"  @mouseleave="leave"  v-for="(item,index) in list" :key="index">
        <!--<el-radio v-model="radio"></el-radio>-->
        <el-checkbox-group v-model="item.showFrozenAccount" @change="handleCheckedGoods(item)" >
          <el-checkbox></el-checkbox>
        </el-checkbox-group>
          <img :src="item.image" class="things">
          <div class="state_img" :style="{color:(item.state==0?stateColor[0]:(item.state==1?stateColor[0]:(item.state==2?stateColor[1]:stateColor[2]))) }">{{(item.state==0?goods_state[0]:(item.state==1?goods_state[1]:(item.state==2?goods_state[2]:goods_state[3])))}}</div>
          <div class="box_small">
                <!--<img :src="item.image" alt="">-->
                <div :class="'level_box bottomColor'+item.code">{{item.level}}</div>
                <div class="text_box">
                    <!--<p class="text">{{nametype}}</p>-->
                    <p  class="text text1">{{item.name}}</p>
                     <p class="text_price">售价：${{item.price}}</p>
                     <p class="text_price1" v-show="item.state===1?true:false">回收价：${{(item.price*0.95).toFixed(2)}}</p>
                     <p class="text_price1" v-show="item.state!=1?true:false">回收价：${{item.price}}</p>
                </div>
          </div>
           <!--蒙层-->
           <div class="location2" v-show="(item.state==2||item.state==3)"></div>          
      </div>
      <el-pagination
        class="el_paination"
        background
        layout="prev, pager, next"
        :page-size='pageLength'
        @current-change='handleChangefenye'
        :total="total"
      ></el-pagination>
     
  </div>
</template>

<script>
import Bus from "../axios/Bus";
import {GetPeople} from '../axios/Apilogin';
export default {
  name: 'publcibox',
  components: {},
  props:{
      isAllChecked:{
          default:false
      },
  },
  data() {
    return {
        text:2,
        state_img:null,
        goods_state: ['未处理','取回中','已取回','已出售'],
        stateColor:["#666666","#87C702","#01A9C7"],//物品状态颜色
        radio:null,//单选框
        radioState:false,//单选框未选中状态
        isCheck:false,
        isCheckId:null,
        list:[],//背包
        goodsOption:[],//可选的物品
        checkAll: false,//全选
        checkedGoods: [],//选中物品下标
        isIndeterminate: false ,//是否处于选择一部分的状态，只控制样式
        checkedCount:0,
        pageNum:1,
        pageLength:20,
        textInput:"",
        goodsState:0,
        sortByPrice:"",
        goodsName:"",
        total: 0,     //记录总条数
        pageLength: 15,//每页显示条数
        current: 1,   //当前的页数
        
        
    }
  },
  mounted(){
    const params={
          'pageNum':this.pageNum,
          'pageSize':this.pageLength,
          'item':this.textInput,
          "goodsState":this.goodsState,
          "category":this.goodsName,
          "sortByPrice":this.sortByPrice
      }
    this.MycenterGetPeople(params);//获取背包中的物品
  },
  methods:{
      //变化分页e
      handleChangefenye(e){
        const params={
            'pageNum':e,
            'pageSize':this.pageLength,
            'item':this.textInput,
            "goodsState":this.goodsState,
            "category":this.goodsName,
            "sortByPrice":this.sortByPrice
        }
        
        this.pageNum = e;
        this.MycenterGetPeople(params);
        this.checkedGoods = [];
        this.checkedCount = 0;
        this.isIndeterminate =false;
        var allGoosdData = {
            "checkedGoods":this.checkedGoods,
            "isIndeterminate":this.isIndeterminate,
            "checkAll":this.checkAll,
            "goodsOption":this.goodsOption,
            "pageNum":this.pageNum,
        }
        // console.log("-----------------------分页allGoosdData")
        // console.log(allGoosdData)
        this.$emit("sendAllDataFunc",allGoosdData);//传递状态
      },
      //接受父组件传过来的事件
      childChecked(value){
        this.checkedGoods = value.checkedGoods;
        this.isIndeterminate = value.isIndeterminate;
        this.checkedCount = this.checkedGoods.length
          //循环单选框
          if(value.checked===true){
            this.list.forEach((value,index,array)=>{
              if((array[index].state===0||array[index].state===1)&&array[index].showFrozenAccount==false){
                return array[index].showFrozenAccount = true;
              }
            })
          }else{
            this.list.forEach((value,index,array)=>{
              return array[index].showFrozenAccount = false;
            })
          }
      },
      childGetBag(params){
        this.pageNum=params.pageNum,
        this.pageSize=params.pageLength,
        this.textInput=params.item,
        this.goodsState=params.goodsState,
        this.goodsName=params.category,
        this.sortByPrice=params.sortByPrice
        this.MycenterGetPeople(params);
      },
      //单选框事件
      handleCheckedGoodsChange(data){
        // console.log("----------------单选框事件data")
        // console.log(data)
        if(data!=""){
            this.checkedCount++
            this.checkedGoods.push(data);
        }else{
            this.checkedCount--
            // this.checkedGoods.pop();会改变原数组
            this.checkedGoods = this.checkedGoods.slice(0,-1);
        }
        this.checkAll = this.checkedCount === this.goodsOption.length;
        this.isIndeterminate = this.checkedCount > 0 && this.checkedCount < this.goodsOption.length;
        var allGoosdData = {
            "checkedGoods":this.checkedGoods,
            "isIndeterminate":this.isIndeterminate,
            "checkAll":this.checkAll,
            "goodsOption":this.goodsOption,
            "pageNum":this.pageNum,
        }
        this.$emit("sendAllDataFunc",allGoosdData);//传递状态
      },
      //单选框事件
      handleCheckedGoods(value){
          this.isCheckId = value.id
          this.isCheck = value.showFrozenAccount;
          if(this.isCheck){
              this.handleCheckedGoodsChange(value)
          }else{
              this.handleCheckedGoodsChange("")
          }
      },
      enter(){
          this.sss=1;
          this.$emit('enter',1)
          if(this.list.state==0){
            this.text=1
          }else{
            this.text=2
          }
          
      },
      leave(){
          this.sss=2
          this.$emit('leave',2)
          if(this.list.state==0){
            this.text=2
          }else{
            this.text=2
          }
      },
      //点击取回商品
      recaption(){
          this.$emit('showTakeBack')
      },
      //点击出售商品
      sell(){
          this.$emit('sellGood')
      },
       //封装添加图片颜色函数
     dataList(data){
        data.forEach((item,i) => {
                switch(item.level){
                case '普通级':
                item.kev = "rgb(176, 195, 217)";
                item.code = 1;
                item.showFrozenAccount = false;
                break;
                case '受限':
                item.kev = "rgb(136, 71, 255)";
                item.code = 2;
                item.showFrozenAccount = false;
                break;
                case '保密':
                item.kev = "rgb(211, 44, 230)";
                item.code = 3;
                item.showFrozenAccount = false;
                break;
                case '军规级':
                item.kev = "rgb(75, 105, 255)";
                item.code = 4;
                item.showFrozenAccount = false;
                break;
                case '工业级':
                item.kev = "rgb(94, 152, 217)";
                item.code = 5;
                item.showFrozenAccount = false;
                break;
                case '消费级':
                item.kev = "rgb(176, 195, 217)";
                item.code = 6;
                item.showFrozenAccount = false;
                break;
                case '违禁':
                item.kev = " rgb(228, 174, 57)";
                item.code = 7;
                item.showFrozenAccount = false;
                break;
                case '隐秘':
                item.kev = " rgb(235, 75, 75)";
                item.code = 8;
                item.showFrozenAccount = false;
                break;
                case '非凡':
                item.kev = "rgb(235, 75, 75)";
                item.code = 9;
                item.showFrozenAccount = false;
                break;
            
            }
            });
         return data;
     },
       //获取背包东西
      MycenterGetPeople(params){
        // console.log("-------------------子组件获取背包")
        // console.log(params);
        GetPeople(params).then((res)=>{
            if(res!=undefined){
                var dataList=res.data;
                var datafunList = this.dataList(dataList)
                this.list=datafunList;
                this.total = res.total;
                this.current=1;
                //将商品放入goodsOption中
                var temp = [];
                this.goodsOption = [];
                for(var i=0 ;i<dataList.length; i++){
                    if(dataList[i].state==0||dataList[i].state==1){
                      this.goodsOption.push(dataList[i])
                    }
                }  
                this.checkAll = false;
                var allGoosdData = {
                    "checkedGoods":this.checkedGoods,
                    "isIndeterminate":this.isIndeterminate,
                    "checkAll":this.checkAll,
                    "goodsOption":this.goodsOption,
                    "pageNum":this.pageNum
                }
                this.$emit("sendAllDataFunc",allGoosdData);//传递状态
            }
        })
      },
      //排序
      goodsSort(price){
        return function(a,b){
          var price1=a[price];
          var price2=b[price];
          return price1-price2;
        };
      }
  }
}
</script>

<style scoped>
.publicDobleColor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.box{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #fff;
    width: 173px;
    height: 215px;
    background-image: linear-gradient(179deg, #272727 0%, #191919 100%);
    border-radius: 12px;
    margin-right: 20px;
    margin-bottom: 20px;

    /* justify-content:center; */
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    border: none;
    z-index: 1;
    background: #151313;
}
.location1{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: 10;
    margin-top: 1px;
    border-radius: 4px;
}
.location2{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    z-index: 10;
    background: #212020;
    opacity: 0.8;
    border-radius: 12px;
}
.fahuo{
    width: 100%;
    z-index: 10;
    position: absolute;
    bottom: 20px;
    text-align: center;
    color: #fff;
    font-size: 12px;
}
.img_hengxian1_box .chus{
    position: absolute;
    left:20px;
    bottom: 16px;
    z-index: 11;
    font-weight: bold;
}
.img_hengxian1_box .chushou{
    position: absolute;
    right: 20px;
    bottom: 16px;
    z-index: 11;
    font-weight: bold;
}
.location1 .img_hengxian1{
    position: absolute;
    left: 5px;
    bottom: 7px;
    z-index: 10;
    
}

.publci_img{
    /* width: 115px;
    height: 92px; 
    margin-left: 12px;*/
    position: relative;
    /* position: absolute;
    top: 19px;
    left: 1px; */
    width: 84px;
    /* height: 67px; */
    z-index: 2;
    border-radius: 50%;
}
.publci_img_person{
    border-radius: 50%;
}
.state_img{
    position: absolute;
    bottom: 10px;
    right: 13px;
    z-index: 100;
    width: 40px;
    height: 18px;
    font-family: SourceHanSansCN-Regular;
    font-size: 10px;
    color: #666666;
    letter-spacing: 0;
    text-align: right;
}
.box_small{
    display: flex;
    align-items: center;
    flex-direction: column;
    /*padding-top: 18px;*/
}
.text_box{
    position: absolute;
    left: 0px;
    bottom: 2px;
    z-index: 2;
    /*font-style: italic;*/
    width: 100%;
    
}
.text{
    color: #AAAAAA;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 10px;
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    letter-spacing: 0;
}
.textShow{
    color:#151313 !important;
}
.text1{
    overflow: hidden;
    white-space: nowrap;
    margin-left: 10px;
}
.text_price{
    font-family: SourceHanSansCN-Regular;
    font-size: 10px;
    letter-spacing: 0;
    margin-left: 10px;
    color: #E60064;
    transform: translate3d(0,0,0);
}
.text_price1{
    margin-left: 10px;
    color:#666666;
    font-family: SourceHanSansCN-Regular;
    font-size: 10px;
    letter-spacing: 0;
    margin-bottom: 10px;
}
.img4{
    position: absolute;
    bottom: -2px;
    right: 20px;
}
.ani .text{
    color: #fff;
}
.ani .price{
        transform: translate(-5px);
        -webkit-transform: translate(-5px);
        -moz-transform: translate(-5px);
        -ms-transform: translate(-5px);
        -o-transform: translate(-5px);
        color: #ff65d2;
}
.price{
    color: #fff;

}
.xian_bottom{
    width: 142px;
    height: 2px;
    position: absolute;
    bottom: -1px;
    z-index: 9;
}
.lijichurou{
    position: absolute;
    right: 40px;
    bottom: 8px;
}
.bg_red{
    border: 1px solid rgba(251,101,151,1);
    border-radius: 4px;
    box-shadow: 0px 0px 5px rgba(251,101,151,1); 
    background: -webkit-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -moz-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -ms-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: -o-linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
    background: linear-gradient(bottom,rgba(198,18,89,1) 30%,rgba(0,0,0,0) 50%);
}
.ani .publci_img{
    animation: topfly 0.6s linear infinite alternate;
    -webkit-animation: topfly 0.6s linear infinite alternate;
    -moz-animation: topfly 0.6s linear infinite alternate;
    -o-animation: topfly 0.6s linear infinite alternate;
}

@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
/* -webkit-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
-moz-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
}
-o-@keyframes topfly{
    from{
        top: 0px;
    }
    to{
        top: 10px;
    }
} */

.level_box{
    width: 56px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-image: linear-gradient(90deg, #FFEB2C 0%, #FF8755 100%);
    border-radius: 8px;
    position: absolute;
    bottom: 72px;
    left: 10px;
    font-size: 12px;
}
.bottomColor1{
  background-image: linear-gradient(to left,#b0c3d9,#dae6f3);
  background-image: -webkit-linear-gradient(to left,#b0c3d9,#dae6f3);
  background-image: -moz-linear-gradient(to left,#b0c3d9,#dae6f3);
  background-image: -ms-linear-gradient(to left,#b0c3d9,#dae6f3);
  background-image: -o-linear-gradient(to left,#b0c3d9,#dae6f3);
}
.bottomColor2{
  background-image: linear-gradient(to left,#8847ff,#a47af1);
  background-image: -webkit-linear-gradient(to left,#8847ff,#a47af1);
  background-image: -moz-linear-gradient(to left,#8847ff,#a47af1);
  background-image: -ms-linear-gradient(to left,#8847ff,#a47af1);
  background-image: -o-linear-gradient(to left,#8847ff,#a47af1);
}
.bottomColor3{
  background-image: linear-gradient(to left,#d32ce6,#e175ed);
  background-image: -webkit-linear-gradient(to left,#d32ce6,#e175ed);
  background-image: -moz-linear-gradient(to left,#d32ce6,#e175ed);
  background-image: -ms-linear-gradient(to left,#d32ce6,#e175ed);
  background-image: -o-linear-gradient(to left,#d32ce6,#e175ed);
}
.bottomColor4{
  background-image: linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -webkit-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -moz-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -ms-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -o-linear-gradient(to left,#348ef1,#6ad8f1);
}
.bottomColor5{
  background-image: linear-gradient(to left,#005f38,#2cffc4);
  background-image: -webkit-linear-gradient(to left,#005f38,#2cffc4);
  background-image: -moz-linear-gradient(to left,#005f38,#2cffc4);
  background-image: -ms-linear-gradient(to left,#005f38,#2cffc4);
  background-image: -o-linear-gradient(to left,#005f38,#2cffc4);
}
.bottomColor6{
  background-image: linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -webkit-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -moz-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -ms-linear-gradient(to left,#348ef1,#6ad8f1);
  background-image: -o-linear-gradient(to left,#348ef1,#6ad8f1);
}
.bottomColor7{
  background-image: linear-gradient(to left,#f16903,#f1ef01);
  background-image: -webkit-linear-gradient(to left,#f16903,#f1ef01);
  background-image: -moz-linear-gradient(to left,#f16903,#f1ef01);
  background-image: -ms-linear-gradient(to left,#f16903,#f1ef01);
  background-image: -o-linear-gradient(to left,#f16903,#f1ef01);
}
.bottomColor8{
  background-image: linear-gradient(to left,#d50614,#dd5042);
  background-image: -webkit-linear-gradient(to left,#d50614,#dd5042);
  background-image: -moz-linear-gradient(to left,#d50614,#dd5042);
  background-image: -ms-linear-gradient(to left,#d50614,#dd5042);
  background-image: -o-linear-gradient(to left,#d50614,#dd5042);
}
.bottomColor9{
  background-image: linear-gradient(to left,#d50614,#dd5042);
  background-image: -webkit-linear-gradient(to left,#d50614,#dd5042);
  background-image: -moz-linear-gradient(to left,#d50614,#dd5042);
  background-image: -ms-linear-gradient(to left,#d50614,#dd5042);
  background-image: -o-linear-gradient(to left,#d50614,#dd5042);
}
.things{
    width: 72%;
}
.el_paination{
    position: absolute;
    top: 1130px;
    right: 100px;
}
</style>
<style>
.box label.el-radio{
    position: absolute;
    top: 9px;
    left: 9px;
    margin-right: 0px;
    border-radius: 50%;
}
.box .el-radio__input span.el-radio__inner{
    border: 1px solid #444444;
    background-color: #121212;
    border-radius: 50%;
}
.box span.el-checkbox__inner{
    border: 1px solid #444444;
    background-color: #121212;
    border-radius: 50%;
}
.box label.el-checkbox{
    width: 166px;
    height: 210px;
    top: 0px;
    left: -4px;
    border-radius: 50%;
}
.box .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    border-color: #E60064;
    background: #E60064;
}
.box .el-checkbox__input.is-focus span.el-checkbox__inner{
  border-color: #E60064;
}
.box  span.el-checkbox__inner:hover{
    border-color: #E60064;
}
.box .el-checkbox-group{
    width: 14px;
    height: 14px;
    position: relative;
    top: 0px;
    left: -70px;
}
.box .el-checkbox ::after{
  transition: none!important;
}
.box .el-radio ::after{
  transition: none!important;
}
li.el-select-dropdown__item.selected{
  color:#E60064;
  background: #444;
}
li.el-select-dropdown__item{
  height: 22px;
  line-height: 22px;
}
li.el-select-dropdown__item.hover{
  background: #444;
}
ul.el-scrollbar__view.el-select-dropdown__list{
  background: #121212;
  border: 1px solid #444;
  padding: 0px;
}
div.el-select-dropdown.el-popper{
  border: 1px solid #3f3f3f;
}
.el-popper[x-placement^=bottom] div.popper__arrow{
  border-bottom-color:#3f3f3f;
}
.el-popper[x-placement^=bottom] div.popper__arrow::after{
  top: -1px;
  border-bottom-color:#3f3f3f;
}
.el-popper[x-placement^=top] div.popper__arrow{
  border-top-color:#3f3f3f;
}
.el-popper[x-placement^=top] div.popper__arrow::after{
  bottom: -1px;
  border-top-color:#3f3f3f;
}
</style>

