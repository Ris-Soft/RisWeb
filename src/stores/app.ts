// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('casdoor_user') || 'null')
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
      localStorage.setItem('casdoor_user', JSON.stringify(user));
    },
    clearUser() {
      this.user = null;
      localStorage.removeItem('casdoor_user');
    }
  }
})
