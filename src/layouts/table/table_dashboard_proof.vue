<template>
  <div>
    <el-table :data="tableData" >
      <!-- <template v-for="(item, idx) in columns " >
        <el-table-column 
          v-if="item !== 'extend'"
          :key="`r_${idx}_${item}`" 
          :label="item" 
          :prop="item" 
        ></el-table-column>
      </template> -->
      <el-table-column 
        label="CUSTODIAN Chia ADDRE"
        prop="chia_custodian_depository_address"
      ></el-table-column>
      <el-table-column 
        label="BALANCE AMOUNT"
        prop="balance"
        width="260"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import cusPagation from '@/layouts/pagation/page_1.vue'
export default {
  components: { cusPagation },
  computed: {
    columns(){
      if(this.tableData) {
        return Object.keys(this.tableData[0])
      }
    }
  },
  data(){
    return {
      size: 20,
      curpage: 1,
      total: 0,
      tableData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(page) {
      let page_ = this.curpage + (page||0)
      this.$http('proof', {
        page:1,
        size:10
      }).then(res => {
        this.curpage = page_
        const orgData = res
        if (orgData&&orgData.msg) {
            const data = orgData.msg

            this.total = data.total
            const dataList = data.partners

            this.tableData = [...dataList]
        }
      })
    },
    // buildData() {
    //   return {
    //     "success": true,
    //     "msg": {
    //       "total": 2,
    //       "total_balance": 413,
    //       "partners": [
    //         {
    //           "chia_custodian_depository_address": "xch13z8jf3wslh69zs7lhdevzj4zhlyml2xdvjsz087suuuzzr2cc7mqh59ruj",
    //           "balance": 100
    //         },
    //         {
    //           "chia_custodian_depository_address": "txch146jyajg3pq20h57kmj8yans5efvmc2vzqesejp3lm970m52hzfcspd4ah6",
    //           "balance": 313
    //         }
    //       ]
    //     }
    //   }
    // }
  },

}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.el-table {
  font-size: 16px;
  ::v-deep &__expanded-cell {
    padding: 15px 40px;
  }

  ::v-deep &__body {
    td:first-child .cell{
      color: #3AA759;
      padding-left: 40px;
    }
  }

  ::v-deep th.is-leaf {
    &:first-child .cell{
      padding-left: 40px;
    }
      
  }

  ::v-deep &__expanded-cell {
    background-color: #F8FAFB;
    &:hover {
      background-color: #F5F7FA !important;

    }
  }

  .icon {
    height: 27px;
    width: 24px;
    vertical-align: middle;
    background: no-repeat center/cover;
    display: inline-block;
    margin-right: 10px;
  }

}
</style>