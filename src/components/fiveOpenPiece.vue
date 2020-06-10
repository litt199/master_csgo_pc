<template>
    <div class="fiveOpen">
        <!-- <div class="open" @click="open">open</div> -->
        <div class="one_box">
            
            <img class="bgc" src="../assets/fiveOpenBox/3.png" alt="">
            <!-- <div class="red_box"> -->
                <!-- <img  src="../assets/fiveOpenBox/4.png" alt="">
                <p class="zhanxin">崭新出厂</p> -->
            <!-- </div> -->
            <div class="quanbox">
                 <div class="dasdsd" :style="{right:firstrgt}">
                    <div class="dao_box" v-for="(item,index) in list" :key="index" >
                        <img class="wupi" :src="item.image" alt="">
                        <p>{{item.type}}</p>
                        <p class="text_color">{{item.name}} <span>${{item.price}}</span></p>
                    </div>
                </div>
            </div>
            
           
        </div>
        <div class="one_two">
            <img  class="bgc" src="../assets/fiveOpenBox/2.png" alt="">
             <div class="quanbox1">
            <div class="dasdsd" :style="{right:tworgt}">
                <div class="dao_box_two" v-for="(item,index) in list1" :key="index" >
                    <img class="wuqi2" :src="item.image" alt="">
                    <p>{{item.type}}</p>
                    <p class="text_color">{{item.name}}  <span>${{item.price}}</span></p>
                </div>
            </div>
            </div>
        </div>


        <div class="one_three">
            <img  class="bgc" src="../assets/fiveOpenBox/1.png" alt="">

            <div class="quanbox2">
            <div class="dasdsd" :style="{right:zhongjian}">
                <div class="dao_box_three"  v-for="(item,index) in list2" :key="index" >
                    <img class="zhongjian"  :src="item.image" alt="">
                    <p>{{item.type}}</p>
                    <p class="text_color">{{item.name}}  <span>${{item.price}}</span></p>
                </div>
            </div>
            </div>

        </div>


        <div class="one_four">
            <img  class="bgc" src="../assets/fiveOpenBox/2.png" alt="">


            <div class="quanbox1">
              <div class="dasdsd" :style="{right:threergt}">
                <div class="dao_box_two" v-for="(item,index) in list3" :key="index" >
                    <img class="wuqi2" :src="item.image" alt="">
                    <p>{{item.type}}</p>
                    <p class="text_color">{{item.name}}  <span>${{item.price}}</span></p>
                </div>
            </div>
            </div>
           
        </div>

        <div class="one_five">
            <img  class="bgc" src="../assets/fiveOpenBox/3.png" alt="">
           
           <div class="quanbox">
            <div class="dasdsd" :style="{right:fourrgt}">
                  <div class="dao_box" v-for="(item,index) in list4" :key="index" >
                    <img class="wupi" :src="item.image" alt="">
                    <p>{{item.type}}</p>
                    <p class="text_color">{{item.name}} <span>${{item.price}}</span></p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {GetBoxShowing} from '../axios/Apilogin'
