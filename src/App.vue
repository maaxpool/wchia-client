<template>
  <div id="app" :style="{backgroundColor: this.bg||'#FFFFFF'}">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {getConfigure} from '@/utils/authUtils'
export default {
  name: 'App',
  components: {},
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
  min-width: $--page-width;
}

*, *::before, *::after {
  box-sizing: border-box;
}

ul, li, dl, dt, dd {
  list-style: none;
}

.container {
  width: $--page-width;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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

// @media screen and (max-width: $--page-width) {
//   body {
    
//   }
// }
</style>
