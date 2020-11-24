<template>
  <div>
    <div class="xia">我是最下面的别动我</div>
    <el-button type="danger" @click="dianji()">危险按钮</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            aaa:66666
        }
    },
    methods:{
        dianji(){
            this.$emit("haha",this.aaa)
        }
    }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.xia {
  margin: 30px auto;
  font-size: 32px;
  color: #f99;
  margin-top: 60px;
  line-height: 60px;
  text-align: center;
}
</style>