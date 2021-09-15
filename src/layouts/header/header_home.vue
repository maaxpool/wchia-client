<template>
    <div class="header header-page">
        <div class="header-fixed-board">
            <div class="content">

                <a class="logo" @click="goto('home')"></a>
                <span class="sub">
                    <i class="split"></i>
                    <font>DASHBOARD</font>
                </span>

                <template v-if="$route.meta.header == 'home'">
                    <ul class="navbar">
                        <li 
                            v-for="(item, index) in navList" 
                            :key="`nav_item_${index}`"
                            @click="scroll('Block_'+(index+2))"
                        >{{$t('navs.item'+(index+1))}}</li>
                    </ul>
                    <div class="append">
                        <el-button v-if="!user" @click="goto('register')"  >{{$t('navs.btn1')}}</el-button>
                        <router-link v-else class="usrLogo" :to="{name: 'account'}" ></router-link>
                </div>
                </template>

            </div>
        </div>
    </div>
</template>

<script >
import {mapGetters} from 'vuex'
import domScroll from '@/utils/scroll'
export default {
    name: 'HeaderHome',
    computed: {
        ...mapGetters('user', {
            user: 'user'
        }),
    },
    created(){
        console.log(this.$route)
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
            }]
        }
    },
    methods: {
        goto(pathName){
            this.$router.push({name: pathName})
        },
        scroll (domID) {
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
        // justify-content: center;
        align-items: center;

        & > .logo {
            width: 180px;
            height: 60px;
            display: block;
            background: url('/img/logo.png') no-repeat center/cover;
            cursor: pointer;
        }

        & > .sub {
            display: -webkit-flex;
            display: flex;
            font-size: 0;
            justify-content: center;
            align-items: center;
            .split {
                display: inline-block;
                font-size: 0;
                width: 2px;
                height: 24px;
                background: $--color-primary;
                margin: 0 28px;
            }

            font {
                font-size: 32px;
                font-weight: 300;
                color: $--color-primary;
            }
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