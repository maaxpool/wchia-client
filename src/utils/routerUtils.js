/* 加载路由守卫 */
function loadGuards(guards, router) {
    const {beforeEach, afterEach} = guards
    // console.log(router)
    beforeEach.forEach(guard => {
        // console.log(router)
        router.beforeEach((to, from, next) => guard(to, from, next, router))
    })

    afterEach.forEach(guard => {
        router.afterEach((to, from, next) => guard(to, from, next, router))
    })
}

export {loadGuards}