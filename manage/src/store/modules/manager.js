let managerInfo = localStorage.getItem('managerInfo');
try{
    managerInfo = JSON.parse(managerInfo) || {}
}catch(err){
    managerInfo = {}
}

export default{
    namespaced:true,

    state:{
        managerInfo
    },
    getters:{
        islogin(state){
            return !! state.managerInfo
        }
    },
    mutations:{
        login(state,payload){
            state.managerInfo = payload;
            localStorage.setItem('managerInfo',JSON.stringify(payload))
        },
        logout(state){
            state.managerInfo = {}
            localStorage.removeItem('managerInfo');
        }
    }
    
}