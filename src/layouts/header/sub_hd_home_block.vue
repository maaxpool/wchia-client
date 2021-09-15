<template>
    <div class="block-header">
        <h2>{{title}}</h2>
        <h5>{{subTitle}}</h5>
    </div>
</template>

<script>
export default {
    name: 'header-home-block',
    props:['title', 'subTitle']
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.block-header {
    text-align: center;
    margin-bottom: 60px;
    h2 {
        font-size: 36px;
        margin-bottom: 16px;
        color: $--color-primary;
    }

    h5 {
        color: $--color-black-3;
        font-size: 18px;
    }
}
</style>