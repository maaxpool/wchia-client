<template>
    <div class="container">
        <h2 class="page-title">{{$t('transDetail.pageTitle')}}</h2>

        <page-card class="page-inner">
            <div class="header" slot="header">
                <div class="item">
                    <label>{{$t('transDetail.subTitleItem1')}}</label>
                    <span>{{created_at}}</span>
                </div>
                <!-- <div class="item">
                    <label>{{$t('transDetail.subTitleItem2')}}:</label>
                    <span>已完成</span>
                </div> -->
                <div class="item">
                    <label>{{$t('transDetail.subTitleItem3')}}</label>
                    <span>{{fee_amount}} XCH</span>
                </div>
            </div>
            <div class="content" v-loading="loadingWatcher.indexOf('transaction_detail') > -1">
                <template v-if="dataList.length > 0" >
                    <div class="item" :class="{'full': item.full}" v-for="(item, idx) in dataList" :key="`trans_item_${idx}`">
                        <label>{{item.name}}</label>
                        <p>{{item.val}}</p>
                    </div>
                </template>
                <no-data v-else />
            </div>
        </page-card>

    </div>    
</template>

<script>
import noData from '@/layouts/nodata'
import pageCard from '@/layouts/card'

import {mapGetters} from 'vuex'
export default {
    name: 'transDetail',
    components: {pageCard, noData},
    computed: {
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
        symbol(){
            if (this.type == 'wrap') {
                return 'WXCH'
            } else if (this.type == 'unwrap') {
                return 'XCH'
            } else {
                return ''
            }
        }
    },
    data(){
        return {
            created_at: "--",
            type: "",
            fee_amount: "--",
            dataList: {
                sender_address: {name: this.$t('transDetail.item1Name') + this.symbol, val: ""},
                receiver_address: {name:  this.$t('transDetail.item2Name'), val: ""},
                amount: {name:this.$t('transDetail.item3Name'), val:""},
                status: {name: this.$t('transDetail.item4Name'), val: ""},
                chia_transaction_hash: {name: this.$t('transDetail.item5Name'), val: ""},
                eth_transaction_hash: {name: this.$t('transDetail.item6Name'), val: ""},
            }
        }
    },
    mounted(){
        this.getTransDetail()
    },
    methods: {
        getTransDetail(){
            if(this.$route.params) {
                let id_ = this.$route.params.id
                this.$http('transaction_detail', {id: id_})
                    .then(res => {
                        if (res) {
                            let data = res['msg']
                            this.created_at = data['created_at']
                            this.type = data['type']
                            this.fee_amount = data['fee_amount']
                            for (key in this.dataList) {
                                this.dataList[key]['val'] = data[key]
                            }
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            }
        }
    }
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
    .item {
        &:first-child {
            margin-right: 70px;
        }

        &:nth-child(2) {
            -webkit-box-flex: 1;
            flex: 1;
        }
    }

    label {
        font-weight: 600;
        margin-right: 10px;
    }

    span {
        color: $--color-black-2;
    }
}

.content {
    font-size: 15px;
    width: 100%;
    min-height: 300px;
    position: relative;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    .item {
        @include displayFlex;
        width: 50%;
        float: left;
        margin-bottom: 30px;
        word-break: break-word;
        padding-right: 50px;

        &.full {
            width: 100%;
            margin-bottom: 80px;
        }

        label {
            width: 148px;
            font-weight: 600;
        }
        
        p {
            -webkit-box-flex: 1;
            flex: 1;
            max-width: 250px;
            color: $--color-black-3;
        }
    }
}


</style>