<template>
  <div class="dailyFree">
      <div class="bg">
        <img  src="../assets/ROLL/1.jpg" alt="">
      </div>
      <!-- <div class="ROLLfuli123">
          常见问题
      </div> -->
      <div class="diceng" v-show="knowimg">
          <img class="diceng_bg" src="../assets/ROLL/8.png" alt="">
            <marquee  class="dicent_text" width=800 behavior=scroll direction=left  align=middle>{{this.$store.state.mes}}</marquee>
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
                        <p>服务与条款</p>
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
              
                        <!--<div class="answer">
                            <p class="answer_text" v-show="item1.answer1">01. {{item1.answer1}}</p>
                            <p class="answer_text" v-show="item1.answer2">02. {{item1.answer2}}</p>
                            <p class="answer_text" v-show="item1.answer3">02. {{item1.answer3}}</p>
                        </div>-->
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
  props:{
     
  },
  data() {
    return {
        faqTrue:false,
        knowimg:true,
        question:[
            {   
                title:'有关使用本服务的条件',
                "id":"01",
                questionlist:[
                    {
                            "question": "未经父母或监护人同意使用本服务，未满十八（18）岁的人不得使用本服务。您需要支持的Web浏览器才能访问该服务。您承认并同意服务的性能取决于您的电脑设备和网络连接的性能。您同意通过Valve Corporation提供的Steam帐户或邮箱账号注册并注册服务。您有责任管理您的帐户并保密您的密码。您还有责任限制对帐户的访问权限。您同意不允许任何第三方使用或访问本服务。您同意自己对您帐户中发生的所有活动或您自己使用密码负责。如果您认为第三方已访问您的密码，请尽快使用服务的密码重新生成功能来获取新密码。",
                            "answer1":"",
                            "answer2":"",
                    }
                
                ]
            
            },
            {   
                title:'作为您使用本服务的条件您不会',
                "id":"02",
                questionlist:[
                    {
                          "question": "01.冒充或歪曲您与任何个人或实体的关系; 为了您的财产安全，你只能保存一次该地址。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "02.访问，篡改或使用本服务或obcase.com后台系统的任何非公共区域。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "03.尝试探测，扫描或测试服务或任何相关系统或网络的漏洞，或者破坏与服务及此类系统和网络相关的任何安全或认证措施。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "04.尝试破译，反编译，反汇编，反向工程或以其他方式调查用于提供服务的任何软件或组件。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "05.以任何方式伤害或威胁伤害其他用户，或干扰或试图干扰任何用户，主机或网络的访问，包括但不限于发送病毒，超载，洪水，垃圾邮件或邮件轰炸服务。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "06.提供属于第三方的付款信息。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "07.以违反其预期用途的滥用方式使用本服务，obcase.com的政策和说明以及任何适用法律。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "08.系统地从服务中检索数据或其他内容，以直接或间接地在单个或多个下载，集合，编译，数据库，目录等中创建或编译，无论是通过手动方法，通过使用机器人，爬虫还是蜘蛛，或其他手段。",
                            "answer1":"",
                            "answer2":"",
                    },

                    {
                          "question": "09.以违反第三方提供服务运营所需设施和技术的条款和条件的方式使用本服务，例如Valve。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "10.在使用或访问服务时侵犯第三方知识产权，包括但不限于使用服务提供虚拟物品。",
                            "answer1":"",
                            "answer2":"",
                    },
                    {
                          "question": "11.利用，促销，链接或访问obcase.com认为具有冒犯性或对obcase.com声誉造成损害的材料，包括但不限于非法内容和色情内容以及被视为冒犯的内容或者对obcase.com或服务有伤害（例如Warez网站，IRC机器人和bittorent网站等）。",
                            "answer1":"",
                            "answer2":"",
                    }
                ]
              
            },
             {   
                title:'服务的终止',
                "id":"03",
                questionlist:[
                    {
                          "question": "01.我们可以出于任何原因立即终止或暂停访问我们的服务，恕不另行通知或承担任何责任，包括但不限于您违反本条款。",
                    },
                    {
                          "question": "02.终止后，您使用本服务的权利将立即停止。如果您希望终止帐户，可以直接停止使用本服务。",
                    },
                    {
                          "question": "03.本条款的所有条款本质上应在终止后继续有效，包括但不限于所有权条款，保证免责声明，赔偿和责任限制。",
                    },
                ]
              
            },
             {   
                title:'与其他网站的链接',
                "id":"04",
                questionlist:[
                    {
                        "question": "01.我们的服务可能包含不属于obcase.com所有或控制的第三方网站或服务的链接。",
                        "answer1":"",
                        "answer2":"",
                    },
                    {
                        "question": "02.obcase.com无法控制，也不对任何第三方网站或服务的内容，隐私政策或做法承担任何责任。您进一步承认并同意obcase.com不会直接或间接地对因使用或依赖任何此类内容，商品或服务而导致或声称造成的任何损害或损失负责或承担责任。或通过任何此类网站或服务。",
                        "answer1":"",
                        "answer2":"",
                    },
                    {
                        "question": "03.我们强烈建议您阅读您访问的任何第三方网站或服务的条款和条件以及隐私政策。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            },
            {   
                title:'免责声明',
                "id":"05",
                questionlist:[
                    {
                        "question": "obcase.com不对网站或网站提供的信息和材料作出任何陈述或保证。在不影响前款规定的一般性情况下，obcase.com不保证：本网站将始终可用或根本不可用;或者本网站上的信息是完整，真实，准确或无误导性的。本网站上的任何内容均不构成或意图构成任何形式的建议。如果您需要有关任何法律，财务或医疗事宜的建议，请咨询相应的专业人士。 我们与Valve公司，Counter Strike：Global Offensive，Steam或Valve公司的任何其他商标无任何关联或认可。",
                        "answer1":"",
                        "answer2":"",
                    },
                   
                ]
              
            }
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
    margin: 22px 0;
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
    /*margin-top: 37px;*/
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

