<template>
  <div class="lingxing_box" @click="handleClick">
      <p>
          {{text}}
      </p>
        
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props:{
      text:{
          default:"上一页"
      }
  },
  data() {
    return {

    }
  },
  methods:{
      handleClick(){
          this.$emit('chlickfen')
      }
  }
}
</script>

<style scoped>
.lingxing_box{
    position: relative;
    color: #ff3e82;
    font-size: 14px;
    border: 1px solid #5c1432;
    padding: 3px 13px;
    
    transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    -moz-transform: skewX(-15deg);
    -ms-transform: skewX(-15deg);
    -o-transform: skewX(-15deg);
    /* background-color: #201d1d; */
    z-index: 1;
    background-image:-webkit-linear-gradient(top,#171717,#0d0909);
    background-image:-moz-linear-gradient(top,#171717,#0d0909);
    background-image:-ms-linear-gradient(top,#171717,#0d0909);
    background-image:-o-linear-gradient(top,#171717,#0d0909);
    background-image:linear-gradient(top,#171717,#0d0909);


}

.lingxing_box p{
    transform: skewX(15deg);
    -webkit-transform: skewX(15deg);
    -moz-transform: skewX(15deg);
    -ms-transform: skewX(15deg);
    -o-transform: skewX(15deg);


}
</style>
