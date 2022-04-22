import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import chatroom from '../views/chatroom.vue'
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    console.log('Current user in auth guard', user)
    if(!user) {
        next({ name: 'Welcome'})
    } else {
        next()
    }
    
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
