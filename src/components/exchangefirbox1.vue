<template>
  <div class="publicBox">
      <div class="box123" :style="{height:Pheight+'px',width:Pwidth+'px'}"  @mouseenter="enter"  @mouseleave="leave">
          <div class="box_small"   v-top_down="sss">
                    
                <img class="publci_img" v-lazy="img" alt="">
                <div class="text_box"  v-show="sss==2">
                    <p class="text">{{AWP}} 丨{{firtype}}</p>
                    <p class="polan" :style="{color:borde_color}">{{rank}}</p>
                    <div class="price">
                        <p>{{priceFir}}</p>
                    </div>
                    <!-- <p class="text">{{type}}</p>
                    <div class="price">
                        <p>{{title}}</p>
                        <p>${{priceFir}}</p>
                    </div> -->
                </div>
                
          </div>
          <!--<div class="fiv_xian">
              <div v-for="item in 5" :key="item" :class="changeClass(item)"></div>
          </div>-->
          <div class="fiv_xian" v-show="sss==2"></div>
           <!-- <div 
           :class="[locationIndex===0 ? 'location location1' : 'location' ,
                    locationIndex===1 ? 'location location2' : 'location',
                    locationIndex===2 ? 'location location3' : 'location',
                    locationIndex===3 ? 'location location4' : 'location',
                    locationIndex===4 ? 'location location5' : 'location',
                    locationIndex===5 ? 'location location6' : 'location']" 
           v-bg_red='sss'></div> -->
           <div class="border_color" 
            v-if='showMouseOver'
           v-show="sss==1"
           :style="{height:Pheight+'px',width:Pwidth+'px', border:'1px solid '+borde_color}"
           :class="[locationIndex===0 ? 'location location1' : 'location' ,
                    locationIndex===1 ? 'location location2' : 'location',
                    locationIndex===2 ? 'location location3' : 'location',
                    locationIndex===3 ? 'location location4' : 'location',
                    locationIndex===4 ? 'location location5' : 'location',
                    locationIndex===5 ? 'location location6' : 'location']" 
           
                   
           ><p>兑换</p></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'publcibox',
  props:{
      rank:{
          default:'',
      },
      firtype:{
          type:String,
          default:'美杜莎'
      },
      AWP:{
          default:"AWP"
      },
      showMouseOver:{
          default:true,
      },
      color_text:{
          default:"#fff"
      },
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
          
          default:730.5
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
        border_colorVshow:true,  //显示
        sss:2,
        seison:'立即购买',
        price:'#34.99',
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
          if(this.showMouseOver){
                this.sss=1;
                this.$emit('enter',1)
          }
        
      },
      leave(){
          if(this.showMouseOver){
          this.sss=2
          this.$emit('leave',2)
          }
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
    box-shadow: 0 0 10px #000;
    box-sizing: border-box;
    background-color: #0e0e0e;
}
.location{
    width: 100%;
    height: 100%;
    position: absolute;;
    top:0;
    left: 0;
}
.location P{
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 20px;
}
.location1{
   box-shadow: 0px -2px 10px rgba(79,29,47,0.6);
    z-index: 1;
    background: linear-gradient(to top,rgba(79,29,47,1),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(79,29,47,1),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(79,29,47,1),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(79,29,47,1),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(79,29,47,1),rgba(162,66,152,0.1));
}
.location2{
    box-shadow: 0px -2px 10px rgba(33,49,83,0.6);
    z-index: 1;
    background: linear-gradient(to top,rgba(33,49,83,1),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(33,49,83,1),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(33,49,83,1),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(33,49,83,1),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(33,49,83,1),rgba(162,66,152,0.1));    
}
.location3{
        box-shadow: 0px -2px 10px rgba(98,13,97,0.6);
    z-index: 1;
    background: linear-gradient(to top,rgba(98,13,97,1),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(98,13,97,1),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(98,13,97,1),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(98,13,97,1),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(98,13,97,1),rgba(162,66,152,0.1));
}
.location4{
    box-shadow: 0px -2px 10px rgba(14,53,53,0.6);
    z-index: 1;
    background: linear-gradient(to top,rgba(14,53,53,1),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(14,53,53,1),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(14,53,53,1),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(14,53,53,1),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(14,53,53,1),rgba(162,66,152,0.1));  
}
.location5{
     box-shadow: 0px -2px 10px rgba(76,45,13,0.6);
    z-index: 1;
    background: linear-gradient(to top,rgba(76,45,13,1),rgba(162,66,152,0.1));
    background: -webkit-linear-gradient(to top,rgba(76,45,13,1),rgba(162,66,152,0.1));
    background: -moz-linear-gradient(to top,rgba(76,45,13,1),rgba(162,66,152,0.1));
    background: -ms-linear-gradient(to top,rgba(76,45,13,1),rgba(162,66,152,0.1));
    background: -o-linear-gradient(to top,rgba(76,45,13,1),rgba(162,66,152,0.1));  
}
.location6{
    z-index: 1;
    box-shadow: 0px -2px 10px rgba(218,63,124,0.6);
    background: linear-gradient(to top,rgba(218,63,124,1)20%,rgba(0,0,0,0)90%);
    background: -webkit-linear-gradient(to top,rgba(218,63,124,1)20%,rgba(0,0,0,0)90%);
    background: -moz-linear-gradient(to top,rgba(218,63,124,1)20%,rgba(0,0,0,0)90%);
    background: -ms-linear-gradient(to top,rgba(218,63,124,1)20%,rgba(0,0,0,0)90%);
    background: -o-linear-gradient(to top,rgba(218,63,124,1)20%,rgba(0,0,0,0)90%);
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

   position: relative;
}
.box_small{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
}
.text_box{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 8px;
}
.text{
    width: 134px;
    color: #615c5e;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
}
.price{
    margin-top: -1px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-left: -2px;
}
.price p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.fiv_xian{
    width: 142px;
    height: 1px;
    position: absolute;
    left: 0px;
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
        background: -webkit-linear-gradient(bottom,rgba(98,13,97,1),rgba(162,66,152,0.1));
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
.border_color{
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    z-index: 9;
}
</style>

