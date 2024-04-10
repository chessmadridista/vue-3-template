import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router