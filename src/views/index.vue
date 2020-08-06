<template>
  <div class="page1">
      
      <banner></banner>
      <!-- <service></service> -->
      <treasureBox></treasureBox>
  
  </div>
</template>

<script>
import xuanzhuan from './xuanzhuan'
import banner from '../components/banner';
import service from '../components/service';
import treasureBox from './treasureBox'
import losingLottery from './losingLottery'
export default {
  name: '',
  components: {

      xuanzhuan,
      banner,
      service,
      treasureBox,
 
  },
  data() {
    return {

    }
  },
  mounted(){
//判断是否有推广来的数据，有的话，就储存到本地
    this.decideQuery(this.$route.query.id);       
  },
  methods:{
//判断是否有推广来的数据，有的话，就储存到本地
    decideQuery(query){
      if(query==null){
        return
      }else{
        localStorage.setItem('decide',query)
      }
    },
  }
}
</script>

<style scoped>
    .page1{
        width: 1280px;
       padding-bottom: 50px;
        background-color: #100f0f;
        margin:0 auto;
        position: relative;
    }
</style>

