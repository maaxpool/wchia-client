<template>
    <el-table :data="tableData" style="width: 100%" :empty-text="$t('public.nodata')">
      <el-table-column align="center" :label="$t('home.block5.cell1')" width="140">
        <template slot-scope="scope" >
          <span>{{scope.row.created_at | timestr}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="amount" align="center" :label="$t('home.block5.cell2')"  width="120"></el-table-column>
      <el-table-column prop="sender_address" :label="$t('home.block5.cell3')" width="240"></el-table-column>
      <el-table-column prop="receiver_address" :label="$t('home.block5.cell4')" width="240"></el-table-column>
      <el-table-column :label="$t('home.block5.cell5')" align="center" >
        <template slot-scope="scope" >
          <template v-if="scope.row.status.toLowerCase() == 'error'">
            <el-popover
              placement="bottom"
              trigger="hover">
              <p style="text-align: center">{{scope.row.error_msg}}</p>
              <span style="color:#eb8900;cursor:default;" slot="reference">
                {{$t('home.block5.status.'+scope.row.status)}}
                <i class="el-icon-warning"></i>
                </span>
            </el-popover>
          </template>
          <template v-else>
            <span>{{$t('home.block5.status.'+scope.row.status)}}</span>
          </template>
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
import {timeStrFormart} from '@/utils/toolUtils'
export default {
    props: ['tableData'],
    filters: {
      timestr: str => timeStrFormart(str)
    },
    methods: {
      gotoCheck(row){
        this.$router.push({name: 'transDetail', params:{id: row.id}})
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

  ::v-deep td {
    & > .cell {
      // word-break: break-word;
      line-height: 115%;
    }
  }
}
</style>