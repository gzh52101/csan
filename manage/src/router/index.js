import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Reg from '../views/Reg.vue';
import Login from '../views/Login.vue';
import Mine from '../views/Mine.vue';
import List from '../views/List.vue';
import Dynamic from '../views/list/Dynamic.vue';
import Rem from '../views/list/Rem.vue';

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
                }
                //   {
                //     path: "/java",
                //     text: "Java",
                //     name: "java",
                //     component:Java
                //   },
                //   {
                //     path: "/life",
                //     text: "程序人生",
                //     name: "life",
                //     component:Life
                //   },
                //   {
                //     path: "/python",
                //     text: "python",
                //     name: "python",
                //     component:Python
                //   },
                //   {
                //     path: "/ai",
                //     text: "人工智能",
                //     name: "ai",
                //     component:Ai
                //   },
                //   {
                //     path: "/user",
                //     text: "用户管理",
                //     name: "user",
                //     component:User
                //   },
                //   {
                //     path: "/manager",
                //     text: "管理员",
                //     name: "manager",
                //     component:Manager
                //   },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/list',
            component: List,
            // 嵌套路由
            // children:[
            //     {path:'',redirect:'some'},
            //     {
            //         path:'some',
            //         name:'some',// /list/some
            //         component:Some
            //     }
            // ]
        }
    ]
})

export default router;