<template>
  <div>
    <page :datalist="datalist"/>
    <div class="box">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>

      <h1>{{aa}}</h1>
    </div>
    <xia @haha="getlist($event)"/>
    <router-view />
  </div>
</template>

<script>
import page from "../components/page";
import xia from "../components/xia";
export default {
  components: {
    page,
    xia,
  },
  data() {
    return {
      aa:"",
      datalist:[
        {name:1,age:666},
        {name:2,age:666},
        {name:3,age:666},
        {name:4,age:666},
        {name:5,age:666},
      ]
    };
  },
  methods: {
    getlist(val){
      this.aa = val
    },
  }
}

</script>

<style scoped>
.box {
  width: 100%;
  height: 500px;
  background-color: #f9f;
}
</style>