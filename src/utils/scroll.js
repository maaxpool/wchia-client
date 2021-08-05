import {initRouter} from '@/router'
function domScroll(domID) {
    // console.log($router)
    let $router = initRouter()
    console.log($router)

    let dom = document.querySelector('#' + domID)
    let top = dom.offsetTop
    document.documentElement.scrollTop = top
}

export default domScroll

























