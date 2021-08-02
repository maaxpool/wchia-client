<template>
    <div class="container">
        <div class="inner" >
            <div class="l-part">
                <h2 class="title">{{$t('register.pageTitle')}}</h2>
                <h5 class="sub-title">{{$t('register.subTitle')}}</h5>
                <form-register />
            </div>
            <div class="r-part">
                <img src="/img/register_bg.png" />
            </div>
        </div>
    </div>
</template>

<script>
import formRegister from '@/layouts/form/form_register.vue'
export default {
    components: {formRegister},
    data(){
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.inner {
    @include displayFlex;
    padding: 50px 0 100px;
    align-items: center;
}

.l-part {
    -webkit-box-flex: 1;
    flex: 1;
    h2 {
        font-size: 27px;
        margin-bottom: 12px;
        color: $--color-black-1;
        font-weight: 200;
        text-align: center;
    }
    h5 {
        font-size: 18px;
        color: $--color-black-2;
        margin-bottom: 35px;
        text-align: center;
        font-weight: 200;
    }
}

.r-part {
    img {
        width: 385px;
        height: 565px;
        margin-left: 70px;
    }
}

</style>