<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block2.title')" :subTitle="$t('home.block2.subTitle')" />

        <el-row class="ctn">
            <el-col>
                <div class="top">
                    <img src="/img/block_2_1.png" alt=" " title=" " />
                    <div class="desc">{{$t('home.block2.item1Name')}}</div>
                </div>
                <div class="bottom">This is name</div>
            </el-col>
            <el-col>
                <div class="top">
                    <img src="/img/block_2_2.png" alt=" " title=" " />
                    <div class="desc">{{$t('home.block2.item2Name')}}</div>
                </div>
                <div class="bottom">xch1yycy4ehlnfsy6tqyyqmep9shpjcs89en6mhsx5cc0224ea92065qftefdj</div>
            </el-col>
            <el-col>
                <div class="top">
                    <img src="/img/block_2_3.png" alt=" " title=" " />
                    <div class="desc">{{$t('home.block2.item3Name')}}</div>
                </div>
                <div class="bottom">0x469ad638a0f12ab27a09127b98af2444a44c3661</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/header_home_block.vue'
export default {
    components: {headerHomeBlock}
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.ctn {
    display: -webkit-box;
    display: flex;
}

.el-col {
    -webkit-box-flex: 1;
    flex: 1;
    align-items: center;
    margin-right: 66px;
    line-height: 175%;
    &:last-child {
        margin-right: 0;
    }

    .top {
        display: -webkit-box;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    img {
        width: 60px;
        height: 60px;
        margin-right: 15px;
    }

    .desc {
        font-weight: 500;
        font-size: 16px;
    }

    .bottom {
        word-break: break-all;
        color: $--color-black-3;
    }
}
</style>