import { defineStore } from 'pinia'
import api from '@/services/api'

export const useArtisanStore = defineStore('ArtisanStore', {
  state: () => ({
    artisans: [],
    artisan: {},
    specialties: []
  }),
  actions: {
    async fetchArtisans() {
      try {
        const response = await api.get('/artisans/')
        console.log(response.data.data)
        this.artisans = response.data.data
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération des données artisans', error)
      }
    },
    async fetchOneArtisan(id) {
      try {
        const response = await api.get('/artisans/' + id)
        console.log(response.data)
        this.artisan = response.data
      } catch (error) {
        alert(error)
        console.error("erreur lors de la récupération de l'artisan", error)
      }
    }
  }
})
