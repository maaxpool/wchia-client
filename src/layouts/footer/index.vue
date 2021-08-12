<template>
    <div class="footer">
        <div class="container">
            <div class="l-part">
                <img class="logo" src="/img/logo_ft.png" />
                <div class="desc">{{$t('footer.lpart.item1')}}</div>
                <!-- <div class="desc">如需帮助，请联系team@wxch.com</div> -->
                <div class="desc">
                    <span>{{$t('footer.lpart.item2')}}</span>
                    <a class="link" :href="`mailto:${conf.email}`">{{conf.email}}</a>
                </div>
                <el-dropdown @command="changeLang" >
                    <el-button>{{locale}}</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="en" >Englisth</el-dropdown-item>
                        <el-dropdown-item command="zh" >中文简体</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <ul class="r-part">
                <a @click="scroll('Block_2')" >{{$t('navs.item1')}}</a>
                <a @click="scroll('Block_3')" >{{$t('navs.item2')}}</a>
                <a @click="scroll('Block_4')" >{{$t('navs.item3')}}</a>
                <a @click="scroll('Block_5')" >{{$t('navs.item4')}}</a>
                <!-- <a class="connectus">
                    <p>{{$t('navs.item5')}}</p>
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
                </a> -->
            </ul>
        </div>
    </div>
</template>

<script>
import domScroll from '@/utils/scroll'
import jsCookie from 'js-cookie'
import {mapGetters} from 'vuex'
export default {
    name: 'pageFooter',
    computed: {
        ...mapGetters('user', {
            conf: 'conf'
        }),
        locale(){
            return this.$i18n.locale == 'en' ? 'English' : '中文简体'
        }
    },
    methods: {
        scroll(domID) {
            domScroll(this, domID)
        },
        changeLang(lang) {
            jsCookie.set('lang', lang)
            this.$i18n.locale = lang
        }
    }
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
                a {
                    margin:0 5px;
                }
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
                cursor: pointer;
                -webkit-transition: all 0.25s;
                transition: all 0.25s;
                &:hover {
                    color: $--color-primary;
                }
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
                    color: $--color-white;
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