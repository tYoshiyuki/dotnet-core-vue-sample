import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Counter from "../views/Counter";
import FetchData from "../views/FetchData";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
    {
        path: '/fetch-data',
        name: 'FetchData',
        component: FetchData
    }
]

const router = new VueRouter({
    routes
})

export default router
