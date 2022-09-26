import rwRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  userMenus = '/role/' // /role/id/menu
}

export function accountLoginRequest(account: IAccount) {
  return rwRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return rwRequest.get<IDataType<any>>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return rwRequest.get<IDataType<any>>({
    url: LoginApi.userMenus + id + '/menu'
  })
}
