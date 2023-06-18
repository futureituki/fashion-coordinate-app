import { defineStore } from 'pinia'

export const useLoginAuthorized = defineStore('loginAuthorized', {
  state: () => ({
    authorized: false
  }),
  getters: {
    getAuthorized: (state) => {
      return state.authorized
    },
  },
  actions: {
    setAuthorized() {
      this.authorized = true
    },
  },
})