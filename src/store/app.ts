// Utilities
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


export const useAppStore = defineStore('app', {
  state: () => {
    return { count: useLocalStorage('pinia/counter/count', 0) }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    inc() {
      this.count++
    },
    dec() {
      this.count--
    }
  },
})
