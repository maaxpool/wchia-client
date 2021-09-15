<template>
  <div id="app" :style="{backgroundColor: this.bg||'#FFFFFF'}">
    <header-inner v-if="$route.meta.header == 'inner'"></header-inner>
    <!-- ="$route.meta.header == 'home'" -->
    <header-home v-else></header-home>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <page-footer />
  </div>
</template>

<script>
import headerHome from '@/layouts/header/header_home.vue'
import headerInner from '@/layouts/header/header_inner.vue'
import pageFooter from '@/layouts/footer'

import {getConfigure} from '@/utils/authUtils'
export default {
  name: 'App',
  components: {headerHome, headerInner, pageFooter},
  data(){
    return {
      bg: null
    }
  },
  created(){
    getConfigure()
  },
  watch: {
    $route(n) {
      if(n.meta) {
        this.bg = n.meta.bg
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/style/custom';
html, body, div, p, h1, h2, h3, h4, h5, ul, li, table, th, td, input, select, textarea {
  padding: 0;
  margin: 0;
  border: 0 none; 
  outline: none !important;
}

body {
  font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 400;
  word-wrap: break-word;
  color: $--color-black-1;
}

*, *::before, *::after {
  box-sizing: border-box;
}

ul, li, dl, dt, dd {
  list-style: none;
}

.container {
  min-width: $--page-width;
  width: $--page-width;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

a[href] {
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  text-decoration: none;
  color: $--color-primary !important;
  &:visited {
    color: $--color-primary-light-3 !important;
  }

  &:hover {
    color: $--color-primary-light-5 !important;  
  }

}

</style>
