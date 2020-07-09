<template>
  <div class="floot">
       <div class="floot_left">
           <!-- <img src="../assets/floot/3.png" alt=""> -->
           <img src="../assets/floot/title.png" alt="">
           <div class="title">
               
               <div class="email">邮箱: support@obcase.cn</div>
                <div class="dasdasd"> 版权所有 ©2010-2020 obcase 保留所有 <a target="_blank" href="http://www.beian.miit.gov.cn/">苏ICP备20032379号-1</a></div>
           </div>
       </div>
       
        <div class="floot_right">
           <div class="title1" v-cursor>
                <p class="title_1">法律</p>
                <p @click="serviceAndTermsClick">条款与服务</p>
                <p>隐私与政策</p>
           </div>
            <div class="title2" v-cursor>
                <p class="title_1">信息</p>
                <p @click="handleClickguanyu">关于我们</p>
                <p @click="handleClickQuset">常见问题</p>
           </div>
            <div class="title3">
                <p class="title_1">支付方式</p>
                <img class="img2" src="../assets/floot/4.png" alt="">

           </div>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  methods:{
        serviceAndTermsClick(){
            if(this.$route.path.indexOf('/public_box_home')==0){
               this.$router.push({
                    path:'faq2'
                })
         }else{
             
               this.$router.push({
                    path:'/public_box_home/faq2',
                    
                })
         }
      },
        handleClickQuset(){
        //   console.log(this.$route.path)
            if(this.$route.path.indexOf('/public_box_home')==0){
               this.$router.push({
                    path:'faq'
                })
         }else{
             
               this.$router.push({
                    path:'/public_box_home/faq'
                })
         }
         
      },
      handleClickguanyu(){
            if(this.$route.path.indexOf('/public_box_home')==0){
               this.$router.push({
                    path:'faq1'
                })
         }else{
             
               this.$router.push({
                    path:'/public_box_home/faq1',
                    
                })
         }
      }
  }
}
</script>

<style scoped>
    .floot{
         width: 1280px;
         color: #fff;
         height: 160px;
        margin:0 auto;
        position: relative;
    }
    .floot_left{
        margin-left: 25px;
        color: #555555;
        float: left;
    }
    .floot_left span:nth-child(3){
        position: absolute;
        top: 82px;
        left: 130px;
    }
    .floot_left span:nth-child(5){
        position: absolute;
        top: 82px;
        left: 200px;
    }
    .floot_left .img3{
        position: absolute;
        top: 86px;
        left: 186px;
    }
    .title{
        /* display: flex; */
        margin-top: 13px;
        /* display: flex;
        align-items: center; */
    }
    .title p{
        margin-right: 10px;
    }
    .floot_right .title3{
        width: 123px;
        height: 160px;
        color: #535252;
        position: relative;
    }
    .img2{
        position: absolute;
        left: 0px;
    }
    .floot_right{
        position: absolute;
        left: 800px;
        display: flex;
        font-style:italic;
    }
    .floot_right .title1,.title2,.title3{
        width: 123px;
        height: 160px;
        color: #535252;
    }
    .floot_right .title_1{
        color: #b2b2b2;
        margin-bottom: 10px;
    }
    .img3{
        position: absolute;
        top: 87px;
        left: 126px;
    }
    .dasdasd{
        /* position: absolute;
        top: 92px;
        left: 120px; */
    }
    .dasdasd a{
        color: #535252;
    }
    .email{
        /* position: absolute;
        top: 70px;
        left: 120px; */
    }
    .email a{
        color: #535252;
    }
</style>
