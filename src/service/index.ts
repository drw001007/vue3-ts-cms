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

      console.log(config, '单独实例请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log(res, '单独实例请求响应的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

const rwRequest1 = new RWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

rwRequest.request({
  url: '',
  method: 'GET',
  intercepters: {
    requestInterceptor: (config) => {
      console.log('单独请求的请求拦截')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独请求的响应拦截')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// rwRequest1.request<DataType>({
//   url: '',
//   method: 'GET',
//   showLoading: false
// }).then(res => {})

rwRequest1.get<DataType>({
  url: '',
  showLoading: false
})

export default rwRequest
