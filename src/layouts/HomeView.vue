<template>
    <div class="page">
        <!-- <header-home v-if="$router.meta.header == 'home'"></header-home>
        <header-home v-if="$router.meta.header == 'inner'"></header-home> -->
        <router-view></router-view>
    </div>
</template>


<style scoped lang="scss">
@import '@/style/custom';
</style>