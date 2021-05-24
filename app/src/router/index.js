import Vue from 'vue';

import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Tj from '../views/Tj.vue'
import Dt from '../views/Dt.vue'
import Cxrs from '../views/Cxrs.vue'
import Python from '../views/Python.vue'
import Java from '../views/Java.vue'
import Rgzn from '../views/Rgzn.vue'
import Qd from '../views/Qd.vue'
import Jg from '../views/Jg.vue'
import Sjk from '../views/Sjk.vue'
import FiveG from '../views/FiveG.vue'
import Yxkf from '../views/Yxkf.vue'
import Ydkf from '../views/Ydkf.vue'
import Yw from '../views/Yw.vue'
import Aq from '../views/Aq.vue'
import Yfgl from '../views/Yfgl.vue'
import Wlw from '../views/Wlw.vue'
import Jsjjc from '../views/Jsjjc.vue'
import Yspkf from '../views/Yspkf.vue'
import Qt from '../views/Qt.vue'
import Mine from '../views/Mine.vue'
import Seach from '../views/Seach.vue'

import store from '../store'


// Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({

  routes:[
    {path:'/', redirect:'/tj'},
  {
    path:'/login',
    name:'Login',
    component:Login,

  //   children:[
  //     // {path:'',redirect:{name:'man'}},
  //     {path:'',redirect:'mflogin'},
  //     {
  //         path:'mflogin', // /discover/man
  //         name:'mfLogin',
  //         component:mfLogin
  //     },
  //     {
  //         path:'zhlogin', // /discover/girl
  //         name:'zhLogin',
  //         component:zhLogin
  //     },
  // ],

  },
  {
    path:'/seach',
    name:'Seach',
    component:Seach,
  },
  {
    path:'/mine',
    name:'Mine',
    component:Mine,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/tj',
    component:Tj,
  },
  {
    path:'/dt',
    component:Dt,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/cxrs',
    component:Cxrs
  },
  {
    path:'/Python',
    component:Python
  },
  {
    path:'/Java',
    component:Java
  },
  {
    path:'/rgzn',
    component:Rgzn
  },
  {
    path:'/qd',
    component:Qd
  },
  {
    path:'/jg',
    component:Jg
  },{
    path:'/sjk',
    component:Sjk
  },
  {
    path:'/fiveG',
    component:FiveG
  },{
    path:'/yxkf',
    component:Yxkf
  },
  {
    path:'/ydkf',
    component:Ydkf
  },{
    path:'/yw',
    component:Yw
  },{
    path:'/aq',
    component:Aq
  },{
    path:'/yfgl',
    component:Yfgl
  },{
    path:'/wlw',
    component:Wlw
  },{
    path:'/jsjjc',
    component:Jsjjc
  },{
    path:'/yspkf',
    component:Yspkf
  },{
    path:'/qt',
    component:Qt
  },  

  






  {
    path:'/',
    props: true,
    component:Tj
  }
]
})

//全局路由守卫 进行路由跳转时的验证
router.beforeEach(function(to, from , next){
  // console.log('beforeEach',to);
  if(to.meta.requiresAuth){
    let {userInfo} = store.state.user;
    // console.log('userInfo=',userInfo.password, userInfo.username);
    if(userInfo){
      next();
      let a = !!userInfo.username;
      let b = !!userInfo.password;
      if(!(a&&b)){
        router.push({
          path: '/login',
          query:{
            targetUrl: to.fullPath
          } 
        })
      } 

    }else{
      router.push({
        path:'/login',
        query:{
          targetUrl: to.fullPath
        }
      });
    }
  }else{
    next();
  }
})

export default router;