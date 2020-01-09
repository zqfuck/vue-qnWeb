/*
*Created by zq 2018/12/18
* */

import axios from 'axios'
// axios 配置  
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://60.205.136.57:8089'
//axios.defaults.baseURL = 'http://60.205.136.57:8089'
//post请求
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//get请求 hhh
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  newsDetail(params) {
    return fetchGet('/appapi/wx/search', params)
  },
  newsList(params) {
    return fetchPost('/jeecmsext/news/normal', params)
  }
}
