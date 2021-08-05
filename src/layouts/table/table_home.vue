<template>
    <el-table :data="tableData" style="width: 100%" :empty-text="$t('public.nodata')">
      <el-table-column prop="created_at" align="center" :label="$t('home.block5.cell1')" width="140"></el-table-column>
      <el-table-column prop="amount" :label="$t('home.block5.cell2')"  width="120"></el-table-column>
      <el-table-column prop="sender_address" :label="$t('home.block5.cell3')" width="240"></el-table-column>
      <el-table-column prop="receiver_address" :label="$t('home.block5.cell4')" width="240"></el-table-column>
      <el-table-column :label="$t('home.block5.cell5')" align="center" >
        <template slot-scope="scope" >
          <span>{{scope.row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="" align="center" >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="gotoCheck(scope.row)">{{$t('home.block5.tbHandler')}}</el-button>
        </template>
      </el-table-column>

      <el-skeleton />
    </el-table>
</template>

<script>
export default {
    props: ['tableData'],
    methods: {
      gotoCheck(row){
        console.log(row.id)
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

  ::v-deep th {
    & > .cell {
      word-break: break-word;
    }
  }
}
</style>