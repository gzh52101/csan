import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Java from '../views/list/Java.vue'
import Python from '../views/list/Python.vue';
import Joachern from '../views/list/Joachern.vue';
import FiveG from '../views/list/FiveG.vue';
import Web from '../views/list/Web.vue';
import User from '../views/list/User.vue';

import Vue from 'vue';
import store from '../store/index'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                reqiresAuth: true
            },
            // 嵌套路由
            children: [{
                    path: "java",
                    text: "Java",
                    name: "java",
                    component: Java
                },
                {
                    path: "Web",
                    text: "Web",
                    name: "Web",
                    component: Web
                },
                {
                    path: "python",
                    text: "python",
                    name: "python",
                    component: Python
                },
                {
                    path: "Joachern",
                    text: "程序人生",
                    name: "Joachern",
                    component: Joachern
                },
                {
                    path: "5g",
                    text: "5G",
                    name: "FiveG",
                    component: FiveG
                },
                {
                    path: "user",
                    text: "用户",
                    name: "User",
                    component: User
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.reqiresAuth) {
        let {
            managerInfo
        } = store.state.manager;
        if (managerInfo) {
            next()
        } else {
            router.push({
                path: '/login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
export default router;