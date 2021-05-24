export default {
    state:{
        showNav:true,  // 是否显示大的导航栏
        isSeach:true,  //是否显示的跳转导航
    }, 
    getters:{

    },
    mutations:{
       displayNav(state,visibility){
           state.showNav = visibility;
       }, 
       displaySeach(state,boolean){
           state.isSeach = boolean;
       }
    }
}