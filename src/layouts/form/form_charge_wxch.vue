<template>
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="chargeWXCH" 
        :labelPosition="labelPosition" 
        :rules="rules" 
        v-loading="loadingWatcher.indexOf('wrap') > -1" 
    >

        <el-form-item prop="xchAmount" >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item1Name')}}({{$t('public.minimunQuantity')}}: {{conf.minimal_exchange_decimals}}XCH)</span>
                <div class="top-append">1 XCH= {{1-fee}} WXCH</div>
            </div>
            <el-input v-model="formData.xchAmount">
                <template slot="append">XCH</template>
            </el-input>
                <!-- <div class="el-form-item__append">XCH</div> -->
        </el-form-item>

        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('home.block3.item2Name')}}</span>
            </div>
            <!-- block -->
            <div class="el-input el-input-group el-input-group--append block">
                <div class="el-input__inner ">{{wxchAmount}}</div>
                <div class="el-input-group__append">WXCH</div>
            </div>
        </el-form-item>

        <div class="desc">
            {{$t('public.fee')}}: {{fee*100}} %
        </div>
        <div class="desc">
            <div class="name">{{$t('home.block3.item4Name')}}:</div>
            <div class="val">{{account}}</div>
        </div>

        <el-button class="submit" type="primary" @click="submitForm" >{{$t('home.block3.btn1')}}</el-button>

        <!-- <div class="extr-btn">{{$t('home.block3.btn2')}}</div> -->
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
        wxchAmount(){
            return (1 - this.fee)*parseFloat(this.formData.xchAmount) || 0
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
        const xchAmountVaily = (rule, val, callback) => {
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
        async submitForm(){
            if (! authorizationCheck() )
                await getUserInfo(this)
            
            this.$refs['formLayout'].validate()
                .then(async () => {
                    if (! (this.eth_sign && this.auth_msg) ) {
                        await this.$metaMaskUtils.ethSign()
                    }

                    const options = {
                        "wrap_amount": parseFloat(this.formData.xchAmount),
                        "eth_address": this.account,
                        "eth_signature": this.eth_sign,
                        "auth_msg": this.auth_msg
                    }

                    this.$http('wrap', options)
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
            this.formData.xchAmount = 0
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