import {GetOpenBox} from '../axios/PersonalApi'
    export default {
        name: "fiveOpenPiece",
        data(){
            return{
                list:[],   //第一个数组存放
                list1:[],   //第一个数组存放
                list2:[],   //第一个数组存放
                list3:[],   //第一个数组存放
                list4:[],   //第一个数组存放
                firstrgt:"0px",   //第一个移动距离
                tworgt:'0px',
                zhongjian:'0px',
                fourrgt:"0px",
                threergt:"0px",
                melist:"",  //储存开5个箱子的内容
                timer:false,  //第一个 
                jisuancishu:0,  //计算次数用的，
            }
        },
        mounted(){
            const id='032bc9ce719c4416a825b53fc42e900e'
            GetBoxShowing(id).then((res)=>{  //获取所有的箱子内容
            if(res!=undefined){
                console.log(res)
                var bigArray = Array(80);
                var smallArray = res.data[0].goodsList;
                var xunhuanBigArray=this.HpArray(smallArray,bigArray)
                this.list=xunhuanBigArray;
                this.list1= JSON.parse(JSON.stringify(xunhuanBigArray));
                this.list2= JSON.parse(JSON.stringify(xunhuanBigArray));
                this.list3= JSON.parse(JSON.stringify(xunhuanBigArray));
                this.list4= JSON.parse(JSON.stringify(xunhuanBigArray));
             }
            })    
        },
        methods:{
                
            //封装小数组填充大数组的算法=>超复杂
            HpArray(smallArray,bigArray){
                var bei =0;
                var  wwww =0;                 //声明一个第二个元素的长度  
                for(var i=0;i<bigArray.length;i++){
                if(bei!= 0){
                bigArray[i]=smallArray[i-wwww*bei];
                        if(i==(smallArray.length)*(bei+1)-1){
                            wwww=smallArray.length;
                            bei++;
                        }
                    }else if(bei==0){
                        bigArray[i]=smallArray[i-wwww];
                        if(i==smallArray.length-1){
                            wwww=smallArray.length;
                            bei++;
                        }
                    }
                
                    }
                    return bigArray
                },


            open(){   //点击开始
                  if(this.timer){
                        return
                    }
                    const data={
                    "openNum":5,
                    "id":"032bc9ce719c4416a825b53fc42e900e"
                    }
                
                    GetOpenBox(data).then((res)=>{
                        if(res!=undefined){
                            var that=this;
                            this.melist=res.data;
                            this.jisuancishu=0
                            this.Animations1(res.data[0],this.list,505,72,0);
                            this.Animations1(res.data[1],this.list1,505,55,1);
                            this.Animations1(res.data[2],this.list2,595,42,2);
                            this.Animations1(res.data[3],this.list3,510,55,3);
                            this.Animations1(res.data[4],this.list4,505,72,4);
                            Bus.$emit('moneySell',1)  //重新计算顶部金额
                        }
                     
                    })
            },

    jisuancishumethod(){
  
        this.$emit('chuxiantanchuang',this.melist)
    },

             //测试点击按钮，跑动滚轮
      Animations1(arr,list1234,stopTime,number,rgt){
          var that=this;
          var right = 0;  //起始滑动距离

          // console.log(this.list[68])   //确定68是具体位置
          var count=0;    //启示速度
          var speed=40;   //这个是控制滑动速度  
          var listBox = list1234;
          listBox[number]=arr;
          switch (rgt){
                  case 0:
                      this.list=listBox;
                      break;
                  case 1:
                      this.list1=listBox;
           
                      break;
                  case 2:
                      this.list2 = listBox;
                      break;
                  case 3:
                     
                      this.list3=listBox;
                      break;
                  case 4:
                 
                      this.list4=listBox;
                      break;
                
              }



          this.timer=true;
           var timer = setInterval(function(){   //定时任务
              right+=speed  //开始后先移动50
            //   console.log(right)
              count++;  //
              switch (rgt){
                  case 0:
                      that.firstrgt=right+'px';
                      break;
                  case 1:
                      that.tworgt=right+'px'
                      break;
                  case 2:
                      that.zhongjian=right+'px'
                      break;
                  case 3:
                      that.threergt=right+'px'
                      break;
                  case 4:
                      that.fourrgt=right+'px'
                      break;
                
              }
              if(count>=150 ){    //当速度大于150的，慢慢的慢下来
                  speed=20
              }
              if(count>=200){     //大于200的时候，速度再慢一点
                  speed=18    
              } 
              if(count>=250){  
                  speed=15
              }
              if(count>=280){   
                  speed=10
              }
              if(count>=300){
                  speed=5
              }
              if(count>=320){
                  speed=2
              }
              if(count>=340){
                  speed=1
              } if(count>=stopTime){
    
                  clearInterval(timer)
                  that.timer=false;  //结束可以继续开箱
                  // rendertime++    //统计开箱几次
                  // $('#btn').css('display','block');
                  // var copy= $.clone($('.swiper-slide')[50])
                  // console.log(copy)   //克隆选中的div，把他加到，下面的选中框里
                  that.jisuancishu++;
                  if(that.jisuancishu===5){
                      that.jisuancishumethod();
                  }
                  

              }                
                  // $('.layout').append(copy)
          },20)
      },



        }

     
    }
