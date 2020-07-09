<template>
  <div class="publicBox">
      <div class="box123" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <!--<img class="fangkuai" :src="{'../assets/exchangeMall/4.png'}" alt="">-->
          <img class="fangkuai" :src="require('../assets/exchangeMall/top'+(locationIndex+1)+'.png')" alt="">
          <div class="box_small"   v-top_down="sss">
                    
                <img class="publci_img" v-lazy="img" alt="">
                <div class="text_box">
                    <p class="text">{{type}}</p>
                    <div class="price">
                        <p>{{title}}</p>
                        <p>${{probability}}</p>
                    </div>
                </div>
                
          </div>
          <!--<div class="fiv_xian">
              <div v-for="item in 5" :key="item" :class="changeClass(item)"></div>
          </div>-->
          <div class="fiv_xian" :style="{'background':borde_color}"></div>
           <div 
           :class="[locationIndex===0 ? 'location location1' : 'location' ,
                    locationIndex===1 ? 'location location2' : 'location',
                    locationIndex===2 ? 'location location3' : 'location',
                    locationIndex===3 ? 'location location4' : 'location',
                    locationIndex===4 ? 'location location5' : 'location',
                    locationIndex===5 ? 'location location6' : 'location']" 
           v-bg_red='sss'></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'publcibox',
  props:{
      type:{
          default:"AWM"
      },
      img:{
           default:require('../assets/exchangeMall/3.png'),
      },
      Pheight:{
          type:Number,
          default:156,
      },
      Pwidth:{
          type:Number,
          default:132,
      },
      item_id:{
          type:Number,
          default:3,
      },
      title:{
          type:String,
          default:'美杜莎'
      },
      priceFir:{
          type:Number,
          default:730.50
      },
      locationIndex:{
        type:Number,
        default:0
      },
      quality:{
        type:Number,
        default:0
      },
      borde_color:{
        type:String,
      }
  },
  components: {},
  data() {
    return {
        sss:2,
        seison:'立即购买',
        price:'#34.99',
        
        probability:parseFloat(this.priceFir.toFixed(2)),
        locationClass:[
            ["color_xian1","color_xian1 active"],
            ["color_xian2","color_xian2 active"],
            ["color_xian3","color_xian3 active"],
            ["color_xian4","color_xian4 active"],
            ["color_xian5","color_xian5 active"],
            ["color_xian6","color_xian6 active"]
        ]
    }
  },
  mounted(){
        //  console.log(this.Pheight)
  },
  methods:{
      enter(){
          this.sss=1;
          this.$emit('enter',1)
      },
      leave(){
          this.sss=2
          this.$emit('leave',2)
      },
      changeClass(e){
            var locationClas = null;
            if(this.quality>=e){
                locationClas = this.locationClass[this.locationIndex][0];
            }else{
                locationClas = this.locationClass[this.locationIndex][1];
            }
            return locationClas;
      }
  }
}
</script>

