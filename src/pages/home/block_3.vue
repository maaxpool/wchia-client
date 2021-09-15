<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block3.title')" :subTitle="$t('home.block3.subTitle')" />
        <div class="inner">
            <form-charge-wxch class="l-part"></form-charge-wxch>
            <div class="r-part"><img src="/img/block_3_bg.png" /></div>
        </div>
    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/sub_hd_home_block.vue'
import formChargeWxch from '@/layouts/form/form_charge_wxch.vue'
export default {
    components: {headerHomeBlock, formChargeWxch}
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.inner {
    display: -webkit-flex;
    display: flex;
    align-items: center;
}

.l-part {
    -webkit-box-flex: 1;
    flex: 1;
}

.r-part {
    padding-left: 64px;
    img {
        width: 395px;
        height: 295px;
    }
}
</style>