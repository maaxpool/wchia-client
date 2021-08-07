<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block4.title')" :subTitle="$t('home.block4.subTitle')" />
        <div class="inner">
            <div class="l-part"><img src="/img/block_4_bg.png" /></div>
            <form-charge-xch class="r-part"></form-charge-xch>
        </div>
    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/header_home_block.vue'
import formChargeXch from '@/layouts/form/form_charge_xch.vue'
export default {
    components: {headerHomeBlock, formChargeXch}
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.inner {
    display: -webkit-flex;
    display: flex;
    align-items: center;
}

.r-part {
    -webkit-box-flex: 1;
    flex: 1;
}

.l-part {
    padding-right: 70px;
    img {
        width: 388px;
        height: 324px;
    }
}
</style>