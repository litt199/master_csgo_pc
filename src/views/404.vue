<template>
  <div class="page">
    <canvas id="canvas"></canvas>
    <div class="page_box">
        <img src="../assets/404/1.png" alt="">
        <p class="bucunzai">您要找的页面不存在 ...</p>

        <div class="lianxi">
            <p>联系我们:</p>
            <p class="qq"> QQ群：1126476003   &nbsp;   &nbsp; &nbsp; &nbsp;  客服QQ：2471536641   &nbsp; &nbsp; &nbsp; &nbsp;   	客服邮箱：support@obcase.cn</p>
        </div>

        <div class="fanhu" v-cursor @click="fanh">
            
              返回首页
     
          
        </div>
    </div>

    
  </div>
</template>



<script>
import '../plugins/TweenMax.min.js'
import   Visual from '../plugins/script.js'

export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  mounted(){
    var s = new Visual()
  },
  methods:{
      fanh(){
 
        this.$router.push({
          path:'/'
        })
      }
  }
}


</script>


<style scoped>
  body {
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  background:#100f0f;
}
#canvas {
  display: block;
  width: 100%;
  height: 100%;
}
.page_box{
  position: absolute;
  left:309px;
  top: 160px;
  color: #f0306e;
  font-size: 100px;
}
.bucunzai{
  font-size: 28px;
  color: #5e5e5e;
}
.lianxi{
  margin-top: 150px;
  color: #fff;
  font-size: 16px;
}
.qq{
  margin-top: 10px;
}
.fanhu{
  font-size: 24px;
  margin-top:100px;
}
</style>
