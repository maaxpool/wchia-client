<template>
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :rules="rules" >

        <el-form-item prop="xchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item1Name')}}</span>
                <div class="top-append">1 XCH= 0.96 WXCH</div>
            </div>
            <el-input v-model="formData.xchAmount"></el-input>
            <div class="el-form-item__append">XCH</div>
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item2Name')}}</span>
            </div>
            <div class="el-input block">
                <div class="el-input__inner ">{{wxchAmount}}</div>
            </div>
            <div class="el-form-item__append">WXCH</div>
        </el-form-item>

        <div class="desc">
            {{$t('public.fee')}}:0.04 %
        </div>
        <div class="desc">
            <div class="name">{{$t('home.block3.item4Name')}}:</div>
            <div class="val">{{account}}</div>
        </div>

        <el-button class="submit" type="primary">{{$t('home.block3.btn1')}}</el-button>

        <!-- <div class="extr-btn">{{$t('home.block3.btn2')}}</div> -->
        <!-- <div class="extr-btn">{{$t('public.cancel')}}</div> -->
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import {rational} from '@/utils/rules'
import {mapGetters} from 'vuex'

export default {
    components: {formLayout},
    computed: {
        ...mapGetters('user', {
            'xch_address': 'xch_address'
        }),
        ...mapGetters('ethereum', {
            account: 'account'
        }),
        wxchAmount(){
            return (1 - this.fee)*parseFloat(this.formData.xchAmount) || 0
        }
    },
    data(){
        const xchAmountVaily = (rule, val, callback) => {
            if(!rational(val)) {
                callback(new Error(this.$t('msg.rational')))
            }
            callback()
        }

        return {
            labelPosition: 'top',
            fee: 0.04,
            formData: {
                xchAmount: 0,
            },
            rules: {
                xchAmount: [
                    {required: true, message: this.$t('msg.require', {val: 'WXCH'}), trigger:'change'},
                    {validator: xchAmountVaily, trigger: 'blur'}
                ],
            }
        }
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


