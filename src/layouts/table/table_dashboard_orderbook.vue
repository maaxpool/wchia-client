<template>
  <div>
    <el-table :data="tableData" >

      <el-table-column label="action" prop="type" >
        <template slot-scope="scope" >
          <i class="icon" :style="{backgroundImage: `url(/img/dashboard_ob_icon_${scope.row.type}.png)`}"></i>
          <span style="vertical-align:middle">{{scope.row.type}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date & time" align="center" prop="created_at" />
      <el-table-column label="MERCHANT" align="center" prop="partner_name" />
      <el-table-column label="VALUE(WXCH)" align="center" prop="amount" />
        

      <el-table-column type="expand">
        <template slot-scope="props">
          <ul class="expand__inner">
            <li>
              <label>Eth Request Hash</label>
              <a>{{props.row['eth_request_tx_hash']}}</a>
            </li>
            <li>
              <label>Eth Review Hash</label>
              <a>{{props.row['eth_review_tx_hash']}}</a>
            </li>
            <li>
              <label>Chia Send Hash</label>
              <a>{{props.row['chia_send_tx_hash']}}</a>
            </li>
          </ul>
        </template>  
      </el-table-column>
    </el-table>
    <cus-pagation 
        v-if="total > size"
        :total="total" 
        :size="size" 
        :page="curpage"
        @nextPage="getOrderBookData" 
        @prevPage="getOrderBookData" />
  </div>
</template>

<script>
import cusPagation from '@/layouts/pagation/page_1.vue'
export default {
  // props:["tableData"],
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
      this.$http('orderBook', {
        page: page_,
        size: this.size,
        type: 'all'
      }).then(res => { 
        this.curpage = page_
        const orgData = res
        if (orgData&&orgData.msg) {
            const data = orgData.msg

            this.total = data.total
            const dataList = data.transactions

            this.tableData = [...dataList]
        }
      })
      
    },
  }
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
      padding-left: 40px;
    }
  }

  ::v-deep th.is-leaf:first-child .cell {
      padding-left: 40px;
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

.expand__inner {
  & > li {
    padding: 15px 0;
    font-size: 16px;
    & > * {
      display: block;
      line-height: 125%;
    }
    label {
      margin-bottom: 10px;
      font-weight: 600;
    }
    
    a {
      color: $--color-primary;
    }
  }
}
</style>