<template>
    <div class="container">
        <h2 class="page-title">交易详情</h2>

        <page-card class="page-inner">
            <div class="header" slot="header">
                <div class="item">
                    <label>交易时间: </label>
                    <span>2020-18-12</span>
                </div>
                <div class="item">
                <label>结果: </label>
                    <span>已完成</span>
                </div>
                <div class="item">
                    <label>手续费: </label>
                    <span>20.0000 XCH</span>
                </div>
            </div>
            <div class="content">
                <div class="item" :class="{'full': item.full}" v-for="(item, idx) in dataList" :key="`trans_item_${idx}`">
                    <label>{{item.name}}</label>
                    <p>{{item.val}}</p>
                </div>
                  
            </div>
        </page-card>

    </div>    
</template>

<script>
import pageCard from '@/layouts/card'
export default {
    name: 'transDetail',
    components: {pageCard},
    data(){
        return {
            dataList:[{
                name: 'XCH发送地址',
                val: 'xch1yycy4ehlnfsy6tqyyqmep9shpjcs89en6mhsx5cc0224ea92065qftefdj'
            },{
                name: 'XCH接收地址',
                val: 'xch1yycy4ehlnfsy6tqyyqmep9shpjcs89en6mhsx5cc0224ea92065qftefdj'
            },{
                name: 'XCH数量',
                val: '4000.0000'
            },{
                name: '状态',
                val: '已确认'
            },{
                name: 'Chia transaction',
                val: '31fd625f1e88b1dff7b3c0f30f849a52709265fe577286898c3a30ea0df709e0',
                ishandler: true,
                full: true
            },{
                name: 'WXCH发送地址',
                val: '0xf4124710aab2bfb0020d9c25b0f1bd7ec4e93cad'
            },{
                name: 'WXCH接收地址',
                val: '0xf4124710aab2bfb0020d9c25b0f1bd7ec4e93cad'
            },{
                name: 'WXCH数量',
                val: '3980.0000'
            },{
                name: '状态',
                val: '已确认'
            },{
                name: 'Ethereum transaction',
                val: '0xe6bcd55a4142a4506c847c9f03c413e820c6adfb0cebc77bc3bccc7538315ed4',
                ishandler: true
            },]
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