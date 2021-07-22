<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" >
        <!-- eth address -->
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>ETH Wallet Address</span>
            </div>
            <el-input v-model="formData.name"></el-input>
            <div class="el-form-item__append"  @click="connectWalelt"> Connect Wallet</div>
        </el-form-item>

        <!-- country -->
        <el-form-item >
            <div class="cus-label" slot="label">
                <span>Contry</span>
            </div>
            <el-select placeholder="请选择" value="formData.countryCode">
                <el-option label="AAA" value="123"></el-option>
                <el-option label="BBB" value="234"></el-option>
            </el-select>
        </el-form-item>

        <!-- user name -->
        <div class="el-from-row">
            <el-form-item label="First name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="Last name">
                <el-input></el-input>
            </el-form-item>
        </div>

        <!-- phone -->
        <div class="el-from-row phoneItem" >
            <el-form-item label="Phone number" class="local-code">
                <el-select placeholder="请选择" value="formData.local">
                    <el-option label="AAA" value="123"></el-option>
                    <el-option label="BBB" value="234"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="/n">
                <el-input></el-input>
            </el-form-item>
        </div>
        
        <!-- address line -->
        <el-form-item label="Address line">
            <el-input v-model="formData.address"></el-input>
        </el-form-item>
        <!-- city -->
        <div class="el-from-row " >
            <el-form-item label="First name">
                <el-input v-model="formData.city.name" ></el-input>
            </el-form-item>
            <el-form-item label="Last name">
                <el-input v-model="formData.city.stat"></el-input>
            </el-form-item>
        </div>

        <!-- Zip code -->
        <el-form-item label="Zip code">
            <el-input v-model="formData.zip"></el-input>
        </el-form-item>

        <!-- Email -->
        <el-form-item label="Email">
            <el-input v-model="formData.email"></el-input>
        </el-form-item>

        
        <el-checkbox label="I confirm that the information I provided is accurate" name="type" style="margin-bottom:40px"></el-checkbox>

        <el-button class="submit" type="primary">Register an account</el-button>
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

    created(){
        let $web3 = new Web3()
        let accounts = $web3.eth.accounts
        let instance = new $web3.eth.Contract()
        console.log(accounts)
        console.log(instance)
        
    },
    
    methods: {
        connectWalelt() {
            console.log(123)
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


