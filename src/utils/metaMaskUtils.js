import detectEthereumProvider from '@metamask/detect-provider'
import storage from '@/store/index'
import {Message} from 'element-ui'
// import { resolve } from 'core-js/fn/promise'



function metamaskUtils (options) {
    this.web3Provider
    this.account
    this.initlization()

    let option = {
        onChainChanged: () => { return },
        onDisconnect: (err) => { return },
    }

    if (options)
        Object.assign(option, options)

    if (window.ethereum) {
        /* 钱包网络改变 */
        ethereum.on('chainChanged', option['onChainChanged'])
        /* 钱包断开连接 */
        ethereum.on('disconnect', (err) => {
            option.onDisconnect(err)
            console.error(err)
        })

    }

}

metamaskUtils.prototype.initlization = async function(){

    /* 检测是否安装钱包 */
    this.web3Provider = await detectEthereumProvider()
    storage.commit('ethereum/provide', this.web3Provider)
    
    if (this.web3Provider) {
        /* 连接钱包，eth_requestAccounts  */
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            this.account = accounts[0];
            storage.commit('ethereum/account', this.account)
        } catch (err) {
            this.showError(err)
        }

        // this.ethSign()

    } else {
        console.error('Please install MetaMask!')
        Message('Please install MetaMask!')
    }

}

metamaskUtils.prototype.getNetworkVersion = async function(netwrokID){
    // ethereum.networkVersion
    const chainId = await ethereum.request({
        method: 'eth_chainId',
    });

    const networkId = await ethereum.request({
        method: 'net_version',
    });

    return { chainId, networkId }
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

/* eth 签名 */
metamaskUtils.prototype.ethSign = function(){
    const msg = authMsg(this.account);

    return new Promise(async (resolve, refuce) => {
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
    Message(JSON.stringify(err['message']||err))
    console.error(err)
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
        


        


        


        


        


        


        

