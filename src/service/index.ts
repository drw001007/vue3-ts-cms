import RWRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'
const rwRequest = new RWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercepters: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = localCache.getCache('token')
      if (token) {
        // 当前headers属性是可以选的，直接赋值会报错
        // if (config.headers) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default rwRequest
