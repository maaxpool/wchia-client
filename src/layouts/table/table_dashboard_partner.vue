<template>
<div>
  <el-table :data="tableData" >
    <el-table-column label="PARTNER" prop="name" />
    <el-table-column label="ROLE" prop="role" />
    <el-table-column width="200" >
      <el-button type="primary">GET WXCH</el-button>
    </el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <ul class="expand__inner">
          <!-- {{props.row.extend}} -->
          <li>
            <label>ETHEREUM ADDRESS - MERCHANT</label>
            <a>{{props.row.eth_address}}</a>
          </li>
          <li>
            <label>CUSTODIAN CHIA DEPOSITORY ADDRESS</label>
            <a>{{props.row.chia_custodian_depository_address}}</a>
          </li>
          <li>
            <label>MERCHANT DEPOSIT CHIA ADDRESS</label>
            <a>{{props.row.chia_broker_deposit_address}}</a>
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
  created(){
    this.getData()
  },
  methods: {
    getData(page){
      let page_ = this.curpage + (page||0)
      this.$http('partner', {
        page: page_,
        size: this.size,
      }).then(res => { 
        this.curpage = page_
        const orgData = res
        console.log(res)
        if (orgData&&orgData.msg) {
            const data = orgData.msg

            this.total = data.total
            const dataList = data.partners

            this.tableData = [...dataList]
        }
      })
    },
    // buildData(){
    //   return {
    //       "success": true,
    //       "msg": {
    //         "total": 1,
    //         "partners": [
    //           {
    //             "name": "Test Partner",
    //             "role": "broker",
    //             "eth_address": "0x4a311575d3dd3e4c70a7c8a3b4c2056e26427dbf",
    //             "chia_custodian_depository_address": "txch146jyajg3pq20h57kmj8yans5efvmc2vzqesejp3lm970m52hzfcspd4ah6",
    //             "chia_broker_deposit_address": "xch12vq7uawl7h4t4yfcfm5d7keryjmtfgt3gc3fneyhsnztu0m3jtjqk2882k",
    //             "bridge_url": "https://www.baidu.com"
    //           }
    //         ]
    //       }
    //     }
    // }
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