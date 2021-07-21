<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" align="center" label="交易时间" width="120"></el-table-column>
      <el-table-column prop="amount" label="XCH数量"  width="120"></el-table-column>
      <el-table-column prop="out" label="XCH发送地址" width="240"></el-table-column>
      <el-table-column prop="in" label="XCH接收地址" width="240"></el-table-column>
      <el-table-column label="结果" align="center" >
        <!-- slot-scope="scope" -->
        <template >
          <span>等待中</span>
        </template>
      </el-table-column>
      <el-table-column label="更多" align="center" >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="gotoCheck(scope.row)">查看详情</el-button>
        </template>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: ['tableData'],
    methods: {
      gotoCheck(row){
        console.log(row)
      }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.el-table {
  font-size: 16px;
  border-radius: 18px;
  background: $--color-white;
  box-shadow: $--page-item-shodow-1;
  .el-button {
    font-size: inherit;
  }
}
</style>