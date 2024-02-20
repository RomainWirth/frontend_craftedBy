import './assets/main.css'

import { createApp } from 'vue'
import { piniaInstance } from '@/services/global'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(piniaInstance)
app.mount('#app')
