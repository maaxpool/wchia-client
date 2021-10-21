<template>
    <div class="container">
        <h2 class="page-title">
            <template v-if="type == 'wrap'">
                {{$t('home.block5.tab1')}} {{$t('public.detail')}}
            </template>
            <template v-if="type == 'unwrap'">
                {{$t('home.block5.tab2')}} {{$t('public.detail')}}
            </template>
        </h2>

        <page-card class="page-inner">
            <div class="header" slot="header">
                <div class="item">
                    <label>{{$t('transDetail.subTitleItem1')}}</label>
                    <span>{{created_at | timeStr}}</span>
                </div>
                <div class="item">
                    <label>{{$t('transDetail.subTitleItem3')}}</label>
                    <span>{{fee_amount | floatStr}} {{symbol.sender_address}}</span>
                </div>
            </div>
             <!-- v-loading="loadingWatcher.indexOf('transaction_detail') > -1" -->
            <div class="content">
                <template v-if="isLoaded" >
                    <div class="item" :class="{'full': item.full}" v-for="(item, idx) in dataList" :key="`trans_item_${idx}`" v-if="item.val" >
                        <label>
                            {{$t(item.name)}}
                        </label>
                        <div>
                            <template v-if="idx=='status'">
                                <el-popover
                                    placement="bottom"
                                    trigger="hover"
                                    v-if="item.val.toLowerCase()=='error'"
                                >
                                    <p style="text-align: center">{{error_msg}}</p>
                                    <span style="color:#eb8900;cursor:default;" slot="reference">
                                        <i class="el-icon-warning"></i>
                                        {{$t('home.block5.status.'+item.val)}}
                                    </span>
                                </el-popover>
                                <p v-else>{{$t('home.block5.status.'+item.val)}}</p>
                            </template>
                            <template v-else>
                                <p>{{item.val}}</p>
                                
                            </template>
                            <a v-if="item.handler && item.val" :href="item.handler.link+item.val">{{$t(item.handler.txt)}}</a>
                        </div>
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

import {timeStrFormart} from '@/utils/toolUtils'
import {cmpl} from '@/utils/floatOperation'
import {mapGetters} from 'vuex'
export default {
    name: 'transDetail',
    components: {pageCard, noData},
    filters: {
        timeStr: str => timeStrFormart(str),
        floatStr: num => cmpl(num, 6)
    },
    computed: {
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
        symbol(){
            if (this.type && typeof this.type == 'string') {
                let s = this.type.indexOf('un') > -1?1:0
                return {sender_address: s==0?'WXCH':'XCH', receiver_address: s==1?'WXCH':'XCH'}
            } else {
                return {}
            }
        },
    },
    data(){
        return {
            created_at: "--",
            type: "",
            fee_amount: "--",
            isLoaded: false,
            dataList: {
                sender_address: {name:'transDetail.item1Name', val: ""},
                receiver_address: {name: 'transDetail.item2Name', val: ""},
                amount: {name: 'transDetail.item3Name', val:""},
                status: {name:'transDetail.item4Name', val: ""},
                chia_transaction_hash: {name:'transDetail.item5NameChia', val: "", handler:{link: process.env.VUE_APP_CHIA_URL+'block/', txt: 'public.check'}},
                eth_transaction_hash: {name:'transDetail.item5NameEth', val: "", handler:{link: process.env.VUE_APP_ETH_URL+'tx/', txt: 'public.check'}}
                // eth_transaction_hash: {name: this.$t('transDetail.item6Name'), val: ""},
            },
            error_msg: ''
        }
    },
    mounted(){
        this.getTransDetail()
    },
    activated(){
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
                            let obj = {...this.dataList}
                            this.created_at = data['created_at']
                            this.type = data['type']
                            this.fee_amount = data['fee_amount']
                            for (let keys in obj) {
                                obj[keys]['val'] = data[keys]
                                if(keys == 'amount') {
                                    obj[keys]['val'] = cmpl(data[keys], 6)
                                }
                            }
                            this.error_msg = data['error_msg']
                            this.isLoaded = true
                            this.dataList = {...obj}

                            setTimeout(this.getTransDetail, 60000)
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
    @include displayFlex;
    flex-wrap: wrap;
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
        
        div {
            -webkit-box-flex: 1;
            flex: 1;
            max-width: 250px;
            color: $--color-black-3;

            p {
                margin-bottom: 20px;
            }
        }
    }
}


</style>