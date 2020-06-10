<template>
  <div class="haeder">
       <div class="logo">
           <img src="../assets/header/logo.png" alt="">
       </div>
       <div class="page_right">
           <div class="page_title">
               <div v-for="(item) in list" :key="item.id" class="header_title">
                   <p> {{item.title}}</p>
                  
               </div>
           </div>
            <img class="img1" src="../assets/header/2.png" alt="">
            <img class="img2" src="../assets/header/3.png" alt="">
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
        list:[
            {
                id:1,
                title:"每日免费"
            },
            {
                id:2,
                title:"兑换商城"
            },
            {
                id:3,
                title:"ROLL福利"
            },
            {
                id:4,
                title:"合作推广"
            },
            {
                id:5,
                title:"星会员"
            },
            {
                id:6,
                title:"常见问题"
            },
        ]
    }
  }
}
</script>

<style scoped>
    .haeder{
        width: 1280px;
        margin: 0 auto;
        height: 70px;
        background-color: #020202;
        display: flex;
        align-items: center;
        justify-content: space-between;
       
    }
    .logo img{
        margin-left: 48px;
    }
    .page_right{
        display:flex;
        align-items: center;
    }
    .page_title{
        display: flex;
       
    }
    .header_title{
        margin-left: 9px;
        color: #fff;
        display:flex;
        align-items: center;
        font-size: 14px;
        background-image:-webkit-linear-gradient(left,#ee276a,#fc6987);
        background-image:-ms-linear-gradient(left,#ee276a,#fc6987);
        background-image:-moz-linear-gradient(left,#ee276a,#fc6987);
        background-image:-o-linear-gradient(left,#ee276a,#fc6987);
        background-image:linear-gradient(left,#ee276a,#fc6987);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        text-fill-color:transparent;
        padding-right: 4px;
    }
    .header_title p{
           font-weight: 600;
           font-style: italic;

    }
    .img1{
        width: 34px;
        height: 37px;
        margin-left: 84px;
    }
    .img2{
        width: 28px;
        height: 29px;
        margin: 0 16px 0 20px;
    }
</style>

