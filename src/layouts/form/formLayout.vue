<template>
    <!-- :model="model" -->
    <el-form 
        :model="model"
        :ref="domRef" 
        :label-width="labelWidth" 
        :label-position="labelPosition" 
        :rules="rules"
    >
        <!-- <el-form-item label="名称">
            <el-input  ></el-input>
        </el-form-item> -->
        <slot></slot>
    </el-form>
</template>

<script>
export default {
    // props:['domRef', 'labelPosition']
    props: {
        model: Object,
        domRef: {
            default: '',
            type: String
        },
        labelWidth: String,
        rules: Object,
        labelPosition: {
            default: 'left',
            type: String
        }
    },
    /* mounted(){
        console.log(this.rules, 123)
    }, */
    methods: {
        validate(){
            return new Promise((resolve, refuse) => {
                this.$refs[this.domRef].validate((vail) => {
                    if(vail) {
                        resolve()
                    } else {
                        this.$message({
                            showClose: true,
                            message: 'Please finish the form info.',
                            type: 'error'
                        }) 
                    }
                })
            })
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.el-form {
    padding: 35px;
    border-radius: 18px;
    box-shadow: $--page-item-shodow-1;
    background-color: $--color-white;

    margin-left: auto;
    margin-right: auto;
}

::v-deep .el-from-row {
    @include displayFlex;
    .el-form-item {
        -webkit-box-flex: 1;
        flex: 1;
        margin-left: 15px;
        &:first-child {
            margin-left: 0;
        }
    }
}

::v-deep .el-form-item {
    // &__content {
    //     height: 40px;
    // }

    &__label {
        display: block;
        font-size: 15px;
        line-height: 20px;
        color: $--color-black-1;
        position: relative;
        top: 0;
        left: 0;
        &::before {
            display: none;
        }
    }

    .top-append {
        position: absolute;
        top: 0;
        right: 0;
        line-height: inherit;
    }

    &__append {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        color: $--color-black-1;
        z-index: 10;
        &.handler {
            cursor: pointer;
            &:hover{
                color: $--color-primary;
            }
        }
    }
}

::v-deep .el-input {
    &.block {
        .el-input__inner {
            color: $--color-black-3;
            border-color: $--color-form-controller-bg;
        }
    }

    &-group {

        &__append, &__prepend {
            background-color: $--color-form-controller-bg;
            border-color: $--color-form-controller-bg;
        }
    }

    &__inner {
        background-color: $--color-form-controller-bg;
        border-color: $--color-form-controller-bg;
        &:hover {
            border-color: #C0C4CC;
        }
        &:focus {
            border-color: $--color-primary;
        }
    }
}

::v-deep .el-select {
    width: 100%;
}

::v-deep .submit {
    margin: 20px 0;
    height: 47px;
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
    width: 100%;
}

::v-deep .extr-btn {
    font-size: 18px;
    color: $--color-primary;
    cursor: pointer;
    width: 100%;
    text-align: center;
}

</style>