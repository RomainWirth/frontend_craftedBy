import { defineStore } from 'pinia'

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('items')) || []
  }),
  actions: {
    persistToLocalStorage() {
      localStorage.setItem('items', JSON.stringify(this.items))
      console.log('saved to local Storage')
    },
    addToCart(item) {
      this.items.push(item)
      this.persistToLocalStorage()
    },
    removeFromCart(item) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
      this.persistToLocalStorage()
    }
  },
  getters: {
    getTotalPrice(state) {
      return state.items.reduce((accumulator, current) => {
        accumulator += current.price
        return accumulator
      }, 0)
    }
  }
})
