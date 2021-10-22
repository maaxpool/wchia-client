const baseUrl = '/rpc'
// const baseUrl_2 = '/ccc_rpc'
const baseUrl_2 = '/rpc'

export default {
    get_configure: {url: baseUrl+'/config/broker', methods: 'get'},
    get_user: {url: baseUrl+'/user', methods: 'get'},
    register: {url: baseUrl+'/user', methods: 'post'},
    modify_user: {url: baseUrl+'/user', methods: 'put'},
    transaction_stat: {url: baseUrl+'/transaction/stat', methods: 'get'},    //debandon
    balance: {url: baseUrl+'/user/balance', methods: 'get'},    //debandon
    transaction_list: {url: baseUrl+'/transaction/list', methods: 'get'},
    transaction_detail: {url: baseUrl+'/transaction/detail', methods: 'get'},
    wrap: {url: baseUrl+'/wrap', methods: 'post'},
    unwrap: {url: baseUrl+'/unwrap', methods: 'post'},
    unwrap_check: {url: baseUrl+'/unwrap/check', methods: 'post'},
    orderBook: {url: baseUrl_2+'/transaction', methods: 'get'},
    proof: {url: baseUrl_2+'/partner/assets', methods: 'get'},
    partner: {url: baseUrl_2+'/partner', methods: 'get'},
    dashBoardStat: {url: baseUrl_2+'/stat/global', methods: 'get'}
}
