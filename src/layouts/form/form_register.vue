<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" >
        <!-- eth address -->
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('register.item1Name')}}</span>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append"  @click="connectWalelt">{{$t('register.item1Unit')}}</div>
        </el-form-item>

        <!-- country -->
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>{{$t('register.item2Name')}}</span>
            </div>
            <el-select :placeholder="$t('public.placeholder2')" value="formData.countryCode">
                <el-option label="AAA" value="123"></el-option>
                <el-option label="BBB" value="234"></el-option>
            </el-select>
        </el-form-item>

        <!-- user name -->
        <div class="el-from-row">
            <el-form-item :label="$t('register.item3Name')">
                <el-input :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
            <el-form-item :label="$t('register.item4Name')">
                <el-input :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>

        <!-- phone -->
        <div class="el-from-row phoneItem" >
            <el-form-item :label="$t('register.item5Name')" class="local-code">
                <el-select :placeholder="$t('public.placeholder2')"  value="formData.local">
                    <el-option label="AAA" value="123"></el-option>
                    <el-option label="BBB" value="234"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="/n">
                <el-input :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>
        
        <!-- address line -->
        <el-form-item :label="$t('register.item6Name')">
            <el-input v-model="formData.address" :placeholder="$t('public.placeholder1')"></el-input>
        </el-form-item>
        <!-- city -->
        <div class="el-from-row " >
            <el-form-item :label="$t('register.item7Name')">
                <el-input v-model="formData.city.name" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
            <el-form-item :label="$t('register.item8Name')">
                <el-input v-model="formData.city.stat" :placeholder="$t('public.placeholder1')" ></el-input>
            </el-form-item>
        </div>

        <!-- Zip code -->
        <el-form-item :label="$t('register.item9Name')">
            <el-input v-model="formData.zip" :placeholder="$t('public.placeholder1')" ></el-input>
        </el-form-item>

        <!-- Email -->
        <el-form-item :label="$t('register.item10Name')">
            <el-input v-model="formData.email" :placeholder="$t('public.placeholder1')" ></el-input>
        </el-form-item>

        
        <el-checkbox :label="$t('register.extrItem1')" name="type" style="margin-bottom:40px"></el-checkbox>

        <el-button class="submit" type="primary">{{$t('register.btn1')}}</el-button>
    </formLayout>
</template>

<script>
import formLayout from './formLayout'
import Web3 from 'web3'
// import { useWallet, UseWalletProvider } from 'use-wallet'
export default {
    components: {formLayout},
    data(){
        return {
            labelPosition: 'top',
            formData: {
                name: '123',
                countryCode: '123',
                local: '54564',
                address: '',
                city: {
                    name: '',
                    state: ''
                },
                email: '',
                zip: ''
            },
            
        }
    },

    async created(){
        // let instance = new Web3()
        
        let web3Provider
        if(window.ehtereum) {
            web3Provider = window.ehtereum
            
        } else if (window.web3) {
            web3Provider = window.web3.currentProvider
        } else {
            web3Provider = new Web3.providers.HttpProvider('http://localhost:8080')
        }

        // web3Provider.enable()
        // console.log(web3Provider)
        
        try {
            // await web3Provider.enable()
        } catch (error) {
            console.log('User denied account access')
        }

        // console.log(web3Provider.isMetaMask)    // 是否安装 metamask
        let isConnect = web3Provider.isConnected()
        // console.log(isConnect)

    },
    
    methods: {
        connectWalelt() {
            // console.log(123)
            // console.log(useWallet, UseWalletProvider)


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


