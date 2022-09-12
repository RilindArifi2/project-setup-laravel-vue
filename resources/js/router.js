import { createRouter, createWebHistory } from 'vue-router';
import LayoutsFront from './Layouts/Front.vue'
import Home from './views/Front/Home/Index.vue'
import Companies from './views/Front/Companies/Index.vue'

const routes = [
    {
        path: '/',
        name: 'LayoutsFront',
        component: LayoutsFront,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/companies',
                name: 'companies',
                component: Companies,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
