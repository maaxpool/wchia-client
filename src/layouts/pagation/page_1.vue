<template>
  <!-- v-if="pagation.total > 10" -->
  <div class="pagation">
      <span>{{from}} ~ {{to}} of {{total}}</span>
      <a class="prev" :class="{disabled:(page==1)}" @click="nextPage(-1)"></a>
      <a class="next" :class="{disabled:(page >= lastPage)}" @click="prevPage(1)"></a>
  </div>
</template>

<script>
// cur = this['table_'+type_],
// from = (cur['page'] - 1)*cur['size'] + 1,
// to = (cur['page'])*cur['size'],
// total = cur['total'],
// last = cur['total']%cur['size']
export default {
  props:['from', 'to', 'total', 'page', 'size'],
  computed: {
    lastPage(){
      if (this.total && this.size) {
        return this.total%this.size
      }
      return 0
    }
  },
  methods: {
    nextPage(params) {
      this.$emit('nextPage', params)
    },
    prevPage(params) {
      this.$emit('prevPage', params)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.pagation {
    margin: 36px 0 60px;
    text-align: center;
    line-break: 28px;
    span {
        line-height: inherit;
        vertical-align: middle;
        margin: 0 10px;
        color: $--color-black-3;
    }
    a {
        display: inline-block;
        cursor: pointer;
        width: 28px;
        height: 28px;
        margin: 0 10px;
        background:  no-repeat center/100%;
        opacity: 0.65;
        vertical-align: middle;
        &:hover {
            opacity: 0.8;
        }
        &:active {
            opacity: 1;
        }

        &.prev {
            background-image: url(/img/prev.png);
        }

        &.next {
            background-image: url(/img/next.png);
        }

        &.disabled {
            opacity: 0.2;
            cursor: default;
        }
    }
}
</style>