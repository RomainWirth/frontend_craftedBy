// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++
    }
  },
  getters: {
    isEven: (state) => {
      return state.counter % 2 == 0
    }
  }
})
