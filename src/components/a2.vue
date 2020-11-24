<template>
  <div>
      我是第三个
      {{$route.params.id}}
      <button @click="dianji">点击</button>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
  },
  methods:{
    dianji(){
      this.$router.push(
        {
          path:'/a1',
          query: {
            name: "123",
            age: "6"
          }
        }
      )
    }
  }
}
</script>

<style>

</style>