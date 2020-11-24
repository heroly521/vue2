<template>
  <div>
    <el-button type="warning" @click="jia(2)">加</el-button>
    <span>{{num}}</span>
    <el-button type="danger" @click="jian(3)">减</el-button>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     num: this.$store.state.num,
  //   };
  // }, 
  computed:{
    //变量是个方法
    num(){
      return this.$store.state.num
    },
    num2(){
      return this.$store.getters.count
    }
  },
  methods:{
      jia(num){
          // this.num +=5
          // 可以是对象
          this.$store.commit('increment',num)
          // this.$store.dispatch("AddAction")
      },
      jian(num){
          // this.num -=5
          this.$store.commit('jian',num)
      }
  }
};
</script>

<style>
</style>