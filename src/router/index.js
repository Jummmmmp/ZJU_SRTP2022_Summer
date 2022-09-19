import { createRouter, createWebHistory } from "vue-router"
import AppHome from "../views/AppHome.vue"
import AppBook from "../views/AppBook.vue"
import AppClass from "../views/AppClass.vue"
import AppJudge from "../views/AppJudge.vue"
import AppGame from "../views/AppGame.vue"

const routes = [{
        path: '/',
        name: 'AppHome',
        component: AppHome
    },
    {
        path: '/appbook',
        name: 'AppBook',
        component: AppBook
    },
    {
        path: '/appclass',
        name: 'AppClass',
        component: AppClass
    },
    {
        path: '/appjudge',
        name: 'AppJudge',
        component: AppJudge
    },
    {
        path: '/appgame',
        name: 'AppGame',
        component: AppGame
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router