import Vue from 'vue';
import Router from 'vue-router';

import Components from '../components';

Vue.use(Router);

import User from './router/User';

export default new Router({
    routes: [{
        path: '/',
        redirect: '/user',
        hidden: true,
        component: resolve => {
            resolve(Components.Content);
        },
    }, {
        path: '/sign',
        hidden: true,
        component: resolve => {
            resolve(Components.Sign);
        },
    }]
        .concat(User)
});
