require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue'

import App from './App.vue';
// import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
//import axios from 'axios';
import router from './router'

Vue.use(VueRouter);
//Vue.use(VueAxios, axios);
import store from './store/store'

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
});
