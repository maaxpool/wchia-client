<template>
    <div class="header header-page">
        <div class="header-fixed-board">
            <div class="content">
                <a class="logo" @click="goto(home)"></a>
                <ul class="navbar">
                    <li 
                        v-for="(item, index) in navList" 
                        :key="`nav_item_${index}`"
                        @click="navHandler('Block_'+(index+2))"
                    >{{$t('navs.item'+(index+1))}}</li>
                </ul>

                <div class="append">
                    <el-button v-if="!user" @click="goto('register')"  >{{$t('navs.btn1')}}</el-button>
                    <router-link v-else class="usrLogo" :to="{name: 'account'}" ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import {mapGetters} from 'vuex'
import domScroll from '@/utils/scroll'
export default {
    name: 'HeaderHome',
    i18n: require('./i18n'),
    computed: {
        ...mapGetters('user', {
            user: 'user'
        }),
    },
    data(){
        return {
            isAuth: false,
            navList:[{
                index: 1,
            },{
                index: 2
            },{
                index: 3,
            },{
                index: 4
            },{
                index: 5
            }]
        }
    },
    methods: {
        goto(pathName){
            this.$router.push({name: pathName})
        },
        navHandler (domID) {
            if(domID == 5) return false
            domScroll(this, domID)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.header {
    width: 100%;
    padding: 40px 0 15px;
    min-width: $--page-width;
    // background-color: transparent;
    background-color: $--home-nav;
    position: relative;
    top: 0;
    left: 0;

    &-fixed-board {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }

    .content { 
        width: $--page-width;
        margin: 0 auto;
        display: -webkit-box;
        display: flex;
        justify-content: center;
        align-items: center;

        & > .logo {
            width: 180px;
            height: 60px;
            display: block;
            background: url('/img/logo.png') no-repeat center/cover;
            cursor: pointer;
        }

        & > .navbar {
            -webkit-box-flex: 1;
            flex: 1;

            display: -webkit-flex;
            display: flex;
            li {
                padding: 0 5px;
                font-size: 18px;
                margin-left: 20px;
                color: $--color-white;
                cursor: pointer;
                // float: left;
                opacity: 0.8;
                white-space: nowrap;
                &:hover {
                    opacity: 1;
                }
            }

        }

        & > .append {
            .el-button {
                background-color: transparent;
                color: $--color-primary;
                border-color: $--color-primary;
                width: 122px;
                height: 40px;
                font-size: 22px;
                border-radius: 9px;
                padding: 0;
            }

            .usrLogo {
                width: 40px;
                height: 40px;
                cursor: pointer;
                display: block;
                background: url(/img/user_logo.png) no-repeat center/100%;
            }
        }

    }


}
</style>