<style scoped>
.box123{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #fff;
    /* justify-content:center; */
    /* padding-top: 40px; */
    box-sizing: border-box;
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
    border: 1px solid #fff;
    transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
}
.location1{
    border-image: linear-gradient( #dd407e, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #dd407e, #100f10) 30 30;
    border-image: -moz-linear-gradient( #dd407e, #100f10) 30 30;
    border-image: -ms-linear-gradient( #dd407e, #100f10) 30 30;
    border-image: -o-linear-gradient( #dd407e, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(79,29,47,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(79,29,47,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(79,29,47,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(79,29,47,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(79,29,47,0.8),rgba(162,66,152,0.1));
}
.location2{
    border-image: linear-gradient( #4983f8, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #4983f8, #100f10) 30 30;
    border-image: -moz-linear-gradient( #4983f8, #100f10) 30 30;
    border-image: -ms-linear-gradient( #4983f8, #100f10) 30 30;
    border-image: -o-linear-gradient( #4983f8, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(33,49,83,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(33,49,83,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(33,49,83,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(33,49,83,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(33,49,83,0.8),rgba(162,66,152,0.1));    
}
.location3{
    border-image: linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -moz-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -ms-linear-gradient( #d015a9, #100f10) 30 30;
    border-image: -o-linear-gradient( #d015a9, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
}
.location4{
      border-image: linear-gradient( #079193, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #079193, #100f10) 30 30;
    border-image: -moz-linear-gradient( #079193, #100f10) 30 30;
    border-image: -ms-linear-gradient( #079193, #100f10) 30 30;
    border-image: -o-linear-gradient( #079193, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(14,53,53,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(14,53,53,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(14,53,53,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(14,53,53,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(14,53,53,0.8),rgba(162,66,152,0.1));  
}
.location5{
      border-image: linear-gradient( #dd7505, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #dd7505, #100f10) 30 30;
    border-image: -moz-linear-gradient( #dd7505, #100f10) 30 30;
    border-image: -ms-linear-gradient( #dd7505, #100f10) 30 30;
    border-image: -o-linear-gradient( #dd7505, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(76,45,13,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(76,45,13,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(76,45,13,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(76,45,13,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(76,45,13,0.8),rgba(162,66,152,0.1));  
}
.location6{
    border-image: linear-gradient( #3542eb, #100f10) 30 30;
    border-image: -webkit-linear-gradient( #3542eb, #100f10) 30 30;
    border-image: -moz-linear-gradient( #3542eb, #100f10) 30 30;
    border-image: -ms-linear-gradient( #3542eb, #100f10) 30 30;
    border-image: -o-linear-gradient( #3542eb, #100f10) 30 30;
    /* background-color: #201d1d; */
    z-index: 1;
    background: linear-gradient(to top,rgba(27,30,78,0.8),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(27,30,78,0.8),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(27,30,78,0.8),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(27,30,78,0.8),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(27,30,78,0.8),rgba(162,66,152,0.1));
}
.color_xian{
    width: 24px;
    height: 2px;
    background: #dd407e;
    margin-right: 3px;
}
.color_xian.active{
    background: #4b1d2f;
}
.color_xian1{
    width: 24px;
    height: 2px;
    background: #dd407e;
    margin-right: 3px;
}
.color_xian1.active{
    background: #4b1d2f;
}
.color_xian2{
    width: 24px;
    height: 2px;
    background: #4983f8;
    margin-right: 3px;
}
.color_xian2.active{
    background: #213152;
}
.color_xian3{
    width: 24px;
    height: 2px;
    background: #dd407e;
    margin-right: 3px;
}
.color_xian3.active{
    background: #712643;
}
.color_xian4{
    width: 24px;
    height: 2px;
    background: #079193;
    margin-right: 3px;
}
.color_xian4.active{
    background: #0e3535;
}
.color_xian5{
    width: 24px;
    height: 2px;
    background: #dd7505;
    margin-right: 3px;
}
.color_xian5.active{
    background: #4b2d0d;
}
.color_xian6{
    width: 24px;
    height: 2px;
    background: #3542eb;
    margin-right: 3px;
}
.color_xian6.active{
    background: #1b1e4f;
}
.publci_img{
    width: 102px;
    /*height: 94px;*/
    margin-left: 12px;
   position: relative;
}
.box_small{
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    position: relative;
    z-index: 10;
}
.text_box{
    margin-top: 10px;
    margin-left: -8px;
}
.text{
    width: 105px;
    height: 23px;
    border-bottom: 1px solid #615c5e;
    font-style: italic;
    color: #615c5e;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    
}
.price{
    margin-top: 2px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-style: italic;
    margin-left: -2px;
}
.price p{
    width: 72px;
    height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.fiv_xian{
    /*position: absolute;
    left: -20px;
    z-index: 10;
    bottom: 0px;
    display: flex;*/
    width: 132px;
    height: 1px;
    position: absolute;
    left: -20px;
    bottom: -1px;
    z-index: 9;
    
}

/* .text{
    color: #403f3f;
    margin-right: 12px;
}
.ani .text{
    color: #fff;
}
.ani .price{
        transform: translate(-5px);
        color: #ff65d2;
}
.price{
    color: #fff;

}
.bg_red{
        background: -webkit-linear-gradient(bottom,rgba(98,13,97,0.8),rgba(162,66,152,0.1));
}
.ani .publci_img{
    animation: topfly 0.6s linear infinite alternate;
}

@keyframes topfly{
    from{
        top: 19px;
    }
    to{
        top: 15px;
    }
} */

.fangkuai{
    position: absolute;
    top: 0px;
    left: 17px;
    width: 25px;
    height: 14px;
}
</style>

