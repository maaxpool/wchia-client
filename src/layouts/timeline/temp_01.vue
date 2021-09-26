<template>
  <el-timeline>
      <el-timeline-item
          v-for="(item, index) in lines"
          :key="index"
          :hide-item="true"
          :icon="item.icon"
          :type="item.type"
          :color="item.color"
          :size="item.size"
          :timestamp="item.timestamp">
          <!-- {{item.content}} -->
          <div class="inner">
            <h4 class="hd">{{index+1}})  {{ $t(item.title) }}</h4>
            <div class="bd" >
              <!-- :style="ctn.style" -->
              <div v-for="(ctnItem, cidx) in item.content" :key="cidx+'_ctn'" :style="ctnItem.style">
                <template v-if="ctnItem.type == 'String'">
                  <div>
                    {{$t(ctnItem.txt)}}
                  </div>
                </template>
                <template v-if="ctnItem.type == 'Object'">
                    {{ctnItem.txt}}
                </template>
              </div>
            </div>
          </div>

      </el-timeline-item>
  </el-timeline>
</template>

,<script>
export default {
  props:["lines"]
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.inner {
  max-width: 480px;
  word-break: break-all;
}

.hd {
  margin-bottom: 10px;
  font-size: 16px;
  color: $--color-black;
}

.bd {
  color: $--color-black-2;
  font-size: 14px;
}


::v-deep .el-timeline {
  
  &-item {
    &:last-child {
      padding-bottom: 0;
    }

    &__wrapper {
      padding-left: 50px;
    }

    &__tail {
      border-left: 3px;
      border-style: dashed;
      border-color: $--color-primary;
    }

    &__node--large {
      width: 28px;
      height: 28px;
      left: -8px;
    }

    &__icon {
      display: block;
      width: 100%;
      height: 100%;
      background: no-repeat center/cover;
      border-radius: 50%;
    }

    @for $i from 1 through 5 {
      .cus-icon-timeline-0#{$i} {
        background-image: url(/img/icon_block_timeline_0#{$i}.png);
      }
    }
  }

}


</style>