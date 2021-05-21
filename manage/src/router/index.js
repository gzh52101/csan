import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Java from '../views/list/Java.vue'
import Python from '../views/list/Python.vue';
import Joachern from '../views/list/Joachern.vue';
import FiveG from '../views/list/FiveG.vue';
import Web from '../views/list/Web.vue';

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
                    component:Joachern
                  },
                  {
                    path: "5g",
                    text: "5G",
                    name: "FiveG",
                    component:FiveG
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

export default router;