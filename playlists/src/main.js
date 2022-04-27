import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//global styles that live in the main.css file in the assets folder
import './assets/main.css'

createApp(App).use(router).mount('#app')
