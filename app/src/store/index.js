
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'

import common from './modules/common'
import seach from './modules/seach'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        // cart,
        user,
        common,
        seach
    }
});

// console.log('store=',store);

export default store;