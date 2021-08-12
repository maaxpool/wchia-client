<template>
    <div class="header header-page">
        <div class="header-fixed-board">
            <div class="content">
                <a class="logo" @click="goTo('home')"></a>
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
        }
    },
    methods: {
        goTo(pathName) {
            this.$router.push({name: pathName})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.header {
    width: 100%;
    padding: 30px 0;
    min-width: $--page-width;
    background-color: $--color-white;
    position: relative;
    top: 0;
    left: 0;
    border-bottom: 1px solid #DBDBDB;

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

        & > .logo {
            width: 180px;
            height: 60px;
            display: block;
            background: url('/img/logo.png') no-repeat center/cover;
            cursor: pointer;
        }



    }


}
</style>