<template>
    <div class="page">
        <header-home></header-home>
        <router-view></router-view>
    </div>
</template>

<script>
import headerHome from '@/layouts/header/header_home.vue'
export default {
    components: {headerHome}
}
</script>
