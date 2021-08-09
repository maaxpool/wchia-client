import {initRouter} from '@/router'
function domScroll($app, domID) {
    $app.$router.push({name:'home'})
    let dom = document.querySelector('#' + domID)
    if (dom) {
        let top = dom.offsetTop
        document.documentElement.scrollTop = top
    }
}

export default domScroll

























