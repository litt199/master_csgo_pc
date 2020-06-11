<template>
  <div class="dailyFree">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>
      <!-- <div class="ROLLfuli123">
          常见问题
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
          <!-- <div class="box_left">
              <publicBoxLeft class="public_box"></publicBoxLeft>
          </div> -->
          <!-- 右边开始 -->
           <div class="box_right">            
                <div class="hengxian_box">
                    <div class="right_top_heng">
                        <img src="../assets/faq/3.png" alt="">
                        <p>常见问题</p>
                        <img class="hengxian" src="../assets/faq/6.png" alt="">
                        <img class="triangle" src="../assets/faq/2.png" alt="">
                    </div>
                   
               </div>
                        
                <!-- 问题 -->
                <div   v-for="(item,index) in question" :key='index'>
                    <div class="title_first">
                          <p class="number">{{item.id}}</p>
                          <p class="question">{{item.title}}</p>
                    </div>
                    <div class="title_question" v-for="(item1,index1) in item.questionlist" :key="index1">
                        <div class="title_question_box">
                            <p>{{item1.question}}</p>
                        </div>
              
                        <div class="answer">
                            <p class="answer_text" v-show="item1.answer1">01. {{item1.answer1}}</p>
                            <p class="answer_text" v-show="item1.answer2">02. {{item1.answer2}}</p>
                            <p class="answer_text" v-show="item1.answer3">02. {{item1.answer3}}</p>
                        </div>
                    </div>
                </div>
          </div>
          <!-- 右边结束 -->
      </div>
     
  </div>
</template>

