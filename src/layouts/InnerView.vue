<template>
    <div class="page">
        <header-inner></header-inner>
        <router-view></router-view>
        <page-footer />
    </div>
</template>

<script>
import headerInner from '@/layouts/header/header_inner.vue'
import pageFooter from '@/layouts/footer'
export default {
    components: {headerInner, pageFooter},
    
}
</script>

<style scoped lang="scss">
@import '@/style/custom';

</style>