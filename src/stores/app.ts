// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
  accessToken: localStorage.getItem('casdoor_access_token') || null
}),
  actions: {
    setToken(token: string) {
      this.accessToken = token;
      localStorage.setItem('casdoor_access_token', token);
    },
    clearUser() {
      this.accessToken = null;
      localStorage.removeItem('casdoor_access_token');
    }
  }
})
