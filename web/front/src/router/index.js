import Vue from 'vue';
import Router from 'vue-router';

import Components from '../components';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: resolve => {
            resolve(Components.Modules.Content);
        },
        children: [{
            path: '',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'post',
            component: Components.Modules.Views.Post
        }]
    }, {
        path: '/sign',
        component: resolve => {
            resolve(Components.Sign);
        },
    }]
});
