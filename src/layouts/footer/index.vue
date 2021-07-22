<template>
    <div class="footer">
        <div class="container">
            <div class="l-part">
                <img class="logo" src="/img/logo_ft.png" />
                <div class="desc">WXCH 是第一个以奇亚币 1:1<br />支持的 ERC20 代币。</div>
                <div class="desc">如需帮助，请联系team@wxch.com</div>
                <el-dropdown>
                    <el-button>中文简体</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>CN</el-dropdown-item>
                        <el-dropdown-item>EN</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <ul class="r-part">
                <a href="/">About Broker</a>
                <a>兑换WXCH</a>
                <a>换回XCH</a>
                <a>历史交易</a>
                <a class="connectus">
                    <p>联系我们</p>
                    <div class="connectus-tab">
                        <a class="item">
                            <img src="/img/icon_twitter.png" />
                            <span>Twitter</span>
                        </a>
                        <a class="item">
                            <img src="/img/icon_facebook.png" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageFooter'
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.footer {
    color: $--color-white;
    padding: 30px 0 50px;
    background-color: #0D1A3D;

    .container {
        @include displayFlex;
        .l-part, .r-part {
            flex: 1;
        }

        .l-part {
            padding-left: 95px;
            font-size: 18px;
            .logo {
                display: block;
                width: 188px;
                height: 74px;
                margin-bottom: 30px;
            }

            .desc {
                margin-bottom: 30px;
            }

            .el-dropdown {
                .el-button {
                    width: 135px;
                    height: 40px;
                }
            }
        }

        .r-part {
            padding-left: 280px;
            & > a {
                display: block;
                padding: 15px 0;
            }
            
            .connectus {
                cursor: pointer;
                position: relative;
                &-tab {
                    display: none;
                    min-width: 93px;
                    position: absolute;
                    top: 100%;
                    left: 20px;
                }

                &:hover {
                    .connectus-tab {
                        display: block;
                    }
                }

                .item {
                    height: 23px;
                    padding: 4px 6px;
                    line-height: 100%;
                    font-size: 12px;
                    display: block;
                    img {
                        width: 16px;
                        height: 16px;
                        margin-right: 8px;
                    }

                    img, span {
                        vertical-align: middle;
                    }

                    &:hover {
                        background-color: #253562;
                    }
                }
            }
        }
    }
}
</style>