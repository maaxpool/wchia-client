<template>
  <div>
    <el-table :data="tableData" >
      <template v-for="(item, idx) in columns " >
        <el-table-column 
          v-if="item !== 'extend'"
          :key="`r_${idx}_${item}`" 
          :label="item" 
          :prop="item" 
        ></el-table-column>
      </template>

      <el-table-column type="expand">
        <template slot-scope="props">
          <ul class="expand__inner">
            <!-- {{props.row.extend}} -->
            <li v-for="(item, eidx) in props.row.extend" :key="`extend_${eidx}`">
              <!-- {{item}} -->
              <label>{{eidx}}</label>
              <a>{{item}}</a>
            </li>
          </ul>
        </template>  
      </el-table-column>
    </el-table>
    <cus-pagation from="0" to="10" total="100" page="1" size="10" />
  </div>
</template>

<script>
import cusPagation from '@/layouts/pagation/page_1.vue'
export default {
  // props:["tableData"],
  components: {
    cusPagation
  },
  computed: {
    columns(){
      if(this.tableData) {
        return Object.keys(this.tableData[0])
      }
    }
  },
  data(){
    return {
      tableData: []
    }
  },
  created() {

  },
  methods: {
    getOrderBookData() {
      this.$http('orderBook', {
        page: 1,
        size: 20,
        type: 'all'
      }).then(res => {
        // console.log(res)
        
      })
    }
  }
  // mounted() {
  //   console.log(this.tableData)
  //   console.log(this.columns)
  // }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.el-table {
  font-size: 16px;
  ::v-deep &__expanded-cell {
    padding: 25px 40px;

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