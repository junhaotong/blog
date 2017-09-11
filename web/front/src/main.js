// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router'

// Nprogress
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import store from './store'

//import iview
import iView from 'iview';

Vue.use(iView);

import 'normalize.css';

// import axios
import './util/axios';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    Nprogress.start();
    next();
});

router.afterEach(() => {
    Nprogress.done();
});

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
