import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from './layout/Basic'

import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: BasicLayout,
            children: [
                ...routes,
            ],
        }
    ],
})

export default router
