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

