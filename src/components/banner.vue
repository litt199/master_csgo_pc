<template>
  <div class="banner">
   
          <el-carousel :interval="5000" height='399px' arrow="always" indicator-position="none">
            <el-carousel-item v-for="item in imgList" :key="item.id" style="background:#000">
                <router-link :to='item.link'>
                   <img  v-lazy="item.image" alt="">
                </router-link>
            </el-carousel-item>
        </el-carousel>

  </div>
</template>

<script>
import {getBanner} from '../axios/Apilogin'
export default {
  name: '',
  
  components: {
    //   elCarousel,
    //   elCarouselItem
  },
   data() {
    return {

        imgList:  this.$store.state.imgL
      
    }
  },
  computed:{
      
  },
  created(){
      
  },
  mounted(){
   
  },
 
}
</script>

<style scoped>
.banner{
    width: 100%;
    height:399px;
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

