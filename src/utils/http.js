import axios from 'axios'
import jsCookie from 'js-cookie'
import apis from './api'
import store from '@/store'

var http = axios.create({
  baseURL: '/rpc',
  timeout: 60000
})

http.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  }
)

const httpHandler = {
  get (url, param={}, name) {
    return new Promise((resolve, reject) => {
      param.language = jsCookie.get('LOCAL_LANG')
      http({ method: 'get', url: url, params: param, body: param })
        .then(result => {
            store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
            if (result.status === 200)
              resolve(result.data)
            else
              reject(result.data)
        }).catch(err => {
          store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
          reject(err)
        })
    })
  },
  post (url, param = {}, name) {
    return new Promise((resolve, reject) => {
      http({ method: 'post', url: url, data: param })
        .then(({status, data}) => {
            store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
            if (status === 200)
              resolve(data)
            else
              reject(data)
        }).catch(err => {
            store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
            // for(let i in err) {
            //   console.log(i, err[i])
            // }
            reject(err)
        })
    })
  },
  put (url, param = {}, name) {
    return new Promise((resolve, reject) => {
      http({ method: 'put', url: url, data: param })
        .then(({status, data}) => {
            store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
            if (status === 200)
              resolve(data)
            else
              reject(data)
        }).catch(err => {
            store.commit('situation/loadingWatcher', {nameArr:[name], type: 0})
            reject(err)
        })
    }) 
  }
}

const c_http = (name, params) => {
    // if (name && apis[name]) {
        let tag_api = apis[name], 
            methods = tag_api['methods'],
            url = tag_api['url']
          
        store.commit('situation/loadingWatcher', {nameArr:[name], type: 1})
        return httpHandler[methods](url, params, name)
    // }
}





export default c_http
