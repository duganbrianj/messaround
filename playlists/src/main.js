import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from '@/firebase/config'

//global styles that live in the main.css file in the assets folder
import './assets/main.css'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})

