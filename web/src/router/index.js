import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('@/pages/Registration.vue')
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/authenticated/AboutView.vue')
        }
    ]
})

export default router
