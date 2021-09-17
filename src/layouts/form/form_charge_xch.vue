<template>
    <!-- XCH to WXCH -->
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :rules="rules" 
        v-loading="isLoading"    
    >
        <!-- wxch -->
        <el-form-item prop="wxchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block4.item1Name')}}({{$t('public.minimunQuantity')}}: {{conf.minimal_exchange_decimals}}WXCH)</span>
                <div class="top-append">1 WXCH= {{1-(conf.wrap_fee_ratio/100)}} XCH</div>
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
           {{$t('public.fee')}}: {{conf.wrap_fee_ratio}} %
        </div>

        <el-button class="submit" type="primary" @click="submitForm" :disabled="!this.account" >{{$t('home.block4.btn1')}}</el-button>
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import {rational} from '@/utils/rules'
import {authorizationCheck, getUserInfo, getBalance} from '@/utils/authUtils'
import {mul, cmpl} from '@/utils/floatOperation'
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
            // return (1 - (this.conf.unwrap_fee_ratio/100 || 0))*parseFloat(this.formData.wxchAmount).toFixed(6) || 0
            return mul(1-(this.conf.wrap_fee_ratio/100 ||0),parseFloat(this.formData.wxchAmount)).toFixed(6)
        },
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
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
            isLoading: false,
            labelPosition: 'top',
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
    created() {
    },
    methods: {
        async submitForm(){
            if (this.isLoading)
                return false

            if (! authorizationCheck() )
                await getUserInfo(this)
            
            this.$refs['formLayout'].validate()
                .then(async () => {
                    this.isLoading = true
                    const options = {
                        "unwrap_amount": parseFloat(this.formData.wxchAmount),
                        "chia_address": this.formData.xchAddress.replace(/\s/g, ''),
                        "eth_address": this.account.replace(/\s/g, ''),
                        "eth_signature": this.eth_sign,
                        "auth_msg": this.auth_msg
                    }
                    try {
                        let res = await this.$metaMaskUtils.contractApprove(this.conf.eth_address, options.unwrap_amount)
                        console.log('contract handle finshed:', res)
                    } catch (err) {
                        this.isLoading = false
                        console.error(err)
                        // this.$message({  showClose: true, message: err, type: 'error'  })
                    }
                        this.$http('unwrap', options)
                            .then(res => {
                                if (res && res['success']) {
                                    this.isLoading = false
                                    
                                    domScroll(this, 'Block_5')
                                    this.$globalBus.$emit('TRANSCATION_TAB', 'unwrap');
                                    getBalance()

                                    this.$message({
                                        showClose: true,
                                        message: "Request submitted",
                                        type: 'success'
                                    })
                                    this.fromClean()
                                }
                            }).catch(err => {
                                this.isLoading = false
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


