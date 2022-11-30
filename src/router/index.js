import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignupView.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: { name: 'home' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
