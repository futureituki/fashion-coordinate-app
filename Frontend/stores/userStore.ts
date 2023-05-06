import { defineStore } from 'pinia'
import { User } from '~/interface/user'
export const useUser = defineStore('user', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    getUser: (state) => {
      return state.user
    },
  },
  actions: {
    setUser(me: Omit<User, 'id'>) {
      this.user = me
    },
  },
})
