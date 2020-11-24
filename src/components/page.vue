<template>
  <div>
    <div class="top">
      <div class="div1">

      </div>
      <ul class="uul">
        <li :v-for="(item,index) in datalist">{{item.name}}</li>
      </ul>
    </div>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  props:{
    datalist: {
      type: Array,
      requred:true
    }
  }
};
</script>

<style scoped lang="scss">
    .top {
        width: 100%;
        height: 300px;
        background-color: #f99;
        .div1{
            background-color: #f99;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .uul {
            display: flex;
            justify-content: space-around;
        }
    }
</style>