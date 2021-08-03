<template>
<!-- v-loading="!loadingWatcher" -->
    <div class="container" >
        <h2 class="page-title">{{$t('account.pageTitle')}}</h2>
        
        <page-card class="page-inner" v-loading="loadingWatcher.indexOf('modify_user') > -1" element-loading-background="rgba(255, 255, 255, 0.5)" >
            <div class="header" slot="header">
                <div class="item">
                    <label>{{$t('account.subTitleItem1')}}: </label>
                    <span>--</span>
                </div>
            </div>
            <form-account ref="formAccount"></form-account>
        </page-card>

        <div class="btn-group" >
            <el-button type="primary" @click="submit" :disabled="modifyUserLoading">
                <template v-if="!modifyUserLoading"> {{$t('account.btn1')}} </template>
                <template v-else> Loading... </template>
            </el-button>
            <!-- <el-button type="primary" plain>{{$t('public.cancel')}}</el-button> -->
        </div>
    </div>    
</template>

<script>
import pageCard from '@/layouts/card'
import formAccount from '@/layouts/form/form_account.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'account',
    components: {pageCard, formAccount},
    computed: {
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
        modifyUserLoading() {
            return this.loadingWatcher.indexOf('modify_user') > -1
        }
    },
    methods: {
        submit(){
            if (this.modifyUserLoading)
                return false
            this.$refs['formAccount'].submit()
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.page-title {
    font-size: 22px;
    margin: 30px 0;
    font-weight: 500;
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