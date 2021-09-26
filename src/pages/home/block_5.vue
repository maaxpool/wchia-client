<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block5.title')" />
        <div class="inner sum-board">
            <div class="item">
                <h5>{{$t('home.block5.item1')}}</h5>
                <div class="ctn">
                    <img src="/img/block_5_wxch.png" />
                    <div class="count">
                        {{balance.wrap_amount | floatStr}} WXCH
                    </div>
                </div>
            </div>
            <div class="item">
                <h5>{{$t('home.block5.item2')}}</h5>
                <div class="ctn">
                    <img src="/img/block_5_xch.png" />
                    <div class="count">
                        {{balance.unwrap_amount | floatStr}} XCH
                    </div>
                </div>
            </div>
        </div>
        <!-- @tab-click="handleClick" -->
         <!-- v-loading="loadingWatcher.indexOf('transaction_list') > -1" -->
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane  :label="$t('home.block5.tab1')" name="wrap">
                <wxch-history-tb v-if="table_wrap.list.length > 0" :tableData="table_wrap.list" />
                <el-skeleton v-if="table_wrap.list.length == 0 && table_wrap.total !== 0" animated />
                <no-data v-if="table_wrap.total === 0" />
            </el-tab-pane>
            <el-tab-pane :label="$t('home.block5.tab2')" name="unwrap">
                <wxch-history-tb v-if="table_unwrap.list.length > 0" :tableData="table_unwrap.list" />
                <el-skeleton v-if="table_unwrap.list.length == 0 && table_unwrap.total !== 0" animated />
                <no-data v-if="table_unwrap.total === 0" />
            </el-tab-pane>
        </el-tabs>

        <!-- {{pagation}} -->
        <div class="pagation" v-if="pagation.total > 10">
            <span>{{pagation.from}} ~ {{pagation.to}} of {{pagation.total}}</span>
            <a class="prev" :class="{disabled:(pagation.page==1)}" @click="turn(-1)"></a>
            <a class="next" :class="{disabled:(pagation.page >= pagation.last)}" @click="turn(1)"></a>
        </div>
    </div>
</template>


<script>
import wxchHistoryTb from '@/layouts/table/table_home.vue'
import noData from '@/layouts/nodata'
import headerHomeBlock from '@/layouts/header/header_home_block.vue'

import {mapGetters} from 'vuex'
import {cmpl} from '@/utils/floatOperation'
import {getBalance, getTranscationList, blockViewUpdate} from '@/utils/authUtils'
export default {
    components: {headerHomeBlock, wxchHistoryTb, noData },
    filters: {
        floatStr: num => cmpl(num, 6)
    },
    computed: {
        ...mapGetters('user', {
            user: 'user',
            balance: 'balance',
        }),
        ...mapGetters('ethereum', {
            account: 'account',
        }),
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
        pagation(){
            let type_ = this.activeName,
                cur = this['table_'+type_],
                from = (cur['page'] - 1)*cur['size'] + 1,
                to = (cur['page'])*cur['size'],
                total = cur['total'],
                last = cur['total']%cur['size']
            
            return {
                from, to, total, last, page: cur['page']
            }
        }
    },
    created() {
        this.$globalBus.$on('TRANSCATION_TAB', (active) => {
            this.activeName = active
        })
    },
    data(){
        return {
            activeName: 'wrap',
            size: 20,
            currentpage: 1,
            reflashTag: null,
            table_wrap: {
                page: 1,
                size: 10,
                total: null,
                list: []
            },
            table_unwrap: {
                page: 1,
                size: 10,
                total: null,
                list: []
            },
        }
    },
    watch: {
        currentpage(){
            this.getTranscationData()
        },
        activeName(){
            this.getTranscationData()
        },
        user(){
            getBalance()
        },
        balance: {
            handler(n, o) {
                if (o && n.state_init) 
                    this.getTranscationData()
                // else 
                //     getBalance()
            },
            immediate: true,
            deep: true
        }
    },
    created() {
        this.$globalBus.$on('TRANSCATION_TAB', (active) => {
            this.activeName = active
        })
        this.getTranscationData()
    },
    activated(){
        this.getTranscationData()
    },
    methods: {
        getTranscationData(){
            if(this.loadingWatcher.indexOf('transaction_list') > -1) return false
            clearTimeout(this.reflashTag)
            if(!this.account || !this.user) {
                setTimeout(this.getTranscationData, 2000)
                return false
            }

            clearTimeout(this.reflashTag)

            let type_ = this.activeName
            this['table_'+type_]['list'] = []
            this.$http('transaction_list', {
                eth_address: this.account,
                type: this.activeName,
                size: this['table_'+type_]['size'],
                page: this['table_'+type_]['page']
            }).then(res => {
                if(res && res['success']) {
                    let data = res['msg']
                    this['table_'+type_]['total'] = data.total
                    for (let i in data.transactions) {
                        data.transactions[i]['amount'] = cmpl(data.transactions[i]['amount'], 6)
                    }

                    this['table_'+type_]['list'] = data.transactions
                    // this.reflashTag = setTimeout(this.getTranscationData, 60000)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        turn(page){
            let type_ = this.activeName
            this['table_'+type_]['page'] + page
            this.getTranscationData()
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.inner {
    display: -webkit-flex;
    display: flex;
    align-items: center;
}

.sum-board {
    padding: 45px;
    border-radius: 18px;
    background: $--color-white;
    border-radius: 18px;
    box-shadow: $--page-item-shodow-1;
    margin-bottom: 30px;
    .item {
        -webkit-box-flex: 1;
        flex: 1;
    }

    h5 {
        font-size: 22px;
        color: $--color-black-2;
        margin-bottom: 18px;
    }
    
    .ctn {
        display: -webkit-box;
        display: flex;
        align-items: center;
        img {
            width: 60px;
            height: 60px;
            margin-right: 18px;
        }

        .count {
            -webkit-box-flex: 1;
            flex: 1;
            font-size: 28px;
            font-weight: 500;
        }
    }
}

::v-deep .el-tabs {
    &__header {
        margin-bottom: 0;
        padding: 0 40px;
        border-bottom: 0 none;
    }

    &__nav {
        border: 0 none !important;
    }

    &__item {
        min-width: 158px;
        margin-right: 12px;
        background: #E3EBF1;
        color: #969DA2;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        text-align: center;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        &.is-active {
            background-color: $--color-primary;
            color: $--color-white;
        }
    }

    &__content {
        overflow: hidden;
        width: 100%;
        border-radius: 18px;
        box-shadow: $--page-item-shodow-1;
        .el-tab-pane {
            width: 100%;
            position: relative;
            background: $--color-white;
            &.no-data {
                min-height: 500px;
            }
        }
    }

    .el-skeleton {
        padding: 40px;
    }
}

.pagation {
    margin: 36px 0 60px;
    text-align: center;
    line-break: 28px;
    span {
        line-height: inherit;
        vertical-align: middle;
        margin: 0 10px;
        color: $--color-black-3;
    }
    a {
        display: inline-block;
        cursor: pointer;
        width: 28px;
        height: 28px;
        margin: 0 10px;
        background:  no-repeat center/100%;
        opacity: 0.65;
        vertical-align: middle;
        &:hover {
            opacity: 0.8;
        }
        &:active {
            opacity: 1;
        }

        &.prev {
            background-image: url(/img/prev.png);
        }

        &.next {
            background-image: url(/img/next.png);
        }

        &.disabled {
            opacity: 0.2;
            cursor: default;
        }
    }
}
</style>