import RWRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const rwRequest = new RWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercepters: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = ''
      if (token) {
        // config.headers.AuthorizaTion = `Bearer ${token}`
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

rwRequest.request({
  url: '',
  method: 'GET',
  intercepters: {
    requestInterceptor: (config) => {
      return config
    },
    responseInterceptor: (res) => {
      return res
    }
  }
})

export default rwRequest
