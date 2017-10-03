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
            path: 'post/add',
            component: Components.Modules.Views.Post.Add
        }, {
            path: 'post/show/:id',
            component: Components.Modules.Views.Post.Show
        }]
    }, {
        path: '/sign',
        component: resolve => {
            resolve(Components.Sign);
        },
    }]
});
