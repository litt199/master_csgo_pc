<template>
  <div class="steamLogin">
        <div class="login_top">
            <img class="top_img" src="../assets/lottery/1.png" alt="">
        </div>

        <div class="mode">
            <p class="zaijie">再接再厉</p>
            <p class="yihai">很遗憾，您并未中奖</p>
            <p class="yihai">努力提高中奖几率，明天再来哦</p>
        </div>

 

          <div class="login_input login_input1">
            <div class="linxing1"></div>
            <div class="tjiao">知道啦</div>
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
      //返回上一层
      goBack(){  
          this.$emit('handleLogin')
      }
  }
}
</script>

<style scoped>
    .steamLogin{
        /* position: fixed;
        top: 50%;
        left: 50%; */
        width: 490px;
        height: 425px;
        background-color: #fff;
        /* transform: translate(-50%,-50%); */
        /* z-index: 9999; */
        /* background: linear-gradient(#232123, #65072c); */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(../assets/register/1.png);
    }
    .login_top{
        display: flex;
        /* width: 160px; */
        margin: 50px auto 20px;
        position: relative;
      
    }
    .top_img{
        width: 103px;
        height: 104px;
    }


    .login_input{
        position: relative;
        width: 336px;
        height: 42px;
        margin-top: 25px;
    }
    .login_input1{
        margin-top:30px;
        cursor:pointer;
    }
    .linxing{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        border: 1px solid #691534;
        background-color: #151414;
    }
    .linxing1{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: skewX(-15deg);
        -webkit-transform: skewX(-15deg);
        -moz-transform: skewX(-15deg);
        -ms-transform: skewX(-15deg);
        -o-transform: skewX(-15deg);
        border: 1px solid #691534;
        background:linear-gradient(to right,#ba023f,#ff537b);
        -webkit-background:linear-gradient(to right,#ba023f,#ff537b);
        -moz-background:linear-gradient(to right,#ba023f,#ff537b);
        -ms-background:linear-gradient(to right,#ba023f,#ff537b);
        -o-background:linear-gradient(to right,#ba023f,#ff537b);
    }
    
     
    .mode{
        color: #7d7a7a;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .zaijie{
        font-size: 28px;
        font-style: italic;
        font-weight: 900;
        color: #ef406d;
        margin-bottom: 20px;
    }
    .yihai{
        color: #e60f64;
        font-size: 16px;
     
    }
  .tjiao{
        font-size: 16px;
        position: absolute;
        top:50%;
        right: 36%;
        z-index: 2;
        transform: translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
        color: #fff;
        font-style: italic;
        font-weight: 700;
    }
    .daole{
        font-size: 26px;
        position: absolute;
      
        /* z-index: 10px;
        top:18px;
        left: 31px; */
        display: flex;
        color: #e60f64;
        font-style: italic;
    }
    
</style>
