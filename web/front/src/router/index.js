import Vue from 'vue';
import Router from 'vue-router';
import Content from '../../../admin/src/components/Content/index';

import Components from '../components';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: Components.Modules.Content,
        children: [{
            path: '',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'post/add',
            component: Components.Modules.Views.Post.Add
        }, {
            path: 'post/show/:id',
            component: Components.Modules.Views.Post.Show
        }, {
            path: 'post/edit/:id',
            component: Components.Modules.Views.Post.Add
        }, {
            path: 'search',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'category/:id',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'author/:id',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'new',
            component: Components.Modules.Views.HomePage
        }, {
            path: '/my_posts',
            component: Components.Modules.Views.HomePage
        }, {
            path: 'setting',
            component: Components.Modules.Views.Setting.Setting,
            redirect: '/setting/basic',
            children: [{
                path: 'basic',
                component: Components.Modules.Views.Setting.Basic
            }, {
                path: 'account',
                component: Components.Modules.Views.Setting.Account
            }]
        }]
    }, {
        path: '/sign',
        component: Components.Sign
    }]
});