</script>

<style scoped>
    /* 5连开箱css */
    .fiveOpen{
        display: flex;
        align-items: center;
        margin-top: -52px;
    }
    .one_box{
        width: 161px;
        height: 146px;
        position: relative;
        margin-left: 20px;
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        justify-content: center;
        color: #e61364;
        overflow: hidden;
    }
    .one_box .bgc{
        position: absolute;
        top: 0;
        left: 0;
    }
    .red_box{
        position: absolute;
        left: 27px;
        top:-3px
    }
    .zhanxin{
        position: absolute;
        color: #fff;
        top: 0px;
        left: 13px;
    }
    .zhanxin1{
        position: absolute;
        color: #fff;
        top:4px;
        left: 20px;

    }
    .dasdsd{
        display: flex;
        position: relative;

    }
    .quanbox{
        position: relative;
        width: 123px;
        transform: skewX(-14deg);
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .quanbox1{
        position: relative;
        width: 161px;
        overflow: hidden;
        transform: skewX(-14deg);
        display: flex;
        align-items: center;
    }
    .quanbox2{
        width: 213px;
        position: relative;
        overflow: hidden;
        display: flex;
        transform: skewX(-14deg);
        align-items: center;
    }
    .dao_box{
        width: 123px;
        /* margin-top: 23px; */
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .wupi{
        width: 91px;
        /* height: 71px; */
    }
  
    .text_color{
        color: #fff;
    }
    .dao_box span{
        color: #e61364;
    }
    .one_two{
        width: 211px;
        height: 186px;
        position: relative;
        margin-left: -30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e61364;
        overflow: hidden;
    }
    .red_box_two{
        position: absolute;
        left: 37px;
        top:-3px
    }
    .one_two .bgc{
        position: absolute;
        top: 0;
        left: 0;
    }
    .dao_box_two{
        width: 161px;
        margin-top: 3px;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .dao_box_two img{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .dao_box_two p{
        /* margin-right: 17px; */
    }
    .dao_box_two span{
        color: #e61364;
    }


    .one_three{
        width: 282px;
        height: 239px;
        position: relative;
        margin-left: -40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e61364;
        overflow: hidden;
    }
    .one_three .bgc{
        position: absolute;
        top: 0;
        left: 0;
    }
    .red_box_three{
        position: absolute;
        left: 46px;
        top:-5px
    }

    .dao_box_three{
        width: 213px;
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        font-size: 18px;
    }

    .dao_box_three img{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .dao_box_three p{
        /* margin-right: 32px; */
    }
    .dao_box_three span{
        color: #e61364;
    }


    .one_four{
        width: 211px;
        height: 186px;
        position: relative;
        margin-left: -40px;
        display: flex;
        align-items: center;
        overflow: hidden;
        color: #e61364;
        justify-content: center;
    }
    .one_four .bgc{
        position: absolute;
        top: 0;
        left: 0;
    }
    .one_five{
        justify-content: center;
        width: 161px;
        height: 146px;
        position: relative;
        margin-left: -30px;
        display: flex;
        align-items: center;
        color: #e61364;
        overflow: hidden;
    }
    .one_five .bgc{
        position: absolute;
        top: 0;
        left: 0;
    }
    .open{
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 28px;
    }
    .wuqi2{
        width: 120px;
        /* height: 71px; */
    }
    .zhongjian{
        width: 146px;
        /* height: 90px; */
    }
    
</style>