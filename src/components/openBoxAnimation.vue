<template>
<div>


  <div class="openBoxAinmation" >
      <!-- <div @click="openBoxJisuan" class="open" v-cursor>open</div> -->
      <!-- <div class="content"> -->
        <img class="animation_bg" src="../assets/openBox/oneOpenBox/6.png" alt="">
      <!-- </div> -->
      <div class="lundongbox" :style="{'right':rgt}">
        <!-- <div class="yidong_box" > -->
          <div class="boxsssss">
                <div class="gun_box" v-for="(item,index) in list" :key="index">
                  <!-- <img class="gun_box_bg" 
                  :src="index%2?imgbg1:imgbg2" 
                  
                  alt=""> -->
                  <div class="gun_box_bg"
                     :style="{border:'1px solid '+item.borde_color,
                          background: '-webkit-linear-gradient(bottom,'+item.borde_color+' 25%,rgba(0,0,0,0) 90%)',
                          background:'-webkit-linear-gradient(bottom,'+item.borde_color+' 25%,rgba(0,0,0,0) 90%)',
                          background: '-webkit-linear-gradient(bottom,'+item.borde_color+' 25%,rgba(0,0,0,0) 90%)',
                          background: '-webkit-linear-gradient(bottom,'+item.borde_color+' 25%,rgba(0,0,0,0) 90%)',
                          background:'-webkit-linear-gradient(bottom,'+item.borde_color+' 25%,rgba(0,0,0,0) 90%)',
                    }"
                  ></div>
                  
                  <img class="fir" :src="item.image" alt="">
                  <div class="text">
                       <p class="first_p">{{item.type}}| {{item.name}}</p>
  
                    </div>
                
              </div>
          </div>
          
        <!-- </div> -->
      </div>
     
  </div>

  <div class="bottom_box">
      <p>{{message.name}}</p>
      <div class="daotext">箱子内包含 <span>{{message.number}}</span> 件物品</div>
      <div class="changekaijige">
          <div 
          v-cursor
          v-for="(item,index) in text_list"
          @click="handleidsIndex(index)"
          :key="index"
          :class="idsindex==index?'changekaijige_text idsIndex':'changekaijige_text'"
          >
          {{item.ti}}
          </div>

      </div>
  </div>
</div>
</template>

<script>

import {Message} from 'element-ui';

