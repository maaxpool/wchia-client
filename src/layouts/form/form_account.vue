<template>
    <formLayout domRef="chargeWXCH" :labelPosition="labelPosition" :labelWidth="labelWidth">

        <!-- user name -->
        <div class="el-from-row">
            <el-form-item label="First name">
                <div class="el-input__view">{{formData.name.first}}</div>
            </el-form-item>
            <el-form-item label="Last name">
                <div class="el-input__view">{{formData.name.last}}</div>
            </el-form-item>
        </div>

        <!-- country -->
        <div class="el-from-row">
            <el-form-item label="Country">
                <div class="el-input__view">{{formData.country}}</div>
            </el-form-item>
        </div>


        <!-- phone -->
        <div class="el-from-row phoneItem">
            <el-form-item label="Phone number">
                <div class="el-input__view"> + {{formData.location}}</div>
            </el-form-item>
            <el-form-item label-width="0">
                <el-input v-model="formData.ohone" />
            </el-form-item>
        </div>

        <!-- address -->
        <div class="el-from-row">
            <el-form-item label="Address line">
                <el-input v-model="formData.address" />
            </el-form-item>
        </div>

        <!-- city -->
        <div class="el-from-row">
            <el-form-item label="City">
                <el-input v-model="formData.city" />
            </el-form-item>
        </div>

        <!-- state -->
        <div class="el-from-row">
            <el-form-item label="State">
                <el-input v-model="formData.state" />
            </el-form-item>
        </div>

        <!-- zip -->
        <div class="el-from-row">
            <el-form-item label="Zip code">
                <el-input v-model="formData.zip" />
            </el-form-item>
        </div>

        <!-- zip -->
        <div class="el-from-row">
            <el-form-item label="Zip code">
                <el-input v-model="formData.zip" />
            </el-form-item>
        </div>

        <!-- email -->
        <div class="el-from-row">
            <el-form-item label="Email">
                <el-input v-model="formData.email" />
            </el-form-item>
        </div>

        <!-- Chia Wallet Address -->
        <div class="el-from-row">
            <el-form-item label="Chia Wallet Address">
                <div class="el-input__view">{{formData.chia}}</div>
            </el-form-item>
        </div>

        <!-- ETH Wallet Address -->
        <div class="el-from-row">
            <el-form-item label="ETH Wallet Address">
                <div class="el-input__view">{{formData.eth}}</div>
            </el-form-item>
        </div>

    </formLayout>
</template>

<script>
import formLayout from './formLayout2'
// import { useWallet, UseWalletProvider } from 'use-wallet'
export default {
    components: {formLayout},
    data(){
        return {
            labelPosition: 'left',
            labelWidth: '206px',
            formData: {
                name: {first: '123', last: '455'},
                country: 'America',
                phone: '12345',
                location: '001',
                address: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                chia: 'xch1yycy4ehlnfsy6tqyyqmep9shpjcs89en6mhsx5cc0224ea92065qftefdj',
                eth: '0xf4124710aab2bfb0020d9c25b0f1bd7ec4e93cad'
            },
        }
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
        flex: 0;
        .el-input__view {
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


