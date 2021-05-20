import Vue from 'vue';
import Vuex from 'vuex';
import manager from './modules/manager'
import Java from './modules/Java'
import Joachern from './modules/Joachern'
import Python from './modules/Python'
import FiveG from './modules/FiveG'
import Web from './modules/Web'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        manager,
        Java,
        Joachern,
        Python,
        FiveG,
        Web
    },
    actions: {
        ajaxFrom(context, {
            url,
            data = {},
            type = 'get'
        }) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(type, url);
                xhr.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                );
                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.responseText);
                    }
                };
                console.log("data",data);
                xhr.send(JSON.stringify(data));
            });
        },
    }
});
export default store;