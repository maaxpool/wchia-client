<template>
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
</template>

<script>

export default {
  props:["tableData"],
  computed: {
    columns(){
      if(this.tableData) {
        return Object.keys(this.tableData[0])
      }
    }
  },
  data(){
    return {}
  }
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