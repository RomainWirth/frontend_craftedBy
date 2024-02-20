import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemStore = defineStore('ItemStore', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // console.log(response.data)
        this.items = response.data
      } catch (error) {
        alert(error)
        console.error('error lors de la récupération des produits', error)
      }
    }
  }
  // getters: {
  //   getItems(state) {
  //     return state.items
  //   }
  // }
})
