import { defineStore } from 'pinia'
import api from '@/services/api'

export const useItemStore = defineStore('ItemStore', {
  state: () => ({
    items: [],
    item: {},
    categories: []
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
    },
    async fetchOneItem(id) {
      try {
        const response = await api.get('/products/' + id)
        console.log(response.data)
        this.item = response.data
      } catch (error) {
        alert(error)
        console.error('error lors de la récupération des produits', error)
      }
    },
    async fetchCategories() {
      try {
        const response = await api.get('/products/categories')
        console.log(response.data)
        this.categories = response.data
      } catch (error) {
        alert(error)
        console.error('error lors de la récupération des produits', error)
      }
    },
    async fetchItemsInCategory(category) {
      try {
        const response = await api.get('/products/category/' + category)
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
    },
    getItem(state) {
      return state.item
    },
    getCategories(state) {
      return state.categories
    }
  }
})
