import { defineStore } from 'pinia'

export const useMarketStore = defineStore('market', {
  state: () => ({
    items: [],
    cart: []
  }),
  getters: {
    discounted: (state) => {
      return state.items.filter((item) => item.discount)
    }
  },
  actions: {
    addToCart(item) {
      this.cart.push(item)
    }
  }
})
