<template>
    <div class="header header-page">
        <div class="header-fixed-board">
            <div class="content">
                <a class="logo"></a>
                <ul class="navbar">
                    <li v-for="(item, index) in navList" :key="`nav_item_${index}`">{{item.name}}</li>
                </ul>

                <div class="append">
                    <el-button @click="goto('register')" class="" v-if="!isAuth" >注册</el-button>
                    <el-dropdown v-else>
                        <div class="el-dropdown-link">
                            <a class="avatar"></a>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人设置</el-dropdown-item>
                            <el-dropdown-item>退出登陆</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: 'HeaderHome',
    i18n: require('./i18n'),
    data(){
        return {
            isAuth: false,
            navList:[{
                name: 'About Broker',
                index: 1,
            },{
                name: '兑换WXCH',
                index: 2
            },{
                name: '换回XCH',
                index: 3,
            },{
                name: '历史交易',
                index: 4
            }]
        }
    },
    methods: {
        goto(pathName){
            this.$router.push({name: pathName})
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
            width: 175px;
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
                margin-left: 40px;
                color: $--color-white;
                cursor: pointer;
                // float: left;
                opacity: 0.8;
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
        }

    }


}
</style>