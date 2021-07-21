<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" >
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>发送 XCH</span>
                <div class="top-append">1 XCH= 0.96 WXCH</div>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append">XCH</div>
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>兑换成 WXCH</span>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>

        <div class="desc">
            手续费：0.04 %
        </div>
        <div class="desc">
            <div class="name">WXCH接收地址：</div>
            <div class="val">0x469ad638a0f12ab27a09127b98af2444a44c3661</div>
        </div>

        <el-button class="submit" type="primary">立即兑换WXCH</el-button>

        <div class="extr-btn">取消</div>
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
export default {
    components: {formLayout},
    data(){
        return {
            labelPosition: 'top',
            formData: {
                name: '123'
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';
.desc {
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 10px;
    .name {
        display: block;
    }

    .val {
        color: $--color-primary;
    }
}
</style>


