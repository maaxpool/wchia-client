import axios from 'axios'
import qs from 'qs'
import jsCookie from 'js-cookie'

var http = axios.create({
  // baseURL: process.env.VUE_APP_URL,
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

export default {
  get: function (url, param={}) {
    return new Promise((resolve, reject) => {
      param.language = jsCookie.get('LOCAL_LANG')
      http({
        method: 'get',
        url: url,
        params: param,
        body: param
      }).then(result => {
        if (result.status === 200) {
          resolve(result.data)
        } else {
          reject(result.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (url, param = {}) {
    return new Promise((resolve, reject) => {
      http({
        method: 'post',
        url: url,
        data: param
      }).then(({status, data}) => {
        if (status === 200)
          resolve(data)
        else
          reject(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put (url, param = {}) {
    return new Promise((resolve, reject) => {
      http({
        method: 'put',
        url: url,
        data: param
      }).then(({status, data}) => {
        if (status === 200)
          resolve(data)
        else
          reject(data)
      }).catch(err => {
        reject(err)
      })
    }) 
  }
}