import {GetBoxShowing} from '../axios/Apilogin'
import {GetOpenBox} from '../axios/PersonalApi'
import Bus from '../axios/Bus'
export default {
  name: '',
  components: {
  
  },
  data() {
    return {
      timerMi:"",
      switchRuning:false,
      message:'', //储存箱子的信息
      imgbg1:require('../assets/openBox/oneOpenBox/7.png'),
      imgbg2:require('../assets/openBox/oneOpenBox/7.png'),
      rgt:'0px',//控制移动
      idsindex:0,
      text_list:[
        {
          ti:'开1次$29.9'
        },
        {
          ti:'进入背包'
        },
        {
          ti:'连开5次$149.9'
        },
      ],
      fir_LIST:[
        {},
      ],
      list:[],
      xxxx:'',
      timer:false,
    }
  },
  mounted(){
    const id=this.$route.query.id;
    GetBoxShowing(id).then((res)=>{  //获取所有的箱子内容
      if(res!=undefined){
        // console.log(res.data[0])  //获取箱子的信息
        let message = {};
        message.name=res.data[0].box.name;
        message.number=res.data[0].goodsList.length;
        this.message=message;
        var onePrice=res.data[0].box.price
        this.text_list[0].ti='开1次$'+onePrice.toFixed(2)
        var fivePrice=res.data[0].box.price*5;
        this.text_list[2].ti='开5次$'+fivePrice.toFixed(2)
         var bigArray = Array(80);
        var smallArray = res.data[0].goodsList;
        var xunhuanBigArray=this.HpArray(smallArray,bigArray);

       
        var s = this.shuaixuanyanse(xunhuanBigArray);

        this.list=s;
        
        // console.log(this.list)
      }
    })
  },
  destroyed(){
    this.timerMi='';
    //删除开箱事件
    Bus.$off('changeTimer')
  },
   created(){
      var that=this;
    Bus.$on('changeTimer',content=>{   //监听重新开箱事件
        // console.log(_this.stateRegister);
        if(content==1){
            that.timer=false
        }
    })
  },
  methods:{
 
      //点击小图切换开几次
      handleidsIndex(e){
    
        if(e===0){
            this.idsindex=e;
            this.openBoxJisuan();
           
        }else if(e===1){
            this.idsindex=e;
          if(this.timer){
            // console.log('正在开箱')
            return
          }else{
            this.$router.push({
              path:"/public_box_home/myCenter"
           })
          }
           
        }else if(e===2){
          if(this.timer){
            // console.log('正在开箱')
            return
          }else{
              this.idsindex=e;
              Message({
                      duration:2000,                              //element-ui中的展示请求错误的信息+ 
                      message:"暂未开放，敬请期待",
                      type:'success'
              })
            //   this.$router.push({
            //     path:"/public_box_home/myCenter"
            // })
          }
           
        }
      },

  //筛选颜色的方法
    shuaixuanyanse(data){
            data.forEach((item,i)=>{
            
              switch(item.level){
                    case '普通级':
                    item.borde_color = "#b1c4d8";
                    break;
                    case '受限':
                    item.borde_color = "#8850fb";
                    break;
                     case '保密':
                    item.borde_color = "#d139e3";
                    break;
                     case '军规级':
                    item.borde_color = "#4e6efb";
                    break;
                     case '工业级':
                    item.borde_color = "#6199d7";
                    break;
                     case '消费级':
                    item.borde_color = "#b1c4d8";
                    break;
                     case '违禁':
                    item.borde_color = "#e3ad45";
                    break;
                     case '隐秘':
                    item.borde_color = "#e94d50";
                    break;
                     case '非凡':
                    item.borde_color = "#e94d50";
                    break;
                  
                }
        })
        return data;
    },


    //此函数是实现随机数组的方法，打乱数组的排序
    shuffle(arr) {
    　　for (var i = arr.length - 1; i >= 0; i--) {
    　　　　var randomIndex = Math.floor(Math.random() * (i + 1));
    　　　　var itemAtIndex = arr[randomIndex];
    　　　　arr[randomIndex] = arr[i];
    　　　　arr[i] = itemAtIndex;
    　　}
    　　return arr;
    },



  //封装一个函数，来控制什么时候来打开音频
  //传入的是一个数值，是确定0-158之间的值
     controlAudio(times){
        if(times<40){
            // console.log(0)
            this.$emit('playAudio','https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-10.mp3')
        }else if(times<80&&times>39){
            // console.log(1)
            this.$emit('playAudio', "https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-11.mp3")
        }else if(times<111&&times>79){
            // console.log(2)
            this.$emit('playAudio',"https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-12.mp3")
        }else if(times<130&&times>110){
            // console.log(3)
            this.$emit('playAudio',"https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-13.mp3")
        }else if(times<143&&times>129){
            // console.log(4)
            this.$emit('playAudio', "https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-14.mp3")
        }else if(times<159&&times>142){
            // console.log(5)
            this.$emit('playAudio', "https://obcase.oss-cn-shanghai.aliyuncs.com/res/media/oc-sound-bg-op-15.mp3")
        }
     },




      //测试点击按钮，跑动滚轮
      open(arr){
          var that=this;
         
          var right = 0;  //起始滑动距离
          // this.render();   //添加滚动的内容，进入盒子  添加60个小方格
          // console.log(this.list[68])   //确定68是具体位置
          var count=0;    //启示速度
          var speed=50;   //这个是控制滑动速度  
          var list = this.list;
          var suffleList = this.shuffle(list);
          var arrlist=[];
          arrlist[0]  = arr;
          var q = that.shuaixuanyanse(arrlist);
          // console.log(q[0])
          suffleList[62]=q[0];



          this.list = suffleList;

          //生成一个1-145的随机数，然后加上475，控制滚轮滑动的位置
          var suiji = Math.floor(Math.random()*158)+1;
          // var suiji = 0;
          // var suiji = 158;
          
          this.controlAudio(suiji)  

         
           that.timerMi = setInterval(function(){   //定时任务
              
              right+=speed  //开始后先移动50
              count++  //
              that.rgt=right+'px';
              
              if(count>=150 ){    //当速度大于150的，慢慢的慢下来
                  speed=30
              }
              if(count>=200){     //大于200的时候，速度再慢一点
                  speed=20     
              } 
              if(count>=250){  
                  speed=10
              }
              if(count>=300){   
                  speed=5
              }
              if(count>=320){
                  speed=3
              }
              if(count>=340){
                  speed=2
              }
              if(count>=380){
         
                  speed=1
              } if(count>=480+suiji){
                  

                  clearInterval(that.timerMi)
                  that.timer=false;  //结束可以继续开箱
                 
                  // rendertime++    //统计开箱几次
                  // $('#btn').css('display','block');
                  // var copy= $.clone($('.swiper-slide')[50])
                  // console.log(copy)   //克隆选中的div，把他加到，下面的选中框里 
                  setTimeout(()=>{
                    that.$emit('shuDingJp',arr)      

                  },500) 
              }                
                  // $('.layout').append(copy)
          },20)
      },



    //封装轮播结束得到位置，并计算到哪里停止
    openBoxJisuan(){
        
        if(this.timer){
            return
          }
    
        this.timer=true;
          // console.log(this.$route.query.id)
        const data={
          "openNum":1,
          "id":this.$route.query.id
        }
        GetOpenBox(data).then((res)=>{  
            if(res!=undefined){
                if(res.code==500){
                  Bus.$emit('yao',1)
                }else if(res.code==0){
                  this.xxxx=res.data[0];
                  this.open(res.data[0])
  
                  Bus.$emit('moneySell',1)  //重新刷新顶上金额
                }
            }
        })
      
   },

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


     render(){   //render函数
            // $('.slider-wrapper').empty()   //每次重新点击，都会移除滚动元素的所有内容
            var bigArray = Array(60);
            var smallArray = this.fir_LIST;
            var xunhuanBigArray=this.HpArray(smallArray,bigArray);
       
            this.list=xunhuanBigArray;
        },

        random(){   //产生随机数
            return parseInt((Math.random()*100)+1)
        }

  }
}
</script>

