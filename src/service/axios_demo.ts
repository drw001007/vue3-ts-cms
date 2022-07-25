import axios from 'axios'

import './request/config'

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'drw'
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use(
  (config) => {
    console.log('请求发送成功')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
