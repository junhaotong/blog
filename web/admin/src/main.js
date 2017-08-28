// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router'

// Nprogress
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import store from './store'

// import axios
import './util/axios';

//import iview
import iView from 'iview';

Vue.use(iView);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    window.scroll(0,0);
    Nprogress.start();
    let userinfo = store.state.userinfo.userinfo;
    console.log(userinfo);
    if (!userinfo.token && to.path !== '/login') {
        next('/login');
    } else {
        if (userinfo.token && to.path === '/login') {
            Nprogress.done();
            next('/');
        } else {
            next();
        }
    }
});

router.afterEach(() => {
    Nprogress.done();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
