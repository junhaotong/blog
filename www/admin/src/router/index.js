import Vue from 'vue';
import Router from 'vue-router';

import Components from '../components';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: Components.Login
    }]
});
