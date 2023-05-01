import { type RouteRecordRaw } from 'vue-router'

export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/index/index.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/pages/index/index.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/pages/index/index.vue')
    },
] as RouteRecordRaw[]
