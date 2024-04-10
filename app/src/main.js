import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/routes.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(router)
app.use(pinia)
app.mount('#app')
