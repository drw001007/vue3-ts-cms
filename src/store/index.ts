import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'drw',
      age: 18,
      height: 1.88
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store
