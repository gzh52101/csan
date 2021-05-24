let userInfo = localStorage.getItem('userInfo')

try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}


export default {
    state:{
        userInfo
    },
    getters:{
        isLogin(state){
            return !!state.userInfo._id;
        }
    },
    mutations:{
        login(state,payload){
            state.userInfo = payload;

            localStorage.setItem('userInfo',JSON.stringify(payload))
        },
        logout(state){
            state.userInfo = {}
            localStorage.removeItem('userInfo');
        }
    }
}