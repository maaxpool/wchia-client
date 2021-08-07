export default {
    get_user: {url: '/user', methods: 'get'},
    register: {url: '/user', methods: 'post'},
    modify_user: {url: '/user', methods: 'put'},
    transaction_list: {url: 'transaction/list', methods: 'get'},
    transaction_detail: {url: 'transaction/detail', methods: 'get'},
    wrap: {url: '/wrap', methods: 'post'}
}
