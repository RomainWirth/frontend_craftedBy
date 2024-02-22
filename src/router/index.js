import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import CatalogView from '../views/CatalogView.vue'
import ItemView from '../views/ItemView.vue'
import ArtisanView from '../views/ArtisanView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/catalog/:category',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/current-item/:id',
      name: 'item',
      component: ItemView
    },
    {
      path: '/artisan',
      name: 'artisan',
      component: ArtisanView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
