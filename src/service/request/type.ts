import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RWRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RWReuqestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  intercepters?: RWRequestInterceptors<T>
  showLoading?: boolean
}
