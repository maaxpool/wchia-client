<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" >
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item1Name')}}</span>
                <div class="top-append">1 XCH= 0.96 WXCH</div>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append">XCH</div>
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item2Name')}}</span>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>

        <div class="desc">
            {{$t('public.fee')}}:0.04 %
        </div>
        <div class="desc">
            <div class="name">{{$t('home.block3.item4Name')}}:</div>
            <div class="val">0x469ad638a0f12ab27a09127b98af2444a44c3661</div>
        </div>

        <el-button class="submit" type="primary">{{$t('home.block3.btn1')}}</el-button>

        <!-- <div class="extr-btn">{{$t('home.block3.btn2')}}</div> -->
        <div class="extr-btn">{{$t('public.cancel')}}</div>
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


