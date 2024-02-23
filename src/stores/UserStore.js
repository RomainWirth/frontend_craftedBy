import { defineStore } from 'pinia'
import api from '@/services/api'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    users: [],
    token: localStorage.getItem('token') || {},
    user: localStorage.getItem('user') || {}
  }),
  actions: {
    async register(formData) {
      try {
        const response = await api.post('register', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          firstname: formData.firstName,
          lastname: formData.lastName,
          street: formData.street,
          number: formData.number,
          zip_code: formData.zipcode,
          city: formData.city,
          phone: formData.phone
        })
        console.log(response.data)
        if (response.status === 201) {
          this.token = localStorage.setItem('token', response.data.token)
          this.user = localStorage.setItem('user', JSON.stringify(response.data.user))
          return true
        }
      } catch (error) {
        alert(error)
        console.error("error lors de l'inscription : ", error)
      }
    },
    async login(formData) {
      try {
        const response = await api.post('login', {
          username: formData.username,
          password: formData.password
        })
        console.log(response.data)
        if (response.status === 200) {
          this.token = localStorage.setIem('token', response.data.token)
        }
      } catch (error) {
        alert(error)
        console.error('error lors du login : ', error)
      }
    },
    logout() {
      this.token = localStorage.removeItem('token')
      this.user = localStorage.removeItem('user')
    }
  }
})
