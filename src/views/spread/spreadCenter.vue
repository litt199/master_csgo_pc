<template>
  <div class="center">
      <div class="bg">
        <img  :src="imgbg" alt="">
      </div>
      <div class="box_right">
        <spreadBox></spreadBox>
      </div>
      
  </div>
</template>

<script>
const spreadBox = ()=>import('../spread')
export default {
  name: '',
  components: {
      spreadBox,//推广
  },
  data() {
    return {
        imgbg:this.$store.getters.neiimg1.image,
    }
  },
  mounted(){

  },
  created(){
    
  },
  methods:{
    
  }
}
</script>

<style scoped>
.center{
    width: 1280px;
    padding-bottom: 20px;
    margin:0 auto;
    position: relative;
}
.bg{
    position: absolute;
}
.box_right{
  width: 992px;
  height: 1200px;
    box-sizing: border-box;
   overflow-y: scroll;
   overflow-x: hidden;
   position: absolute;
       right: 0px;
    top: 221px;
 
}
.box_right::-webkit-scrollbar { width: 0 !important }
.box_right { -ms-overflow-style: none; }
.box_right { overflow: -moz-scrollbars-none; }


</style>
