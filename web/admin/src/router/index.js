import Vue from 'vue';
import Router from 'vue-router';

import Components from '../components';

Vue.use(Router);

import User from './router/User';
import Category from './router/Category';
import Article from './router/Article';

export default new Router({
    routes: [{
        path: '/',
        redirect: '/user',
        hidden: true,
        component: resolve => {
            resolve(Components.Content);
        },
    }, {
        path: '/login',
        hidden: true,
        component: resolve => {
            resolve(Components.Login);
        },
    }]
        .concat(User)
        .concat(Category)
        .concat(Article)
});
