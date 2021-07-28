<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" :rules="rules" >
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item1Name')}}</span>
                <div class="top-append">1 WXCH= 0.96 XCH</div>
            </div>
            <el-input v-model="formData.xchAmount"></el-input>
            <div class="el-form-item__append">XCH</div>
        </el-form-item>

        <el-form-item prop="xchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item2Name')}}</span>
            </div>
            <!-- <el-input v-model="formData.name"></el-input> -->
            <div class="el-input">
                <div class="el-input__inner block"></div>
            </div>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>


        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item3Name')}}</span>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>

        <div class="desc">
           {{$t('public.fee')}}:0.04 %
        </div>

        <el-button class="submit" type="primary" @click="submitForm" >{{$t('home.block4.btn1')}}</el-button>

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
                xchAmount: '123'
            },
            rules: {
                xchAmount: {require: '123', error: true}
            }
        }
    },
    created(){
        // console.log(this.rules)
    },
    methods: {
        submitForm(){
            
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


