import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// No necesitas importar Bootstrap aquí si usas CDN en index.html
// Solo importa tu CSS personalizado si lo tienes
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')