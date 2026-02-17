import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment(by = 1) {
      this.count += by
    },
    decrement(by = 1) {
      this.count -= by
    },
    reset() {
      this.count = 0
    },
    async asyncIncrement(by = 1) {
      await new Promise((r) => setTimeout(r, 500))
      this.count += by
    },
  },
  // persisted automatically by plugin (client-side)
  persist: true,
})
