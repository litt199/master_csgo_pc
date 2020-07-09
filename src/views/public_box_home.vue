<template>
  <div class="welfare">
        <div class="ce_box">
            <publicBoxLeft ref="left1"></publicBoxLeft>
        </div>
           <transition>
        <router-view></router-view>
           </transition>

  </div>
</template>

<script>
const publicBoxLeft= ()=>import('../components/publicBoxLeft')
export default {
  name: '',
  components: {
      publicBoxLeft,
  },
  data() {
    return {

    }
  },
  
  mounted(){
 

  },
  updated(){
    //     this.$nextTick(() => {
    //   console.log(this.$refs.left1.clientHeight)
    // })
  }
  
}
</script>

<style scoped>

  .v-enter{
    opacity: 0;
    transform:translateX(100%);
  }
  .v-leave-to{
    transform:translateX(-100%);
    position: absolute;
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
  }


.welfare{
    width: 1280px;
    padding-bottom: 20px;
    /* background-color: #0d0c0e; */
    min-height: 1200px;
    margin:0 auto;
    position: relative;
    overflow: hidden;
}
.ce_box{
     width: 288px;
    z-index: 2;
     float: left;
     margin-top: 229px;
     position: relative;
     min-height: 1288px;
}
</style>
