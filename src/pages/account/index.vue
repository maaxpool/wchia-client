<template>
    <div class="container">
        <h2 class="page-title">{{$t('account.pageTitle')}}</h2>

        <page-card class="page-inner">
            <div class="header" slot="header">
                <div class="item">
                    <label>{{$t('account.subTitleItem1')}}: </label>
                    <span>2020-18-12</span>
                </div>
            </div>
            <form-account></form-account>
        </page-card>

        <div class="btn-group">
            <el-button type="primary">{{$t('account.btn1')}}</el-button>
            <el-button type="primary" plain>{{$t('public.cancel')}}</el-button>
        </div>
    </div>    
</template>

<script>
import pageCard from '@/layouts/card'
import formAccount from '@/layouts/form/form_account.vue'
export default {
    name: 'account',
    components: {pageCard, formAccount}
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.page-title {
    font-size: 22px;
    margin: 30px 0;
}

.page-inner {
    margin: 30px 0 45px;
}

.header {
    @include displayFlex;
    font-size: 15px;
    .item:first-child {
        margin-right: 70px;
    }

    .item:nth-child(2) {
        -webkit-box-flex: 1;
        flex: 1;
    }

    label {
        font-weight: 600;
        margin-right: 10px;
    }
}

.btn-group {
    text-align: center;
    margin-bottom: 50px;
    .el-button {
        width: 212px;
        height: 48px;
        font-size: 18px;
        margin-right: 28px;
        &:last-child {
            margin-right: 0;
        }
    }
}

</style>