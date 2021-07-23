<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <slot name="header"></slot>
            <!-- <span>卡片名称</span> -->
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
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
        padding: 50px;
    }
}

</style>