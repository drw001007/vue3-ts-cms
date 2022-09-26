import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenuToRoutes } from '@/utils/map-menus'
import router from '@/router'

import { IAccount } from '@/service/login/types'
import { IRootState } from '../types'
import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 1.动态获取routes
      const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // // 请求角色菜单
      const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 跳转首页
      router.push('/main')
    },
    // 每次浏览器刷新都会调用，vuex刷新数据清空，需要重新从缓存里面获取
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) commit('changeToken', token)

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) commit('changeUserInfo', userInfo)

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) commit('changeMenus', userMenus)
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