<script>
const publicBoxLeft  = ()=> import ("../components/publicBoxLeft")  //异步加载组件
const doubleBox = () => import("../components/doubleBox")
const exchangefirbox =()=>import('../components/exchangefirbox')
// import doubleBox from '../components/doubleBox'
export default {
  name: '',
  components: {
    publicBoxLeft,
    doubleBox,
    exchangefirbox
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
  props:{
     
  },
  data() {
    return {
        imgbg:this.$store.state.neiimg[1].image,
        faqTrue:false,
        knowimg:true,
        question:[
            {   
                title:'如何取回饰品？',
                "id":"01",
                questionlist:[
                    {
                            "question": "我们有两种方法提取饰品。第一种您出售您获得的饰品之后去兑换商城兑换喜欢的饰品。另一种是您也可以取回大于1美金的饰品，这可能需要等待0-8天，我们发货会以短信的形式通知您。",
                            "answer1":"",
                            "answer2":"",
                    }
                
                ]
            
            },
            {   
                title:'如何绑定STEAM或者STEAM无法访问？',
                "id":"02",
                questionlist:[
                    {
                          "question": "百度下载UU加速器，加速STEAM之后即可登录STEAM。",
                            "answer1":"",
                            "answer2":"",
                    }
                ]
              
            },
             {   
                title:'交易限制',
                "id":"03",
                questionlist:[
                    {
                          "question": "为了保护玩家的账户安全， Steam官方会因为用户的一些操作而限制其账户进行交易平台遵循Steam官方市场交易准则交易。交易限制期间的用户将无法取回购买的物品。",
                    },
                    {
                          "question": "如何查看是否有交易限制?",
                            "answer1":"您可以通过尝试发起一次交易报价便会有所提示。",
                    },
                    {
                          "question": "如何解除交易限制?",
                            "answer1":" 无法解除，只能等待限制时间结束。Steam客服不会修改交易或 Steam 社区市场中的限制，无论您的帐户出于何种原因受限。我们同样无权解除用户账户的限制，有交易限制的用户等限制解除之后即可交易。",
                    },
                    {
                        "question": "交易限制原因",
                            "answer1":"Steam 令牌未启用",
                            "answer2":"为防止您的物品和 Steam账户被非法获取您密码的人盗用， Steam官方要求您启用Steam手机令牌超过15天，如果您启用Steam令牌不到15 天，您将无法交易。 您可以通过手机直接下载Steam Mobile, 开通Steam令牌，等待15天的冷却时间便可解除限制。"
                    },
                    {
                            "answer1":"",
                            "answer2":"",
                            "answer3":"",
                    },
                ]
              
            },
             {   
                title:'最近重置过密码',
                "id":"04",
                questionlist:[
                    {
                        "question": "如果您重置了您的密码，您将在 5 天内无法进行交易，如果您的帐户超过 2 个月没有任何活动，您将在 30 天内无法进行交易。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            },
            {   
                title:'新设备登陆',
                "id":"05",
                questionlist:[
                    {
                        "question": "如果您在一台受 Steam令牌保护不到7天的设备上登录，您在7天内将无法进行交易或使用社区市场。在其它被Steam令牌保护超过7天的设备上仍然可以进行交易或使用社区市场清除您的浏览器 Cookie、使用新的浏览器、重新安装Steam和格式化等操作将触发此限制。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            },
            {   
                title:'账户封禁',
                "id":"06",
                questionlist:[
                    {
                        "question": "如果您的帐户被 Steam封禁交易，可能会被临时或永久性的交易封禁。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            },
             {   
                title:'其他限制类型',
                "id":"07",
                questionlist:[
                    {
                        "question": "近期取消交易报价、更改邮箱等，其他限制原因在您尝试发起一次报价的时候便会有提示的。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            },
            
            
        
        ],
     
        img:'',
        fir:[
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
  
     
    }
  },
  mounted(){
      var q = this.$route.query.id;
  
      if(q==1){
          this.faqTrue=true
      }

  },
  beforeCreate(){
    let count = 0;
    var imgs =  require('../assets/ROLL/1.png')
    
    let image = new Image();
    image.src = imgs;
    this.img = image;
  },
  methods:{
      know(){
          this.knowimg=false
      }
  }
}
</script>

<style scoped>
.dailyFree{
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
.ROLLfuli123{
  position: absolute;
  width: 100%;
  height: 280px;
  text-align: center;
  line-height: 300px;
  font-size: 46px;
   background-image:-webkit-linear-gradient(left,#ba023f,#ff537b);
    background-image:-moz-linear-gradient(left,#ba023f,#ff537b);
    background-image:-ms-linear-gradient(left,#ba023f,#ff537b);
    background-image:-o-linear-gradient(left,#ba023f,#ff537b);
    background-image:linear-gradient(left,#ba023f,#ff537b);
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
  top: 223px;
}
.box_left{
  width: 288px;  

}
.public_box{
  margin-bottom: 23px;
  }
.box_right{
  width: 944px;
  /* padding-left: 40px; */
  box-sizing: border-box;
  overflow-y: scroll;
  height: 1100px;
}
.box_right::-webkit-scrollbar { width: 0 !important }
.box_right { -ms-overflow-style: none; }
.box_right { overflow: -moz-scrollbars-none; }
/* 右边的开始 */
.right_top{
    display: flex;
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
    /* margin-left: 40px; */
}
.right_top_heng p{
   font-size: 16px;
    background-image:-webkit-linear-gradient(left,#ba023f,#ff537b);
    background-image:-moz-linear-gradient(left,#ba023f,#ff537b);
    background-image:-ms-linear-gradient(left,#ba023f,#ff537b);
    background-image:-o-linear-gradient(left,#ba023f,#ff537b);
    background-image:linear-gradient(left,#ba023f,#ff537b);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-fill-color:transparent;
  font-weight: 900;
  margin-left: 7px;
}
.hengxian{
    margin-left: 8px;
}
.box{
    margin-right: 13px;
    margin-bottom: 10px;
}

.title{
    margin-top: 50px;
}
.title_first{
    width: 944px;
    height: 46px;
    position: relative;
    display: flex;
    align-items: center;
    background:linear-gradient(to top,#0c0808,#181717);
    background:-webkit-linear-gradient(to top,#0c0808,#181717);
    background:-moz-linear-gradient(to top,#0c0808,#181717);
    background:-ms-linear-gradient(to top,#0c0808,#181717);
    background:-o-linear-gradient(to top,#0c0808,#181717);
    box-sizing: border-box;
    border: 1px solid #9f1950;
    border-image: -webkit-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -moz-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -ms-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: -o-linear-gradient(#9f1950 ,rgba(0,0,0,0)) 15 15;
    border-image: linear-gradient(#9f1950,rgba(0,0,0,0)) 15 15;
}
.title_first img{
    position: absolute;
    top: 0;
    left: 0;
}
.number{
    position: relative;
    color: #fff;
    font-size: 24px;
    margin-left: 25px;
    margin-top: -5px;
    font-style: italic;
    font-weight: 900;
}
.question{
    position: relative;
    font-size: 14px;
    color: #bc1c53;
    font-style: italic;
    margin-left: 20px;
}
.title_question{
    margin-top: 37px;
    padding-left: 20px;
    font-size: 12px;
    color: #fff;
    font-weight: normal;
    
}
.title_question p{
    margin-left: 13px;
}
.title_question_box{
    display: flex;
}
.answer{
    margin-top: 13px;
    color: #c4b1b9;
}
.title123{
    font-size: 14px;
  
    color: #fff;
}
</style>

