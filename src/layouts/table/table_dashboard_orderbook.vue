<template>
  <el-table>
    <el-table-column>
      <template slot-scope="scope" >
        <i class="icon_db icon_db_db"></i>
        <i class="icon_db icon_db_fire"></i>

        <span>{{scope.row.action}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="date"></el-table-column>
    <el-table-column prop="merchant"></el-table-column>
    <el-table-column prop="value" align="center"></el-table-column>
    <el-table-column prop="status" ></el-table-column>
    <el-table-column type="expand">
      
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  data(){
    return {
      testData: [{
        action: 'mint',
        date: 'Aug 17 2021 02:30',
        merchant: 'Granefrunt Trancing',
        value: '2997.00000',
        status: 'Mint Completed'
      }]
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon_db {
  display: inline-block;
  width: 24px;
  height: 27px;
  vertical-align: middle;
  background: no-repeat center/cover;
  &_db {
    background-image: url(/img/dashboard_ob_icon_1.png);
  }
  &_fire {
    background-image: url(/img/dashboard_ob_icon_2.png);
  }
}
</style>