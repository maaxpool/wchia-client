import detectEthereumProvider from '@metamask/detect-provider'
import storage from '@/store/index'
import {Message} from 'element-ui'
// import { resolve } from 'core-js/fn/promise'
import {repston_hstAbi, repston_hstBytecode} from '@/temp/abi_repsten'

import jsCookie from 'js-cookie'

import Web3 from 'web3'
import { ethers } from 'ethers';


function metamaskUtils (options) {
    this.default = {
        network: process.env.VUE_APP_NETWORK
    }
    this.web3Provider
    this.account
    this.initlization()
    

    let option = {
        onChainChanged: () => { 
            if(document.cookie) {
                var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
                keys.forEach(item => {
                    jsCookie.remove(item)
                })
            }
            window.location.reload()
        },
        onDisconnect: (err) => { 
            return
         },
    }

    if (options)
        Object.assign(option, options)

    if (window.ethereum) {
        ethereum.on('chainChanged', option['onChainChanged'])
        ethereum.on('accountsChanged', option['onChainChanged'])
        ethereum.on('disconnect', (err) => {
            option.onDisconnect(err)
            console.error(err)
        })

    }

}

metamaskUtils.prototype.initlization = async function(){
    /* 检测是否安装钱包 */
    this.web3Provider = await detectEthereumProvider()

    // storage.commit('ethereum/provide', this.web3Provider)
    if (this.web3Provider) {
        /* 连接钱包，eth_requestAccounts  */
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            this.account = accounts[0];
            storage.commit('ethereum/account', this.account)
        } catch (err) {
            this.showError(err)
        }
        
    } else {
        console.error('Please install MetaMask!')
        Message({
            showClose: true,
            message: 'Please install MetaMask!',
            type: 'error'
        })
    }
    // this.contractApprove('0x2f318C334780961FB129D2a6c30D0763d9a5C970', 7)
}

metamaskUtils.prototype.getNetworkVersion = async function(){
    // ethereum.networkVersion
    const chainId = await ethereum.request({
        method: 'eth_chainId',
    });

    const networkId = await ethereum.request({
        method: 'net_version',
    });

    return { chainId, networkId }
}

metamaskUtils.prototype.networkCheck = async function() {
    let usr_options = await this.getNetworkVersion()
    if (usr_options.networkId != this.default.network) {
        let msg_ = `
            Current network ${usr_options.networkId} not supported, 
            Please switch to one of the following: Rposten
        `
        Message({
            showClose: true,
            message: msg_,
            type: 'error'
        })
        console.error(msg_)
        return false
    }
    return true
}

metamaskUtils.prototype.signCheck = async function() {
    if(Boolean(storage.getters['ethereum/eth_sign']) != false && Boolean(storage.getters['ethereum/auth_msg']))
        return true
    else
        return false
}


metamaskUtils.prototype.networkChanged = async function(){
    ethereum.on('chainChanged', () => {
        ethereum.request({
            method: 'eth_getBlockByNumber',
            params: ['latest', false],
        })
        .then((block) => {
            console.log(block)
        }).catch(err => {
            console.log(err)
        })
    });
}

metamaskUtils.prototype.ethSign = function(){
    const msg = authMsg(this.account);
    return new Promise(async (resolve, refuce) => {
        let check_ = await this.networkCheck()
        if (!check_) return false

        if (storage.getters['ethereum/eth_sign']) {
            resolve(storage.getters['ethereum/eth_sign'])
            return false
        }

        try {   
            const ethResult = await ethereum.request({
                method: 'personal_sign',
                params: [msg, this.account],
            });
            storage.commit('ethereum/eth_sign', ethResult)
            resolve(ethResult)
            
        } catch (err) {
            this.showError(err)
            refuce(err)
        }
    })

}


metamaskUtils.prototype.showError = function(err) {
    Message({
        showClose: true,
        message: JSON.stringify(err['message']||err),
        type: 'error'
    })
    console.error(err)
}


metamaskUtils.prototype.contractApprove = async function(address, amount) {
    const web3 = new Web3(window.ethereum)
    const contract_address = process.env.VUE_APP_CONTRACT
    let contract = new web3.eth.Contract(repston_hstAbi, contract_address)
    return contract.methods.approve(
        address,
        amount*(1000000000000),
    ).send({
        from: this.account
    })
}



function authMsg(account) {
    const msg = storage.getters['ethereum/auth_msg'] ? storage.getters['ethereum/auth_msg'] : JSON.stringify({
        timestamp: (Date.now()/(1000*3600)).toFixed(),
        space: account,
        type: 'personal_sign'
    })

    storage.commit('ethereum/auth_msg', msg)
    return msg
}




export default metamaskUtils
        


        


        


        


        


        


        

