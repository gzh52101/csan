import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import List from '../views/List.vue';
import Java from '../views/list/Java.vue'
import Dynamic from '../views/list/Dynamic.vue';
import Rem from '../views/list/Rem.vue';
import User from '../views/list/User.vue';
import Python from '../views/list/Python.vue';
import Life from '../views/list/Life.vue';
import Ai from '../views/list/Ai.vue';

import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode:'hash',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            // 嵌套路由
            children: [
                // {path:'',redirect:'dynamic'},
                {
                    path: 'dynamic',
                    name: 'dynamic', // /list/some
                    component: Dynamic
                },
                {
                    path: "rem",
                    text: "推荐",
                    name: "rem",
                    component: Rem
                },
                {
                    path: "java",
                    text: "Java",
                    name: "java",
                    component: Java
                },
                {
                    path: "user",
                    text: "用户管理",
                    name: "user",
                    component: User
                },
                {
                    path: "python",
                    text: "python",
                    name: "python",
                    component: Python
                },
                  {
                    path: "life",
                    text: "程序人生",
                    name: "life",
                    component:Life
                  },
                  {
                    path: "ai",
                    text: "人工智能",
                    name: "ai",
                    component:Ai
                  },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/list',
            component: List,
        }
    ]
})

export default router;