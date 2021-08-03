import storage from '@/store/index'
import $http from '@/utils/http'


const checkAuthorization = () => {
  return storage.getters['user/xch_address']
}

const getUserInfo = ($app) => {
  //  let uu = storage.getters('user/user')
  //  console.log(storage.getters('user/user'))
    if ($app) {
      $app.$metaMaskUtils.ethSign()
        .then(() => {
            // console.log(storage.getters['user/user'])
            if (storage.getters['user/user'])
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
                
            }).catch(err => {
                console.log(err)

            })

        })
    }
}


export {checkAuthorization, getUserInfo}