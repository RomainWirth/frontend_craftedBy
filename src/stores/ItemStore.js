import { defineStore } from 'pinia'
import api from '@/services/api'

export const useItemStore = defineStore('ItemStore', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await api.get('/products')
        console.log(response.data)
        this.items = response.data
      } catch (error) {
        alert(error)
        console.error('error lors de la récupération des produits', error)
      }
    }
  },
  getters: {
    getItems(state) {
      return state.items
    }
  }
})
