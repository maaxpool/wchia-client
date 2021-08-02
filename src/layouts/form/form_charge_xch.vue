<template>
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :rules="rules" >

        <!-- wxch -->
        <el-form-item prop="wxchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item1Name')}}</span>
                <div class="top-append">1 WXCH= {{1 - fee}} XCH</div>
            </div>
            <el-input v-model="formData.wxchAmount"></el-input>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item2Name')}}</span>
            </div>
            <div class="el-input block">
                <div class="el-input__inner ">{{xchAmount}}</div>
            </div>
            <div class="el-form-item__append">XCH</div>
        </el-form-item>


        <el-form-item prop="xchAddress">
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item3Name')}}</span>
            </div>
            <el-input v-model="formData.xchAddress"></el-input>
        </el-form-item>

        <div class="desc">
           {{$t('public.fee')}}: {{fee}} %
        </div>

        <el-button class="submit" type="primary" @click="submitForm" >{{$t('home.block4.btn1')}}</el-button>
        <!-- <div class="extr-btn">{{$t('public.cancel')}}</div> -->
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import {rational} from '@/utils/rules'
export default {
    components: {formLayout},
    computed: {
        xchAmount(){
            return (1 - this.fee)*parseFloat(this.formData.wxchAmount) || 0
        }
    },
    data(){
        const wxchAmountVaily = (rule, val, callback) => {
            if(!rational(val)) {
                callback(new Error(this.$t('msg.rational')))
            }
            callback()
        }

        return {
            labelPosition: 'top',
            fee: 0.04,
            formData: {
                wxchAmount: 0,
                xchAddress: ''
            },
            rules: {
                wxchAmount: [
                    {required: true, message: this.$t('msg.require', {val: 'WXCH'}), trigger:'change'},
                    {validator: wxchAmountVaily, trigger: 'blur'}
                ],
                xchAddress: [
                    {required: true, message: this.$t('msg.require', {val: this.$t('home.block4.item3Name')}), trigger:'change'},
                ]
            }
        }
    },
    created(){
        // console.log(this.rules)
    },
    methods: {
        submitForm(){
            this.$refs['formLayout'].validate()
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


