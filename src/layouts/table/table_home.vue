<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" align="center" :label="$t('home.block5.cell1')" width="120"></el-table-column>
      <el-table-column prop="amount" :label="$t('home.block5.cell2')"  width="120"></el-table-column>
      <el-table-column prop="out" :label="$t('home.block5.cell3')" width="240"></el-table-column>
      <el-table-column prop="in" :label="$t('home.block5.cell4')" width="240"></el-table-column>
      <el-table-column :label="$t('home.block5.cell5')" align="center" >
        <!-- slot-scope="scope" -->
        <template >
          <span>等待中</span>
        </template>
      </el-table-column>
      <el-table-column label="" align="center" >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="gotoCheck(scope.row)">{{$t('home.block5.tbHandler')}}</el-button>
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
  font-size: 15px;
  border-radius: 18px;
  background: $--color-white;
  box-shadow: $--page-item-shodow-1;
  .el-button {
    font-size: inherit;
  }
}
</style>