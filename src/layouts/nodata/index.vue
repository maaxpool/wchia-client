<template>
    <div class="nodata">
        <div class="view"></div>
        <div class="desc">{{$t('public.nodata')}}</div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/style/custom';
.nodata {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: 15px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 28%;
    border-radius: 18px;
    .view {
        width: 100%;
        padding-bottom: 65%;
        background: url(/img/no_data.png) no-repeat center/cover;
        margin-bottom: 20px;
    }

    .desc {
        font-size: 100%;
        color: $--color-black-4;
    }
}

</style>