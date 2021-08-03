<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <slot name="header"></slot>
        </div>
        <slot></slot>
    </el-card>
</template>

<script>
export default {
    name: 'pageCard'
}
</script>

<style scoped lang="scss">
.el-card {
    border: 0 none;
    border-radius: 18px;
    box-shadow: none;
}

::v-deep .el-card {
    &__header {
        padding: 20px 50px;
    }

    &__body {
        padding: 40px 50px 65px;
    }
}

</style>