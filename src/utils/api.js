export default {
    get_configure: {url: '/config/broker', methods: 'get'},
    get_user: {url: '/user', methods: 'get'},
    register: {url: '/user', methods: 'post'},
    modify_user: {url: '/user', methods: 'put'},
    transaction_stat: {url: 'transaction/stat', methods: 'get'},    //debandon
    balance: {url: '/user/balance', methods: 'get'},    //debandon
    transaction_list: {url: 'transaction/list', methods: 'get'},
    transaction_detail: {url: 'transaction/detail', methods: 'get'},
    wrap: {url: '/wrap', methods: 'post'},
    unwrap: {url: '/unwrap', methods: 'post'},
    unwrap_check: {url: '/unwrap/check', methods: 'post'}
}
