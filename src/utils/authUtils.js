import storage from '@/store/index'
import $http from '@/utils/http'

import {Message} from 'element-ui'
import {cmpl} from '@/utils/floatOperation'
import store from '@/store'

export const authorizationCheck = () => {
  return storage.getters['user/user']
}

export const getConfigure = async () => {
    try {
        let res = await $http('get_configure')
        if(res && res['success']) {
            store.commit('user/conf', res['msg'])
        }
    } catch (err) {
        console.error(err)
    } 
}

export const getUserInfo = ($app) => {
    return new Promise((resolve, refuse) => {
        if(!$app) {
            console.error('Can not catch the $app')
            refuse()
        }
        // getBalance()
        $app.$metaMaskUtils.ethSign()
            .then(() => {
                if (authorizationCheck() || !storage.getters['ethereum/account'])
                    return false
                
                $http('get_user', {
                    eth_address: storage.getters['ethereum/account'],
                    eth_signature: storage.getters['ethereum/eth_sign'],
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
                console.error(err)
            })
    })
}

export const getBalance = async () => {
    if(!authorizationCheck() || !storage.getters['ethereum/account']) return false
    try {
        let res_balance = await $http('balance', {
                eth_address: storage.getters['ethereum/account'],
                eth_signature: storage.getters['ethereum/eth_sign'],
                auth_msg: String(storage.getters['ethereum/auth_msg']),
            }),
            {wxch_amount, xch_amount} = res_balance['msg']

        storage.commit('user/balance', {wxch_amount,xch_amount})


        let res_transaction_stat = await $http('transaction_stat', {
                eth_address: storage.getters['ethereum/account'],
            }),
            {wrap_amount, unwrap_amount} = res_transaction_stat['msg']
        storage.commit('user/comulative', {wrap_amount, unwrap_amount})
    } catch (err) {
        console.error(err)
    }
}

export const getTranscationList = async (options) => {
    if(!authorizationCheck() || !storage.getters['ethereum/account']) return false

    if(options && options['type'])
        storage.commit('transcationList/active', options['type'])
    if(options && options['page'])
        storage.commit('transcationList/page', options['page'])

    let defaults = {
        eth_address: storage.getters['ethereum/account'],
        type: storage.getters['transcationList/active'],
        size: 20,
        page: 1,
    }

    let params = Object.assign(defaults, options)

    $http('transaction_list',  params)
        .then(res => {
            if(res && res['success']) {
                let data = res['msg']
                for(let i in data.transactions) {
                    data.transactions[i]['amount'] = cmpl(data[transactions[i]['amount']], 6)
                }
                storage.commit('transcationList/list', data)
            }     
        }).catch(err => {
            console.error(err)
        })
}

export const blockViewUpdate = (options) => {
    getBalance()
    getTranscationList(options)
}



