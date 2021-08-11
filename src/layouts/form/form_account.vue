<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" :labelWidth="labelWidth">

        <!-- user name -->
        <div class="el-from-row" v-if="user" >
            <el-form-item :label="$t('account.item1Name')" >
                <div class="el-input__view">{{user.first_name}}</div>
            </el-form-item>
            <el-form-item :label="$t('account.item2Name')" >
                <div class="el-input__view">{{user.last_name}}</div>
            </el-form-item>
        </div>

        <!-- country -->
        <div class="el-from-row" v-if="user" >
            <el-form-item :label="$t('account.item3Name')" >
                <div class="el-input__view">{{user.country}}</div>
            </el-form-item>
        </div>

        <!-- phone -->
        <div class="el-from-row phoneItem">
            <el-form-item :label="$t('account.item4Name')">
                <el-select filterable class="phone_prefix" :placeholder="$t('public.placeholder2')"  v-model="formData.phone_prefix">
                    <el-option v-for="(item, idx) in codeList" :key="'code_'+idx" 
                        :label="`+ ${item}`" :value="idx"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="0">
                <el-input v-model="formData.phone" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- address -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item5Name')">
                <el-input v-model="formData.address" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- city -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item6Name')">
                <el-input v-model="formData.city" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- state -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item7Name')">
                <el-input v-model="formData.state" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- zip -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item8Name')">
                <el-input v-model="formData.zip_code" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- email -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item9Name')">
                <el-input v-model="formData.email" :placeholder="$t('public.placeholder1')" />
            </el-form-item>
        </div>

        <!-- Chia Wallet Address -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item10Name')">
                <div class="el-input__view">{{user.chia_address}}</div>
            </el-form-item>
        </div>

        <!-- ETH Wallet Address -->
        <div class="el-from-row">
            <el-form-item :label="$t('account.item11Name')">
                <div class="el-input__view">{{account}}</div>
            </el-form-item>
        </div>

    </formLayout>
</template>

<script>
import formAccount from '@/layouts/form/form_account.vue'
import formLayout from './formLayout2'
import countrys from '@/temp/countrys'
// import { useWallet, UseWalletProvider } from 'use-wallet'
import {mapGetters} from 'vuex'
export default {
    components: {formLayout},
    computed: {
        ...mapGetters('user', {
            user: 'user',
        }),
        ...mapGetters('ethereum', {
            account: 'account',
            eth_sign: 'eth_sign',
            auth_msg: 'auth_msg'
        }),
    },
    watch: {
        user: {
            handler(options) {
                if (options) {
                    this.formData = {
                        phone: options['phone'],
                        phone_prefix: options['phone_prefix'],
                        address: options['address'],
                        city: options['city'],
                        state: options['state'],
                        zip_code: options['zip_code'],
                        email: options['email'],
                    }
                }
            },
            immediate: true,
            deep: true
        }
    },
    data(){
        return {
            labelPosition: 'left',
            labelWidth: '168px',
            codeList: countrys.map(item => item['code']),
            formData: {
                phone: null,
                phone_prefix: null,
                address: null,
                city: null,
                state: null,
                zip_code: null,
                email: null,
            },
        }
    },
    methods: {
        async submit() {
            if (! (this.eth_sign && this.auth_msg) ) {
                await this.$metaMaskUtils.ethSign()
            }             

            let options = {
                ...this.formData,
                eth_address: this.account,
                eth_signature: this.eth_sign,
                auth_msg: this.auth_msg
            }

            this.$http('modify_user', options)
                .then(res => {
                    if(res && res['success']) {
                        let newData = Object.assign(this.user, this.formData)
                        this.$store.commit('user/user', JSON.stringify(newData))
                        this.$message('Submit successed')
                    }
                })
                // .catch(err => {
                //     console.error(err)
                // })

        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/custom';

.phoneItem {
    .el-form-item:first-child {
        flex: 0;
        .phone_prefix {
            width: 100px;
            background-color: #F9F9F9;
            text-align: center;
        }

    }
    .el-form-item:last-child {
        ::v-deep .el-form-item__label {
            display: none;
        }
    }
}
</style>


