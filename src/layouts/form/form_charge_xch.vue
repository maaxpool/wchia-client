<template>
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :rules="rules" 
        v-loading="loadingWatcher.indexOf('unwrap') > -1"    
    >
        <!-- wxch -->
        <el-form-item prop="wxchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item1Name')}}({{$t('public.minimunQuantity')}}: {{conf.minimal_exchange_decimals}}WXCH)</span>
                <div class="top-append">1 WXCH= {{1 - fee}} XCH</div>
            </div>
            <el-input v-model="formData.wxchAmount">
                <template slot="append">WXCH</template>
            </el-input>
            <!-- <div class="el-form-item__append">WXCH</div> -->
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item2Name')}}</span>
            </div>
            <div class="el-input el-input-group el-input-group--append block">
                <div class="el-input__inner ">{{xchAmount}}</div>
                <div class="el-input-group__append">XCH</div>
            </div>
            <!-- <div class="el-form-item__append">XCH</div> -->
        </el-form-item>


        <el-form-item prop="xchAddress">
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item3Name')}}</span>
            </div>
            <el-input v-model="formData.xchAddress"></el-input>
        </el-form-item>

        <div class="desc">
           {{$t('public.fee')}}: {{fee*100}} %
        </div>

        <el-button class="submit" type="primary" @click="submitForm" >{{$t('home.block4.btn1')}}</el-button>
        <!-- <div class="extr-btn">{{$t('public.cancel')}}</div> -->
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import {rational} from '@/utils/rules'
import {authorizationCheck, getUserInfo, getBalance} from '@/utils/authUtils'
import {mapGetters} from 'vuex'


export default {
    components: {formLayout},
    computed: {
        ...mapGetters('user', {
            conf: 'conf'
        }),
        ...mapGetters('ethereum', {
            account: 'account',
            eth_sign: 'eth_sign',
            auth_msg: 'auth_msg'
        }),
        xchAmount(){
            return (1 - this.fee)*parseFloat(this.formData.wxchAmount) || 0
        },
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
    },
    watch: {
        conf(n) {
            this.fee = n.unwrap_fee_ratio
        }
    },
    data(){
        const wxchAmountVaily = (rule, val, callback) => {
            if(!val > 0) {
                callback(new Error('Please provide effective options'))
            }

            if(!rational(val)) {
                callback(new Error(this.$t('msg.rational')))
            }
            callback()
        }

        return {
            labelPosition: 'top',
            fee: 0,
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
    methods: {
        async submitForm(){
            if (! authorizationCheck() )
                await getUserInfo(this)
            
            this.$refs['formLayout'].validate()
                .then(async () => {

                    const options = {
                        "unwrap_amount": parseFloat(this.formData.wxchAmount),
                        "chia_address": this.formData.xchAddress.replace(/\s/g, ''),
                        "eth_address": this.account.replace(/\s/g, ''),
                        "eth_signature": this.eth_sign,
                        "auth_msg": this.auth_msg
                    }
                    
                    this.$http('unwrap', options)
                        .then(res => {
                            if (res && res['success']) {
                                getBalance()
                                
                                this.$message({
                                    showClose: true,
                                    message: "Transform successed",
                                    type: 'success'
                                })
                                this.fromClean()
                            }
                        }).catch(err => {
                            if (err && err.response) {
                                let msg = err.response.data.err_msg
                                this.$message({
                                    showClose: true,
                                    message: msg,
                                    type: 'error'
                                })                                
                            }
                        })

                })
        },
        fromClean() {
            this.formData.wxchAmount = 0
            this.formData.xchAddress = ''
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


