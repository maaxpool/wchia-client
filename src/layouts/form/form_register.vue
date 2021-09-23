<template>
    <formLayout 
        :model="formData"
        ref="formLayout" 
        domRef="register" 
        :labelPosition="labelPosition" 
        :rules="rules"
        v-loading="formLoader"
    >
        <!-- eth address -->
        <el-form-item  >
            <div class="cus-label" slot="label">
                <span>{{$t('register.item1Name')}}</span>
            </div>
            <div class="el-input el-input-group el-input-group--append block">
                <div class="el-input__inner ">
                    <span v-if="account&&eth_sign">{{account}}</span>
                </div>
                <div class="el-form-item__append handler" v-if="!account||!eth_sign"  @click="connectWalelt">{{$t('register.item1Unit')}}</div>
            </div>
        </el-form-item>

        <!-- country -->
        <el-form-item prop="country">
            <div class="cus-label" slot="label">
                <span>{{$t('register.item2Name')}}</span>
            </div>
            <el-select :placeholder="$t('public.placeholder2')" v-model="formData.country" @change="countrySelect">
                <el-option 
                    v-for="(item, idx) in countryList" :key="'ctr_'+idx" 
                    :label="item" :value="idx"></el-option>
            </el-select>
        </el-form-item>

        <!-- user name -->
        <div class="el-from-row">
            <el-form-item :label="$t('register.item3Name')" prop="firstName" >
                <el-input v-model="formData.firstName" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
            <el-form-item :label="$t('register.item4Name')" prop="lastName" >
                <el-input v-model="formData.lastName" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>

        <!-- phone -->
        <div class="el-from-row phoneItem" >
            <el-form-item :label="$t('register.item5Name')" class="local-code">
                <el-select :placeholder="$t('public.placeholder2')"  v-model="formData.phone_prefix" filterable >
                    <el-option 
                        v-for="(item, idx) in codeList" :key="'code_'+idx" 
                        :label="`+ ${item}`" :value="idx"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="/n" prop="phone">
                <el-input v-model="formData.phone" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>
        
        <!-- address line -->
        <el-form-item :label="$t('register.item6Name')" prop="address">
            <el-input v-model="formData.address" :placeholder="$t('public.placeholder1')"></el-input>
        </el-form-item>

        <!-- city -->
        <div class="el-from-row " >
            <el-form-item :label="$t('register.item7Name')" prop="city">
                <el-input v-model="formData.city" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
            <el-form-item :label="$t('register.item8Name')" prop="state">
                <el-input v-model="formData.state" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>

        <!-- Zip code -->
        <el-form-item :label="$t('register.item9Name')" prop="zip">
            <el-input v-model="formData.zip" :placeholder="$t('public.placeholder1')" ></el-input>
        </el-form-item>

        <!-- Email -->
        <el-form-item :label="$t('register.item10Name')">
            <el-input v-model="formData.email" :placeholder="$t('public.placeholder1')" ></el-input>
        </el-form-item>

        <el-checkbox v-model="isChecked" :label="$t('register.extrItem1')" name="type" style="margin-bottom:40px"></el-checkbox>

        <el-button class="submit" type="primary" @click="submitForm">{{$t('register.btn1')}}</el-button>
    </formLayout>
</template>

<script>
// import metamaskUtils from '@/utils/metaMaskUtils'

import formLayout from './formLayout'
import countrys from '@/temp/countrys'

import {rational} from '@/utils/rules'
import {getUserInfo} from '@/utils/authUtils'

import {mapGetters} from 'vuex'
// import { useWallet, UseWalletProvider } from 'use-wallet'
export default {
    components: {formLayout},
    computed: {
        ...mapGetters('ethereum', {
            account: 'account',
            eth_sign: 'eth_sign',
            auth_msg: 'auth_msg'
        }),
        ...mapGetters('situation', {
            loadingWatcher: 'loadingWatcher'
        }),
        formLoader(){
            return this.loadingWatcher.indexOf('get_user') > -1 || this.loadingWatcher.indexOf('register') > -1
        }
    },
    data(){
        return {
            labelPosition: 'top',
            countryList: countrys.map(item => item['en']),
            codeList: countrys.map(item => item['code']),

            isChecked: false,
            formData: {
                ethAddress: '',
                firstName: '',
                lastName: '',
                country: '',
                phone_prefix: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                email: '',
                zip: ''
            },
            rules: {
                // ethAddress: {required: true, message: ' '},
                firstName: {required: true, message: ' '},
                lastName: {required: true, message: ' '},
                country: {required: true, message: ' '},
                phone_prefix: {required: true, message: ' '},
                phone: {required: true, message: ' '},
                address: {required: true, message: ' '},
                city: {required: true, message: ' '},
                state: {required: true, message: ' '},
                email: '',
                zip: {required: true, message: ' '}
            }
            
        }
    },
    methods: {
        async connectWalelt() {
            // new metamaskUtils()
            await this.$metaMaskUtils.initlization()
            this.$metaMaskUtils.ethSign()
        },
        countrySelect(idx) {
            this.formData.phone_prefix =  this.codeList[idx]
        },
        submitForm() {
            this.$refs['formLayout'].validate()
                .then(() => {
                    this.formData.ethAddress = this.account
                    if(!this.account) {
                        this.$message({
                            showClose: true,
                            message: 'Please Connect the metamask',
                            type: 'error'
                        })    
                        return false
                    }

                    if(!this.isChecked) {
                        this.$message({
                            showClose: true,
                            message: 'Please agree the protocol',
                            type: 'error'
                        })  
                        return false
                    }

                    let options = {
                        "first_name": this.formData.firstName,
                        "last_name": this.formData.lastName,
                        "phone_prefix": String(this.formData.phone_prefix),
                        "phone": this.formData.phone,
                        "country": this.countryList[this.formData.country],
                        "city": this.formData.city,
                        "state": this.formData.state,
                        "address": this.formData.address,
                        "zip_code": this.formData.zip,
                        "email": this.formData.email,
                        "eth_address": this.account,
                        "eth_signature": this.eth_sign,
                        "auth_msg": this.auth_msg
                    }

                    this.$http('register', options).then(async res => {
                        if(res&&res['msg']) {
                            let data = res['msg']
                            await getUserInfo(this)
                            this.$nextTick(() => {
                                this.$router.push({name: 'home'})
                            })
                        }
                        
                    }).catch(err => {
                        console.error(err)
                    })


                }).catch(err => {
                    console.log(err)
                })

            
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';

.phoneItem {
    .el-form-item:first-child {
        max-width: 100px;
        ::v-deep .el-form-item__label {
            white-space: nowrap;
        }
    }
    .el-form-item:last-child {
        ::v-deep .el-form-item__label {
            visibility: hidden;
        }
    }
}
</style>


