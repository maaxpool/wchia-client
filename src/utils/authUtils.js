import storage from '@/store/index'
import $http from '@/utils/http'

import {Message} from 'element-ui'

const authorizationCheck = () => {
  return storage.getters['user/user']
}

const getUserInfo = ($app) => {
    return new Promise((resolve, refuse) => {
        if(!$app) {
            console.error('Can not catch the $app')
            refuse()
        }
        getBalance()

        $app.$metaMaskUtils.ethSign()
            .then(() => {
                // console.log(storage.getters['user/user'])

                if (authorizationCheck())
                    return false
                
                $http('get_user', {
                    eth_address: storage.getters['ethereum/account'],
                    eth_signature:storage.getters['ethereum/eth_sign'],
                    auth_msg: String(storage.getters['ethereum/auth_msg'])
                }).then(res => {
                    if (res && res['success']) {
                        let data = res['msg']
                        storage.commit('user/user', data)
                    }
                    
                    resolve()
                }).catch(err => {
                    Message({
                        showClose: true,
                        message: err.response.data.err_msg,
                        type: 'error'
                    })
                })

            }).catch(err => {
                // refuse(err)
                console.error(err)
            })
    })
}

const getBalance = async () => {
    try {
        // console.log(storage.getters['ethereum/account'])
        let res = await $http('transaction_stat', {eth_address: storage.getters['ethereum/account']}),
            {wrap_amount, unwrap_amount} = res['msg']
        storage.commit('user/balance', {wrap_amount, unwrap_amount})
    } catch (err) {
        console.error(err)
    }
}


export {authorizationCheck, getUserInfo, getBalance}