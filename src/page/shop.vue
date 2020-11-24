<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="头像" width="180">
          <template>
              <div>
                  <img src="" alt="">
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="date" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="日期">
          <template>
              <div>
                  <h3>{{}}</h3>
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="address" label="分类"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
      this.getdata()
  },
  methods:{
      getdata
  }
};
</script>

<style>
</style>