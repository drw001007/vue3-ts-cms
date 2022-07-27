import { Module } from 'vuex'

import { IRootState } from '../types'

import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
}

export default loginModule