<style scoped>
.boxsssss{
  display: flex;
}
.yidong_box{
  position: absolute;
  top: 0px;
  display: flex;
}
.open{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000000000000000;
  color: #ffffff;
}
.openBoxAinmation{
  width: 900px;
  height: 243px;
  overflow: hidden;
}
.content{
  width: 900px;
  height: 243px;
  position: relative;
  display: block;
  
}
.animation_bg{
  width: 900px;
  height: 243px;

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1000;
}
.lundongbox{
  /* width: 883px; */
  height: 243px;
  position: relative;
  display: flex;
 
}
.boxsssss .gun_box:first-child{
  margin-left: 0px;
}
.gun_box{
  margin: 0 6px;
  width: 170px;
  height: 240px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  box-sizing: border-box;
}
.gun_box_bg{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 170px;
  height: 240px;
  
}
.fir{
  width: 150px;
  /* height: 69px; */
  position: relative;
  margin-top:39px;
}
.gun_box p{
  position: relative;

}

.text{
  display: flex;
  align-items: center;
  justify-content: center;

}
.bottom_box{
  width: 900px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.bottom_box p{
  color: #fff;
  font-size: 20px;
  font-weight: 900;
}
.daotext{
  color: #fff;
  font-size: 15px;
}
.daotext span{
  color: #d1105c;
}
.changekaijige{
  width: 585px;
  height: 44px;
  margin-top: 40px;
  border: 1px solid #e71766;
  border-radius: 30px;
  display: flex;
}
.changekaijige_text{
  width: 33.3333%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 17px;
  font-style: italic;
  transition: all ease 0.3s;
}
.idsIndex{
  background-color: #f84374;
  border-radius: 30px;
}
</style>
