import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RWRequestInterceptors, RWReuqestConfig } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEAFULT_LOADING = true

class RWRequest {
  instance: AxiosInstance
  intercepters?: RWRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: RWReuqestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.intercepters = config.intercepters

    this.instance.interceptors.request.use(
      this.intercepters?.requestInterceptor,
      this.intercepters?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.intercepters?.responseInterceptor,
      this.intercepters?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都会有的请求拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.3)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都会有的响应成功拦截器')

        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~,错误信息')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('所有实例都会有的响应失败拦截器')

        // 将loading移除
        this.loading?.close()

        // 判断不同httpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }

  request<T>(config: RWReuqestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.intercepters?.requestInterceptor) {
        console.log(config, '单独请求')
        config = config.intercepters.requestInterceptor(config)
      }

      // 判断是否显示Loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求的处理
          if (config.intercepters?.responseInterceptor) {
            res = config.intercepters.responseInterceptor(res)
          }
          console.log(res)

          // 在每次请求完将showLoading设置为true，不影响下一次的请求Loading
          this.showLoading = DEAFULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 在每次请求完将showLoading设置为true，不影响下一次的请求Loading
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: RWReuqestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: RWReuqestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: RWReuqestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RWReuqestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default RWRequest
