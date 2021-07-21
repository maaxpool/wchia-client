<template>
    <div class="page">
        <!-- block 1 -->
        <div class="block block-1">
            <div class="container">
                <div class="l-part">
                    <h2>Transparency and security ensures trust</h2>
                    <article>
                        The greatest concern of moving assets across a chain via a bridge is trust built on top of security. 
                        In order to establish such trust, we are taking the following measures: 1)to have a public audited smart
                        contract and have the source code open to the public; 2) to be transparent with our services and our
                        motivations and 3) to have multisig custodian services. By doing so, when you convert one XCH to WXCH,
                        your proof of reserve is on-chain, there will be only one WXCH to be minted, and the WXCH will be burned
                        when the XCH token is redeemed.</article>
                    <el-button type="primary">Connect Wallet</el-button>
                </div>
                <div class="r-part">
                    <!-- <div class="illustration"></div> -->
                    <img src="/img/block_1_bg.png" />
                </div>
            </div>
        </div>

        <!-- block2 -->
        <div class="block block-2">
            <div class="container">
                <headerHomeBlock title="About Broker" subTitle="您将看到Broker的基本信息，帮助您更好的进行交易。" />

                <el-row class="ctn">
                    <el-col>
                        <div class="top">
                            <img src="/img/block_2_1.png" alt=" " title=" " />
                            <div class="desc">Broker’s Name</div>
                        </div>
                        <div class="bottom">This is name</div>
                    </el-col>
                    <el-col>
                        <div class="top">
                            <img src="/img/block_2_2.png" alt=" " title=" " />
                            <div class="desc">Broker’s Chia Wallet Address</div>
                        </div>
                        <div class="bottom">xch1yycy4ehlnfsy6tqyyqmep9shpjcs89en6mhsx5cc0224ea92065qftefdj</div>
                    </el-col>
                    <el-col>
                        <div class="top">
                            <img src="/img/block_2_3.png" alt=" " title=" " />
                            <div class="desc">Broker’s Ethereumaddress for WXCH</div>
                        </div>
                        <div class="bottom">0x469ad638a0f12ab27a09127b98af2444a44c3661</div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <!-- block3 -->
        <div class="block block-3">
            <div class="container">
                <headerHomeBlock title="兑换WXCH" subTitle="您可以把XCH兑换成WXCH，由此可以提高 Chia token 的流动性。" />
                <div class="inner">
                    <form-charge-wxch class="l-part"></form-charge-wxch>
                    <div class="r-part"><img src="/img/block_3_bg.png" /></div>
                </div>
            </div>
        </div>

        <!-- block4 -->
        <div class="block block-4">
            <div class="container">
                <headerHomeBlock title="换回XCH" subTitle="您可以随时把WXCH兑换回XCH到您注册的 Chia Wallet 中。" />
                <div class="inner">
                    <div class="l-part"><img src="/img/block_4_bg.png" /></div>
                    <form-charge-xch class="r-part"></form-charge-xch>
                </div>
            </div>
        </div>

        <!-- block 5  -->
        <div class="block block-5">
            <div class="container">
                <headerHomeBlock title="交易历史" />
                <div class="inner sum-board">
                    <div class="item">
                        <h5>累计兑换 WXCH</h5>
                        <div class="ctn">
                            <img src="/img/block_5_wxch.png" />
                            <div class="count">
                                196878.0966 WXCH ≈ $ 389678098.9877
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h5>累计换回 XCH</h5>
                        <div class="ctn">
                            <img src="/img/block_5_xch.png" />
                            <div class="count">
                                196878.0966 WXCH ≈ $ 389678098.9877
                            </div>
                        </div>
                    </div>
                </div>



                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">
                        <wxch-history-tb :tableData="tableData" />

                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
                </el-tabs>

            </div>
        </div>

    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/header_home_block.vue'
import formChargeWxch from '@/layouts/form/form_charge_wxch.vue'
import formChargeXch from '@/layouts/form/form_charge_xch.vue'
import wxchHistoryTb from '@/layouts/table/table_home.vue'
export default {
    name: 'home',
    components: {headerHomeBlock, formChargeWxch, formChargeXch, wxchHistoryTb},
    data(){
        return {
            activeName: 'first',
            tableData:[{
                date: 545645156,
                amount: '56445.156456',
                out: '4564e5f6w4f5w4f56ewf1e5wf',
                in: 'efj2efij23fr4545f6734f56sdf',
            }]
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.block {
    padding: 40px 0;
    &:nth-child(odd) {
        background-color: #F8FAFB;
    }

    .inner {
        display: -webkit-flex;
        display: flex;
        align-items: center;
    }

    &-1 {
        background-color: $--home-nav !important;
        color: $--color-white;
        padding: 20px 0 33px;
        .container {
            display: -webkit-box;
            display: flex;
        }

        .l-part {
            -webkit-box-flex: 1;
            flex: 1;
            margin-right: 25px;
            h2 {
                font-size: 38px;
                font-family: Roboto Condensed,sans-serif;
                margin-bottom: 20px;
                font-weight: 900;
                line-height: 100%;
            }

            article {
                font-size: 16px;
                line-height: 150%;
                margin-bottom: 20px;
            }

            .el-button {
                width: 283px;
                height: 50px;
                font-size: 22px;
                
            }
            
        }
        .r-part {
            img {
                width: 480px;
                height: 418px;
            }
        }
    }

    &-2 {
        .ctn {
            display: -webkit-box;
            display: flex;
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
        }
    }

    &-3 {
        .l-part {
            -webkit-box-flex: 1;
            flex: 1;
        }

        .r-part {
            padding-left: 64px;
            img {
                width: 395px;
                height: 295px;
            }
        }
    }

    &-4 {

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
    }

    &-5 {
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
                border: 0 none;
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
        }

    }

}
</style>

