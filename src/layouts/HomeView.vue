<template>
    <div class="page">
        <!-- <header-home v-if="$router.meta.header == 'home'"></header-home>
        <header-home v-if="$router.meta.header == 'inner'"></header-home> -->
        <router-view></router-view>
    </div>
</template>

<script>
import headerHome from '@/layouts/header/header_home.vue'
export default {
    components: {headerHome}
}
</script>
